import React from 'react';
import background from '../../assets/img/hero-pattern.jpg';

export default function Home() {
  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}className='h-screen'>
      <h1>Christina Hall</h1>
      <p>
        I am a Developer.
      </p>
    </div>
  );
}
