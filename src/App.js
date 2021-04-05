import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './pages/about/About';
import Experience from './pages/experience/Experience';
import Skills from './pages/skills/Skills';
import Home from './pages/home/Home';
import Aos from 'aos';
import lax from 'lax.js';
import "aos/dist/aos.css";
import MyNavbar from './components/navbar/MyNavbar';
import AboutMessage from './pages/home/AboutMessage';
import Projects from './components/projects/Project';

function App() {
  const [visibleNavbar, setVisibleNavbar] = React.useState(null)
  useEffect(() => {
    Aos.init({duration: 2000})
    document.addEventListener('scroll', (e) => {
      setVisibleNavbar(window.scrollY)
    })
  }, [])
  return (
    <div className="App">
      <Router>
      <MyNavbar/>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/landing">
            <AboutMessage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/project">
            <Projects />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
