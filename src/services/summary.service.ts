import { Order } from '../interfaces/orderSummary.interface';
import orderSummary from '../models/orderSummary.model';
import Book from '../models/books.model';
import Cart from '../models/cart.model';

class OrderSummary {
  public summaryDetails = async (id: string, body): Promise<any> => {
    const {
      user: { _id }
    } = body;
    console.log(_id);
    //// getting cart details
    const summary = await Cart.findOne({ user_id: _id });
    // console.log(summary);
    const findingBook = await summary.book.filter((curr) => {
      if (String(curr['_id']) === id) {
        return curr;
      }
    });
    // console.log(findingBook);
    const [{ bookImage, bookName, author, price }] = findingBook;
    const ordersummary = await orderSummary.create({
      bookImage,
      bookName,
      author,
      price
    });

    console.log(ordersummary);
    return ordersummary;
  };
}
export default OrderSummary;
