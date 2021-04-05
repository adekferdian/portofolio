import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import Aos from 'aos';
import "aos/dist/aos.css";
import './navbar.css';
import lax from 'lax.js';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import walpaper from '../../assets/img/1.webp'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import SortIcon from '@material-ui/icons/Sort';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  AppBar: {
    background: 'transparent',
    minHeight: '3rem',
    placeContent: 'center',
  },
  icon: {
    color: 'white',
    fontSize: '2rem',
    cursor: 'pointer',
    '&:hover': {
      color: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    },
  },
  sosmed: {
    '&:hover': {
      color: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    },
  },
  sideNav: {
    position: 'absolute',
    height: '100vh',
    width: '100%',
    background: 'red',
    left: '-100%',
    top: '0',
    opacity: 1,
    transition: 'all 3.5s ease'
  },
  sideNavActive: {
    position: 'absolute',
    height: '100vh',
    width: '100%',
    background: 'lightblue',
    left: '0',
    top: '0',
    opacity: 1,
    zIndex: 1,
    transition: 'all 3.5s ease'
  }
}))

function MyNavbar() {
  const classes = useStyles()
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [positionY, setPositionY] = useState(null)
  const [namaDiv, setNamaDiv] = useState(null)
  // const [landing, setLanding] = useState(null)
  const [sideNav, setSideNav] = useState(false)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    Aos.init({duration: 2000})
    window.onload = () => {
      lax.init()
    
      lax.addDriver("scrollY", function () {
        return window.scrollY;
      });

      lax.addElements(
        ".tess",
        {
          scrollY: {
            opacity: [
              [0, 100],
              [1, 0]
            ]
          }
        },
        {
          style: {
            margin: 'auto',
            alignItems: 'center',
            transform: '200ms scale ease-in-out'
          }
        }
      );
      lax.addElements(
        ".navbar", 
        {
          scrollY: {
            translateX: [
              ['elInY', 'elCenterY', 'elOutY'],
              {
                500: [10, 20, 50], // Screen width < 500
                900: [30, 40, 60], // Screen width > 500 and < 900
                1400: [30, 40, 60], // Screen width > 900
              },
            ]
          }
        }
      )
    }
    window.addEventListener('scroll', () => {
      setPositionY(window.scrollY)
      if (window.scrollY > 110) {
        setSideNav(false)
      } 
    })
    window.addEventListener('resize', showButton);

    const navCheck = (entries) => {
      entries.forEach(entry => {
        const className = entry.target.className
        setNamaDiv(className)
        console.log(className);
        // const activeAnchor = document.querySelector(`[data-page=${className}]`)
      })
    }

    const options = {
      threshold: 0.7,
      transition: 'all 1s ease'
    }
    

    let observer = new IntersectionObserver(navCheck, options);

    const pages = document.querySelectorAll('section')
    console.log(pages);

    pages.forEach(page => {
      console.log(observer.observe(page));
    })
    
    return (
      window.removeEventListener('resize', showButton)
    )

    
  }, []);

  

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        {
          positionY <= 110 ?
            <AppBar data-aos="fade-right" data-aos="slide-down"  data-aos-easing="ease-in-out-cubic" data-aos-duration="500" className={classes.AppBar}>
              <div style={{display: 'flex', justifyContent: 'space-between', width: '90%', margin: 'auto',}}>
                <div style={{display: 'flex', justifyContent: 'space-between', width: '20%', placeItems: 'center', cursor: 'pointer'}}>
                  <a href="https://www.linkedin.com/in/adekferdian/">
                    <LinkedInIcon className='sosmed' />
                  </a>
                  <a href="https://github.com/adekferdian">
                    <GitHubIcon className='sosmed' />
                  </a>
                  <a href="https://twitter.com/adeekbarnes">
                    <TwitterIcon className='sosmed' />
                  </a>
                  <a href="https://web.facebook.com/adek.barnes">
                    <FacebookIcon className='sosmed' />
                  </a>
                  <a href="https://www.instagram.com/adekferdian/">
                    <InstagramIcon className='sosmed' />
                  </a>
                </div>
                <SortIcon style={{cursor: 'pointer'}} className='icon' onClick={() => !sideNav ? setSideNav(true) : setSideNav(false)} />
              </div>
            </AppBar>
            :
            <nav className='navbar' style={{opacity: 1, zIndex: 2}} data-aos="slide-down" data-aos-easing="ease-in-out-cubic" data-aos-duration="500">
              <div className='navbar-container container'>
                <Link to='home' smooth={true} duration={1000} className='navbar-logo' onClick={closeMobileMenu}>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'} style={{cursor: 'pointer'}}>
                  <li className='nav-item'>
                    <Link to='home' smooth={true} duration={1000} className='nav-links' onClick={closeMobileMenu}
                      style={{color: namaDiv === "landing" ? '#FF00BF' : 'white'}}
                    >
                      Home
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link
                      smooth={true} duration={1000}
                      to='about'
                      className='nav-links'
                      onClick={closeMobileMenu}
                      style={{color: namaDiv === "about" ? '#FF00BF' : 'white'}}
                    >
                      About
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link
                      smooth={true} duration={1000}
                      to='experience'
                      className='nav-links'
                      onClick={closeMobileMenu}
                      style={{color: namaDiv === "exp" ? '#FF00BF' : 'white'}}
                    >
                      Experience
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link
                      to='skills'
                      smooth={true} duration={1000}
                      className='nav-links'
                      onClick={closeMobileMenu}
                      style={{color: namaDiv === "skills" ? '#FF00BF' : 'white'}}
                    >
                      Skills
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link
                      to='projects'
                      smooth={true} duration={1000}
                      className='nav-links'
                      onClick={closeMobileMenu}
                      style={{color: namaDiv === "projects" ? '#FF00BF' : 'white'}}
                    >
                      Projects
                    </Link>
                  </li>
                  <li className='nav-btn'>
                    {button ? (
                      <Link to='/sign-up' className='btn-link'>
                        {/* <Button buttonStyle='btn--outline'>SIGN UP</Button> */}
                      </Link>
                    ) : (
                      <Link to='/sign-up' className='btn-link'>
                        {/* <Button
                          buttonStyle='btn--outline'
                          buttonSize='btn--mobile'
                          onClick={closeMobileMenu}
                        >
                          SIGN UP
                        </Button> */}
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
            </nav>
        }
        {
          sideNav ? 
          <div className={sideNav ? "sideNav aktif" : 'sideNav'}>
            <div className="links">
              <ul>
                <li>
                  <Link
                    smooth={true} duration={1000}
                    to='experience'
                    className='nav-links'
                    id="1"
                    style={{transition: '0.3s'}}
                    onClick={closeMobileMenu}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    smooth={true} duration={1000}
                    to='experience'
                    className='nav-links'
                    style={{transition: '1.3s'}}
                    id="2"
                    onClick={closeMobileMenu}
                  >
                    Experience
                  </Link>
                </li>
                <li>
                  <Link
                    smooth={true} duration={1000}
                    style={{transition: '2.3s'}}
                    to='experience'
                    className='nav-links'
                    id="3"
                    onClick={closeMobileMenu}
                  >
                    Skills
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          : <div className={sideNav ? "sideNav aktif" : 'sideNav'}>

          </div>
        }
      </IconContext.Provider>
    </>
  );
}

export default MyNavbar;
