import { ProductsAPI } from 'paapi5-nodejs-sdk';
import { AmazonCredentials, ProductCategory, ProductAnalysis } from '../types/amazon';
import { API_CONFIG } from '../config/amazon';
import { delay } from '../utils/helpers';

export class AmazonService {
  private api: ProductsAPI;
  private credentials: AmazonCredentials;

  constructor(credentials: AmazonCredentials) {
    this.credentials = credentials;
    this.api = new ProductsAPI({
      accessKey: credentials.accessKey,
      secretKey: credentials.secretKey,
      partnerTag: credentials.partnerTag,
      host: credentials.host,
      region: credentials.region
    });
  }

  private async searchProducts(category: ProductCategory): Promise<ProductAnalysis[]> {
    const products: ProductAnalysis[] = [];
    let nextToken: string | undefined;

    do {
      try {
        const response = await this.api.searchItems({
          BrowseNodeId: category.browseNodeId,
          ItemCount: 10,
          Resources: [
            'ItemInfo.Title',
            'ItemInfo.ByLineInfo',
            'Offers.Listings.Price',
            'CustomerReviews',
            'BrowseNodeInfo.BrowseNodes'
          ],
          NextToken: nextToken
        });

        if (response.Items) {
          const validProducts = response.Items
            .filter(item => 
              item.CustomerReviews?.Count >= API_CONFIG.minReviewCount &&
              item.CustomerReviews?.StarRating >= API_CONFIG.minRating
            )
            .map(item => this.mapToProductAnalysis(item));

          products.push(...validProducts);
        }

        nextToken = response.NextToken;
        await delay(1000 / API_CONFIG.rateLimit); // Respect rate limit
      } catch (error) {
        console.error(`Error fetching products for ${category.name}:`, error);
        break;
      }
    } while (nextToken && products.length < API_CONFIG.resultsPerCategory);

    return products.slice(0, API_CONFIG.resultsPerCategory);
  }

  private mapToProductAnalysis(item: any): ProductAnalysis {
    return {
      asin: item.ASIN,
      title: item.ItemInfo.Title.DisplayValue,
      brand: item.ItemInfo.ByLineInfo.Brand.DisplayValue,
      price: item.Offers?.Listings[0]?.Price?.Amount || 0,
      rating: item.CustomerReviews.StarRating,
      reviewCount: item.CustomerReviews.Count,
      bestSellersRank: item.BrowseNodeInfo.BrowseNodes.map(node => node.SalesRank || 0),
      salesVelocity: this.calculateSalesVelocity(item),
      keywords: this.extractKeywords(item),
      lastUpdated: new Date().toISOString()
    };
  }

  private calculateSalesVelocity(item: any): number {
    const rank = item.BrowseNodeInfo.BrowseNodes[0]?.SalesRank || 0;
    const reviews = item.CustomerReviews.Count;
    return (reviews * 100) / (rank || 1);
  }

  private extractKeywords(item: any): string[] {
    const title = item.ItemInfo.Title.DisplayValue.toLowerCase();
    const features = item.ItemInfo.Features?.DisplayValues || [];
    const allText = [title, ...features].join(' ');
    
    // Extract meaningful keywords
    const words = allText.match(/\b\w+\b/g) || [];
    return Array.from(new Set(words));
  }

  async analyzeTrends(category: ProductCategory): Promise<ProductAnalysis[]> {
    return this.searchProducts(category);
  }
}