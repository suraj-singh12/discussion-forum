import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../components/Comment';
import { fetchCommentsByPostId, fetchPostById } from '../utils/api';

function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchPostById(postId).then((data) => {
      setPost(data);
    });
    fetchCommentsByPostId(postId).then((data) => {
    setComments(data);
    console.log('comments data:', data)
    });
  }, [postId]);

  return (
    <div className="col-md-8" style={{display: 'inline-block', backgroundColor: 'lightblue', width: '60%', float: 'right', marginTop: '2rem', padding: '2rem', marginRight: '1.4rem', marginBottom: '2rem'}}>
      {post ? (
        <>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <h3 style={{marginTop: '5rem'}}>Comments</h3>
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
