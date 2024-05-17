const Order = require('../../models/order');

module.exports = {
    cart,
    addToCart,
    setItemQtyInCart,
    checkOut,
    getAll
  };

// A cart is the unpaid order for a user
async function cart(req, res) {
  const cart = await Order.getCart(req.user._id);
  res.json(cart);
}

// Add an item to the cart
async function addToCart(req, res) {
    const cart = await Order.getCart(req.user._id);
    // The promise resolves to the document, which we already have
    // in the cart variable, so no need to create another variable...
    await cart.addItemToCart(req.params.id); 
    res.json(cart);    
  }

  async function setItemQtyInCart(req, res) {
    const cart = await Order.getCart(req.user._id);
    await cart.setItemQty(req.body.itemId, req.body.newQTY);
    res.json(cart)
  }

  async function checkOut(req, res) {
    const cart = await Order.getCart(req.user._id);
    cart.isPaid = true;
    await cart.save();
    res.json(cart);
  }

  async function getAll(req, res) {
    const orders = await Order.find({user: req.user._id, isPaid: true});
    res.json(orders);

  }