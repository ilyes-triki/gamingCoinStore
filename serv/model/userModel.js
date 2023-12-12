const mongoose = require('mongoose');

const schema = mongoose.Schema;
const UserSchema = new schema({
  userId: schema.Types.ObjectId,
  userName: {
    type: String,
    required: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
    index: true,
  },
});

module.exports = mongoose.model('user', UserSchema);
