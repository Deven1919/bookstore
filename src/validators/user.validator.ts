import Joi from '@hapi/joi';
import { Request, Response, NextFunction } from 'express';

class UserValidator {
  public newUser = (req: Request, res: Response, next: NextFunction): void => {
    const schema = Joi.object({
      fullname: Joi.string().min(4).max(10).required(),
      // lastName: Joi.string().min(4).max(10).required(),
      email: Joi.string().required(),
      password: Joi.string().min(4).max(10).required(),
      // confirm_password: Joi.string().min(4).max(10).required(),
      role: Joi.string()
    });
    const { error } = schema.validate(req.body);
    if (error) {
      next(error);
    }
    next();
  };
}

export default UserValidator;
