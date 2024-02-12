import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';




const Navbar = () => {
  return (
    <div className='container'>
        <nav class="navbar navbar-expand-lg ">
              <div class="container-fluid">

                {/* <a class="navbar-brand giving" href="#">Giving</a> */}

                <Link to="/" className="navbar-brand giving">Giving</Link>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0" />
                    <li class="nav-item">

                      {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}

                      <Link to="/" className="nav-link active" aria-current="page">Home</Link>

                    </li>
                    <li class="nav-item">

                      {/* <a class="nav-link active" aria-current="page" href="#">Donate</a> */}

                      <Link to="/donate" className="nav-link active" aria-current="page">Donate</Link>

                    </li>
                    <li class="nav-item">

                      {/* <a class="nav-link active" aria-current="page" href="#">Gallery</a> */}

                      <Link to="/gallery" className="nav-link active" aria-current="page">Gallery</Link>
                    </li>
                    <li class="nav-item">
                      {/* <a class="nav-link active" aria-current="page" href="#">Contact</a> */}

                      <Link to="/contact" className="nav-link active" aria-current="page">Contact</Link>
                    </li>
                    <li class="nav-item">

                      {/* <a class="nav-link active" aria-current="page" href="#">About</a> */}

                      <Link to="/about" className="nav-link active" aria-current="page">About</Link>
                    </li>
                    
                    
                </div>
              </div>
          </nav>
    </div>
  )
}

export default Navbar













// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <div className='container'>
//       <nav className="navbar navbar-expand-lg">
//         <div className="container-fluid">
//           <Link to="/" className="navbar-brand giving">Giving</Link>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link to="/" className="nav-link active" aria-current="page">Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/donate" className="nav-link active" aria-current="page">Donate</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/gallery" className="nav-link active" aria-current="page">Gallery</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/contact" className="nav-link active" aria-current="page">Contact</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/about" className="nav-link active" aria-current="page">About</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;






























