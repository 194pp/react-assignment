import classes from './Task3.module.css';

const Task3FormInput = ({label, type, change, value}) => {
  return (
    <div className={classes.InputContainer}>
      <label className={classes.InputLabel}>{label}: </label>
        <input
          className={classes.InputIn}
          type={type}
          value={value}
          onChange={change}/>
    </div>
  )
}

export default Task3FormInput;