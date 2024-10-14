import { Schema, model, Types } from 'mongoose';
import { Book } from '../interfaces/books.interface';
import { ref } from '@hapi/joi';

const booksSchema = new Schema<Book>(
  {
    description: {
      type: String,
      required: [true, 'description is required']
    },
    discountPrice: {
      type: Number,
      required: [true, 'discountPrice is required']
    },
    bookImage: {
      type: String,
      required: [true, 'Image is required']
    },
    author: {
      type: String,
      required: [true, 'author is required']
    },
    quantity: {
      type: Number,
      required: [true, 'quantity is required']
    },
    price: {
      type: Number,
      required: [true, 'Price is required']
    },
    admin_user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },

  {
    timestamps: true
  }
);

export default model<Book>('Books', booksSchema);
