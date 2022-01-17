const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const PostController = require('./controllers/PostControllers');
const PageController = require('./controllers/PageControllers');
var methodOverride = require('method-override');
const dotenv = require('dotenv');
const app = express();

dotenv.config();
//connect db
mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.e93kf.mongodb.net/cleanblog-db?retryWrites=true&w=majority`
);
// mongoose.connect('mongodb://localhost/cleanblog-db');

//template engine
app.set('view engine', 'ejs');

//middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

//routers
app.get('/', PostController.getAllPosts);
app.get('/posts/:id', PostController.getPost);
app.post('/post', PostController.getCreatePost);
app.delete('/posts/:id', PostController.deletePost);
app.put('/posts/:id', PostController.updatePost);

app.get('/about', PageController.aboutPage);
app.get('/add_post', PageController.addPage);
app.get('/posts/edit/:id', PageController.editPage);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`sunucu ${port} portunda oluşturuldu.`);
});
