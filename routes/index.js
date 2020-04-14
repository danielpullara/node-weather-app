var express = require('express');
var router = express.Router();
const getCoord = require("../modules/getCoord");
const getWeather = require("../modules/getWeather")
 
/* GET home page. */


router.get("/weather",function(req,res){
  const query = req.query;
  console.log(query)
  // we use city name to get geo coordinates 
  if(!query.city){
  return res.redirect("/")
}
getCoord(res,query.city,getWeather)


})

router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Weather App' });
});

module.exports = router;
