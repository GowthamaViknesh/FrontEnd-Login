import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Resetpass = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://password-hnkb.onrender.com/forgotPass', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ email }),
    })
      .then((data) => {
        console.log(data, 'Reset link sent');
        alert(data.status);
      })
      .catch((error) => {
        console.log('Error:', error);
        alert('An error occurred. Please try again later.');
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Forget Password</h3>
        <input
          type='email'
          className='form-control'
          placeholder='Enter Email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className='btn btn-primary'>Submit</button>
        <p className='forgot-password text-right'>
          <Link to='/'>Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Resetpass;
