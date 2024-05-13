import { useState } from "react";
import AuthPage from "../AuthPage/AuthPage";
export default function HomePage({user, setUser}) {
  const [auth, setAuth] = useState(false); 
  
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