import { Document, Types } from 'mongoose';

export enum userRole {
  admin = 'admin',
  user = 'user'
}

export interface IUser extends Document {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  number: number;
  token: string;
  confirm_password: string;
  correctPassword?: (a: string, b: string) => string;
  role?: userRole;
}
