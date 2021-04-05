import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import lax from 'lax.js';
import "./home.css";
import Profile from "../../assets/img/profile/profile.webp";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import About from "../about/About";
import Experience from "../experience/Experience";
import Skills from "../skills/Skills";
import AboutMessage from "./AboutMessage";
import LandingPage from "./LandingPage";
import Projects from "../../components/projects/Project";

const Home = () => {
  useEffect(() => {
    window.onload = () => {
      lax.init()
    
      lax.addDriver("scrollY", function () {
        return window.scrollY;
      });

      lax.addElements(
        ".navbar-icon",
        {
          scrollY: {
            rotate: [
              [0, 1e9],
              [0, 1e9]
            ]
          }
        },
        []
      );
    }
  }, [])
  return (
    <div id="home" style={{height: '100vh'}}>
        <section className="landing">
          <LandingPage id="landing" />
        </section>
        <section className="about">
          <About id="about" />
        </section>
        <section className="exp">
          <Experience id="experience" />
        </section>
        <section className="skills">
          <Skills id="skills" />
        </section>
        <section className="projects">
          <Projects id="projects" />
        </section>
    </div>
  );
};

export default Home;
