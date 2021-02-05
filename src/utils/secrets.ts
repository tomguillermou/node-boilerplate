import dotenv from 'dotenv';
import fs from 'fs';

const options = {
    path: '.env',
};

if (!fs.existsSync('.env')) {
    options.path = '.env.example';
    console.log('INFO: File .env not found. Using .env.example instead.');
    console.log('INFO: Create .env file to use custom variables.');
}

dotenv.config(options);

// Environment variables
let ENVIRONMENT: string;
let PORT: string;
let MONGODB_URI: string;
let MONGODB_DATABASE: string;
let JWT_SECRET: string;

if (
    !process.env.ENVIRONMENT ||
    !process.env.PORT ||
    !process.env.MONGODB_URI ||
    !process.env.MONGODB_DATABASE ||
    !process.env.JWT_SECRET
) {
    console.log(`Missing environment variables from ${options.path} file.`);
    process.exit(1);
} else {
    ENVIRONMENT = process.env.ENVIRONMENT;
    PORT = process.env.PORT;
    MONGODB_URI = process.env.MONGODB_URI;
    MONGODB_DATABASE = process.env.MONGODB_DATABASE;
    JWT_SECRET = process.env.JWT_SECRET;

    console.log(`Environment variables loaded from ${options.path} file.`);
}

// Export environment variables
export { ENVIRONMENT, PORT, MONGODB_URI, MONGODB_DATABASE, JWT_SECRET };
