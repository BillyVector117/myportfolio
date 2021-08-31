import { Typography } from '@material-ui/core'
import React from 'react'
import "./preProjects.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import project4 from "../assets/project4.png"
import project5 from "../assets/project5.png"
import project6 from "../assets/project6.png"
import Link from '@material-ui/core/Link';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Typist from 'react-typist';

const PreJs = ({ scrollPosition }) => {
    AOS.init();
    const technologies = [
        { id: 1, name: project1, alias: "Netflix Clone", git: "https://github.com/BillyVector117/react-Netflix-clone", demo: "https://client-netflix-app.herokuapp.com/register" },
        { id: 2, name: project2, alias: "Social Media", git: "https://github.com/BillyVector117/umbrella-social-media", demo: "https://umbrella-javascript.herokuapp.com/" },
        { id: 3, name: project3, alias: "Shopping cart", git: "https://github.com/BillyVector117/redux-shopping-car", demo: "https://redux-store-d4ea2.web.app/" },
        { id: 4, name: project4, alias: "JWT RES-API", git: "https://github.com/BillyVector117/rest-api-jwt-typescript-mongodb", demo: "https://github.com/BillyVector117/rest-api-jwt-typescript-mongodb" },
        { id: 5, name: project5, alias: "Academy GraphQL-API", git: "https://github.com/BillyVector117/api-graphql-mongodb-academy", demo: "https://api-graphql-mongodb-academy.herokuapp.com/" },
        { id: 6, name: project6, alias: "Expense Application", git: "https://github.com/BillyVector117/reactjs-expense-project", demo: "https://expense-list-react.web.app/login" },

    ]
    return (
        <div className="main7" /* data-aos="flip-up" data-aos-duration="2000" */>
            <span className="scrollPercentage">{Math.trunc(scrollPosition) + "%"}</span>
            <div className="within7">
                <div className="container7">
                    <Typography variant="h1" component="h2" className="techsTitle" style={{ fontSize: "4rem", fontWeight: "500" }}>
                    SOME LASTS PROJECTS <br />
                    <span className="visitText">(visit my GitHub for more)</span>
                    </Typography>
                    <div className="containerTechs7">
                        {
                            technologies.map((item) =>
                            (<div className="itemTechs7" key={item.id}>
                                <img className="imageTech7" src={item.name} alt={item.id} />
                                <Typography variant="h6" component="h6" className="textInHoverImage" style={{ fontWeight: "500" }}>
                                    <Link style={{ color: "#00edff", textDecoration: "none" }} href={item.demo} target="_blank" rel="noreferrer">
                                        GO TO DEMO <OpenInNewIcon />
                                    </Link>
                                </Typography> 
                                <Typist cursor={{ show: false }}>
                                    <Typist.Delay ms={300} />
                                    <Typography variant="h5" component="h5" className="textTech7" style={{ fontWeight: "500" }}>
                                        <Link style={{ color: "#ffffff", textDecoration: "none" }} href={item.git} target="_blank" rel="noreferrer">
                                            {item.alias} <OpenInNewIcon />
                                        </Link>
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
