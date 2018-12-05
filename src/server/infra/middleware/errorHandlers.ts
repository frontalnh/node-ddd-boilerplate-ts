export const notFoundErrorHandler = (req, res, next) => {
  const err: any = new Error('Not found');
  err.status = 404;
  next(err);
};

export const domainErrHandler = (err, req, res, next) => {
  res.status(err.status || 500);

  res.send({
    error: {
      message: err.message
    }
  });
};
