var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { greeting: 'Hola', name: 'amigo', title: 'Rotten Potatoes' });
});


let testArray = [
  { data: 'Snickersnee' },
  { data: 'Cattywampus' },
  { data: 'Gardyloo' },
  { data: 'Taradiddle' },
  { data: 'Bumfuzzle' }
];

// create new route below
router.get('/test', (req, res) => {
  res.render('test', {
    data: 'test',
    test_items:testArray
  })
});

module.exports = router;
