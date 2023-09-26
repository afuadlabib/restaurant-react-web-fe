const router = require('express').Router();
const userRouter = require('./user.router');
const itemRouter = require('./item.router');
const categoryRouter = require('./category.router');
const ingradientRouter = require('./ingredient.router');
const errorHandler = require('../middlewares/error.handler');
const auth = require('../middlewares/auth');
const transaction = require('./transaction.router')

router
  .use('/users', userRouter)
  .use('/items', itemRouter)
  .use(auth)
  .use('/categories', categoryRouter)
  .use('/ingradients', ingradientRouter)
  .use('/items-ingredients', transaction)
  .use(errorHandler);

module.exports = router;
