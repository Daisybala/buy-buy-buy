import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import HomePage from '../HomePage/HomePage';
import AuthPage from '../AuthPage/AuthPage';
import ItemListPage from '../ItemListPage/ItemListPage';
import ShoppingCartPage from '../ShoppingCartPage/ShoppingCartPage';
import NavBar from '../../components/NavBar/NavBar';
import ItemDetailPage from '../ItemDetailPage/ItemDetailPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
export default function App() {
  const [user, setUser] = useState(getUser());
  const [saleItems, setSaleItems] = useState([]);
  const [cart, setCart] = useState(null);
  const [activeCat, setActiveCat] = useState('');
  const categoriesRef = useRef([]);

  // The empty dependency array causes the effect
  // to run ONLY after the FIRST render
  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = [...new Set(items.map(item => item.category.name))];
      setSaleItems(items);
      setActiveCat(categoriesRef.current[0]);
    }
    getItems();

    async function getCart() {
      const cart = await ordersAPI.getCart();
      if (!cart) return null; 
      setCart(cart);
    }
    getCart();
  }, []);

  async function handleAddToOrder(itemId) {
    // 1. Call the addItemToCart function in ordersAPI, passing to it the itemId, and assign the resolved promise to a variable named updatedCart.
    const updatedCart = await ordersAPI.addItemToCart(itemId);
    alert('Add To Cart Successfully!');
    // 2. Update the cart state with the updated cart received from the server
    setCart(updatedCart);
}

async function handleChangeQty(itemId, newQTY) {
  const updatedCart = await ordersAPI.setItemQTY(itemId, newQTY);
  setCart(updatedCart)
}
  

  // console.log(saleItems);

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<HomePage user={user} setUser={setUser} />} />
        <Route path="/auth" element={<AuthPage setUser={setUser} />}/>
        <Route path="/items" element={<ItemListPage  user={user} setUser={setUser} activeCat={activeCat} setActiveCat={setActiveCat} saleItems={saleItems} categoriesRef={categoriesRef}/>} />
        <Route path="/items/:saleItemId" element={<ItemDetailPage saleItems={saleItems} user={user} handleAddToOrder={handleAddToOrder} />} />
        <Route path="/cart" element={<ShoppingCartPage  order={cart} handleChangeQty={handleChangeQty} />} />
        <Route path="/orders" element={<OrderHistoryPage />} />

        {/* additional Routes... */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
}
