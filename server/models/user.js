import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    email: {
      required: true,
      type: String,
      unique: true,
    },
    username: {
      required: true,
      type: String,
      unique: true,
    },
    password: {
      required: true,
      type: String,
    },
    avatar: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

export default model('User', userSchema);
