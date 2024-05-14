const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');

// GET /api/items
router.get('/', itemsCtrl.getAll)

// // POST /api/items
// router.post('/',itemsCtrl.create)

module.exports = router;