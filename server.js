const express = require("express");
// const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// use api routes
app.use(routes);


// mongoose connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://user1:password1@ds263146.mlab.com:63146/heroku_5gsvxxm0", { useNewUrlParser: true })



app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
