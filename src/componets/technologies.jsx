import React from 'react';
import {
	SiGit,
	SiGithub,
	SiJava,
	SiReact,
	SiCplusplus,
	SiTailwindcss,

//	SiTwitter,
	
} from 'react-icons/si';

function technologies() {
  return (
    <div className='technologies'>
      
        
     

      <div className="space-y-7">
				<h1 className="text-2xl font-bold sm:text-3xl">Technologies 💻</h1>

					<ul className="grid grid-cols-3 gap-4 sm:grid-cols-4 ">	
							<li className="flex space-x-2">
								<span><SiReact /> </span>
								<span>React.Js</span>
							</li>
							<li className="flex space-x-2">
								<span><SiGithub text="GitHub" /></span>
								<span>GitHub</span>
							</li>
							<li className="flex space-x-2">	
								<span><SiJava text="Java" /></span><span>Java</span>
								
							</li>
							<li className="flex space-x-2">
								<span><SiTailwindcss text="TailwindCSS" /></span>
								<span>TailwindCSS</span>
							</li>
							<li className="flex space-x-2">	
								<span><SiGit text="Git" /></span>
								<span>Git</span>
							</li>
							
							<li className="flex space-x-2">
								<span><SiCplusplus text="Cpp" /></span>
								<span>C++</span>
							</li>

				
					</ul>
			</div>
    </div>
  )
}

export default technologies;