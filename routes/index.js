var express = require('express');
var router = express.Router();
const getCoord = require("../modules/getCoord");

/* GET home page. */


router.get("/weather",function(req,res){
  const query = req.query;
  console.log(query)
  // we use city name to get geo coordinates 
  if(!query.city){
  return res.redirect("/")
}
getCoord(query.city)

  //use coordinates to fetch weather
  res.render("weather",{
    city: query.city
  })
 
})

router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Weather App' });
});

module.exports = router;
