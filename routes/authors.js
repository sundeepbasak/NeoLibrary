const express = require("express");
const router = express.Router();
const Author = require("../models/authorModel"); //importing author model

//All Authors Route: /authors/
router.get("/", async (req, res) => {
  let searchOptions = {};
  if (req.query.name != null && req.query.name !== "") {
    searchOptions.name = new RegExp(req.query.name, "i");
  }
  try {
    const authors = await Author.find(searchOptions);
    res.render("authors/index", {
      authors: authors,
      searchOptions: req.query,
    }); //rendering the page with the authors
  } catch {
    res.redirect("/"); //if there is an error, redirect to the home page
  }
});

//New Author Route: /authors/new
router.get("/new", (req, res) => {
  res.render("authors/new", { author: new Author() });
});

//Create Author Route: /authors/
router.post("/", async (req, res) => {
  const author = new Author({
    name: req.body.name,
  });

  try {
    const newAuthor = await author.save();
    //res.redirect(`/authors/${newAuthor.id}`);
    res.redirect("/authors");
  } catch {
    let locals = {
      author: author,
      errorMessage: `something went wrong`,
    };
    res.render("authors/new", locals);
  }
});

module.exports = router;
