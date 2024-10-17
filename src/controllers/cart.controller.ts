/* eslint-disable @typescript-eslint/no-explicit-any */
import HttpStatus from 'http-status-codes';
import cartService from '../services/cart.service';

import { Request, Response, NextFunction } from 'express';

class CartController {
  public CartService = new cartService();

  /**
   * Controller to create cart
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public createCart = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.CartService.Createcart(req.params.id, req.body);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Cart created successfully'
      });
    } catch (error) {
      next(error);
    }
  };
  /**
   * Controller to get a cartDetails
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public getCart = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.CartService.getCart();
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'cartDetails fetch successfully..'
      });
    } catch (error) {
      next(error);
    }
  };
  ///////////////////////////
  /**
   * Controller to get a cartDetails
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public removeBookFromCart = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.CartService.removeBookFromCart(
        res.locals,
        req.params.id
      );
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Book remove from cart successfully..'
      });
    } catch (error) {
      next(error);
    }
  };
  ///////////////////////////
  /**
   * Controller to get a cartDetails
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public removeBook = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.CartService.removeBook(res.locals, req.params.id);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Book remove from cart ..'
      });
    } catch (error) {
      next(error);
    }
  };
}

export default CartController;
