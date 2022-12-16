const express = require("express");
const MongoClient = require("mongodb").MongoClient;



const app = express();
const url = "mongodb://localhost:27017";
const dbName = "recipe_api";

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("Connected to MongoDB");
  const db = client.db(recipe_api);
});



