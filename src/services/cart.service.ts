import { Cart } from '../interfaces/cart.interface';
import cartModel from '../models/cart.model';
import Book from '../models/books.model';
import { Query } from 'mongoose';

class CartService {
  public Createcart = async (id: string, body): Promise<any> => {
    const bookDetails = await Book.findById(id);
    const { bookName, author } = bookDetails;
    let { _id } = body.user;
    console.log(_id);

    const cart = await cartModel.findOne().select('+book');
    //       'book.author': bookDetails.author || bookDetails.bookName
    if (cart) {
      const existingBook = await cartModel
        .findOne({
          $or: [
            { 'book.author': bookDetails.author },
            { 'book.bookName': bookDetails.bookName }
          ]
        })
        .select('+book');
      // console.log(existingBook);
      if (existingBook) {
        console.log('book present with same name');
        await existingBook.book.forEach((curr) => {
          if (
            curr.bookName === bookName ||
            curr.author === bookDetails.author
          ) {
            curr.quantity++;
          }
        });
        existingBook.markModified('book');
        return await existingBook.save();
        // return await existingBook.save();
      } else {
        console.log('different book');
        cart.book.push(bookDetails);
        cart.markModified('book');
        return await cart.save();
        // return cart.save();
      }
    } else {
      const bookDetails = await Book.findById(id);
      const book = await cartModel.create({
        user_id: _id,
        book: [bookDetails]
      });
      return book;
    }
  };
  /////////////////////////////////////

  public removeBookFromCart = async (body, id: string): Promise<any> => {
    let { _id } = body.user;
    // get the cart of user

    const findBook = await cartModel
      .findOne({ user_id: _id })
      .select('+book +_id');
    // filter the data want to delete from cart
    const updatedBook = findBook.book.filter(
      (curr) => String(curr['_id']) !== id
    );

    // find the book using book id
    findBook.book.forEach(async (curr) => {
      if (String(curr['_id']) === id) {
        if (curr.quantity >= 1) {
          curr.quantity--;
          await findBook.markModified('book');
          return await findBook.save();
        } else if (curr.quantity === 0 || curr.quantity <= 1) {
          console.log('inside');
          // update the data || delete that book from cart
          await findBook.update(
            {
              // _id: findBook._id,
              $pull: { book: { _id: id } }
            },
            { multi: true }
          );
          // console.log(val);
          // other way to delete cart from book
          //await findBook.update({ book: updatedBook });
          return findBook;
        }
      }
    });
  };
  ////////////////////////////
  public getCart = async (): Promise<any> => {
    // console.log('getting details from cart');
    const book = await cartModel.find().populate('user_id');

    return book;
  };
}
export default CartService;
