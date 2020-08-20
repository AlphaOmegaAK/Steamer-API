const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    minlength: 4,
    maxlength: 15,
    required: true,
  },
  lastName: {
    type: String,
    minlength: 4,
    maxlength: 20,
  },
  email: {
    type: String,
    minlength: 8,
    maxlength: 25,
    trim: true,
    lowercase: true,
    required: true,
  },
  username: {
    type: String,
    minlength: 6,
    maxlength: 15,
    required: true,
  },
  avatar: {
    type: String,
  },
  location: {
    type: String
  },
  post: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }]

}, { timestamps: true })

const User = mongoose.model('User', UserSchema)

//TODO Stretch - show online | offline