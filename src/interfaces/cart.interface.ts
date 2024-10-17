import { Document, Types } from 'mongoose';

export interface Cart extends Document {
  user_id: Types.ObjectId;

  book: [
    {
      bookName: string;
      author: string;
      bookImage: string;
      price: number;
      quantity: number;
      totalPrice?: number;
    }
  ];

  totalPrice?: number;
}
