import React from 'react';
import {
	SiTwitter,
  SiGithub,
  
} from 'react-icons/si';

function Hero() {
  return (
    <div >
    
            <div class="flex items-center space-x-3">
           
              <a href="https://github.com/jinxscript" target="_blank" rel="noreferrer" aria-label="GitHub Profile">
                <SiGithub className="w-6 h-6"/>
                <span class="sr-only">GitHub Profile</span>
              </a>
                
                <a href="https://twitter.com/jinxscript" target="_blank" rel="noreferrer" aria-label="Twitter Profile"><SiTwitter className="w-6 h-6"/></a>
            </div>
            <h4 class="text-3xl font-bold ">Hey👋, I'm <span class="text-blue-700 dark:text-white">JinxScript;</span> </h4>
          <br></br>
            <div className='text-slate-400	'>
                <li>🎓 First Year Computer Science and Software Engineering Student</li>
                <li> 💻 Aspiring Software Developer</li>
                <li> 📰Blogger Shmurk Magazine </li>
                <li> 🎥 Youtuber </li>
                <li> 🎵 Music Producer  </li>

            </div>
      
    </div>
  )
}

export default Hero;