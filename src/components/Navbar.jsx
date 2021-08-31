import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  tool: {
    display: "flex",
    alignSelf: "center",
  }
}));

export default function Navbar() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar style={{ backgroundColor: "rgb(40 44 52 / 58%)", marginBottom: "2rem" }}>
        <Toolbar className={classes.tool}>
          <Link className="iconLink" style={{ margin: "10%" }} href={"https://github.com/BillyVector117"} target="_blank" rel="noreferrer">
            <GitHubIcon className="icons" style={{ color: "white" }} />
          </Link>
          <Link className="iconLink" href={"https://www.linkedin.com/in/billy-rodr%C3%ADguez-morales-35397b144/"} target="_blank" rel="noreferrer">
            <LinkedInIcon className="icons" style={{ color: "white" }} />
          </Link>
          <PhoneAndroidIcon className="icons" style={{ marginLeft: "10%" }} /> 5524206617
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
    </React.Fragment>
  );
}
