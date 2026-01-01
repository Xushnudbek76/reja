const express = require("express");
const app = express();

const fs = require("fs");
app.get("/reja", function (req, res) {
  res.render("reja"); //res.send()
});

// MOngoDB chaqirish
const db = require("./server").db() // mongoDB objectni bizga beradi , Keyinchakik biz bu objectga  CRUD qila olamiz


//1  KIRISH
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// SESSION
//3  VIEWS CODE
app.set("views", "views")
app.set("view engine", "ejs")