/* eslint-disable @typescript-eslint/no-explicit-any */
import HttpStatus from 'http-status-codes';
import bookService from '../services/books.service';

import { Request, Response, NextFunction } from 'express';

class BookController {
  public BookService = new bookService();

  /**
   * Controller to get all Books available
   * @param  {object} Request
   * @param {object} Response
   * @param {Function} NextFunction
   */
  public getAllBooks = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.BookService.getAllBooks();
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'All books fetched successfully'
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Controller to get a single book
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public getSingleBook = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.BookService.getSingleBook(req.params.id);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Book fetched successfully'
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Controller to add new books
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public addBooks = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.BookService.addBooks(req.body);
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'Book created successfully'
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Controller to update a book
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public updateBook = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.BookService.updateBook(req.params._id, req.body);
      res.status(HttpStatus.ACCEPTED).json({
        code: HttpStatus.ACCEPTED,
        data: data,
        message: 'Book updated successfully'
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Controller to delete a single book
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public deleteBook = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      await this.BookService.deleteBook(req.params._id);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: {},
        message: 'Book deleted successfully'
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Controller to delete a single book
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public searchBook = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const book = await this.BookService.searchBook(req.query);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        book,
        message: 'Book Data fetch successfully'
      });
    } catch (error) {
      next(error);
    }
  };
}

export default BookController;
