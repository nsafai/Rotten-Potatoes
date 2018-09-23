var express = require('express');
var router = express.Router();

let reviews = [
  {
    title: 'Wakanda forever',
    movieName: 'Black Panther',
    rating: 4,
    body: 'Even soulless, Easter-egg hating film snobs like me can find a lot to admire in Black Panther.'
  },
  {
    title: 'Welcome back Spielberg',
    movieName: 'Ready Player One',
    rating: 3,
    body: "Spielberg wants us to drop the techno-gadgets and join hands, but it's the VR world that really juices him. He's the ultimate fanboy making a movie about the need to move beyond being a fan."
  },
  {
    title: 'Fast, funny, and fantastic',
    movieName: 'Rush Hour',
    rating: 4,
    body: "Rush Hour is a righteous title for an action comedy, and that's only the beginning."
  },
  {
    title: 'DiCaprio gives the best performance of his career.',
    movieName: 'The Wolf of Wall Street',
    rating: 5,
    body: "The result is a superb performance from DiCaprio as the swaggering, shouting bastard, and probably Scorsese's best film in 15 years."
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('reviews/index', { reviews: reviews});
});


module.exports = router;
