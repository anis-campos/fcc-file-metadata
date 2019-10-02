"use strict";

const express = require("express"),
  cors = require("cors"),
  multer = require("multer");

const app = express(),
  upload = multer({ dest: "files" });

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.post("/api/fileanalyse", upload.single("upfile"), function(req, res, next) {
  console.log(req.file);
  const { originalname: name, size } = req.file;
  res.json({ name, size });
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Node.js listening ...");
});
