import { useState, useEffect, useRef } from "react";
import * as itemsAPI from '../../utilities/items-api';
import AuthPage from "../AuthPage/AuthPage";
export default function HomePage({user, setUser}) {
  const [auth, setAuth] = useState(false); 
  const [menuItems, setMenuItems] = useState([]);
  const categoriesRef = useRef([]);

  // The empty dependency array causes the effect
  // to run ONLY after the FIRST render
  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      // categoriesRef.current = [...new Set(items.map(item => item.category.name))];
      setMenuItems(items);
    }
    getItems();
  }, []);
  
    return (
      <>
        <h1>HomeyPage</h1>
        {!user&&<button onClick={() => setAuth(!auth)}>Login/Sign Up</button>}
        {
          auth
            ? <AuthPage setAuth={setAuth} user={user} setUser={setUser} />
            : <div>
              <p>Welcome</p>
            </div>

        }
      </>
    );
  }