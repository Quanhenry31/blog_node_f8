const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

const route = require("./routes")

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json())

//XMLHttpRequest, fetch, axios,

//HTTP LOGGER
app.use(morgan("combined"));

//TEMPLATE ENGINE
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
//home, search, contact

// route init
route(app);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
