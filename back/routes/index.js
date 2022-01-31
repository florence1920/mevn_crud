var express = require('express');
const Test = require('../models/Test');
var router = express.Router();

/* GET home page. */
router.get('/', async(req, res, next)=> {
  const test = await Test.find({});
  console.log(test);
  res.json(test);
});

module.exports = router;
