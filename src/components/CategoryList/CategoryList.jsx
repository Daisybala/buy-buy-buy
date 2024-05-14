import "./CategoryList.css";

export default function CategoryList({ categories, activeCat, setActiveCat }) {
    const cats = categories.map(cat =>
      <li
        key={cat}
        className={cat === activeCat ? 'active' : ''}
        onClick={() => setActiveCat(cat)}
      >
        {cat}
      </li>
    );
    return (
      <ul className="CategoryList">
        {cats}
      </ul>
    );
  }
  
//   export default function CategoryList() {
//     return(
//         <h1>categoryList</h1>
//     )
//   }