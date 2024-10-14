import { Document, Types } from 'mongoose';

export interface Order extends Document {
  description: string;
  discountPrice: number;
  bookImage: string;
  bookName: string;
  author: string;
  price: number;
}
