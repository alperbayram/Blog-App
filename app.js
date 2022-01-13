const express = require('express');

const app = express();

const port = 5000;

app.get('/', (req, res) => {
  const blog = { id: 1, title: 'Blog title', description: 'Blog description' };
  res.json(blog);
});

app.listen(port, () => {
  console.log(`sunucu ${port} portunda oluşturuldu.`);
});
