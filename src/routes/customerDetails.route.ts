import express, { IRouter } from 'express';
import customerController from '../controllers/customerDetails.controller';
import { userAuth } from '../middlewares/auth.middleware';
import { restrictTo } from '../utils/auth.util';
class BookRoutes {
  private CustomerController = new customerController();
  private router = express.Router();

  constructor() {
    this.routes();
  }

  private routes = () => {
    this.router.get('/', this.CustomerController.getCustomerDetails);
    this.router.post('/addAddress', this.CustomerController.newCustomer);
  };

  public customerDetailsRoutes = (): IRouter => {
    return this.router;
  };
}

export default BookRoutes;
