const { comparePassword } = require('../helpers/bcrypt');
const { signToken } = require('../helpers/jwt');
const { User } = require('../models');

class UserController {
  static async registerAdmin(req, res, next) {
    try {
      const { username, email, address, phoneNumber } = await User.create({
        ...req.body,
        role: 'admin',
      });
      res.status(201).json({ username, email, address, phoneNumber });
    } catch (error) {
      next(error);
    }
  }

  static async loginAdmin(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email) {
        return res.status(400).json({ message: 'email is required' });
      } else if (!password) {
        return res.status(400).json({ message: 'password is required' });
      }
      const user = await User.findOne({ where: { email: req.body.email } });
      if (!user) {
        return res.status(400).json({ message: 'invalid email or password' });
      }
      const compared = comparePassword(password, user.password);
      if (!compared) {
        return res.status(400).json({ message: 'invalid email or password' });
      } else {
        const { id } = user;
        const access_token = signToken({ id });
        res.status(200).json({ access_token, id });
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
