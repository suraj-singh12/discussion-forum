import React from 'react';

function Comment({ comment }) {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <p className="card-text">{comment.content}</p>
        <p className="card-text text-right">By {comment.id}</p>
      </div>
    </div>
  );
}

export default Comment;
