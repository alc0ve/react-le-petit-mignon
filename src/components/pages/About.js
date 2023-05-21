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
      <h1>About Me</h1>
      <p>
        I am a radiologic technologist turned full-stack developer. I've worked with radiology for 5+ years, and am looking to do something different! My brother, who works in tech, inspired me to switch. I hope to learn more and gain many experiences in this next chapter!
      </p>
    </div>
  );
}
