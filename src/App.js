import React from 'react';
import Nav from './componets/navBar';
import Hero from './componets/hero';
import Technologies from './componets/technologies';
import Footer from './componets/footer';
import Projects from './componets/projects';

function App() {
  return (  
    
    <div class="text-white p-4 py-10 mx-auto mt-5 max-w-3xl">
          <div	 >
            <br></br>
               <Nav />
               <br></br>
                <Hero/> 
                <br></br>
                <Projects/>
                
                <br></br>
                <Technologies/>
                <Footer/>
          </div>
          </div>
  )
}
export default App;


