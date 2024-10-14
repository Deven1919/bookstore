import { Document, Types } from 'mongoose';

export interface Customer extends Document {
  fullName: string;
  mobileNumber: number;
  address: [
    {
      addressDetails: string;
      state: string;
      city: string;
    }
  ];
}
