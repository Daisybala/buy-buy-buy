import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import "./NavBar.css"

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>
    {user &&<nav className="main-nav-bar">
      <Link to="/">Home</Link>
      <Link to="/orders">Order History</Link>
      &nbsp;  &nbsp;
      <Link to="/posts">Bags</Link>
      &nbsp;&nbsp;
      <span>Welcome, {user&&user.name}</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>}
    </>
  );
}