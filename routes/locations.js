var fs = require('fs');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  fs.readFile('sample_data/wic_locations.json', null, function(err, data) {
    if (err) {
      res.status(500).send("Error loading locations.");
    } else {
      res.send(data);
    }
  });

});

module.exports = router;
