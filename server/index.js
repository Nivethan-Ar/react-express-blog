import express from 'express';

let app = express();

app.use('/', (req, res) => {
  res.send('hello world');
});

app.listen(3000)