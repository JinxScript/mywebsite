import React from 'react';
import {
	SiGit,
	SiGithub,
	SiJava,
	SiReact,
	SiCplusplus,
	SiTailwindcss,
	SiFigma

//	SiTwitter,
	
} from 'react-icons/si';

function technologies() {
  return (
    <div className='technologies'>
      
        
     

      <div className="space-y-7">
				<h1 className="text-5xl font-bold sm:text-4xl">Technologies 💻</h1>

					<ul className="grid grid-cols-3 gap-4 sm:grid-cols-4 ">	
							<li className="flex space-x-2">
								<span><SiReact className='h-6 w-6' /> </span>
								<span>React.Js</span>
							</li>
							<li className="flex space-x-2">
								<span><SiGithub className='h-6 w-6'/></span>
								<span>GitHub</span>
							</li>
							<li className="flex space-x-2">	
								<span><SiJava className='h-6 w-6' /></span><span>Java</span>
								
							</li>
							<li className="flex space-x-2">
								<span><SiTailwindcss className='h-6 w-6' /></span>
								<span>TailwindCSS</span>
							</li>
							<li className="flex space-x-2">	
								<span><SiGit className='h-6 w-6' text="Git" /></span>
								<span>Git</span>
							</li>
							
							<li className="flex space-x-2">						
								<span><SiCplusplus className='h-6 w-6' /> </span>
								<span >C++</span>
							</li>
							<li className="flex space-x-2">						
								<span><SiFigma className='h-6 w-6' /> </span>
								<span >Figma</span>
							</li>

					</ul>
			</div>
    </div>
  )
}

export default technologies;