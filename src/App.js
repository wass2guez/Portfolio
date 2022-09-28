import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Navbar/Intro/Intro";
import Services from "./Components/Navbar/Services/Services";
import Experience from "./Components/Navbar/Experience/Experience";
import Work from "./Components/Navbar/Works/Work";
import Portfolio from "./Components/Navbar/Portfolio/Portfolio";
import Testimonials from "./Components/Navbar/Testimonials/Testimonials";
import Contact from "./Components/Navbar/Contact/Contact";
import Footer from "./Components/Navbar/Footer/Footer";
import {themeContext} from './Context'
import { useContext } from "react";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{background : darkMode? 'black' : '',
    color : darkMode? 'white' : '',
  }}
    >
      <Navbar/>
      <Intro/>
      <Services />
      <Experience/>
      <Work/>
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
