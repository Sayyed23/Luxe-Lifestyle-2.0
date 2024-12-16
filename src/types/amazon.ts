export interface AmazonCredentials {
  accessKey: string;
  secretKey: string;
  partnerTag: string;
  host: string;
  region: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  browseNodeId: string;
}

export interface ProductAnalysis {
  asin: string;
  title: string;
  brand: string;
  price: number;
  rating: number;
  reviewCount: number;
  bestSellersRank: number[];
  salesVelocity: number;
  keywords: string[];
  lastUpdated: string;
}

export interface TrendAnalysis {
  category: ProductCategory;
  topProducts: ProductAnalysis[];
  priceRange: {
    min: number;
    max: number;
    average: number;
  };
  topBrands: Array<{
    name: string;
    productCount: number;
    averageRating: number;
  }>;
  commonFeatures: Array<{
    keyword: string;
    frequency: number;
  }>;
  weeklyChange: {
    trending: string[];
    declining: string[];
  };
}