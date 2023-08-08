import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, pass);
    fetch('https://password-hnkb.onrender.com/register', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ email, pass }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'error') {
          alert('Error');
        } else {
          console.log(data, 'Registration Successful');
          alert('Registration Successful');
          formRef.current.reset();
        }
      })
      .catch((Error) => {
        console.log('Error registering :', Error);
      });
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'></div>
        <form onSubmit={handleSubmit} ref={formRef}>
          <h3>Sign Up</h3>

          <div className='mb-3'>
            <label>Email address</label>
            <input
              type='email'
              className='form-control'
              placeholder='Enter email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='mb-3'>
            <label>Password</label>
            <input
              type='password'
              className='form-control'
              placeholder='Enter password'
              onChange={(e) => setPass(e.target.value)}
            />
          </div>

          <div className='d-grid'>
            <button type='submit' className='btn btn-primary'>
              Sign Up
            </button>
          </div>
          <p className='forgot-password text-right'>
            Already registered <Link to='./login'>sign in?</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
