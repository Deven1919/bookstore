import User from '../models/user.model';
import { IUser } from '../interfaces/user.interface';
import jwt from 'jsonwebtoken';

const signIn = (id) => {
  return jwt.sign({ id }, process.env.KEY, { expiresIn: process.env.EXPIRES });
};

class AuthService {
  //Login user
  public login = async (body: IUser): Promise<IUser> => {
    const { email, password } = body;
    if ([email, password].every((field) => field.trim() === '')) {
      throw new Error('All Fileds are required..');
    }
    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await user.correctPassword(user.password, password))) {
      throw new Error('Incorrect password or Invalid email..');
    }
    // console.log(user);
    // console.log(process.env.KEY, process.env.EXPIRES);
    let token = signIn(user._id);
    user.token = token;
    user.password = undefined;
    user.confirm_password = undefined;
    return user;
  };
  public addBooks = async (): Promise<String> => {
    const val = 'Books';
    console.log(val);
    return val;
  };
}

export default AuthService;
