import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { FashionTrend } from '../types/fashion';
import { fetchTrends } from '../services/fashionService';

export const useFashionTrends = (category?: string) => {
  const [trends, setTrends] = useState<FashionTrend[]>([]);
  
  const { data, error, isLoading } = useSWR(
    '/api/fashion/trends',
    () => fetchTrends(category),
    {
      refreshInterval: 86400000, // 24 hours
      revalidateOnFocus: false
    }
  );

  useEffect(() => {
    if (data) {
      setTrends(data);
    }
  }, [data]);

  return {
    trends,
    isLoading,
    isError: error,
    isEmpty: !isLoading && !error && (!trends || trends.length === 0)
  };
};