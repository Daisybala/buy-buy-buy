import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import "./NavBar.css"

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="main-nav-bar">
      <Link to="/">Home</Link>
      &nbsp;&nbsp;
      <Link to="/items">Bags</Link>
      &nbsp;&nbsp;
      {user?(
        <>
          <Link to="/orders">Order History</Link>
          &nbsp;&nbsp;
          <span>Welcome, {user&&user.name}</span>
          &nbsp;&nbsp;
          <Link to="" onClick={handleLogOut}>Log Out</Link>
          &nbsp;&nbsp;
          <Link to="/cart" className="cart-icon"><ion-icon name="cart-outline"></ion-icon></Link>
        </>
      ) : (
        <Link to="/Auth">Login/Sign Up</Link>
      )}
    </nav>
  )
}