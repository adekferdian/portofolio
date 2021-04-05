import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/accenture-3.svg";
import Tilt from "react-tilt";
import AboutMessage from "./AboutMessage";
import { CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Slider from '../../components/slider/Slider.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '@material-ui/core/Button';
import SwiperCore, { EffectFade } from 'swiper';
// import 'swiper/components/effect-fade/effect-fade.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
// import 'swiper/components/autoplay';
import tes from "../../assets/icons/html.png";
import tes1 from "../../assets/icons/css.png";
import tes2 from "../../assets/icons/vue.png";
import walpaper from '../../assets/img/5.jpg'
import me from '../../assets/img/11.png'

// SwiperCore.use([EffectFade]);
// import "./experience.css";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${walpaper})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
}))

const LandingPage = () => {
    const classes = useStyles()
    const style = {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      letterSpacing: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    };
    return (
    <div id="landingPage" style={{height: '100vh', display: 'flex', width: '100%'}} className={classes.root}>
      <div style={{width: '50%'}}>
        <AboutMessage />

      </div>
      <div style={{width: '40%', margin: 'auto'}}>
        <div style={{}}>
          <img src={me} style={{margin: 'auto', width: '100%'}} />
          {/* <Button style={style}>Message Me</Button>; */}
        </div>
      </div>
    </div>
    );
};

export default LandingPage;
