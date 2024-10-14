import { Schema, model, Types } from 'mongoose';
import { Wishlist } from '../interfaces/wishlist.interface';

const wishlistSchema = new Schema<Wishlist>(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },

    wishlist: [
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

wishlistSchema.pre('save', function () {
  this.totalPrice = Math.abs(
    this.wishlist.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
  );
});

export default model<Wishlist>('Wishlist', wishlistSchema);
