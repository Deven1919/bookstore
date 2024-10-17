import { Schema, model, Types } from 'mongoose';
import { Customer } from '../interfaces/userDetails.model';

const userDetailsSchema = new Schema<Customer>(
  {
    fullName: {
      type: String,
      required: true
    },
    mobileNumber: {
      type: Number,
      required: true,
      maxLength: [10]
    },
    address: [
      {
        addressDetails: String,
        state: String,
        city: String
      }
    ]
  },

  {
    timestamps: true
  }
);



export default model<Customer>('userDetails', userDetailsSchema);
