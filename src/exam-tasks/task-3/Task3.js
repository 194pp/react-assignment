import React from 'react';
import Task3Form from "./Task3Form";
import classes from './Task3.module.css';

function Task3() {
  return (
    <div className={classes.Task}>
      <Task3Form />
    </div>
  );
}

export default Task3;

/* TASK 3
Sukurkite forma, kurioje vartotojas galės nurodyti
- vardą
- pavardę
- amžių

Vartotojui užpildius formą ir paspaudus "Pateikti", po forma 
atsiras atsiras pasisveikinimas:
- Jei asmuo yra 18 m. ir vyresnis: "Dėkojame, kad užsiregistravote"
- Jei asmuo yra 17 m. ir jaunesnis: "Deja, registracija negalima. 
Registruotis galima tik nuo 18 metų"

Pastaba: panaudokite useState
*/
