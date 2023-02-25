import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <Sidebar categories={categories} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/category/:categoryId" component={Category} />
              <Route path="/post/:postId" component={PostDetail} />
              <Route path="/user/:userId" component={UserDetail} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
