import { useState } from "react";
import AuthPage from "../AuthPage/AuthPage";

export default function HomePage({user, setuser}) {
  const [auth, setAuth] = useState(false); 
  return (
    <>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGqTYg6Ezrz9ggsCsBzduvRHINypBNSH036A&s" alt="" />
    </>
  );
}