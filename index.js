const express = require("express");
const app = express();
const path = require("path");


app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));


app.get("/", (req, res) => { 
    res.render("index"); 
});


app.listen(3000);