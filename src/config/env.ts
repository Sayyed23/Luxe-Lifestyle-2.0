import { AmazonCredentials } from '../types/amazon';

export const getAmazonCredentials = (): AmazonCredentials => {
  const requiredVars = [
    'AMAZON_ACCESS_KEY',
    'AMAZON_SECRET_KEY',
    'AMAZON_PARTNER_TAG'
  ];

  for (const varName of requiredVars) {
    if (!process.env[varName]) {
      throw new Error(`Missing required environment variable: ${varName}`);
    }
  }

  return {
    accessKey: process.env.AMAZON_ACCESS_KEY!,
    secretKey: process.env.AMAZON_SECRET_KEY!,
    partnerTag: process.env.AMAZON_PARTNER_TAG!,
    host: process.env.AMAZON_HOST || 'webservices.amazon.com',
    region: process.env.AMAZON_REGION || 'us-east-1'
  };
};

export const validateEnv = (): void => {
  try {
    getAmazonCredentials();
  } catch (error) {
    console.error('Environment validation failed:', error);
    process.exit(1);
  }
};