const router = require("express").Router();


const cards = require("./../app/data/cards");

let defaultShuffle = []; //empty array for default cards.
let discard = []; //empty array for discarded cards.


router.get("/cards", function(req, res) {
    return res.json(cards);
  });





 module.exports = router;



