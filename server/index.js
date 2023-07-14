import 'dotenv/config.js';
import express from 'express';
import mongoose from 'mongoose';
import AuthRouter from './routes/auth.js';
import UserRouter from './routes/user.js';
import BlogRouter from './routes/blogs.js';

let app = express();
app.use(express.json());

try {
  await mongoose.connect(process.env.MONGO_URL, {
    dbName: process.env.DB_NAME,
  });
  if (mongoose.connection.readyState) {
    console.log('connected to mongo');
  }
} catch (err) {
  console.log(err);
}

app.use('/api/v1/auth', AuthRouter);
app.use('/api/v1/users', UserRouter);
app.use('/api/v1/blogs', BlogRouter);

app.listen(process.env.PORT, () => {
  console.log(`API server running on ${process.env.PORT} port`);
});
