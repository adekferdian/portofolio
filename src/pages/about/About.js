import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.css";
import Profile from "../../assets/img/profile/profile.webp";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import './about.css'
import { Typography } from '@material-ui/core'

const About = () => {
  return (
    <div id="about" style={{height: '100vh'}}>
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3" style={{paddingTop: 20, color: 'white'}}>About Me</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                {/* <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid /> */}
              </Row>
            </Col>
            <Col xs={12} md={6} style={{padding: 50}}>
              <Row className=" align-items-start p-2 my-details rounded">
                <Typography style={{fontSize: 25, letterSpacing: 2}}>
                  Hi there! I am <strong>&nbsp;Adek Ferdian</strong>
                </Typography>
                <br />
                <br />
                <Typography style={{fontSize: 18, letterSpacing: 1.5, fontFamily: 'poppins'}}>
                  A passionate programmer. I am an avid open source developer.
                  I love to be creative and inventive. I am very
                  eager to learn new technologies, and I am able
                  to be dependable enough in situation where
                  one requires to do so. My latest study
                  has strengthened my compentencies in
                  programming with Javascript and also improve
                  my communication skills to work with team at Hacktiv8.
                </Typography>
                <Typography>
                  <ul><Typography>My Stack: </Typography>
                    <li><Typography>React.js</Typography></li>
                    <li><Typography>React Native</Typography></li>
                    <li><Typography>Redux</Typography></li>
                    <li><Typography>Typescript</Typography></li>
                    <li><Typography>Express.js</Typography></li>
                    <li><Typography>Node.js</Typography></li>
                    <li><Typography>Vue.Js</Typography></li>
                    <li><Typography>Angular.Js</Typography></li>
                    <li><Typography>PostgreSQL</Typography></li>
                    <li><Typography>MongoDB</Typography></li>
                    <li><Typography>AWS</Typography></li>
                  </ul>

                </Typography>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
