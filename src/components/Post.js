import React from 'react';
import { Link } from 'react-router-dom';

function Post({ post }) {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title"><Link to={`/post/${post.id}`}>{post.title}</Link>
        </h2>
        <p className="card-text">{post.content}</p>
        <Link to={`/user/${post.user_id}`} className="card-link">View User</Link>
      </div>
    </div>
  );
}

export default Post;
