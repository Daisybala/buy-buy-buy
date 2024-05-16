import { useState } from "react";
// import * as itemsAPI from '../../utilities/items-api';
// import AuthPage from "../AuthPage/AuthPage";
import ItemsList from "../../components/ItemsList/ItemsList";
import CategoryList from "../../components/CategoryList/CategoryList";
import "./ItemListPage.css";
export default function ItemListPage({user, setUser, activeCat, setActiveCat, saleItems, categoriesRef}) {
  // const [auth, setAuth] = useState(false); 
  // const [saleItems, setSaleItems] = useState([]);
  // const [activeCat, setActiveCat] = useState('');
  // const categoriesRef = useRef([]);

  // // The empty dependency array causes the effect
  // // to run ONLY after the FIRST render
  // useEffect(function() {
  //   async function getItems() {
  //     const items = await itemsAPI.getAll();
  //     categoriesRef.current = [...new Set(items.map(item => item.category.name))];
  //     setSaleItems(items);
  //     setActiveCat(categoriesRef.current[0]);
  //   }
  //   getItems();
  // }, []);
  
    return (
      <>
        <div className="nav-bar">
          <CategoryList
            categories={categoriesRef.current}
            activeCat={activeCat}
            setActiveCat={setActiveCat}
          />
        </div>

        <ItemsList saleItems={saleItems.filter(item => item.category.name === activeCat)}/>
      </>
    );
  }