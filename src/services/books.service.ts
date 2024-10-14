import Books from '../models/books.model';
import { Book } from '../interfaces/books.interface';
import { IUser } from '../interfaces/user.interface';

class BooksService {
  //get all books
  public getAllBooks = async (): Promise<Book[]> => {
    const books = await Books.find().populate('admin_user_id');
    return books;
  };

  //create new Books
  public addBooks = async (body: Book): Promise<Book> => {
    const books = await Books.create(body);
    return books;
  };

  //update a Books
  public updateBook = async (_id: string, body: Book): Promise<Book> => {
    const books = await Books.findByIdAndUpdate(
      {
        _id
      },
      body,
      {
        new: true
      }
    );
    return books;
  };

  //delete a Book
  public deleteBook = async (_id: string): Promise<string> => {
    await Books.findByIdAndDelete(_id);
    return '';
  };

  //get a single user
  public getSingleBook = async (_id: string): Promise<Book> => {
    const book = await Books.findById(_id);
    return book;
  };
  //find book by author name or pirce
  public searchBook = async (query: any): Promise<Book> => {
    const { price, author } = query;
    const book = await Books.findOne({ $or: [{ price }, { author }] }).populate(
      'admin_user_id'
    );
    console.log(book);
    return book;
  };
}

export default BooksService;
