import React, { useState } from 'react';
import { validateEmail } from '../utils/helper';
//import background from '../../assets/img/hero-pattern.jpg';

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
  // <div style={{
  //       backgroundImage: `url(${background})`,
  //       backgroundRepeat: 'no-repeat',
  //       backgroundSize: 'cover',
  //       backgroundPosition: 'center',
  //     }}className='h-screen'>

    <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <div className='text-2xl text-black font-semibold'>Contact Me!</div>
      <br></br>
      <form>
        <div className='flex flex-col py-4 gap-2'>
        <label htmlFor="InputName" className="text-lg text-black font-semibold">Name</label>
        <input
          value={userName}
          name="Name"
          onChange={handleInputChange}
          type="text"
          className="rounded-md p-3 outline outline-offset-2 outline-cyan-500 text-base max-w-prose" 
          placeholder="Name"
        />
        </div>
        <div className='flex flex-col py-4 gap-2'>
        <label htmlFor="InputEmail" className="text-lg text-black font-semibold">Email address</label>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          className="rounded-md p-3 outline outline-offset-2 outline-cyan-500 text-base max-w-prose" 
          placeholder="name@example.com"
        />
        </div>
        <div className='flex flex-col py-4 gap-2'>
        <label htmlFor="InputMessage" className="text-lg text-black font-semibold">Message</label>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          className="rounded-md p-3 outline outline-offset-2 outline-cyan-500 text-base max-w-prose" 
          placeholder="What would you like to contact me about?"
        />
        </div>
        <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
   // </div>
  );
}
