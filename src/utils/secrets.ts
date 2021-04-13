import dotenv from 'dotenv';
import fs from 'fs';

import { environmentVariablesList } from '@config';

const envPath = {
    defaultPath: '.env',
    defaultExamplePath: '.env.example',
};

export function load(): void {
    // Detect file path to load variables from
    const path = fs.existsSync(envPath.defaultPath)
        ? envPath.defaultPath
        : envPath.defaultExamplePath;
    console.log(`INFO: Reading environment variables from ${path} file`);

    // Load environment variables
    dotenv.config({ path });

    // Make sure each environment variable is defined, otherwise exit process
    for (const variable of environmentVariablesList) {
        if (typeof process.env[variable] === 'undefined') {
            console.error('ERROR: Missing an environment variable');
            process.exit(1);
        }
    }
}
