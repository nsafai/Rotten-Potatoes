var express = require('express');
var router = express.Router();

// To use the Review model, we'll need to define it as a constant in our routes/index.js.
const Review = require('../models/review');

/* GET home page. */
router.get('/', (req, res) => {
  // 1
  Review.find({}, (err, reviews) => {
    if (err) {
      console.log(err);
    }
    res.render('reviews/index', {
      reviews: reviews
    });
  });
});

router.get('/reviews/new', (req, res) => {
    res.render('reviews/new');
});
// 1 We create a new function for handling the POST request at the /reviews URL path from our new review form.
router.post('/reviews', (req, res) => {
    // 2 We create a new review using our Review model.
    const review = new Review(req.body);
    // 3 We use the .save function to save our new model in our database.
    review.save(function(err, review) {
        if (err) {
            console.log(err);
        }
        // 4 After our new review is saved in our database, if there is no error, redirect to our root index / path.
        return res.redirect('/reviews/' + review.id);
    });
});

// 1 We create a new route that takes an GET request with the URL path /reviews/:id.
// This is a special URL path because it has the :id value in it.
// This ID corresponds to the Id of the review we want to display.
router.get('/reviews/:id', (req, res) => {
  // 2 Use the mongoose model's .findById to query the database for a record with the given Id.
  Review.findById(req.params.id, (err, review) => {
    if (err) {
      console.log(err);
    }

    // 3 Once we read the data from our database, if there are no errors, we display the review in a new reviews/show template.
    res.render('reviews/show', {
      review: review
    });
  });
});


module.exports = router;
