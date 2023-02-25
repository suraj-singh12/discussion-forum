import React from 'react';

function Comment({ comment }) {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <p className="card-text" style={{margin: '0'}}>{comment.content}</p>
        <p className="card-text text-right" style={{margin: '0'}}>By @{comment.id}</p>
        <p>------------------------------------------------------------------</p>
      </div>
    </div>
  );
}

export default Comment;
