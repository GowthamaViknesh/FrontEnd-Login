import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, pass);
    fetch('https://password-hnkb.onrender.com/login', {
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
        console.log(data, 'Login SuccessFull');
        if (data.status === 'ok') {
          alert('Login successfull');
          window.localStorage.setItem('token', data.data);
          window.localStorage.setItem('isLoggedin', true);
          window.location.href = '/userdetails';
        }
      })
      .catch((error) => {
        console.log('Error registering :', error);
      });
  };
  return (
    <form>
      <h3>Sign In</h3>

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

      <div className='mb-3'>
        <div className='custom-control custom-checkbox'>
          <input
            type='checkbox'
            className='custom-control-input'
            id='customCheck1'
          />
          <label className='custom-control-label' htmlFor='customCheck1'>
            Remember me
          </label>
        </div>
      </div>

      <div className='d-grid'>
        <button
          type='submit'
          className='btn btn-primary'
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <p className='forgot-password text-right'>
        Forgot <Link to='/Reset'>password?</Link>
      </p>
    </form>
  );
};

export default LoginPage;
