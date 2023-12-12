const { check, validationResult } = require('express-validator');

exports.registerRules = () => [
  check('userName', 'userName is required').notEmpty(),
  check('email', 'email is required').notEmpty().isEmail(),
  check('password', 'password is required').notEmpty(),
  check('password', "password's length needs to be between 6 and 15 ").isLength(
    {
      min: 6,
      max: 15,
    }
  ),
];
exports.loginRules = () => [
  check('email', 'email is required').notEmpty().isEmail(),
  check('password', 'password is required').notEmpty(),
  check('password', "password's length needs to be between 6 and 15 ").isLength(
    {
      min: 6,
      max: 15,
    }
  ),
];
exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .send({ errors: errors.array().map((el) => ({ message: el.msg })) });
  }
  next();
};
