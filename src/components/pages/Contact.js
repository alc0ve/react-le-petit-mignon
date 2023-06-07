import React, { useState } from 'react';
import { ValidationError, useForm } from '@formspree/react';
// import { validateEmail } from '../utils/helper';
// import background from '../../assets/img/hero-pattern.jpg';
import Footer from "../Footer"

export default function Contact() {
  const [email, setEmail] = useState('');
  const [userName, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage] = useState('');
  const [state, handleSubmit] = useForm("mbjeejob");

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

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();

  //   if (!validateEmail(email)) {
  //     setErrorMessage('Email is invalid');
   
  //     return;
  //   }

  //   setName('');
  //   setMessage('');
  //   setEmail('');
  // };

  return (
    <>
  <div className='h-screen'>

    <div className='max-w-[1040px] m-auto md:pl-20 p-3 py-16'>
      <div className='text-2xl text-black font-semibold my-3'>Contact Me!</div>
      <br></br>
      <form onSubmit={ handleSubmit }>
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
        <ValidationError field="name" prefix="Name" errors={state.errors} />
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
        <ValidationError field="email" prefix="Email" errors={state.errors} />
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
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
        <button className="px-5 py-2 text-md bg-cyan-500 rounded-full text-white hover:bg-cyan-600 font-semibold hover:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2" type="submit" disabled={state.submitting}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{state.errors}</p>
        </div>
      )}
    </div>
   </div>
    <Footer />
    </>
  );
}
