import { ProductAnalysis, TrendAnalysis, ProductCategory } from '../types/amazon';

export class TrendAnalyzer {
  private products: ProductAnalysis[];
  private category: ProductCategory;

  constructor(products: ProductAnalysis[], category: ProductCategory) {
    this.products = products;
    this.category = category;
  }

  analyzePriceRange() {
    const prices = this.products.map(p => p.price);
    return {
      min: Math.min(...prices),
      max: Math.max(...prices),
      average: prices.reduce((a, b) => a + b, 0) / prices.length
    };
  }

  analyzeTopBrands() {
    const brandMap = new Map<string, { count: number; ratings: number[] }>();
    
    this.products.forEach(product => {
      const brandData = brandMap.get(product.brand) || { count: 0, ratings: [] };
      brandData.count++;
      brandData.ratings.push(product.rating);
      brandMap.set(product.brand, brandData);
    });

    return Array.from(brandMap.entries())
      .map(([name, data]) => ({
        name,
        productCount: data.count,
        averageRating: data.ratings.reduce((a, b) => a + b, 0) / data.count
      }))
      .sort((a, b) => b.productCount - a.productCount);
  }

  analyzeCommonFeatures() {
    const keywordFrequency = new Map<string, number>();
    
    this.products.forEach(product => {
      product.keywords.forEach(keyword => {
        keywordFrequency.set(
          keyword,
          (keywordFrequency.get(keyword) || 0) + 1
        );
      });
    });

    return Array.from(keywordFrequency.entries())
      .map(([keyword, frequency]) => ({ keyword, frequency }))
      .sort((a, b) => b.frequency - a.frequency);
  }

  generateTrendAnalysis(): TrendAnalysis {
    return {
      category: this.category,
      topProducts: this.products.sort((a, b) => b.salesVelocity - a.salesVelocity),
      priceRange: this.analyzePriceRange(),
      topBrands: this.analyzeTopBrands(),
      commonFeatures: this.analyzeCommonFeatures(),
      weeklyChange: {
        trending: [],
        declining: []
      }
    };
  }
}