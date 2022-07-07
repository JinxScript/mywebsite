import React from 'react';
import Profile from '../asserts/profile.jpg'
function projects() {
  return (
    

<div>
            <h1 className="text-5xl font-bold sm:text-4xl">Projects 💻</h1>
            <br></br>
            <br></br>
            <div className="grid grid-cols-1 auto-cols-max gap-1 sm:grid-cols-2 sm:gap-3">
            {/*Card*/}
            <a href="https://github.com/JinxScript/mywebsite" className="w-72 bg-slate-900 border rounded-lg border-gray-700 p-5 shadow hover:bg-gray-700 delay-100 duration-200">

            {/*Header*/} 
                <div className="flex flex-row">
                    <img src={Profile} className="w-10 h-10	rounded"  alt="image"/>
                    <p className="ml-3">
                      <span className="text-gray-500 font-semibold">JinxScript/</span>
                      <span className="text-gray-300 font-semibold">Personal-Portfolio</span>
                    </p>
                </div>

            {/*Content*/}
              <p className="text-xs text-gray-500 mt-3">
                A website built with Tailwinds Css and ReactJs...
              </p>

            </a>

    </div>
    </div>
  )
}

export default projects;