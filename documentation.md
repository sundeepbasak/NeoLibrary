


- setting view engine as ejs
    - `app.set('view engine', 'ejs');`
- setting our views directory
    - `app.set('views', __dirname + '/views');`

- app.set('layout', 'layouts/layout'); //setting our layout directory
- app.use(expressLayouts); //using express-layouts

- app.use(express.static("public")); //using our public directory
- //public directory is where we put our css, js, and images


- in nodejs and express, most people consider controllers as routes.
- MVC (Model, View, Controller)
- views: contains all views
- routes: controllers
- models: models

### Dotenv
- It is a lightweight npm package that automatically loads environment variables from a .env file into the process.
- `npm i dotenv -D`


//get our models integrated, and to do that we need to connect our application to a local mongoDb database

//integrate mongodb in our application
//first we install mongoose: npm i mongoose

//setting up our database
````javascript
const mongoose = require("mongoose"); //importing mongoose
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
}); //connecting to our database
const db = mongoose.connection;
db.on("error", (error) => console.error(error)); //if there is an error, console.error the error
db.once("open", () => console.log("Connected to Mongoose")); //if there is no error, console.log that we are connected to mongoose
````



 >> Partials are basically just views that are designed to be used from within other views. They are particularly useful for reusing the same markup between different views, layouts, and even other partials.
 - partials allow us to break out our ejs files into smaller files, and it allows us to import these files multiple times, so we dont have to duplicate code all over the place.