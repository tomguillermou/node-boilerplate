import dotenv from 'dotenv';
import fs from 'fs';

const config = {
    customPath: '.env',
    defaultPath: '.env.example',
};

/** Environment variables list */
const variables = [
    'ENVIRONMENT',
    'PORT',
    'MONGO_URI',
    'MONGO_DATABASE',
    'JWT_SECRET',
    'SALT_ROUNDS',
];

export function load(): void {
    // Detect file path to load variables from
    const path = fs.existsSync(config.customPath) ? config.customPath : config.defaultPath;
    console.log(`INFO: Reading environment variables from ${path} file`);

    // Load environment variables
    dotenv.config({ path });

    // Make sure every variables are loaded or exit process
    for (const variable of variables) {
        if (typeof process.env[variable] !== 'string') {
            console.error('ERROR: Missing an environment variable');
            process.exit(1);
        }
    }
}
