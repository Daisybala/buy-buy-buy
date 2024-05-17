const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');


// GET /api/orders/cart
router.get('/cart', ordersCtrl.cart);

// POST /api/orders/cart/items/:id
router.post('/cart/items/:id', ordersCtrl.addToCart);

// PUT /api/orders/cart/qty
router.put('/cart/qty', ordersCtrl.setItemQtyInCart);

// POST /api/orders/cart/checkout
router.post('/cart/checkout', ordersCtrl.checkOut); 

// GET /api/orders
router.get('/', ordersCtrl.getAll);



module.exports = router;