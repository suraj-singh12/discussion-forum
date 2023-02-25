import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../components/Post';
import { fetchPostsByUser } from '../utils/api';

function UserDetail() {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);
//   console.log(userId)
  useEffect(() => {
    fetchPostsByUser(userId).then((data) => {
      setPosts(data);
    });
  }, [userId]);

  return (
    <div className="col-md-8" style={{display: 'inline-block', backgroundColor: 'lightblue', width: '60%', float: 'right', marginTop: '2rem', padding: '2rem', marginRight: '1.4rem', marginBottom: '2rem'}}>
      {posts.length > 0 ? (
        <>
          <h1>Posts by User "{userId}"</h1>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </>
      ) : (
        <p>No posts found for this user.</p>
      )}
    </div>
  );
}

export default UserDetail;
