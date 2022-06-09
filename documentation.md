


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