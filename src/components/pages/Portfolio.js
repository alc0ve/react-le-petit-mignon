import React from 'react';
import Footer from "../Footer"

let codeCollab = '/assets/img/CodeCollabHomepage.png'
let hoppyTrails = '/assets/img/hoppy-trails.png';
let ideationApp = '/assets/img/ideation-app-gen.png';
let noteTaker = '/assets/img/note-taker-express.png';
let passwordGen = '/assets/img/password-generator.png';
let weatherApp = '/assets/img/weatherapp.png';
let dailyPlanner = '/assets/img/daily-planner.png';

export default function Portfolio() {
  return (
    <div className='flex flex-col min-h-screen'>

      <div className="max-w-[1040px] m-auto md:pl-20 p-3 py-16">
        <div className="text-2xl text-black font-semibold my-3">Portfolio</div>

        <div className="flex flex-wrap -mx-1 lg:-mx-4">

          {/* CodeCollab */}
          {/* column */}
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            {/* card */}
            <div className="m-2 py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg sm:py-2 sm:flex sm:flex-col sm:items-center sm:space-y-4 sm:space-x-4">
              <h4 className="text-xl text-black font-semibold my-3">CodeCollab</h4>
              <img className="block mx-auto h-auto rounded-xl border-2 border-slate-300 p-2" src={process.env.PUBLIC_URL + codeCollab} alt="CodeCollab"></img>
              <div className="items-center px-1">
                <p className="text-sm">
                  This is a blog for bootcampers to share information that can be useful for other developers.
                </p>
                <ul className="list-outside flex flex-col items-center space-y-2">
                  <li className="flex">
                    <a href="https://codecollab-for-developers.herokuapp.com/" className="px-3 py-2 text text-cyan-500 font-semibold hover:text-white hover:bg-cyan-500 hover:border-transparent hover:rounded-lg focus:outline-none focus:rin focus:ring-cyan-600 focus:ring-offset-2"
                      target="_blank" rel="noopener noreferrer">
                      Live Site</a>
                  </li>
                  <li className="flex">
                    <a href="https://github.com/blairrrrwho/codecollab" className="px-3 py-2 text text-cyan-500 font-semibold hover:text-white hover:bg-cyan-500 hover:border-transparent hover:rounded-lg focus:outline-none focus:rin focus:ring-cyan-600 focus:ring-offset-2"
                      target="_blank" rel="noopener noreferrer">
                      GitHub</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Brewery Finder */}
          {/* column */}
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            {/* card */}
            <div className="m-2 py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg sm:py-2 sm:flex sm:flex-col sm:items-center sm:space-y-4 sm:space-x-4">
              <h4 className="text-xl text-black font-semibold my-3">Hoppy Trails</h4>
              <img className="block mx-auto h-auto rounded-xl border-2 border-slate-300 p-2" src={process.env.PUBLIC_URL + hoppyTrails} alt="Hoppy Trails"></img>
              <div className="items-center px-1">
                <p className="text-sm">
                  This application will guide avid beer drinkers to find a new brewery in every state.
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
          </div>

          {/* Ideation: App Generator */}
          {/* column */}
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            {/* card */}
            <div className="m-2 py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg sm:py-2 sm:flex sm:flex-col sm:items-center sm:space-y-4 sm:space-x-4">
              <h4 className="text-xl text-black font-semibold my-3">Ideation</h4>
              <img className="block mx-auto h-auto rounded-xl border-2 border-slate-300 p-2" src={process.env.PUBLIC_URL + ideationApp}
                alt="Ideation"></img>
              <div className="items-center px-1">
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
          </div>

          {/* Note Taker Express.js */}
          {/* column */}
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            {/* card */}
            <div className="m-2 py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg sm:py-2 sm:flex sm:flex-col sm:items-center sm:space-y-4 sm:space-x-4">
              <h4 className="text-xl text-black font-semibold my-3">Note Taker</h4>
              <img className="block mx-auto h-auto rounded-xl border-2 border-slate-300 p-2" src={process.env.PUBLIC_URL + noteTaker}
                alt="Note Taker"></img>
              <div className="items-center px-1">
                <p className="text-sm">
                  This application is used to write and save notes for whatever your needs are.
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

          {/* Password Generator */}
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            {/* card */}
            <div className="m-2 py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg sm:py-2 sm:flex sm:flex-col sm:items-center sm:space-y-4 sm:space-x-4">
              <h4 className="text-xl text-black font-semibold my-3">Password Generator</h4>
              <img className="block mx-auto h-auto rounded-xl border-2 border-slate-300 p-2" src={process.env.PUBLIC_URL + passwordGen}
                alt="Password Generator"></img>
              <div className="items-center px-1">
                <p className="text-sm">
                  This application generates random passwords between 8-128 characters.
                </p>
                <ul className="list-outside flex flex-col items-center space-y-2">
                  <li className="flex">
                    <a href="https://alc0ve.github.io/secure-zombie/" className="px-3 py-2 text text-cyan-500 font-semibold hover:text-white hover:bg-cyan-500 hover:border-transparent hover:rounded-lg focus:outline-none focus:rin focus:ring-cyan-600 focus:ring-offset-2"
                      target="_blank" rel="noopener noreferrer">
                      Live Site</a>
                  </li>
                  <li className="flex">
                    <a href="https://github.com/alc0ve/secure-zombie" className="px-3 py-2 text text-cyan-500 font-semibold hover:text-white hover:bg-cyan-500 hover:border-transparent hover:rounded-lg focus:outline-none focus:rin focus:ring-cyan-600 focus:ring-offset-2"
                      target="_blank" rel="noopener noreferrer">
                      GitHub</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Weather App */}
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            {/* card */}
            <div className="m-2 py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg sm:py-2 sm:flex sm:flex-col sm:items-center sm:space-y-4 sm:space-x-4">
              <h4 className="text-xl text-black font-semibold my-3">Weather App</h4>
              <img className="block mx-auto h-auto rounded-xl border-2 border-slate-300 p-2" src={process.env.PUBLIC_URL + weatherApp}
                alt="Weather App"></img>
              <div className="items-center px-1">
                <p className="text-sm">
                  This application will pull weather data for any city entered in the search bar.
                </p>
                <ul className="list-outside flex flex-col items-center space-y-2">
                  <li className="flex">
                    <a href="https://alc0ve.github.io/weather-app/" className="px-3 py-2 text text-cyan-500 font-semibold hover:text-white hover:bg-cyan-500 hover:border-transparent hover:rounded-lg focus:outline-none focus:rin focus:ring-cyan-600 focus:ring-offset-2"
                      target="_blank" rel="noopener noreferrer">
                      Live Site</a>
                  </li>
                  <li className="flex">
                    <a href="https://github.com/alc0ve/weather-app" className="px-3 py-2 text text-cyan-500 font-semibold hover:text-white hover:bg-cyan-500 hover:border-transparent hover:rounded-lg focus:outline-none focus:rin focus:ring-cyan-600 focus:ring-offset-2"
                      target="_blank" rel="noopener noreferrer">
                      GitHub</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Work Day Scheduler */}
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            {/* card */}
            <div className="m-2 py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg sm:py-2 sm:flex sm:flex-col sm:items-center sm:space-y-4 sm:space-x-4">
              <h4 className="text-xl text-black font-semibold my-3">Work Day Scheduler</h4>
              <img className="block mx-auto h-auto rounded-xl border-2 border-slate-300 p-2" src={process.env.PUBLIC_URL + dailyPlanner}
                alt="Daily Planner"></img>
              <div className="items-center px-1">
                <p className="text-sm">
                  A 9-5 planner used to jot down important tasks during those hours of the day.
                </p>
                <ul className="list-outside flex flex-col items-center space-y-2">
                  <li className="flex">
                    <a href="https://alc0ve.github.io/daily-planner/" className="px-3 py-2 text text-cyan-500 font-semibold hover:text-white hover:bg-cyan-500 hover:border-transparent hover:rounded-lg focus:outline-none focus:rin focus:ring-cyan-600 focus:ring-offset-2"
                      target="_blank" rel="noopener noreferrer">
                      Live Site</a>
                  </li>
                  <li className="flex">
                    <a href="https://github.com/alc0ve/daily-planner" className="px-3 py-2 text text-cyan-500 font-semibold hover:text-white hover:bg-cyan-500 hover:border-transparent hover:rounded-lg focus:outline-none focus:rin focus:ring-cyan-600 focus:ring-offset-2"
                      target="_blank" rel="noopener noreferrer">
                      GitHub</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>


        </div>

      </div>
      <Footer />
    </div>

  );
}
