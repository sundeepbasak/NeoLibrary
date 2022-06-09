//here we are going to define all the routes for index of our application

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index"); //render the index.ejs file
});


module.exports = router;