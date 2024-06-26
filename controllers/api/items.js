const category = require("../../models/category");
const Item = require("../../models/item");

module.exports = {
  getAll,
  // create
}

async function getAll (req, res) {
  const items = await Item.find({}).populate('category');
  res.json(items);
}

// async function show (req, res) {
//   const item = await Item.findById(req.params.id);
//   res.json(item);
// }
// async function create (req, res) {
//   const item = await Item.create(req.body);
//   res.json(item);
// }