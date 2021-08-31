import { Typography } from '@material-ui/core'
import React from 'react'
import "./preOthers.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import git from "../assets/git.png"
import ejs from "../assets/ejs.png"
import pug from "../assets/pug.svg"
import handlebars from "../assets/handlebars.png"
import firebaseAll from "../assets/firebaseAll.png"
import jquery from "../assets/jquery.png"
import Typist from 'react-typist';
const PreJs = ({ scrollPosition }) => {
    AOS.init();

    const technologies = [
        { id: 1, name: git, alias: "Git & GitHub" },
        { id: 3, name: handlebars, alias: "Handlebars (Template Engine)" },
        { id: 2, name: ejs, alias: "EJS (Template Engine)" },
        { id: 6, name: pug, alias: "PUG / Jade (Template Engine)" },
        { id: 4, name: firebaseAll, alias: "Firebase (Hosting, firestore, Authentication, Storage)" },
        { id: 5, name: jquery, alias: "jQuery" },

    ]
    return (
        <div className="main6" /* data-aos="fade-up-left" data-aos-duration="2000" */>
            <span className="scrollPercentage">{Math.trunc(scrollPosition) + "%"}</span>
            <div className="within6">
                <div className="container6">
                    <Typography variant="h4" component="h4" className="techsTitleOthers" style={{fontWeight: "500" }}>
                        OTHER USED TECHNOLOGIES
                    </Typography>
                    <div className="containerTechs6">
                        {
                            technologies.map((item) =>
                            (<div className="itemTechsOthers" key={item.id}>
                                <img className="imageTechOthers" src={item.name} alt={item.id} />
                                <Typist cursor={{ show: false }}>
                                    <Typist.Delay ms={300} />
                                    <Typography variant="h6" component="h6" className="textTechOthers" style={{ fontWeight: "500" }}>
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
