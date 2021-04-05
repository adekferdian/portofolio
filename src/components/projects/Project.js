import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import instapin from '../../assets/instapin.PNG';
import entertainMe from '../../assets/entertainme.PNG';
import kiosk from '../../assets/kiosk.jpg';
import webadmin from '../../assets/img/webadmin.jpg';
import sugoku from '../../assets/sugoku.PNG';
import { Typography } from '@material-ui/core';

const Projects = () => {
    return (
        <div style={{height: '112vh', backgroundImage: 'linear-gradient(to right, #434343 0%, black 100%)'}}>
            <Typography style={{fontSize: 25, fontFamily: 'poppins', color: 'white', marginBottom: 30, paddingTop: 20}}>Some of My Best Projects</Typography>
            <div style={{height: '80vh', width: '90vw', margin: 'auto'}}>
                <Carousel autoPlay={true} interval={10000} infiniteLoop={true} showIndicators={true} showThumbs={false} showArrows={true}>
                    <div style={{height: '80vh'}}>
                        <img src={webadmin} />
                        <p className="legend" style={{width: '10%', margin: 'auto'}}>WebAdmin</p>
                        <Typography style={{color: 'white'}}>Application for admin hospital to control all tasks</Typography>
                    </div>
                    <div style={{height: '80vh'}}>
                        <img src={kiosk} />
                        <p className="legend" style={{width: '10%', margin: 'auto'}}>Kiosk</p>
                        <Typography style={{color: 'white'}}>Application for users/patients hospital for on-site reservation</Typography>
                    </div>
                    <div style={{height: '80vh'}}>
                        <img src={instapin} style={{height: '95vh'}} />
                        <p className="legend" style={{width: '10%', margin: 'auto'}}>InstaPin</p>
                        <Typography style={{color: 'white'}}>A Pinterest like website that allows You to manage and add favorite Instagram Stories or IGTV.</Typography>
                    </div>
                    <div style={{height: '80vh'}}>
                        <img src={entertainMe} style={{height: '95vh'}}/>
                        <p className="legend" style={{width: '10%', margin: 'auto'}}>EntertainMe</p>
                        <Typography style={{color: 'white'}}>A simple application for watching movies/series</Typography>
                    </div>
                    <div style={{height: '100vh'}}>
                        <img src={sugoku} style={{backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '95vh', width: '50%'}}/>
                        <p className="legend" style={{width: '10%', margin: 'auto'}}>Sugoku</p>
                        <Typography style={{color: 'white'}}>A simple game for mobile</Typography>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Projects