import mongoose from 'mongoose';

import { MONGODB_URI, MONGODB_DATABASE } from './secrets';

/**
 * Connect to MongoDB database.
 */
export async function connect() {
    try {
        await mongoose.connect(`${MONGODB_URI}/${MONGODB_DATABASE}`, {
            useNewUrlParser: true,
        });
        console.log(`Connected to db: ${MONGODB_DATABASE}.`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
