declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ENVIRONMENT: 'production' | 'development';
      PORT: string;
      MONGO_URI: string;
      MONGO_DATABASE: string;
      JWT_SECRET: string;
      SALT_ROUNDS: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
