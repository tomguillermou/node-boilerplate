import dotenv from 'dotenv';
import fs from 'fs';

import errorMessage from '../config/errors/messages.json';

// Secrets to fetch from the .env file
let ENVIRONMENT: string;
let PORT: string;
let MONGODB_URI: string;
let MONGODB_DATABASE: string;
let JWT_SECRET: string;

// Select either .env if present or .env.example by default
if (fs.existsSync('.env')) {
    dotenv.config({ path: '.env' });
    console.log('Environment variables loaded');
} else {
    dotenv.config({ path: '.env.example' });
    console.log('Environment variables loaded');
    console.log('Info: Copy file .env.example and rename it .env to specify your own environment variables');
}

// Check if all required environement variable are here
if (!process.env.ENVIRONMENT) {
    console.log(errorMessage.missingEnvironmentVariable.ENVIRONMENT);
    process.exit(1);

} else if (!process.env.PORT) {
    console.log(errorMessage.missingEnvironmentVariable.PORT);
    process.exit(1);

} else if (!process.env.MONGODB_URI) {
    console.log(errorMessage.missingEnvironmentVariable.MONGODB_URI);
    process.exit(1);

} else if (!process.env.MONGODB_DATABASE) {
    console.log(errorMessage.missingEnvironmentVariable.MONGODB_DATABASE);
    process.exit(1);

} else if (!process.env.JWT_SECRET) {
    console.log(errorMessage.missingEnvironmentVariable.JWT_SECRET);
    process.exit(1);

} else {
    ENVIRONMENT = process.env.ENVIRONMENT;
    PORT = process.env.PORT;
    MONGODB_URI = process.env.MONGODB_URI;
    MONGODB_DATABASE = process.env.MONGODB_DATABASE;
    JWT_SECRET = process.env.JWT_SECRET;
}

// Export environment variables
export {
    ENVIRONMENT,
    PORT,
    MONGODB_URI,
    MONGODB_DATABASE,
    JWT_SECRET,
};
