import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import HomePage from '../HomePage/HomePage';
import AuthPage from '../AuthPage/AuthPage';
import PostsPage from '../PostsPage/PostsPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<HomePage user={user} setUser={setUser} />} />
        <Route path="/posts" element={<PostsPage />} />

        {/* additional Routes... */}
        {/* <Route path="/*" element={<Navigate to="/" />} /> */}
      </Routes>
    </main>
  );
}
