const router = require('express').Router();
const UserController = require('../controllers/user.controller');
const auth = require('../middlewares/auth');
const authAdmin = require('../middlewares/auth.admin');

router
  .post('/login-admin', UserController.loginAdmin)
  .use(auth)
  .post('/register-admin', authAdmin, UserController.registerAdmin);

module.exports = router;
