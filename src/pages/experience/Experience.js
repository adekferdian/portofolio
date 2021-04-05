import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/accenture-3.svg";
import Tilt from "react-tilt";
import "./experience.css";
import { Typography } from "@material-ui/core";

const Experience = () => {
  return (
    <div>
      <div id="experience" style={{height: '100vh'}}>
        <h1 className="pt-3 text-center font-details pb-3" style={{paddingTop: 20,marginBottom: 30, color: 'white'}}>My Experience</h1>
        <Jumbotron className="jumbo-style" style={{width: '70%', margin: 'auto'}}>
          <Container>
            <Tilt options={{ max: 10, }}>
              <Card>
                <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                  <Typography style={{fontFamily: 'poppins', fontSize: 'bold', fontSize: 20}}>PT. PRO SIGMAKA MANDIRI</Typography>
                </Card.Header>
                <Card.Body className="d-flex justify-content-center flex-column">
                  <div>
                    <p style={{fontFamily: 'poppins'}}>as</p>
                    <Card.Title className="text-center" style={{fontFamily: 'poppins'}}>React JS Developer</Card.Title>
                  </div>
                  <div>
                    <Card.Text className="text-center style">
                      <br />
                      <strong>Technology:</strong> React JS, Bootstrap 3, Material UI, NPM Packages
                      <br />
                      <strong>Duration:</strong> Des 2020 - Present
                      <br/>
                      <strong> Description: </strong>
                      <ul className="text-left">
                        <li><strong>Developed </strong> Application WebAdmin for admin to manage all tasks</li>
                        <li><strong>Developed </strong> Application Kiosk for user or patient for on-site reservation</li>
                        <li><strong>Performed</strong> CRUD operations on multiple databases to load/ remove data according 
                        to the business requirements.</li>
                      </ul>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Tilt>
          </Container>
        </Jumbotron>
        <hr style={{width: '90%', margin: 'auto', marginTop: 30, marginBottom: 30}} />
        <Jumbotron className="jumbo-style" style={{width: '70%', margin: 'auto'}}>
          <Container>
            <Tilt options={{ max: 10 }}>
              <Card>
                <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                  <Typography style={{fontFamily: 'poppins', fontSize: 'bold', fontSize: 20}}>PT. PERMATA CIPTA SOLUSINDO</Typography>
                </Card.Header>
                <Card.Body className="d-flex justify-content-center flex-column">
                  <div>
                    <p style={{fontFamily: 'poppins'}}>as</p>
                    <Card.Title className="text-center" style={{fontFamily: 'poppins'}}>Fullstack Developer</Card.Title>
                  </div>
                  <div>
                    <Card.Text className="text-center style">
                      <br />
                      <strong>Technology:</strong> Node JS, Express JS, React JS, Vue JS, My-SQL, PostgreSQL, Bootstrap 3
                      <br />
                      <strong>Duration:</strong> Des 2018 - Des 2019
                      <br/>
                      <strong> Description: </strong>
                      <ul className="text-left">
                        <li><strong>Developed &amp; enhanced</strong> multiple features with customizability option across web application.</li>
                        <li><strong>Provided</strong> application maintenance while working as `Production Support`. 
                        </li>
                        <li><strong>Performed</strong> CRUD operations on multiple databases to load/ remove data according 
                        to the business requirements.</li>
                      </ul>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Tilt>
          </Container>
        </Jumbotron>
      </div>
    </div>
  );
};

export default Experience;
