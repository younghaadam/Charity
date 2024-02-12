// import './App.css';
// import Navbar from './Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import Home from './Home';
// import Donate from './Donate';
// import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';







// function App() {
//   return (
//     <Router>  
//         <div className="App">
//             {/* <Home />
//             <Donate /> */}

//             <Switch>
//             <Route path='/'>
//                 <Home />
//             </Route>
//             <Route path='/donate'>
//               <Donate />
//             </Route>
//             </Switch>
      
//         </div>
//     </Router>
   
//   );
// }

// export default App;




// import './App.css';
// import Navbar from './Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Home from './Home';
// import Donate from './Donate';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         {/* <Navbar /> */}
        
//         <Route exact path="/" component={Home} />
//         <Route path="/donate" component={Donate} />
//       </div>
//     </Router>
//   );
// }

// export default App;




import './App.css';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './Home';
import Donate from './Donate';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './Gallery';


function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
