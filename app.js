const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const Post = require('./models/Post');

const app = express();

//connect db
mongoose.connect('mongodb://localhost/clean-blog-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//middlewares
app.use(express.static('public'));

//template engine
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res) => {
  const posts = await Post.find({});
  res.render('index', {
    posts
  });
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add_post', (req, res) => {
  res.render('add_post');
});

app.post('/post', async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
});

const port = 5000;

app.listen(port, () => {
  console.log(`sunucu ${port} portunda oluşturuldu.`);
});
