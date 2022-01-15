const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create Schema
const PostSchema = new Schema({
    title: String,
    detail: String,
    dateCreated: { type: Date, default: Date.now },
  });

  //create model
const Post = mongoose.model('post', PostSchema);

module.exports = Post;
