import React, { useState } from 'react';
import { validateEmail } from '../utils/helper';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [userName, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {

    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'Name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
   
      return;
    }

    setName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div className='container'>
      <h1>Contact Me!</h1>
      <br></br>
      <form>
        <div className='mb-3'>
        <label htmlFor="InputName" className="form-label">Name</label>
        <input
          value={userName}
          name="Name"
          onChange={handleInputChange}
          type="text"
          className="form-control" 
          placeholder="name"
        />
        </div>
        <div className='mb-3'>
        <label htmlFor="InputEmail" className="form-label">Email address</label>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          className="form-control" 
          placeholder="name@example.com"
        />
        </div>
        <div className='mb-3'>
        <label htmlFor="InputMessage" className="form-label">What would you like to contact me about?</label>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          className="form-control" 
          placeholder="message"
          rows={"3"}
        />
        </div>
        <button className="btn btn-primary" type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
