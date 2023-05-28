import React from 'react';
import Footer from "../Footer"

export default function Resume() {
  return (
    <>
    <div className='h-screen'>
      
      <div className="max-w-[1040px] m-auto md:pl-20 p-3 py-16">
      <div className="text-2xl text-black font-semibold my-3">Resume</div>
      {/* <div className="py-8 px-8 max-w-[1040px] m-auto space-y-2 flex sm:items-center sm:space-y-0 sm:space-x-6"> */}

    <p className="leading-loose">

<h1 className="text-xl">Skills:</h1>
      {/* Front-End Proficiencies */}
  <div className="flex flex-wrap">
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
    <div className="">
      <div className="p-4">
        <h3 className="text-lg font-bold">Front-End Proficiencies</h3>
        <ul className="mt-2">
          <li className="mb-1">HTML</li>
          <li className="mb-1">CSS</li>
          <li className="mb-1">JavaScript ES6+</li>
          <li className="mb-1">jQuery</li>
          <li className="mb-1">Responsive/Mobile First Design</li>
          <li className="mb-1">React</li>
          <li className="mb-1">Tailwind, Bootstrap, Bulma</li>
        </ul>
      </div>
    </div>
  </div>
  {/* <!-- Back-End Prof --> */}
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
    <div className="">
      <div className="p-4">
        <h3 className="text-lg font-bold">Back-End Proficiencies</h3>
        <ul className="mt-2">
          <li className="mb-1">Web APIs, Third-Party APIs, Server-Side APIs, REST APIs</li>
          <li className="mb-1">Node.js</li>
          <li className="mb-1">Express.js</li>
          <li className="mb-1">MySQL, Sequelize</li>
          <li className="mb-1">MongoDB, Mongoose</li>
          <li className="mb-1">GraphQL</li>
        </ul>
      </div>
    </div>
  </div>
  {/* Full-Stack Proficiencies */}
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
    <div className="">
      <div className="p-4">
        <h3 className="text-lg font-bold">Full-Stack Proficiencies</h3>
        <ul className="mt-2">
          <li className="mb-1">MERN</li>
          <li className="mb-1"></li>
          <li className="mb-1"></li>
          <li className="mb-1"></li>
          <li className="mb-1"></li>
        </ul>
      </div>
    </div>
  </div>
  {/* Other */}
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
    <div className="">
      <div className="p-4">
        <h3 className="text-lg font-bold">Other</h3>
        <ul className="mt-2">
          <li className="mb-1">Git</li>
          <li className="mb-1">GitHub</li>
          <li className="mb-1">GitHub Pages</li>
          <li className="mb-1">Markdown</li>
          <li className="mb-1">Heroku</li>
          <li className="mb-1">NPM</li>
        </ul>
      </div>
    </div>
  </div>

</div>

      {/* <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <div className="">
      <h3 className="text-lg">Front-End Proficiencies</h3>
      <p className="text-md">
        HTML <br></br>
        CSS <br></br>
        JavaScript ES6+<br></br>
        jQuery <br></br>
        Responsive/Mobile First Design <br></br>
        React <br></br>
        Bootstrap, Tailwind, Bulma <br></br>
      </p> <br></br>
      </div>
      </div> */}

      {/* <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <h3>Back-End Proficiencies</h3>
      <p>
        Web APIs, Third-Party APIs, Server-Side APIs, REST APIs <br></br>
        Node.js <br></br>
        Express.js <br></br>
        MySQL, Sequelize <br></br>
        MongoDB, Mongoose <br></br>
        GraphQL <br></br>
      </p> <br></br>
      </div>

      <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <h3>Full-Stack Proficiencies</h3>
      <p>
        MERN
      </p> <br></br>
      </div>

      <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <h3>Other</h3>
      <p>
        Git <br></br>
        Markdown <br></br>
        GitHub Pages <br></br>
        Heroku <br></br>
        NPM <br></br>
      </p>
      </div> */}

        </p>

    </div>
    </div>
    {/* </div> */}
    <Footer />
    </>
  );
}
