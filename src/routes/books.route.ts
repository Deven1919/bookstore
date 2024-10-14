import express, { IRouter } from 'express';
import bookController from '../controllers/books.controller';
import { userAuth } from '../middlewares/auth.middleware';
import { restrictTo } from '../utils/auth.util';
class BookRoutes {
  private BookController = new bookController();
  private router = express.Router();

  constructor() {
    this.routes();
  }

  private routes = () => {
    //route to get all books
    this.router.get('/', userAuth, this.BookController.getAllBooks);
    //route to search book by author and price
    this.router.get('/search', userAuth, this.BookController.searchBook);
    //route to create a add new book
    this.router.post(
      '/addBook',
      userAuth,
      restrictTo('admin'),
      this.BookController.addBooks
    );

    //route to get a single book
    this.router.get('/:id', userAuth, this.BookController.getSingleBook);

    //route to update a single book
    this.router.put(
      '/:id',
      userAuth,
      restrictTo('admin'),
      this.BookController.updateBook
    );

    //route to delete a single book
    this.router.delete(
      '/:id',
      userAuth,
      restrictTo('admin'),
      this.BookController.deleteBook
    );
  };

  public bookRoutes = (): IRouter => {
    return this.router;
  };
}

export default BookRoutes;
