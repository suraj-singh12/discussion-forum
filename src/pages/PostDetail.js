import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../components/Comment';
import { fetchPostById } from '../utils/api';

function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchPostById(postId).then((data) => {
      setPost(data);
      setComments(data.comments);
    });
  }, [postId]);

  return (
    <div className="col-md-8">
      {post ? (
        <>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <h2>Comments</h2>
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PostDetail;
