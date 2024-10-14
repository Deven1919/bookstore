/* eslint-disable @typescript-eslint/no-explicit-any */
import HttpStatus from 'http-status-codes';
import customerDetailsService from '../services/customerDetails.service';

import { Request, Response, NextFunction } from 'express';

class CustomerController {
  public CustomerDetailsService = new customerDetailsService();

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

  /**
   * Controller to get a user
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public getCustomerDetails = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.CustomerDetailsService.getCustomerDetails();
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Address details fetched successfully'
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Controller to create new user
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public newCustomer = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.CustomerDetailsService.newCustomerDetails(
        req.body
      );
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'Address Details created successfully'
      });
    } catch (error) {
      next(error);
    }
  };

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
  //       const data = await this.UserService.updateUser(req.params.id, req.body);
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
  //       await this.UserService.deleteUser(req.params.id);
  //       res.status(HttpStatus.OK).json({
  //         code: HttpStatus.OK,
  //         data: {},
  //         message: 'User deleted successfully'
  //       });
  //     } catch (error) {
  //       next(error);
  //     }
  //   };
}

export default CustomerController;
