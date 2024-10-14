import { Document, Types } from 'mongoose';

export interface Wishlist extends Document {
  user_id: Types.ObjectId;

  wishlist: [
    {
      bookName: string;
      author: string;
      bookImage: string;
      price: number;
      quantity: number;
    }
  ];

  totalPrice?: number;
}
