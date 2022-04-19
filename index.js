const coneconnectDataBase = require("./connect");
const createUserControl = require("./controls/createUserControl");
const updateUserControl = require("./controls/updateUserControl");
const deleteUserControl = require("./controls/deleteUserControl");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const collection = await coneconnectDataBase();
  const findResults = await collection.find({}).toArray();
  res.json(findResults);
});
app.post("/create", (req, res) => {
  createUserControl(req, res);
});
app.put("/update", (req, res) => {
  updateUserControl(req, res);
});

app.delete("/delete", (req, res) => {
  deleteUserControl(req, res);
});

app.listen(2000, () => {
  console.log("Em pé");
});
