import React from 'react';
import { Link } from 'react-router-dom';

function Post({ post }) {
  return (
    <div className="card mb-4" style={{marginBottom: '5rem'}}>
      <div className="card-body">
        <h2 className="card-title"><Link to={`/post/${post.id}`} style={{color: '#551a8b !important', textDecoration: 'none'}}>{post.title}</Link>
        </h2>
        <p className="card-text">{post.content}</p>
        <Link to={`/user/${post.id}`} className="card-link">View User</Link>
      </div>
    </div>
  );
}

export default Post;
