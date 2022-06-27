import React from 'react';
import Nav from './componets/navBar';
import Hero from './componets/hero';
import Contact from './componets/contact';
import Technologies from './componets/technologies';

function App() {
  return (  
    
    <div class="px-2 sm:px-8 md:px-24 lg:px-48 xl:px-72">
  
          <div className='px-8 	' >
               <Nav/>
                <Hero/>
                <Contact/>
                <Technologies/>
          </div>
          </div>
  )
}
export default App;


