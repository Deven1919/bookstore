/* eslint-disable @typescript-eslint/no-explicit-any */
import HttpStatus from 'http-status-codes';
import authService from '../services/auth.service';

import { Request, Response, NextFunction } from 'express';

class UserController {
  public AuthService = new authService();

  //   /**
  //    * Controller to get all users available
  //    * @param  {object} Request - request object
  //    * @param {object} Response - response object
  //    * @param {Function} NextFunction
  //    */
  //   public getAllUsers = async (
  //     req: Request,
  //     res: Response,
  //     next: NextFunction
  //   ): Promise<any> => {
  //     try {
  //       const data = await this.UserService.getAllUsers();
  //       res.status(HttpStatus.OK).json({
  //         code: HttpStatus.OK,
  //         data: data,
  //         message: 'All users fetched successfully'
  //       });
  //     } catch (error) {
  //       next(error);
  //     }
  //   };

  //   /**
  //    * Controller to get a user
  //    * @param  {object} Request - request object
  //    * @param {object} Response - response object
  //    * @param {Function} NextFunction
  //    */
  //   public getUser = async (
  //     req: Request,
  //     res: Response,
  //     next: NextFunction
  //   ): Promise<any> => {
  //     try {
  //       const data = await this.UserService.getUser(req.params._id);
  //       res.status(HttpStatus.OK).json({
  //         code: HttpStatus.OK,
  //         data: data,
  //         message: 'User fetched successfully'
  //       });
  //     } catch (error) {
  //       next(error);
  //     }
  //   };

  //   /**
  //    * Controller to create new user
  //    * @param  {object} Request - request object
  //    * @param {object} Response - response object
  //    * @param {Function} NextFunction
  //    */
  //   public newUser = async (
  //     req: Request,
  //     res: Response,
  //     next: NextFunction
  //   ): Promise<any> => {
  //     try {
  //       const data = await this.UserService.newUser(req.body);
  //       res.status(HttpStatus.CREATED).json({
  //         code: HttpStatus.CREATED,
  //         data: data,
  //         message: 'User created successfully'
  //       });
  //     } catch (error) {
  //       next(error);
  //     }
  //   };

  //   /**
  //    * Controller to update a user
  //    * @param  {object} Request - request object
  //    * @param {object} Response - response object
  //    * @param {Function} NextFunction
  //    */
  //   public updateUser = async (
  //     req: Request,
  //     res: Response,
  //     next: NextFunction
  //   ): Promise<any> => {
  //     try {
  //       const data = await this.UserService.updateUser(req.params._id, req.body);
  //       res.status(HttpStatus.ACCEPTED).json({
  //         code: HttpStatus.ACCEPTED,
  //         data: data,
  //         message: 'User updated successfully'
  //       });
  //     } catch (error) {
  //       next(error);
  //     }
  //   };

  //   /**
  //    * Controller to delete a single user
  //    * @param  {object} Request - request object
  //    * @param {object} Response - response object
  //    * @param {Function} NextFunction
  //    */
  //   public deleteUser = async (
  //     req: Request,
  //     res: Response,
  //     next: NextFunction
  //   ): Promise<any> => {
  //     try {
  //       await this.UserService.deleteUser(req.params._id);
  //       res.status(HttpStatus.OK).json({
  //         code: HttpStatus.OK,
  //         data: {},
  //         message: 'User deleted successfully'
  //       });
  //     } catch (error) {
  //       next(error);
  //     }
  //   };
  /**
   * Controller to login a single user
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public login = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.AuthService.login(req.body);
      res.locals.user = data;
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        token: data.token,
        message: 'login successfully'
      });
    } catch (error) {
      next(error);
    }
  };
  /////////////////////
  public addBook = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.AuthService.addBooks();
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data
      });
    } catch (error) {
      next(error);
    }
  };
}

export default UserController;
