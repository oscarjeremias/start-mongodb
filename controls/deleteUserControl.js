const connectDataBase = require("../connect");

async function deleteUserControl(req, res) {
  const { name } = req.body;
  const collection = await connectDataBase();
  await collection.deleteMany({ name: name });

  res.json({ sms: "Delete sucess!" });
}

module.exports = deleteUserControl;
