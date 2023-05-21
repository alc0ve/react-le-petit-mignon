import React from 'react';
import background from '../../assets/img/hero-pattern.jpg';
import myPic from '../../assets/img/my-pic.png';

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
      <div className="py-8 px-8 max-w-[1040px] m-auto space-y-2 flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img className="block mx-auto h-64 rounded-full sm:mx-0" src={myPic} alt="Me through AI art"/>
        <p className="leading-loose">
        I am a radiologic technologist turned full-stack developer. I've worked with radiology for 5+ years, and am looking to do something different! My brother, who works in tech, inspired me to switch. I hope to learn more and gain many experiences in this next chapter!
        </p>
      </div>
    </div>
    </div>
  );
}
