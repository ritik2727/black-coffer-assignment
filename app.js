const express = require("express");
const app = express();
const config = require("./config/config");
const database = require("./config/db");
const bodyParser = require("body-parser");
const datamodel = require("./models/datamodel");
const cors = require("cors");
const path = require('path');

app.use(cors());
app.listen(config.port, () => {
  console.log("server connected at port : ", config.port);
});

database();

app.use(bodyParser.json());

app.use(express.json());

app.get("/api/dashboard", async (req, res) => {
  try {
    const data = await datamodel.find();
    res.json({
      data: data,
    });
    console.log("sfg");
  } catch (error) {
    console.log(error);
  }
});


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
}

