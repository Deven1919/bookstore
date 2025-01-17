import { Schema, model, Types } from 'mongoose';
import { Cart } from '../interfaces/cart.interface';

const cartSchema = new Schema<Cart>(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },

    book: [
      {
        bookName: String,
        author: String,
        bookImage: String,
        price: Number,
        quantity: Number
      }
    ],
    totalPrice: {
      type: Number
    }
  },

  {
    timestamps: true
  }
);

cartSchema.pre('save', function () {
  this.totalPrice = this.book.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
});

export default model<Cart>('Cart', cartSchema);
