import sendRequest from './send-request';

const BASE_URL = '/api/orders';

// Retrieve an unpaid order for the logged in user
export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

// Add an item to the cart
export function addItemToCart(itemId) {
  // Just send itemId for best security (no pricing)
  return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST');
}

export function setItemQTY(itemId, newQTY) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', {itemId, newQTY});

}

export function checkOut() {
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}

export function getAll() {
  return sendRequest(BASE_URL);
}