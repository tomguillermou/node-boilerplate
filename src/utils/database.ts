import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;
const MONGO_DATABASE = process.env.MONGO_DATABASE;

/**
 * Connect to MongoDB database.
 */
export async function connect(): Promise<void> {
    try {
        await mongoose.connect(`${MONGO_URI}/${MONGO_DATABASE}`, {
            useNewUrlParser: true,
        });
        console.log(`INFO: Connected to db: ${MONGO_DATABASE}.`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
