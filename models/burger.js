var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(vals, cb) {
    orm.create("burgers",[
      "burger_name", "devoured"], [vals, false], cb);
  },
  update: function(id, cb) {
    var condition= "id=" +id;
    orm.update("burgers", {
      devoured: true
    },condition, cb);
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;