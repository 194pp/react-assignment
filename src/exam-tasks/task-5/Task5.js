import classes from './Task5.module.css';
import Task5Logo from "./Task5Logo";
import Task5Button from "./Task5Button";

function Task5() {
  return (
    <div className={classes.Task}>
      <Task5Logo />
      <h1>Happening now</h1>
      <h3>Join Twitter today.</h3>
      <Task5Button solid={true}>Sign up</Task5Button>
      <Task5Button>Log in</Task5Button>
    </div>
  );
}

export default Task5;

/* Task 5
Atkurkite šį komponentą: https://prnt.sc/12978k7

Pastabos:
- turi būti sukurtas papildomas <Button> komponentas, kuris prims
du props: tekstas ir klasė. Remiantis jais bus atvaizduojamas
komponente nurodyti mygtukai;
- šriftas: naudokite savo parinktą;
- twitter logo, naudokite ikon'ą.
*/
