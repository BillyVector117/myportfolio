import { Typography } from '@material-ui/core'
import React from 'react'
import "./preDb.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import firestore from "../assets/firestore.png"
import mongodb from "../assets/mongodb.png"
import sql from "../assets/sql.png"
import mariaDb from "../assets/mariadb.svg"
import Typist from 'react-typist';


const PreJs = ({ scrollPosition }) => {
    AOS.init();

    const technologies = [
        { id: 1, name: firestore, alias: "firestore" },
        { id: 2, name: mongodb, alias: "mongoDB" },
        { id: 3, name: sql, alias: "SQL Server" },
        { id: 4, name: mariaDb, alias: "mariaDB" },


    ]
    return (
        <div className="main5" /* data-aos="fade-up-right" data-aos-duration="2000" */>
            <span className="scrollPercentage">{Math.trunc(scrollPosition) + "%"}</span>
            <div className="within5">
                <div className="container5">
                    <Typography variant="h1" component="h2" className="techsTitle" style={{ fontSize: "4rem", fontWeight: "500" }}>
                        DATABASE (DBMS) EXPERIENCE
                    </Typography>
                    <div className="containerTechs5">
                        {
                            technologies.map((item) =>
                            (<div className="itemTechs" key={item.id}>
                                <img className="imageTech" src={item.name} alt={item.id} />
                                <Typist cursor={{ show: false }}>
                                    <Typist.Delay ms={300} />
                                    <Typography variant="h5" component="h5" className="textTech" style={{ fontSize: "3rem", fontWeight: "500" }}>
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
