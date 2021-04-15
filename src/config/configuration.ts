/**
 * Expose your non-sensitive configuration settings here.
 * WARNING: This file is designed for non-sensitive settings only (e.g. constants, etc.).
 *          To set hidden settings (e.g. database credentials, etc.), use environment file instead.
 */

/** File to load secrets from */
export const ENV_FILE = '.env';

/** Secrets to load from the environment file */
export const SECRETS = [
    'ENVIRONMENT',
    'PORT',
    'MONGO_URI',
    'MONGO_DATABASE',
    'JWT_SECRET',
    'SALT_ROUNDS',
];
