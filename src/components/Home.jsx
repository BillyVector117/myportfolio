import { Typography } from '@material-ui/core'
import React from 'react'
import "./home.css"
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Typist from 'react-typist';
const Home = ({ scrollPosition }) => {
    console.log("scroll position received!:; ", scrollPosition)
    return (
        <div className="main" data-aos="fade-up" data-aos-duration="2000">
            <Typist cursor={{ show: false }}>
                <Typist.Delay ms={7300} />
                {/*                 <span className="scrollPercentage">{Math.trunc(scrollPosition) + "%"}</span>
 */}            </Typist>

            <div className="within">
                <Typography variant="h1" component="h3" style={{ fontSize: "2.7rem", fontWeight: "500" }}>
                    <Typist cursor={{ show: false }}>
                        <Typist.Delay ms={1000} />
                        <span className="codeText">
                            Hello Coders!
                        </span>
                        <Typist.Backspace count={7} delay={1000} />
                        <Typist.Delay ms={300} />
                        <span className="codeText">
                            World!
                        </span>
                    </Typist>
                    <Typist cursor={{ show: false }}>
                        <Typist.Delay ms={5300} />
                        <span className="codeText">
                            this is...
                        </span>
                    </Typist>
                </Typography>
                <Typist cursor={{ show: false }}>
                    <Typist.Delay ms={6000} />
                    <Typography className="name" variant="h1" component="h2" style={{ fontSize: "6rem", fontWeight: "600" }}>
                        Billy R.M
                    </Typography>
                </Typist>
                <Typist cursor={{ show: false }}>
                    <Typist.Delay ms={7000} />
                    <div className="scroll-downs">
                        <div className="mousey">
                            <div className="scroller"></div>
                            <span className="scroll-down">Scroll Down</span>
                        </div>
                    </div>
                </Typist>
            </div>
        </div>
    )
}

export default Home
