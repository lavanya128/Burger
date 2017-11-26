var express = require("express");

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  burger.all(function(data) {
    
    console.log(data);
    res.render("index", { burger_data: data });
  });
});

router.post("/burgers/create", function(req, res) {
	console.log(req.body.burger_name);
  burger.create(req.body.burger_name,function(result) {
    // Send back the ID of the new quote
    console.log(result);
    res.redirect("/");
    //console.log(id);
  });
});

router.put("/burgers/update", function(req, res) {
   burger.update(req.body.burger_id, function(result) {
    console.log(result);
     res.redirect("/");
      
    });
});

// router.delete("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   cat.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
module.exports = router;