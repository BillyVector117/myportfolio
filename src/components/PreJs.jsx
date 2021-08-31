import { Typography } from '@material-ui/core'
import React from 'react'
import "./preJs.css"
import 'aos/dist/aos.css'; // You can also use <link> for styles
import html from "../assets/html.png"
import css3 from "../assets/css3.png"
import js from "../assets/js.png"
import mongodb from "../assets/mongodb.png"
import node from "../assets/node.png"
import react from "../assets/react.png"
import Typist from 'react-typist';

const PreJs = ({ scrollPosition }) => {
    const technologies = [
        { id: 1, name: html, alias: "HTML" },
        { id: 2, name: css3, alias: "CSS3" },
        { id: 3, name: js, alias: "JavaScript" },
        { id: 5, name: node, alias: "NodeJS" },
        { id: 4, name: mongodb, alias: "mongodb" },
        { id: 6, name: react, alias: "ReactJS" },

    ]
    return (
            <div className="main3">
                <span className="scrollPercentage">{Math.trunc(scrollPosition) + "%"}</span>
                <div className="within3">
                    <div className="container3">
                        <Typography variant="h1" component="h2" className="techsTitle" style={{ fontWeight: "500" }}>
                            CORE TECHNOLOGIES
                        </Typography>
                        <div className="containerTechs">
                            {
                                technologies.map((item) =>
                                (<div className="itemTechs" key={item.id}>
                                    <img className="imageTech" src={item.name} alt={item.id} />
                                    <Typist cursor={{ show: false }}>
                                        <Typist.Delay ms={500} />
                                    <Typography variant="h5" component="h5" className="textTech" style={{ fontWeight: "500" }}>
                                        {item.alias}
                                    </Typography>
                                    </Typist>
                                </div>)
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default PreJs;
