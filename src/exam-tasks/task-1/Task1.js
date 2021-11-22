import React from 'react';
import {NavLink, Route, Routes, useNavigate} from "react-router-dom";
import classes from './Task1.module.css';
import AboutUs from "./Pages/AboutUs";
import Contacts from "./Pages/Contacts";

function Task1() {
  const navigate = useNavigate();

  const backButtonHandler = () => {
    navigate(-1);
  }

  return (
    <div className={classes.Task}>
      <nav className={classes.Nav}>
        <NavLink to='/task1/about-us'>About us</NavLink>
        <NavLink to='/task1/contacts'>Contacts</NavLink>
      </nav>
      <Routes>
        <Route
          path='/about-us'
          element={
            <AboutUs
              pageClass={classes.Page}
              click={backButtonHandler}
            />}
        />
        <Route
          path='/contacts'
          element={
            <Contacts
              pageClass={classes.Page}
              click={backButtonHandler}
            />}
        />
      </Routes>
    </div>
  );
}

export default Task1;

/* TASK 1
task-1 aplanke, sukurkite aplanką ir pavadinkite jį "Pages". 
"Pages" aplanke turi būti sukurti dviejų puslapių komponentai 
"About Us" ir "Contacts", kurie viduje turės tik po h1 žymą,
kurioje bus randmas komponento pavadinimas (pvz. <h1>About Us</h1>)
ir mygtuką "Grįžti atgal", kurį paspaudus bus grįžtama atgal.

Tada, komponente Task1 (kuriame esate dabar) sukurkite navigaciją, 
kuri leis patekti į nurodytus "Pages" puslapių komponentus. 
Naudodami React Router DOM sukurkite SPA principo navigaciją.
"Pages" komponentų turinys turi būti atvaizduojamas Task1 komponente.
*/
