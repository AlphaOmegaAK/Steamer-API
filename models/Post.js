const mongoose = require('mongoose');



const PostSchema = new mongoose.Schema({
  title: String,
  body: String,
  subject: String,
  date: Date,


}, { timestamps = true })

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;