import './secrets';

import { connectToMongoDB } from './database';
import { createHttpServer } from './server';

connectToMongoDB()
    .then(() => createHttpServer())
    .catch((error) => {
        console.log(`[error] ${error}`);
        process.exit(1);
    });
