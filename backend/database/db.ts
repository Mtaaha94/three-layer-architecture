// import mongoose from 'mongoose';
// import { MONGO_URI } from '../utils/config';

// export const connectDB = async () => {
//     if (!MONGO_URI) {
//         console.log('MONGO_URL is not defined in the env file');
//         process.exit(1);
//     }
//     try {
//         await mongoose.connect(MONGO_URI);
//         console.log('MongoDB connected');
//     } catch (err) {
//         console.log(err.message.red.underline.bold);
//         process.exit(1);
//     }
// };

import mongoose from "mongoose";
import winston from "winston";

// Connect to DB from env variable url, create instance
export function connectDB() {
  const db = process.env.MONGO_URI || "mongodb+srv://taaha:taaha123@typescriptecommerce-nod.r9nwdzb.mongodb.net/?retryWrites=true&w=majority";

  mongoose
    .connect(db)
    .then(() => winston.info(`Connected to ${db}...`))
    .catch((error) => winston.error(error));
}