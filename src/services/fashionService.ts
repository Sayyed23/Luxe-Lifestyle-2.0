import { FashionTrend, TrendingItem } from '../types/fashion';

// Simulated API response for development
const MOCK_TRENDS: FashionTrend[] = [
  {
    id: '1',
    title: 'Spring/Summer 2024 Runway Highlights',
    description: 'Key looks from the latest fashion week collections',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae',
    category: 'runway',
    items: [
      {
        id: 'r1',
        title: 'Oversized Blazer Trend',
        description: 'Relaxed tailoring dominates the runway',
        image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f',
        price: { min: 299, max: 999, currency: 'USD' },
        category: 'outerwear',
        source: 'Paris Fashion Week',
        link: '#',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Black', 'Beige', 'Navy'],
        dateAdded: new Date().toISOString(),
        trending: 98
      }
    ],
    dateUpdated: new Date().toISOString()
  }
];

export const fetchTrends = async (category?: string): Promise<FashionTrend[]> => {
  // In production, this would be a real API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const trends = category
        ? MOCK_TRENDS.filter(trend => trend.category === category)
        : MOCK_TRENDS;
      resolve(trends);
    }, 1000);
  });
};

export const fetchTrendingItems = async (): Promise<TrendingItem[]> => {
  // Simulate API call
  return MOCK_TRENDS.flatMap(trend => trend.items);
};