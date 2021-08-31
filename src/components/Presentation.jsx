import { Typography } from '@material-ui/core'
import React from 'react'
import "./presentation.css"
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Typist from 'react-typist';
import programmer from '../assets/programmer.png';

const Presentation = ({ scrollPosition }) => {
    return (
        <div className="">

            <div className="main2" >
                <span className="scrollPercentage">{Math.trunc(scrollPosition) + "%"}</span>
                <div className="within2">
                    <div className="container">
                        <div className="left">
                            <img className="illustration" src={programmer} alt="illustration" />
                        </div>
                        <div className="right">
                            <Typist cursor={{ show: false }}>
                                <Typist.Delay ms={1000} />
                                <Typography className="presentationWords" variant="h6" component="h6" style={{ fontSize: "2.5rem", fontWeight: "500" }}>
                                    I'm a passionate fullstack web developer with experience in Javascript, NodeJS, ReactJS, MaterialUI and many others libraries and frameworks.
                                </Typography>
                            </Typist>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Presentation
