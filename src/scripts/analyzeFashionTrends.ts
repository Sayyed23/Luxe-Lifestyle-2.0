import { config } from 'dotenv';
import { AmazonService } from '../services/amazonApi';
import { TrendAnalyzer } from '../services/trendAnalyzer';
import { CATEGORIES } from '../config/amazon';
import { getAmazonCredentials, validateEnv } from '../config/env';
import { writeFileSync } from 'fs';
import { join } from 'path';

// Load environment variables
config();

// Validate environment before running
validateEnv();

async function main() {
  const credentials = getAmazonCredentials();
  const amazonService = new AmazonService(credentials);
  const results = [];

  for (const category of CATEGORIES) {
    console.log(`Analyzing ${category.name}...`);
    
    try {
      const products = await amazonService.analyzeTrends(category);
      const analyzer = new TrendAnalyzer(products, category);
      const analysis = analyzer.generateTrendAnalysis();
      results.push(analysis);
      
      // Save individual category results
      writeFileSync(
        join(process.cwd(), 'data', `${category.id}-trends.json`),
        JSON.stringify(analysis, null, 2)
      );
    } catch (error) {
      console.error(`Error analyzing ${category.name}:`, error);
    }
  }

  // Save combined results
  writeFileSync(
    join(process.cwd(), 'data', 'fashion-trends.json'),
    JSON.stringify(results, null, 2)
  );

  console.log('Analysis complete! Results saved to data directory.');
}

main().catch(console.error);