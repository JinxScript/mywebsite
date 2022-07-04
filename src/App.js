import React from 'react';
import Nav from './componets/navBar';
import Hero from './componets/hero';
import Technologies from './componets/technologies';
import Footer from './componets/footer';

function App() {
  return (  
    
    <div class="px-2 sm:px-8 md:px-24 lg:px-48 xl:px-72 text-white">
          <div	 >
            <br></br>
               <Nav />
               <br></br>
                <Hero/> 
                <br></br>
                <Technologies/>
                <Footer/>
          </div>
          </div>
  )
}
export default App;


