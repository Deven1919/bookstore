import { Schema, model } from 'mongoose';
import { Order } from '../interfaces/orderSummary.interface';

const orderSummary = new Schema<Order>(
  {
    bookName: {
      type: String
    },
    price: {
      type: Number
    },
    author: {
      type: String
    },
    bookImage: {
      type: String
    },
    discountPrice: {
      type: Number
    },
    description: {
      type: String
    }
  },

  {
    timestamps: true
  }
);


export default model<Order>('Summary', orderSummary);
