import User from '../models/user.model';
import { IUser } from '../interfaces/user.interface';
import jwt from 'jsonwebtoken';

class UserService {
  //get all users
  public getAllUsers = async (): Promise<IUser[]> => {
    const data = await User.find();
    return data;
  };

  //create new user
  public newUser = async (body: IUser): Promise<IUser> => {
    const data = await User.create(body);
    return data;
  };

  //update a user
  public updateUser = async (_id: string, body: IUser): Promise<IUser> => {
    const data = await User.findByIdAndUpdate(
      {
        _id
      },
      body,
      {
        new: true
      }
    );
    return data;
  };

  //delete a user
  public deleteUser = async (_id: string): Promise<string> => {
    await User.findByIdAndDelete(_id);
    return '';
  };

  //get a single user
  public getUser = async (_id: string): Promise<IUser> => {
    const data = await User.findById(_id);
    return data;
  };

  // // Login user
  // public login = async (body: IUser): Promise<IUser> => {
  //   const { email, password } = body;
  //   console.log(email, password);

  //   if ([email, password].every((field) => field.trim() === '')) {
  //     throw new Error('All Fileds are required..');
  //   }
  //   const user = await User.findOne({ email }).select('+password');
  //   console.log(user.password);
  //   if (!user || !(await user.correctPassword(user.password, password))) {
  //     throw new Error('Incorrect password or Invalid email..');
  //   }
  //   let token = signIn(user._id);
  //   user.token = token;
  //   user.password = undefined;
  //   console.log(user);
  //   return user;
  // };
}

export default UserService;
