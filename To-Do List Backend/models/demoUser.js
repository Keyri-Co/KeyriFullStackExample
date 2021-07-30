const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('../config');
const bcrypt = require('bcryptjs');

const demoUserSchema = new mongoose.Schema({
  name: {
    type: String,
    requred: true,
    trim: true
  },
  email: {
    type: String,
    unique: false,
    trim: true
  },
  password: {
    type: String,
    trim: true
  },
  firstName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  photo: {
    type: String,
    trim: true
  },
  refreshTokens: {
    type: Array,
    required: true
  },
  userId: {
    type: String
  }
},
  { timestamps: true }
);

//generates an AuthToken
demoUserSchema.methods.generateToken = async function () {
  const user = this;
  const token = jwt.sign(
    { _id: user.id.toString() },
    config.JWT_SECRET,
    { expiresIn: '30m' }
  );

  return token;
};

demoUserSchema.methods.generateRefreshToken = async function () {
  const user = this;
  const refreshToken = jwt.sign(
    { _id: user.id.toString() },
    config.JWT_REFRESH_SECRET,
    { expiresIn: '7d' }, // expires in 7 days
  );
  
  return refreshToken;
}

// returns an demo user without some fileds (refreshTokens, password, userId);

demoUserSchema.methods.publicFields = async function () {
  const user = this;
  const userObj = user.toObject();
  delete userObj.refreshTokens;
  delete userObj.password;
  delete userObj.userId;

  return userObj;
};

demoUserSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  };

  next();
});

module.exports = mongoose.model('DemoUser', demoUserSchema);