import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { Paper } from '@material-ui/core';
import Image from "react-bootstrap/Image";
import walpaper from '../../assets/img/5.jpg'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// skills
import { skills } from "./skills-data";

import "./skills.css";

const Skills = () => {
  return (
    <div className="pt-3 pb-3" id="skills" style={{height: '100%', backgroundImage: `url(${walpaper})`, backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'}}>
      <h1 className="text-center font-details-b pb-4" style={{color: 'white', fontFamily: 'poppins'}}>Tech Skills</h1>
      <CardDeck>
        <Row className="d-flex justify-content-around" style={{display: 'flex', justifyContent: 'space-between', width: '90%', margin: 'auto'}}>
          {/* Frontend */}
          <Col md={4} style={{width: '20rem', alignSelf: 'center' }}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                {/* Frontend */}
                <Card.Title className="text-center  card-title" style={{color: 'white'}}>Frontend</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column" style={{borderRadius: 20, boxShadow: '5px 5px 10px 0 #999999', padding: '30px 20px 30px 20px'}}>
                  {skills.frontend.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', boxShadow: '10px'}}>
                        <div className="list" style={{display: 'flex', padding: '10px 10px'}}>
                          <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1" style={{width: 40, height: 40, alignSelf: 'start', placeContent: 'flex-start'}}></Image> 
                          <p className="skill" style={{color: 'white', alignSelf: 'center', paddingLeft: 20}}>{skill.skillName}</p>
                        </div>
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Backend */}
          <Col md={4} style={{width: '20rem'}}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title" style={{color: 'white'}}>Backend</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column" style={{borderRadius: 20, boxShadow: '5px 5px 10px 0 #999999', padding: '30px 20px 30px 20px'}}>
                  {skills.backend.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', boxShadow: '10px'}}>
                        <div className="list" style={{display: 'flex', padding: '10px 10px'}}>
                          <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> 
                          <p className="skill" style={{color: 'white', alignSelf: 'center', paddingLeft: 20}}>{skill.skillName}</p>
                        </div>
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Hosting Platforms */}
            <Card className="focus mt-2 mb-2 ">
              <Card.Body>
                <Card.Title className="text-center  card-title" style={{color: 'white'}}>Hosting</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column" style={{borderRadius: 20, boxShadow: '5px 5px 10px 0 #999999', padding: '30px 20px 30px 20px'}}>
                  {skills.hostingPlatforms.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', boxShadow: '10px'}}>
                        <div className="list" style={{display: 'flex', padding: '10px 10px'}}>
                          <Image className="gambar" src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> 
                          <p className="skill" style={{color: 'white', alignSelf: 'center', paddingLeft: 20}}>{skill.skillName}</p>
                        </div>
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Programming Languages */}
          <Col md={4} style={{width: '20rem'}}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title" style={{color: 'white'}}>Languages</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column" style={{borderRadius: 20, boxShadow: '5px 5px 10px 0 #999999', padding: '30px 20px 30px 20px'}}>
                  {skills.programmingLanguages.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', boxShadow: '10px'}}>
                        <div className="list" style={{display: 'flex', padding: '10px 10px',}}>
                          <Image className="gambar" src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> 
                          <p className="skill" style={{color: 'white', alignSelf: 'center', paddingLeft: 20}}>{skill.skillName}</p>
                        </div>
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Database */}

            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title" style={{color: 'white'}}>Database</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column" style={{borderRadius: 20, boxShadow: '5px 5px 10px 0 #999999', padding: '30px 20px 30px 20px'}}>
                  {skills.databases.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', boxShadow: '10px'}}>
                        <div className="list" style={{display: 'flex', padding: '10px 10px',}}>
                          <Image className="gambar" src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> 
                          <p className="skill" style={{color: 'white', alignSelf: 'center', paddingLeft: 20}}>{skill.skillName}</p>
                        </div>
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
            {/* Version Control */}

            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title" style={{color: 'white'}}>Version Control</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column" style={{borderRadius: 20, boxShadow: '5px 5px 10px 0 #999999', padding: '30px 20px 30px 20px'}}>
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href={skills.versionControl[0].link} target="_blank" rel="noopener noreferrer"  style={{textDecoration: 'none', boxShadow: '10px'}}>
                      <div className="list" style={{display: 'flex', padding: '10px 10px',}}>
                        <Image className="gambar" src={skills.versionControl[0].imgSrc} alt={skills.versionControl[0].imgAltText} rounded className="image-style m-1"></Image> 
                        <p className="skill" style={{color: 'white', alignSelf: 'center', paddingLeft: 20}}>{skills.versionControl[0].skillName}</p>
                      </div>
                    </a>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CardDeck>
    </div>
  );
};

export default Skills;
