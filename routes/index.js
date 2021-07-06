const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.send('API-TEST-SERVER');
});

// single wrapper
router.get('/inline-linear', function (req, res, next) {
  res.sendFile(path.join(__dirname, '..', '/public/inline-linear.xml'));
});

// multiple wrapper
router.get('/multiple-wrapper', function (req, res, next) {
  res.sendFile(path.join(__dirname, '..', '/public/d1.xml'));
});

router.get('/d2', function (req, res, next) {
  res.sendFile(path.join(__dirname, '..', '/public/d2.xml'));
});

router.get('/d3', function (req, res, next) {
  res.sendFile(path.join(__dirname, '..', '/public/d3.xml'));
});

router.get('/d4', function (req, res, next) {
  res.sendFile(path.join(__dirname, '..', '/public/d4.xml'));
});

router.get('/d5', function (req, res, next) {
  res.sendFile(path.join(__dirname, '..', '/public/d5.xml'));
});

router.get('/d6', function (req, res, next) {
  res.sendFile(path.join(__dirname, '..', '/public/d6.xml'));
});

router.get('/d7', function (req, res, next) {
  res.sendFile(path.join(__dirname, '..', '/public/d7.xml'));
});

router.get('/d8', function (req, res, next) {
  res.sendFile(path.join(__dirname, '..', '/public/d8.xml'));
});

router.get('/d9', function (req, res, next) {
  res.sendFile(path.join(__dirname, '..', '/public/d9.xml'));
});

// companion click tracking test
router.get('/cct', function (req, res, next) {
  console.log('companion click tracking');
  res.end();
});

module.exports = router;
