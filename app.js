const express = require('express');
const ejs = require('ejs');

const app = express();

//middlewares
app.use(express.static('public'));

//template engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add_post', (req, res) => {
  res.render('add_post');
});
app.get('/post', (req, res) => {
  res.render('post');
});

const port = 5000;

app.listen(port, () => {
  console.log(`sunucu ${port} portunda oluşturuldu.`);
});
