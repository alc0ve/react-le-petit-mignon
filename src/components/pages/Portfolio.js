import React from 'react';
import background from '../../assets/img/hero-pattern.jpg';
import hoppyTrails from '../../assets/img/hoppy-trails.png';

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

              {/* Brewery Finder */}
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="relative flex flex-col items-center justify-center h-auto w-1/3 rounded border-double border-4 border-cyan-600">
                <h4 className="text-2xl text-black font-semibold my-3">Hoppy Trails</h4>
                    <img className="block mx-auto h-auto rounded p-2" src={process.env.PUBLIC_URL + hoppyTrails}
                      alt="Hoppy Trails"></img>
                      <div className="items-center px-8">
                        <p className="text-sm">
                         This application will guide and solve avid beer drinks that like to travel, or even stay at home to find a brewery in the user's state!
                        </p>
                        <ul className="list-outside flex flex-col items-center space-y-2">
                          <li className="flex">
                            <a href="https://brianlucy.github.io/ImThirsty/" className="px-3 py-2 text-sm text-cyan-500 font-semibold hover:text-white hover:bg-cyan-600 hover:border-transparent hover:rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2"
                              target="_blank" rel="noopener noreferrer">
                              Live Site</a>
                          </li>
                          <li className="flex">
                            <a href="https://github.com/BrianLucy/ImThirsty" className="px-3 py-2 text-sm text-cyan-500 font-semibold hover:text-white hover:bg-cyan-600 hover:border-transparent hover:rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2"
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
