const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find({}).sort('-dateCreated');
  res.render('index', {
    posts,
  });
};

exports.getPost = async (req, res) => {
  const posts = await Post.findById(req.params.id);
  res.render('post', {
    posts,
  });
};

exports.getCreatePost = async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
};

exports.deletePost = async (req, res) => {
  await Post.findByIdAndRemove(req.params.id);
  res.redirect('/');
};

exports.updatePost = async (req, res) => {
  const posts = await Post.findOne({ _id: req.params.id });
  posts.title = req.body.title;
  posts.detail = req.body.detail;
  posts.save();
  res.redirect(`/posts/${req.params.id}`);
};
