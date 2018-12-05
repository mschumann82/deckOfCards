const router = require("express").Router();


const cards = require("./../app/data/cards");



router.get("/cards", function(req, res) {
    
    return res.json(cards);
  });



 module.exports = router;



