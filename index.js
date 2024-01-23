require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const ejs = require("ejs");

const connectDB = require("./db/dbConnect");
const routes = require("./routes/index");

const bodyParser = require("body-parser");
const compression = require("compression");
const morgan = require("morgan");
// morgan for debugging
const { configurePassport } = require("./config/passport");
configurePassport(app);

app.use(morgan("dev")); //use morgan to log requests to the console
app.use(compression()); //use compression
app.use(express.static(path.join(__dirname, "public")));
// middleware for static files from directory public - for static assests like img, CSS 
app.use(bodyParser.urlencoded({ extended: true }));
// to work easily with form data
app.set("views", path.join(__dirname, "views"));
// views has our pages in ejs
app.engine("ejs", require("ejs").renderFile); //express must use ejs to render
app.set("view engine", "ejs"); //ejs templating engine

app.use("/", routes);
// start server
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI).then(() =>
      console.log("Connected to MongoDB...")
    );
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
