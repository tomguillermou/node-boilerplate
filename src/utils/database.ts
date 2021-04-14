import mongoose from 'mongoose';

const { MONGO_URI, MONGO_DATABASE } = process.env;

/**
 * Connect to MongoDB database.
 */
export async function connect(): Promise<string> {
  await mongoose.connect(`${MONGO_URI}/${MONGO_DATABASE}`, {
    useNewUrlParser: true,
  });

  return MONGO_DATABASE;
}
