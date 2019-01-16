let axios = require("axios");
let express = require("express");
let expressHandlebars = require("express-handlebars");
let mongoose = require("mongoose");
let cheerio = require("cheerio");

let db = require("./models");
let PORT = 3000;
let app = express();

// everything goes above this:
app.listen(PORT, () => console.log("App running on port " + PORT));