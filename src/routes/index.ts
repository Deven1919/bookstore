import express, { IRouter } from 'express';
const router = express.Router();
import bookRoute from './books.route';
import userRoute from './user.route';
import cartRoute from './cart.route';
import wishlistRoute from './wishlist.route';
import customerRoute from './customerDetails.route';
import orderSummaryRoute from './summary.route';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = (): IRouter => {
  router.use('/users', new userRoute().getRoutes());
  router.use('/books', new bookRoute().bookRoutes());
  router.use('/cart', new cartRoute().cartRoutes());
  router.use('/wishlist', new wishlistRoute().wishlistRoutes());
  router.use('/address', new customerRoute().customerDetailsRoutes());
  router.use('/summary', new orderSummaryRoute().summaryRoutes());

  return router;
};

export default routes;
