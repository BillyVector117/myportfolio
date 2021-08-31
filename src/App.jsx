import './App.css';
import Navbar from './components/Navbar';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import { useEffect, useRef, useState } from 'react';
import Presentation from './components/Presentation';
import Home from './components/Home';
import PreJs from './components/PreJs';
import PreWebTechs from './components/PreWebTechs';
import PreLibraries from './components/PreLibraries';
import PreDb from './components/PreDb';
import PreOthers from './components/PreOthers';
import PreProjects from './components/PreProjects';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
function App() {
  AOS.init();
  const [scrollPosition, setScrollPosition] = useState(0);
  const infiniteScroll = useRef(0)
  let convertPositionToPercentage;

  if (scrollPosition > 3700) {
    convertPositionToPercentage = 100
  } else {
    convertPositionToPercentage = scrollPosition * 100 / 3700 // 3637 is the height for content div (300rem)
  }
  useEffect(() => {
 
  }, []);
  const scrollEvent = () => {
    // const scrollY = window.scrollY // Don't get confused by what's scrolling - It's not the window
    const scrollTop = infiniteScroll.current.scrollTop
    setScrollPosition(scrollTop)
    // console.log(`onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`)
  }
  console.log("scrollPosition: ", scrollPosition, " is equal to: ", convertPositionToPercentage)
  return (

    <div className="App">
      <Navbar />
      <Container maxWidth="xl">
        <Typography component="div" className="mainContent" style={{ height: '90vh' }} >
          <div className="infiniteScroll" onScroll={scrollEvent} ref={infiniteScroll} style={{ height: "100%", overflow: "auto" }}>
            <div className="content" style={{ height: "300rem" }}>
              {
                scrollPosition < 300 && (
                  <div style={{ display: "block", position: "sticky", top: 0 }}><Home scrollPosition={convertPositionToPercentage} /></div>
                )
              }
              {
                scrollPosition > 300 && scrollPosition < 1000 && (
                  <div style={{ display: "block", position: "sticky", top: 0 }}><Presentation scrollPosition={convertPositionToPercentage} /></div>
                )
              }
              {
                scrollPosition > 1000 && scrollPosition < 1500 && (
                  <div style={{ display: "block", position: "sticky", top: 0 }}><PreJs scrollPosition={convertPositionToPercentage} /></div>
                )
              }
              {
                scrollPosition > 1500 && scrollPosition < 2000 && (
                  <div style={{ display: "block", position: "sticky", top: 0 }}><PreWebTechs scrollPosition={convertPositionToPercentage} /></div>
                )
              }
              {
                scrollPosition > 2000 && scrollPosition < 2500 && (
                  <div style={{ display: "block", position: "sticky", top: 0 }}><PreLibraries scrollPosition={convertPositionToPercentage} /></div>
                )
              }
              {
                scrollPosition > 2500 && scrollPosition < 3000 && (
                  <div style={{ display: "block", position: "sticky", top: 0 }}><PreDb scrollPosition={convertPositionToPercentage} /></div>
                )
              }
              {
                scrollPosition > 3000 && scrollPosition < 3500 && (
                  <div style={{ display: "block", position: "sticky", top: 0 }}><PreOthers scrollPosition={convertPositionToPercentage} /></div>
                )
              }
              {
                scrollPosition > 3500 && (
                  <div style={{ display: "block", position: "sticky", top: 0 }}><PreProjects scrollPosition={convertPositionToPercentage} /></div>
                )
              }
            </div>
          </div>

          {/*  <div style={{ display: "flex", alignContent: "space-between", height: "100%" }} className="flexbox">
            <div style={{ flexGrow: 1 }}>
              OK LOREM
            </div>
            <div style={{ flexGrow: 1 }}>
              OK LOREM 2
            </div>
          </div> */}

        </Typography>
      </Container>
    </div>
  );
}

export default App;
