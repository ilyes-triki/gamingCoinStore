const User = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// @route    POST http://localhost:5000/user/register
// @desc     POST user
// @access   Private
exports.registerUser = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    const newUser = new User({ userName, email, password });

    const userEmail = await User.findOne({ email });
    const Name = await User.findOne({ userName });
    if (userEmail) {
      res.status(400).send({
        message: 'email alredy exists !',
      });
      return;
    }
    if (Name) {
      res.status(400).send({
        message: 'userName alredy exists !',
      });
      return;
    }
    // //hash password
    const salt = 10;
    const genSalt = await bcrypt.genSalt(salt);
    const hashPassword = await bcrypt.hash(password, genSalt);
    newUser.password = hashPassword;

    // save user
    await newUser.save();
    // // create a token
    const payload = {
      _id: newUser._id,
    };
    const token = await jwt.sign(payload, process.env.secretKey, {
      expiresIn: '24h',
    });
    res
      .status(200)
      .send({ user: newUser, message: 'user saved', token: `Bearer ${token}` });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ message: 'something went wrong', error: error.message });
  }
};

// @route    POST http://localhost:5000/user/login
// @desc     POST user
// @access   Private
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    //   user exist
    const searchUser = await User.findOne({ email });

    //   email doesnt exist
    if (!searchUser) {
      return res.status(400).send({ message: 'user doesnt exist !' });
    }

    //   compare passwords
    const match = await bcrypt.compare(password, searchUser.password);
    if (!match) {
      return res.status(400).send({ message: 'wrong password !' });
    }
    // creat a token
    const payload = {
      _id: searchUser._id,
    };
    const token = await jwt.sign(payload, process.env.secretKey, {
      expiresIn: '24h',
    });

    //   send user
    res.status(200).send({
      user: searchUser,
      message: 'login succesful',
      token: `Bearer ${token}`,
    });
  } catch (error) {
    res.status(500).send({ message: 'sonething went wrong ' });
  }
};
// @route    GET http://localhost:5000/user/userProfile
// @desc     get current user
// @access   Private
exports.userProfile = async (req, res) => {
  try {
    res.status(200).send({ user: req.user });
  } catch (error) {
    res.status(400).send({ error });
  }
};
