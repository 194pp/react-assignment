import classes from "../Task1.module.css";
import React from "react";

const Contacts = ({pageClass, click}) => {
  return (
    <>
      <h1 className={pageClass}>Contacts</h1>
      <button className={classes.BackBtn} onClick={click}>Go back</button>
    </>
  )
}

export default Contacts;