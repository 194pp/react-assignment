import classes from './Task5.module.css';

const Task5Button = ({solid, children}) => {
  return (
    <button
      className={`${classes.Button} ${solid ? classes.ButtonSolid : ''}`}>
      {children}
    </button>
  )
}

export default Task5Button;
