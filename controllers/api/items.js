const Item = require("../../models/item");

module.exports = {
  getAll
  // create
}

async function getAll (req, res) {
  const items = await Item.find({});
  res.json(items);
}

// async function create (req, res) {
//   const item = await Item.create(req.body);
//   res.json(item);
// }