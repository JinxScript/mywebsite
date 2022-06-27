import React from 'react';
import {
	SiGit,
	SiGithub,
	SiJava,
	SiReact,
	SiCplusplus,
	SiStyledcomponents as SiStyledComponents,
	SiTailwindcss,

//	SiTwitter,
	
} from 'react-icons/si';

function technologies() {
  return (
    <div className='technologies'>
      
        
     

      <div className="space-y-7">
				<h1 className="text-2xl font-bold sm:text-3xl">Technologies 💻</h1>

				<ul className="grid grid-cols-3 gap-4 sm:grid-cols-4 ">
          <SiReact text="React.js"/>
          <SiGithub text="GitHub" />
					<SiJava text="Java" />
					<SiTailwindcss text="TailwindCSS" />
					<SiGit text="Git" />
          <SiCplusplus text="Cpp" />
					<SiStyledComponents text="styled-components" />
			
				</ul>
			</div>
    </div>
  )
}

export default technologies;