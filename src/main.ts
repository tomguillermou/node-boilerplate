import './secrets';

import { connectToMongoDB } from './database';
import { createHttpServer } from './server';

connectToMongoDB()
  .then(() => createHttpServer())
  .catch((error: Error) => {
    console.log(`[error] ${error.message}`);
    process.exit(1);
  });
