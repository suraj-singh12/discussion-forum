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
  return data.posts.find((post) => post.id === parseInt(postId));
};

export const fetchCommentsByPostId = async (postId) => {
  // Simulate an asynchronous request with a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  let p = data.comments.filter((comment) => comment.id === parseInt(postId));
  console.log('commentData: ', p)
//   return null;
  return p;
};

export const fetchUserById = async (userId) => {
  // Simulate an asynchronous request with a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return data.users.find((user) => user.id === userId);
};

let categories = [
    {id: 1, name:'Study'}, 
    {id: 2, name:'Science'}, 
    {id: 3, name:'Fiction'}, 
    {id: 4, name:'Technology'},
    {id: 5, name:'Coding'},
    {id: 6, name:'LLD'},
    {id: 7, name:'Development'}
]


export const fetchCategories = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return categories;
}

export const fetchPostsByCategory = async (categoryId) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return [data.posts.find((post) => post.id === parseInt(categoryId))];
    //  change the above logic after making changes in data for category!
}

export const fetchPostsByUser = async (userId) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // return [data.posts[0]];
    return [data.posts.find((post) => post.id === parseInt(userId))];
}