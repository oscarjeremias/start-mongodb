const connectDataBase = require("../connect");

async function createUserControl(req, res) {
  const data = req.body;
  const colllection = await connectDataBase();
  await colllection.insertMany([data]);
  res.json(data);
}

module.exports = createUserControl;
