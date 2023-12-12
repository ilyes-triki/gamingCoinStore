const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userController');
const middleware = require('../middleware/userMiddleware');
const isAuth = require('../middleware/auth');
// register
router.post(
  '/register',
  middleware.registerRules(),
  middleware.validation,
  userControllers.registerUser
);

// login
router.post(
  '/login',
  middleware.loginRules(),
  middleware.validation,
  userControllers.loginUser
);

// get a user
router.get('/userProfile', isAuth(), userControllers.userProfile);
module.exports = router;
