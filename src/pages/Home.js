import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Post from '../components/Post';
import { fetchPosts } from '../utils/api';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <div className="col-md-8">
      <h1>Latest Posts</h1>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      <div className="text-center">
      </div>
      <div className="text-center">
        <Link to="/category/1" className="btn btn-primary mt-4">View More</Link>
      </div>
    </div>
  );
}

export default Home;
