// const API_URL = 'https://example.com/api';

// export const fetchPosts = async () => {
//   const response = await fetch(`${API_URL}/posts`);
//   const data = await response.json();
//   return data;
// };

// export const fetchPostById = async (postId) => {
//   const response = await fetch(`${API_URL}/posts/${postId}`);
//   const data = await response.json();
//   return data;
// };

// export const fetchCommentsByPostId = async (postId) => {
//   const response = await fetch(`${API_URL}/posts/${postId}/comments`);
//   const data = await response.json();
//   return data;
// };

// export const fetchUserById = async (userId) => {
//   const response = await fetch(`${API_URL}/users/${userId}`);
//   const data = await response.json();
//   return data;
// };


import data from './data.json';

export const fetchPosts = async () => {
  // Simulate an asynchronous request with a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return data.posts;
};

export const fetchPostById = async (postId) => {
  // Simulate an asynchronous request with a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return data.posts.find((post) => post.id === postId);
};

export const fetchCommentsByPostId = async (postId) => {
  // Simulate an asynchronous request with a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return data.comments.filter((comment) => comment.post_id === postId);
};

export const fetchUserById = async (userId) => {
  // Simulate an asynchronous request with a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return data.users.find((user) => user.id === userId);
};
