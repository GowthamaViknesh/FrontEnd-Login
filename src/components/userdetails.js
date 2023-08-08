import React, { useState } from 'react';

const Userdetails = () => {
  const [email, setEmail] = useState('');
  console.log(email);
  const handleData = () => {
    fetch('https://login-backend-ftez.onrender.com/userData', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ token: window.localStorage.getItem('token') }),
    })
      .then((res) => res.json())
      .then((data) => {
        setEmail(data.data.email);
        if (data.data === 'Token Expired') {
          alert('Token Expired');
          window.localStorage.clear();
          window.location.href = './login';
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogout = () => {
    window.localStorage.clear();
    window.location.href = './login';
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='card'>
          <h3>Email: {email}</h3>
          <button onClick={handleData}>Show Data</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Userdetails;
