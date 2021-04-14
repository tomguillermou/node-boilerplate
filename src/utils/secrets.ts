import dotenv from 'dotenv';
import fs from 'fs';

import { SECRETS } from '@config';

const envPath = {
  defaultPath: '.env',
  defaultExamplePath: '.env.example',
};

export function load(): void {
  // Detect file path to load secrets from
  const path = fs.existsSync(envPath.defaultPath)
    ? envPath.defaultPath
    : envPath.defaultExamplePath;
  console.log(`[log] Loading secrets from ${path} file.`);

  // Load environment variables
  dotenv.config({ path });

  // Make sure no secret is missing, otherwise exit process
  let missingSecret = false;

  for (const secret of SECRETS) {
    if (typeof process.env[secret] === 'undefined' || !process.env[secret]) {
      console.error(`[error] ${secret} is missing from ${path} file.`);
      missingSecret = true;
    }
  }

  if (missingSecret) {
    process.exit(1);
  }
}
