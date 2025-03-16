import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(express.json());

// PORT should be chosen and stored as an environment variable.
const PORT = process.env.PORT || 8080;

// process.env.MONGO_URL should be retrieved from your MongoDB console
// and stored as an environment variable.
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

connectDB();

app.listen(PORT, console.log(`Successfully connect to port ${PORT}`));