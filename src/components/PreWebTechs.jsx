import { Typography } from '@material-ui/core'
import React from 'react'
import "./PreWebTechs.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import reactHooks from "../assets/reactHooks.png"
import express from "../assets/express.png"
import es6 from "../assets/es6.png"
import npm from "../assets/npm.png"
import ajax from "../assets/ajax.png"
import restApi from "../assets/rest-api.png"
import graphql from "../assets/graphql.png"
import php from "../assets/php.png"
import firebase from "../assets/firebase.png"
import jwt from "../assets/jwt.png"
import Typist from 'react-typist';

const PreJs = ({ scrollPosition }) => {
    AOS.init();

    const technologies = [
        { id: 1, name: reactHooks, alias: "React Hooks" },
        { id: 2, name: express, alias: "express JS" },
        { id: 4, name: ajax, alias: "AJAX" },
        { id: 5, name: restApi, alias: "REST / RESTFUL-API" },
        { id: 6, name: graphql, alias: "GraphQL" },
        { id: 7, name: jwt, alias: "JWT (JSON-WEB-TOKEN)" },
        { id: 8, name: es6, alias: "ES6+ - BABEL - WEBPACK" },
        { id: 9, name: firebase, alias: "Firebase" },
        { id: 3, name: npm, alias: "NPM" },
        { id: 10, name: php, alias: "PHP" },

    ]
    return (
        <div className="main4" >
            <span className="scrollPercentage">{Math.trunc(scrollPosition) + "%"}</span>
            <div className="within4">
                <div className="container4">
                    <Typography variant="h1" component="h2" className="techsTitle" style={{ fontSize: "4rem", fontWeight: "500" }}>
                        WEB TECHNOLOGIES EXPERIENCE
                    </Typography>
                    <div className="containerTechs">
                        {
                            technologies.map((item) =>
                            (<div className="itemTechs" key={item.id}>
                                <img className="imageTech" src={item.name} alt={item.id} />
                                <Typist cursor={{ show: false }}>
                                    <Typist.Delay ms={500} />
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
