import React from 'react';
import background from '../../assets/img/hero-pattern.jpg';
import hoppyTrails from '../../assets/img/hoppy-trails.png';
import ideationApp from '../../assets/img/ideation-app-gen.png';
import noteTaker from '../../assets/img/note-taker-express.png';

export default function Portfolio() {
  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}className='h-screen'>

<div className="max-w-[1040px] m-auto md:pl-20 p-3 py-16">
  <div className="text-2xl text-black font-semibold my-3">Portfolio</div>

   <div className="flex flex-wrap">
  
        {/* Brewery Finder */}
          <div className="m-2 py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg sm:py-2 sm:flex sm:flex-col sm:items-center sm:space-y-4 sm:space-x-4">
            <h4 className="text-xl text-black font-semibold my-2">Hoppy Trails</h4>
              <img className="block mx-auto h-auto rounded-xl border-2 border-slate-300 p-2" src={process.env.PUBLIC_URL + hoppyTrails} alt="Hoppy Trails"></img>
            <div className="items-center px-3 space-y-4">
                  <p className="text-sm">
                  This application will guide and solve avid beer drinks that like to travel, or even stay at home to find a brewery in the user's state!
                  </p>
              <ul className="list-outside flex flex-col items-center space-y-2">
                <li className="flex">
                  <a href="https://brianlucy.github.io/ImThirsty/" className="px-3 py-2 text text-cyan-500 font-semibold hover:text-white hover:bg-cyan-500 hover:border-transparent hover:rounded-lg focus:outline-none focus:rin focus:ring-cyan-600 focus:ring-offset-2"
                  target="_blank" rel="noopener noreferrer">
                    Live Site</a>
                </li>
                <li className="flex">
                  <a href="https://github.com/BrianLucy/ImThirsty" className="px-3 py-2 text text-cyan-500 font-semibold hover:text-white hover:bg-cyan-500 hover:border-transparent hover:rounded-lg focus:outline-none focus:rin focus:ring-cyan-600 focus:ring-offset-2"
                  target="_blank" rel="noopener noreferrer">
                    GitHub</a>
                </li>
              </ul>
            </div>
          </div>

        {/* Ideation: App Generator */}
          <div className="m-2 py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg sm:py-2 sm:flex sm:flex-col sm:items-center sm:space-y-4 sm:space-x-4">
            <h4 className="text-xl text-black font-semibold my-3">Ideation</h4>
              <img className="block mx-auto h-auto rounded-xl border-2 border-slate-300 p-2" src={process.env.PUBLIC_URL + ideationApp}
                      alt="Ideation"></img>
            <div className="items-center px-8">
                  <p className="text-sm">
                  This application will generate an app idea for anyone looking to create an app.
                  </p>
              <ul className="list-outside flex flex-col items-center space-y-2">
                <li className="flex">
                  <a href="https://ideation-app-generator.herokuapp.com/" className="px-3 py-2 text text-cyan-500 font-semibold hover:text-white hover:bg-cyan-500 hover:border-transparent hover:rounded-lg focus:outline-none focus:rin focus:ring-cyan-600 focus:ring-offset-2"
                  target="_blank" rel="noopener noreferrer">
                    Live Site</a>
                </li>
                <li className="flex">
                  <a href="https://github.com/alc0ve/automatic-fortnight-debuggers" className="px-3 py-2 text text-cyan-500 font-semibold hover:text-white hover:bg-cyan-500 hover:border-transparent hover:rounded-lg focus:outline-none focus:rin focus:ring-cyan-600 focus:ring-offset-2"
                  target="_blank" rel="noopener noreferrer">
                    GitHub</a>
                </li>
              </ul>
            </div>
          </div>

        {/* Note Taker Express.js */}
          <div className="m-2 py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg sm:py-2 sm:flex sm:flex-col sm:items-center sm:space-y-4 sm:space-x-4">
            <h4 className="text-xl text-black font-semibold my-3">Note Taker</h4>
              <img className="block mx-auto h-auto rounded-xl border-2 border-slate-300 p-2" src={process.env.PUBLIC_URL + noteTaker}
                      alt="Note Taker"></img>
            <div className="items-center px-8">
                  <p className="text-sm">
                  This application is used to write and save notes.
                  </p>
              <ul className="list-outside flex flex-col items-center space-y-2">
                <li className="flex">
                  <a href="https://damp-crag-05718.herokuapp.com/" className="px-3 py-2 text text-cyan-500 font-semibold hover:text-white hover:bg-cyan-500 hover:border-transparent hover:rounded-lg focus:outline-none focus:rin focus:ring-cyan-600 focus:ring-offset-2"
                  target="_blank" rel="noopener noreferrer">
                    Live Site</a>
                </li>
                <li className="flex">
                  <a href="https://github.com/alc0ve/note-taker" className="px-3 py-2 text text-cyan-500 font-semibold hover:text-white hover:bg-cyan-500 hover:border-transparent hover:rounded-lg focus:outline-none focus:rin focus:ring-cyan-600 focus:ring-offset-2"
                  target="_blank" rel="noopener noreferrer">
                    GitHub</a>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>

  );
}
