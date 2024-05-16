import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import HomePage from '../HomePage/HomePage';
import AuthPage from '../AuthPage/AuthPage';
import ItemListPage from '../ItemListPage/ItemListPage';
// import AuthPage from '../AuthPage/AuthPage';
import PostsPage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';
import ItemDetailPage from '../ItemDetailPage/ItemDetailPage';
export default function App() {
  const [user, setUser] = useState(getUser());
  const [saleItems, setSaleItems] = useState([]);
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
  }, []);

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<HomePage user={user} setUser={setUser} />} />
        <Route path="/auth" element={<AuthPage setUser={setUser} />}/>
        <Route path="/items" element={<ItemListPage  user={user} setUser={setUser} activeCat={activeCat} setActiveCat={setActiveCat} saleItems={saleItems} categoriesRef={categoriesRef}/>} />
        <Route path="/items/:saleItemId" element={<ItemDetailPage saleItems={saleItems} user={user}/>} />

        {/* additional Routes... */}
        {/* <Route path="/*" element={<Navigate to="/" />} /> */}
      </Routes>
    </main>
  );
}
