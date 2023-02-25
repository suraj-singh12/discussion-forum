import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../components/Post';
import { fetchPostsByCategory } from '../utils/api';

function Category() {
  const { categoryId } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPostsByCategory(categoryId).then((data) => {
      setPosts(data);
    });
  }, [categoryId]);

  return (
    <div className="col-md-8">
      {posts.length > 0 ? (
        <>
          <h1>Posts in Category "{categoryId}"</h1>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </>
      ) : (
        <p>No posts found in this category.</p>
      )}
    </div>
  );
}

export default Category;
