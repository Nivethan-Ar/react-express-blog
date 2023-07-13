import 'dotenv/config.js';
import express from 'express';
import mongoose from 'mongoose';

let app = express();
try {
  await mongoose.connect(process.env.MONGO_URL);
  if (mongoose.connection.readyState) {
    console.log('connected to mongo');
  }
} catch (err) {
  console.log(err);
}

app.use('/', (req, res) => {
  res.send('hello world');
});

app.listen(3000);
