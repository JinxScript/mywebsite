import React from 'react';



function navBar() {
    return (
        <div className='Navebar'>
        
            <div className='Navbar-left'>
                <p className="hidden sm:flex sm:flex-row sm:gap-x-4">
                        <a href="/#" className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-gray-200 duration-100 hover:bg-zinc-800">Home</a>
                        <a href="/#skills" className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-gray-200 duration-100 hover:bg-zinc-800">Technologies</a>
                        <a href="/#projects" className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-gray-200 duration-100 hover:bg-zinc-800">Projects</a>
                 </p>
            </div>
      
        
      </div>
      
     
        
     

    )
  }


export default navBar;