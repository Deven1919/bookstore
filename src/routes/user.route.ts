import express, { IRouter } from 'express';
import userController from '../controllers/user.controller';
import userValidator from '../validators/user.validator';
import authController from '../controllers/auth.controller';
import { restrictTo } from '../utils/auth.util';
import { userAuth } from '../middlewares/auth.middleware';
import cartController from '../controllers/cart.controller';
class UserRoutes {
  private UserController = new userController();
  private AuthController = new authController();
  private router = express.Router();
  private UserValidator = new userValidator();
  private CartController = new cartController();

  constructor() {
    this.routes();
  }

  private routes = () => {
    //route to get all users
    this.router.get('/', this.UserController.getAllUsers);

    this.router.get('/getCart', this.CartController.getCart);
    this.router.post('/cart', this.CartController.createCart);
    //route to create a new user
    this.router.post(
      '/createUser',
      // this.UserValidator.newUser,
      this.UserController.newUser
    );
    // route for login user
    this.router.post('/login', this.AuthController.login);

    //route to get a single user
    this.router.get('/:id', userAuth, this.UserController.getUser);

    //route to update a single user
    this.router.put('/:id', this.UserController.updateUser);

    //route to delete a single user
    this.router.delete('/:id', this.UserController.deleteUser);
  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default UserRoutes;
