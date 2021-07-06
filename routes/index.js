const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => res.send('API-TEST-SERVER'));

// single wrapper
router.get('/inline-linear', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', '/public/inline-linear.xml'));
});

// multiple wrapper
router.get('/multiple-wrapper', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', '/public/d1.xml'));
});

router.get('/d2', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', '/public/d2.xml'));
});

router.get('/d3', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', '/public/d3.xml'));
});

router.get('/d4', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', '/public/d4.xml'));
});

router.get('/d5', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', '/public/d5.xml'));
});

router.get('/d6', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', '/public/d6.xml'));
});

router.get('/d7', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', '/public/d7.xml'));
});

router.get('/d8', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', '/public/d8.xml'));
});

router.get('/d9', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', '/public/d9.xml'));
});

// companion click tracking test
router.get('/cct', (req, res, next) => {
  console.log('companion click tracking');
  res.end();
});

module.exports = router;
