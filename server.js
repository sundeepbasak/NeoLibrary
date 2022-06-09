if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
} //if not in production, use dotenv to get the .env file

const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const PORT = process.env.PORT || 3000;

const indexRouter = require("./routes/index"); //importing the index router
const authorsRouter = require("./routes/authors"); //importing the authors router

app.set("view engine", "ejs"); //setting our view engine
app.set("views", __dirname + "/views"); //setting our views directory
app.set("layout", "layouts/layout"); //setting our layout in layouts folder in views directory
app.use(expressLayouts); //using express-layouts
app.use(express.static("public")); //using our public directory. // public directory is where we put our css, js, and images
app.use(express.json()); //using express json
app.use(express.urlencoded({ limit: '10mb', extended: true })); //using express to parse our form data

//setting up our database
const mongoose = require("mongoose"); //importing mongoose
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
}); //connecting to our database
const db = mongoose.connection;
db.on("error", (error) => console.error(error)); //if there is an error, console.error the error
db.once("open", () => console.log("Connected to Mongoose")); //if there is no error, console.log that we are connected to mongoose

app.use("/", indexRouter); //using our index router
app.use('/authors', authorsRouter); //using our authors router

app.listen(PORT, () => {
  console.log(`Server is listening at port: ${PORT}`);
});

//get our models integrated, and to do that we need to connect our application to a local mongoDb database

//integrate mongodb in our application
//first we install mongoose: npm i mongoose
