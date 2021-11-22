import classes from './Task7.module.css';
import {useRef, useState} from "react";

function Task7() {
  const taskRef = useRef(classes.TaskLight)

  const btnLightClickHandler = () => {
    taskRef.current.className = `${classes.Task} ${classes.TaskLight}`;
  }

  const btnDarkClickHandler = () => {
    taskRef.current.className = `${classes.Task} ${classes.TaskDark}`;
  }

  return (
    <div ref={taskRef} className={classes.Task}>
      <h1>Header</h1>
      <p>Paragraph</p>
      <div className={classes.Buttons}>
        <button
          className={classes.BtnLight}
          onClick={btnLightClickHandler}
        >
          Light theme
          <span className="material-icons">light_mode</span>
        </button>
        <button
          className={classes.BtnDark}
          onClick={btnDarkClickHandler}
        >
          Dark theme
          <span className="material-icons">dark_mode</span>
        </button>
      </div>
    </div>
  );
}

export default Task7;

/* Task 7
Task 7 komponento viduje sukurkite h1 ir p žymas su tekstu ir du mygtukus.

Vienas mygtukas vadinsis "Light theme", kurį paspaudus Task7 komponento fonas
taps šios spalvos #f1f1f1, o tekstas #0000.
Kitas mygtukas vadinsis "Dark theme", kurį paspaudus Task7 komponento fonas
taps šios spalvos #000000, o tekstas #f1f1f1.

Pastabos:
- mygtukai turi būti atvaizduojami komponento viduje, jiems atskirų komponentų
kurti nereikia;
- panaudokite useRef.
*/
