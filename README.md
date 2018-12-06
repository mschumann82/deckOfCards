# deckOfCards

link to site walkthrough: https://drive.google.com/file/d/12YntoEQEjIZwOXVn2zaT9mGzaPDLJeqm/view?usp=sharing

NPM packages used: Express, body-parser, path.

Instructions: In order to run the site you must run the server. Then in your browser go to http://localhost:3000/. You can then navigate the buttons for the requests. The requests are as follows:

Deal Card - Deals one card off the top of the deck.
Shuffle - Randomizes all the cards remaining in the deck and that are in the discard pile.
Discard - Specify a card that is to be sent to the discard pile.
Cut - Takes a number of cards from the top to be cut. Then places the bottom part on the top and the top on the bottom.
Order - Orders all remaining cards in the deck in default order. Leaves the cards in the discard pile where they are.
Rebuild - Puts the deck back in the default sort order with an empty discard pile.

Notes: I know the way its built that I probably didn't need a server but I threw it in there in case I misread the instructions and you needed a full back end as well. This way it will be easy to add the model for the db and additional routing if I need to.
