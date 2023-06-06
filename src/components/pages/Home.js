import React from 'react';
import Footer from "../Footer";
let myPic = '/assets/img/my-pic.png';


export default function Home() {
  return (
    <>
      <div className='h-screen'>

        <div className="max-w-[1040px] m-auto md:pl-20 p-3 py-16">
          <div className="text-2xl text-black font-semibold my-3">Christina Hall</div>
          <div className="py-8 px-8 max-w-[1040px] m-auto space-y-2 flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img className="block mx-auto h-80 rounded-full sm:mx-0" src={process.env.PUBLIC_URL + myPic} alt="Me through AI art" />
            <p className="leading-loose">
              I am a radiologic technologist turned full-stack developer. I've worked with radiology for 5+ years, and am excited to start doing something different. I am currently enrolled in the full-stack web development bootcamp at Georgia Institute of Technology, and I will be starting my job search with my new career as a Full-Stack Developer!  I hope to learn more and gain many experiences in this next chapter!
              <br></br>
              This site is my portfolio, built with react. By using the navbar, you will find a collection of projects I've completed, a resume section with the option to download my resume and a skills section, a contact form to send a message directly to my email, and various ways to get in contact with me - using the icons at the bottom.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
