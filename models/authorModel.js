const mongoose = require("mongoose");

// Create a schema for authors
const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

//export model
module.exports = mongoose.model("Author", authorSchema);
