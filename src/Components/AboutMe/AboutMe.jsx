import React, { useEffect, useRef, useState } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const aboutMeStyles = makeStyles((theme) => ({
  name: {
    opacity: "0",
    position: "relative",
    transition: "1s",
    textAlign: "center",
    top: "30%",
    [theme.breakpoints.down("xs")]: {
      top: "20%",
    },
    [theme.breakpoints.down("xs")]: {},
  },

  nameAppear: {
    opacity: "1",
    position: "relative",
    textAlign: "center",
    transition: "1s",
    top: "30%",
    fontSize: "50px",
    [theme.breakpoints.down("xs")]: {},
  },

  text: {
    fontSize: "20px",
    position: "relative",
    textAlign: "center",
    top: "30%",
    opacity: "0",
    transition: "3s",
    [theme.breakpoints.down("xs")]: {},
  },

  textAppear: {
    fontSize: "20px",
    position: "relative",
    textAlign: "center",
    top: "30%",
    opacity: "1",
    transition: "3s",
    [theme.breakpoints.down("xs")]: {},
  },

  div: {
    height: "1300px",
    top: "80%",
    [theme.breakpoints.down("lg")]: {
      height: "1200px",
      top: "20%",
    },
    [theme.breakpoints.down("xs")]: {
      height: "800px",
      top: "20%",
    },
  },
}));

export default function AboutMe(props) {
  const classes = aboutMeStyles();

  const { darkState } = props

  //set state for fade in and out

  const [name, setName] = useState("name");
  const [text, setText] = useState("text");

  const nameRef = useRef();
  const textRef = useRef();

  nameRef.current = name;
  textRef.current = text;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > window.innerHeight * 0.5;

      if (show) {
        setName("nameAppear");
      } else {
        setName("name");
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > window.innerHeight * 0.5;
      if (show) {
        setText("textAppear");
      } else {
        setText("text");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div>
        <div id="AboutMe" className={classes.div}>
          <Typography className={classes[nameRef.current]} style = {darkState ? {color: "white" } : {color: "black"}}>
            HI I'M WILLIAM
          </Typography>
          <br></br>
          <Typography className={classes[textRef.current]} style = {darkState ? {color: "white" } : {color: "black"}}>
            A full stack engineer with a focus
          </Typography>
          <Typography className={classes[textRef.current]} style = {darkState ? {color: "white" } : {color: "black"}}>
            on front end development
          </Typography>
          <br></br>
          <Typography className={classes[textRef.current]} style = {darkState ? {color: "white" } : {color: "black"}}>
            Proficient in React.JS, Redux, MERN stack, MongoDB
          </Typography>
          <Typography className={classes[textRef.current]} style = {darkState ? {color: "white" } : {color: "black"}}>
            Express, Node.JS, Javascript, HTML, and CSS.
          </Typography>
        </div>
      </div>
    </>
  );
}
