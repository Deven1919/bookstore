/* eslint-disable @typescript-eslint/no-explicit-any */
import HttpStatus from 'http-status-codes';
import summary from '../services/summary.service';

import { Request, Response, NextFunction } from 'express';

class SummaryController {
  public Summary = new summary();

  /**
   * Controller to create orderSummary
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public createSummary = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.Summary.summaryDetails(req.params.id, res.locals);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'SummaryDetails created successfully'
      });
    } catch (error) {
      next(error);
    }
  };
  /////////////////
  /**
   * Controller to create orderSummary
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public getSummaryDetails = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.Summary.getSummary();
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'SummaryDetails fetch successfully'
      });
    } catch (error) {
      next(error);
    }
  };
}

export default SummaryController;
