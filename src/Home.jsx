import React from 'react'
import "./Home.css"
import Navbar from './Navbar';
import About from './About';




const Home = () => {
  return (
    <div className="home">
        <Navbar />  
       <div class="col-md-5">
          <h2 class="heading">Please Help <br />African Children <br />Give Them A <br /> Better Life.</h2>
          {/* <About /> */}

       </div>


    </div>
  )
}

export default Home