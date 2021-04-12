import mongoose from 'mongoose';

const { MONGO_URI = 'mongodb://localhost:27017' } = process.env;
const { MONGO_DATABASE = 'main' } = process.env;

/**
 * Connect to MongoDB database.
 */
export async function connect(): Promise<string> {
  await mongoose.connect(`${MONGO_URI}/${MONGO_DATABASE}`, {
    useNewUrlParser: true,
  });

  return MONGO_DATABASE;
}
