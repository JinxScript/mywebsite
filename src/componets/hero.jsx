import React from 'react';
import {
	SiTwitter,
  SiGithub,
  
} from 'react-icons/si';

function Hero() {
  return (
    <div >
    
            <div className="flex items-center space-x-3">
           
              <a href="https://github.com/jinxscript" target="_blank" rel="noreferrer" aria-label="GitHub Profile">
                <SiGithub className="w-6 h-6"/>
                <span className="sr-only">GitHub Profile</span>
              </a>
                
                <a href="https://twitter.com/jinxscript" target="_blank" rel="noreferrer" aria-label="Twitter Profile"><SiTwitter className="w-6 h-6"/></a>
            </div>
            <h1 className="text-5xl font-bold ">Hey👋, I'm <span>JinxScript;</span> </h1>
          <br></br>
            <div className='text-slate-400 text-2xl'>
              <ul className = "list-none">
                <li>🎓 First Year Computer Science and Software Engineering Student</li>
                <li> 💻 Aspiring Software Developer</li>
                <li> 📰Blogger Shmurk Magazine </li>
                <li> 🎥 Youtuber </li>
                <li> 🎵 Music Producer  </li>
             </ul>

            </div>
      
    </div>
  )
}

export default Hero;