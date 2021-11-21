import classes from "./Task3.module.css";

const Task3ErrorsGreeting = ({errorsState, loggedIn}) => {
  return (
    <div className={classes.ErrorsGreeting}>
      {errorsState.map(error => {
        return <div className={classes.Error} key={error}>{error}</div>
      })}
      {errorsState.length === 0 && loggedIn ? <div className={classes.Greeting}>Dėkojame, kad užsiregistravote.</div> : ''}
    </div>
  )
}

export default Task3ErrorsGreeting;