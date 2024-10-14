/* eslint-disable @typescript-eslint/no-explicit-any */
import HttpStatus from 'http-status-codes';
import wishlistService from '../services/wishlist.service';

import { Request, Response, NextFunction } from 'express';

class WishlistController {
  public WishlistService = new wishlistService();

  /**
   * Controller to create cart
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public createWishlist = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.WishlistService.Createwishlist(
        req.params.id,
        res.locals
      );
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Wishlist cart created successfully'
      });
    } catch (error) {
      next(error);
    }
  };
  /**
   * Controller to get a wishlist details
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public wishList = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.WishlistService.getWishlistCart();
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Data fetch successfully..'
      });
    } catch (error) {
      next(error);
    }
  };
  /////////////////////////////
  /**
   * Controller to remove the cart from wishlist
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public removeFromWishList = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.WishlistService.removeFromWishList(
        res.locals,
        req.params.id
      );
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Book remove from wishlist successfully..'
      });
    } catch (error) {
      next(error);
    }
  };
}

export default WishlistController;
