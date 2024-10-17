import express, { IRouter } from 'express';
import summaryController from '../controllers/summary.controller';
import { userAuth } from '../middlewares/auth.middleware';

class SummaryRoutes {
  private SummaryController = new summaryController();
  private router = express.Router();

  constructor() {
    this.routes();
  }

  private routes = () => {
    // this.router.get('/', this.SummaryController.);
    this.router.post(
      '/addSummary/:id',
      userAuth,
      this.SummaryController.createSummary
    );
    this.router.get('/getSummary', this.SummaryController.getSummaryDetails);
  };

  public summaryRoutes = (): IRouter => {
    return this.router;
  };
}

export default SummaryRoutes;
