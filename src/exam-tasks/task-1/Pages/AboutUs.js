import classes from "../Task1.module.css";
import React from "react";

const AboutUs = ({pageClass, click}) => {
  return (
    <>
      <h1 className={pageClass}>About Us</h1>
      <button className={classes.BackBtn} onClick={click}>Go back</button>
    </>
  )
}

export default AboutUs;