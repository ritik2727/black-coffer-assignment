// import * as fs from "fs";
// import * as path from "path";
const fs = require('fs');
const path = require('path');
const mongoose = require("mongoose")
const datamodel = require("../models/datamodel")
const database = require("./db")


database()
const runSeed = async () => {
  // first connect to DB
  // await connectDB("mongodb://localhost/blackcoffer");
  const data = path.join(__dirname, "data.json");
  // read data from json file
  const details = JSON.parse(fs.readFileSync(data, "utf-8"));
  try {
    await datamodel.deleteMany({});
    await datamodel.insertMany(details);
  } catch (err) {
    console.error(err);
  }
};

runSeed().then(() => mongoose.connection.close());