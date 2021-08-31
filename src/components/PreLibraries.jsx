import { Typography } from '@material-ui/core'
import React from 'react'
import "./preLibraries.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import redux from "../assets/redux.png"
import materializecss from "../assets/materializecss.png"
import materialUi from "../assets/materialUi.png"
import styledComponents from "../assets/styledComponents.png"
import bootstrap from "../assets/bootstrap.png"
import Typist from 'react-typist';

const PreJs = ({ scrollPosition }) => {
    AOS.init();

    const technologies = [
        { id: 1, name: redux, alias: "REDUX (ReactJS)" },
        { id: 2, name: materialUi, alias: "materialUI (ReactJS)" },
        { id: 3, name: materializecss, alias: "materialize CSS" },
        { id: 4, name: styledComponents, alias: "styled-components (ReactJS)" },
        { id: 5, name: bootstrap, alias: "Bootstrap" },
    ]
    return (
        <div className="main5" /* data-aos="fade-down-left" data-aos-duration="2000" */>
            <span className="scrollPercentage">{Math.trunc(scrollPosition) + "%"}</span>
            <div className="within5">
                <div className="container5">
                    <Typography variant="h3" component="h3" className="techsTitleLibraries" style={{ fontWeight: "500" }}>
                        LIBRARIES EXPERIENCE
                    </Typography>
                    <div className="containerTechsLibraries">
                        {
                            technologies.map((item) =>
                            (<div className="itemTechsLibraries" key={item.id}>
                                <img className="imageTechLibraries" src={item.name} alt={item.id} />
                                <Typist cursor={{ show: false }}>
                                    <Typist.Delay ms={200} />
                                    <Typography variant="h5" component="h5" className="textTechLibraries" style={{ fontWeight: "500" }}>
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
