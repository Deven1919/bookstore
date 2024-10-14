export const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(res.locals.role)) {
      throw new Error('Not allowed to perfrom this action');
    }
    console.log('working');
    next();
  };
};
