import express, { IRouter } from 'express';
import userController from '../controllers/user.controller';
import { userAuth } from '../middlewares/auth.middleware';
import cartController from '../controllers/cart.controller';
class CartRoutes {
  private UserController = new userController();
  private router = express.Router();
  private CartController = new cartController();

  constructor() {
    this.routes();
  }

  private routes = () => {
    //route to get all users

    //route to create cart
    this.router.post(
      '/createCart/:id',
      userAuth,
      this.CartController.createCart
    );
    // route to get the cartDetails
    this.router.get('/getCart', this.CartController.getCart);

    // remove book from cart
    this.router.post(
      '/removeBook/:id',
      userAuth,
      this.CartController.removeBookFromCart
    );
    this.router.patch(
      '/deleteBook/:id',
      userAuth,
      this.CartController.removeBook
    );
  };

  public cartRoutes = (): IRouter => {
    return this.router;
  };
}

export default CartRoutes;
