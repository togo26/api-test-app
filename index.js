const path = require('path');
const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => res.send('API-TEST-SERVER'));

// single wrapper
app.get('/inline-linear', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/public/inline-linear.xml'));
});

// multiple wrapper
app.get('/multiple-wrapper', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/public/d1.xml'));
});

app.get('/d2', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/public/d2.xml'));
});

app.get('/d3', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/public/d3.xml'));
});

app.get('/d4', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/public/d4.xml'));
});

app.get('/d5', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/public/d5.xml'));
});

app.get('/d6', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/public/d6.xml'));
});

app.get('/d7', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/public/d7.xml'));
});

app.get('/d8', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/public/d8.xml'));
});

app.get('/d9', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/public/d9.xml'));
});

// companion click tracking test
app.get('/cct', (req, res, next) => {
  console.log('companion click tracking');
  res.end();
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));
