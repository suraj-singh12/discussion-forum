import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserById } from '../utils/api';

function User() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUserById(userId).then((data) => {
      setUser(data);
    });
  }, [userId]);

  return (
    <div className="col-md-8">
      {user ? (
        <>
          <h1>User "{userId}"</h1>
          <p>Email: {user.email}</p>
          <p>First Name: {user.first_name}</p>
          <p>Last Name: {user.last_name}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default User;
