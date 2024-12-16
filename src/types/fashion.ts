export interface TrendingItem {
  id: string;
  title: string;
  description: string;
  image: string;
  price: {
    min: number;
    max: number;
    currency: string;
  };
  category: string;
  source: string;
  link: string;
  sizes: string[];
  colors: string[];
  dateAdded: string;
  trending: number;
}

export interface FashionTrend {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'runway' | 'streetStyle' | 'influencer' | 'seasonal' | 'bestseller' | 'regional';
  items: TrendingItem[];
  dateUpdated: string;
}

export interface FashionWeek {
  id: string;
  name: string;
  location: string;
  date: string;
  collections: {
    designer: string;
    highlights: string[];
    images: string[];
  }[];
}