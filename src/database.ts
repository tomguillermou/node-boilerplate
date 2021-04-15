import mongoose from 'mongoose';

const { MONGO_URI, MONGO_DATABASE } = process.env;

/**
 * Connect to MongoDB database.
 */
export async function connectToMongoDB(): Promise<void> {
    const connectionString = `${MONGO_URI}/${MONGO_DATABASE}`;

    await mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });

    console.log(`[log] Connected to db: ${MONGO_DATABASE}.`);
}
