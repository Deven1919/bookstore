import { Schema, model } from 'mongoose';
import { IUser } from '../interfaces/user.interface';
import bcrypt from 'bcrypt';
import validator from 'validator';
import { userRole } from '../interfaces/user.interface';

const userSchema = new Schema<IUser>(
  {
    fullname: {
      type: String,
      required: [true, 'First name is required'],

      unique: true
    },
    lastName: {
      type: String
    },
    email: {
      type: String,
      required: [true, 'First name is required'],
      unique: true,
      lowercase: true,
      validator: {
        validator: function (val) {
          return validator.isEmail(this.email);
        },
        message: 'Email is not correct, Enter valid email'
      }
    },
    number: {
      type: Number,
      required: true
    },
    role: {
      type: String,
      enum: Object.values(userRole),
      default: userRole.user
    },
    password: {
      type: String,
      required: [true, 'Password is required.'],
      select: false
    },
    confirm_password: {
      type: String,
      validator: {
        validate: function (val: string) {
          return val === this.password;
        },
        message: 'Password is not correct..'
      }
    }
  },

  {
    timestamps: true
  }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  this.confirm_password = undefined;
  next();
});
userSchema.methods.correctPassword = async function (
  userPassword,
  enterPassword
) {
  return await bcrypt.compare(enterPassword, userPassword);
};

export default model<IUser>('User', userSchema);
