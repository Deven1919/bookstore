import { Wishlist } from '../interfaces/wishlist.interface';
import wishlistModel from '../models/wishlist.model';
import Book from '../models/books.model';

class WishlistService {
  public Createwishlist = async (id: string, body): Promise<Wishlist> => {
    const bookDetails = await Book.findById(id);
    const { bookName, author } = bookDetails;
    let { _id } = body.user;

    const cart = await wishlistModel.findOne().select('+wishlist');
    if (cart) {
      const existingBook = await wishlistModel
        .findOne({
          $or: [
            { 'wishlist.author': bookDetails.author },
            { 'wishlist.bookName': bookDetails.bookName }
          ]
        })
        .select('+wishlist');
      console.log(existingBook);
      if (existingBook) {
        console.log('book present with same name');
        throw new Error('Book already present in wishlist..');
      } else {
        console.log('inside');
        cart.wishlist.push(bookDetails);
        cart.markModified('book');
        return await cart.save();
      }
    } else {
      console.log('wishlist cart created');
      const bookDetails = await Book.findById(id);
      const book = await wishlistModel.create({
        user_id: _id,
        wishlist: [bookDetails]
      });
      return book;
    }
  };
  /////////////////////////////////////
  public getWishlistCart = async (): Promise<Wishlist[]> => {
    // console.log('getting details from wishlist');
    const wishlist = await wishlistModel.find().populate('user_id');

    return wishlist;
  };
  public removeFromWishList = async (body, id: string): Promise<any> => {
    let { _id } = body.user;
    // get the cart of user
    const books = await wishlistModel
      .findOne({ user_id: _id })
      .select('+wishlist');
    // filter the data want to delete from cart
    const updatedBook = books.wishlist.filter(
      (curr) => String(curr['_id']) !== id
    );

    // remove book from wishlist
    const updatedList = await books.update(
      { $pull: { wishlist: { _id: id } } },
      { multi: true }
    );
    console.log(updatedList);
    // find the book using book id
    // findBook.book.forEach(async (curr) => {
    //   if (String(curr['_id']) === id) {
    //     if (curr.quantity >= 1) {
    //       curr.quantity--;
    //       await findBook.markModified('book');
    //       return await findBook.save();
    //     } else if (curr.quantity === 0 || curr.quantity <= 0) {
    //       console.log('inside');
    //       await findBook.update({ book: updatedBook });
    //       return;
    //     }
    //   }
    // });
  };
}
export default WishlistService;
