const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://oscarjeremias:catarina@cluster0.4lcxh.mongodb.net/    myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(url);

const dbName = "myFirstDatabase";

async function connectDataBase() {
  try {
    await client.connect();
    console.log("connect");
    const db = client.db(dbName);
    const collectionUsers = db.collection("users");

    return collectionUsers;
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectDataBase;
