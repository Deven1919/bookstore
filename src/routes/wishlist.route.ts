import express, { IRouter } from 'express';
import wishlistController from '../controllers/wishlist.controller';
import { userAuth } from '../middlewares/auth.middleware';

class WishlistRoutes {
  private router = express.Router();
  private WishlistController = new wishlistController();

  constructor() {
    this.routes();
  }

  private routes = () => {
    //route to create cart
    this.router.post(
      '/create/:id',
      userAuth,
      this.WishlistController.createWishlist
    );
    // route to get the cartDetails
    this.router.get('/', this.WishlistController.wishList);

    // // remove book from wishlist

    this.router.patch(
      '/remove/:id',
      userAuth,
      this.WishlistController.removeFromWishList
    );
  };

  public wishlistRoutes = (): IRouter => {
    return this.router;
  };
}

export default WishlistRoutes;
