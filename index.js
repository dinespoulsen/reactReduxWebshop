var express = require("express");

var app = express();
// app.set("view engine", "ejs");
app.get("/", function(req, res) {
  res.send("hello World");
});

app.listen(3000, () => {
  console.log("Server is up and running on port 3000");
});
