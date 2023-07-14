import { Schema, model } from 'mongoose';

const blogSchema = new Schema(
  {
    heading: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

export default model('Blog', blogSchema);
