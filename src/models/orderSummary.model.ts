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

// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();
//   this.password = await bcrypt.hash(this.password, 10);
//   this.confirm_password = undefined;
//   next();
// });
// userSchema.methods.correctPassword = async function (
//   userPassword,
//   enterPassword
// ) {
//   return await bcrypt.compare(enterPassword, userPassword);
// };

export default model<Order>('Summary', orderSummary);
