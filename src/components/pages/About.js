import React from 'react';
import background from '../../assets/img/hero-pattern.jpg';

export default function About() {
  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}className='h-screen'>
      <div className="max-w-[1040px] m-auto md:pl-20 p-3 py-16">
        <div className="text-2xl text-black font-semibold my-3">About Me</div>
        <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="src/assets/img/my-pic.png" alt="Me through AI art"/>
        <p className="">
        I am a radiologic technologist turned full-stack developer. I've worked with radiology for 5+ years, and am looking to do something different! My brother, who works in tech, inspired me to switch. I hope to learn more and gain many experiences in this next chapter!
        </p>
      </div>
    </div>
  );
}
