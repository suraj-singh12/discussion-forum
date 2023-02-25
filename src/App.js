import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Category from './pages/Category';
import PostDetail from './pages/PostDetail';
import UserDetail from './pages/UserDetail';
import { fetchCategories } from './utils/api';

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then((data) => {
      setCategories(data);
      // console.log(data)
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <Sidebar categories={categories} />
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route path="/category/:categoryId" element={<Category/>} />
              <Route path="/post/:postId" element={<PostDetail/>} />
              <Route path="/user/:userId" element={<UserDetail/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
