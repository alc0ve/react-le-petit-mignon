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

<div className="max-w-[1040px] m-auto md:pl-20 p-3 py-16">
      <div className="text-2xl text-black font-semibold my-3">Christina Hall</div>
      <div className="py-8 px-8 max-w-[1040px] m-auto space-y-2 flex sm:items-center sm:space-y-0 sm:space-x-6">
        <p className="leading-loose">
          I am a Developer.
        </p>
      </div>
    </div>

    </div>
  );
}
