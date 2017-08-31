/**
 * Created by Administrator on 2017/8/30 0030.
 */
const config = require("./config");
const express = require("express");
const path = require("path");
const router = require("./router");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.set("views",path.join(__dirname,"public"));
app.engine("html",require("ejs").renderFile);
app.set("view engine","html");
app.use(router);
app.listen(9000,function () {
  console.log("http://localhost:"+ 9000);
});