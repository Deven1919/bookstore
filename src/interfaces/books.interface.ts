import { Document, Types } from 'mongoose';

export interface Book extends Document {
  _id: Types.ObjectId;
  description: string;
  discountPrice: number;
  bookImage: string;
  admin_user_id: Types.ObjectId;
  bookName: string;
  author: string;
  quantity: number;
  price: number;
}
