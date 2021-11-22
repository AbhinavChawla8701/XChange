var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'XChange' });
});

router.get('/home', async(req, res) => {
  const stocks = await Stock.find({Symbol:"RELIANCE", Date: { $gte: '2019-01-01', $lte: '2020-02-01' }});
  res.render('simulator',{ title: 'XChange' ,data:stocks });
});

router.get('/getdata/:num', async(req, res) => {
  const stocks = await Stock.find({Symbol:"RELIANCE", Date: { $gte: '2019-01-01', $lte: '2020-02-01' }}).limit(Number(req.params.num));
  res.status(200).json(stocks);
});

router.get('/visual', async(req, res) => {
  res.render('visualization', { title: 'XChange' });
});


module.exports = router;
