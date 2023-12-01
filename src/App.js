import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./index.css";
import { Element, animateScroll as scroll } from "react-scroll";
import Services from "./components/Services";

function App() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Router>
        <div className="App">
          <Navbar className="fixed" />
          <Element name="Home">
            <Home />
          </Element>
          <Element name="About">
            <About />
          </Element>
          <Element name="Contact">
            <Contact />
          </Element>
          <Element name="Services">
            <Services />
          </Element>
          <button onClick={scrollToTop}>Scroll to Top</button>
        </div>
      </Router>
    </>
  );
}

//   return (
//     <>
//       <Router>

//         <Routes>
//           <Route path="/" element="Home" />
//           <Route path="/services" element="Services" />
//           <Route path="/about" element="About" />
//           <Route path="/contact" element="Contact" />
//         </Routes>
//       </Router>
//     </>
//   );
// }

export default App;
