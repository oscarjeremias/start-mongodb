const connectDataBase = require("../connect");

async function updateUserControl(req, res) {
  const data = req.body;
  console.log(data.data);
  const collection = await connectDataBase();
  const updateResult = await collection.updateOne(
    { name: data.filter },
    { $set: data.data }
  );
  res.json({ sms: "update sucess!" });
}

module.exports = updateUserControl;
