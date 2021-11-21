import classes from './Task4.module.css';

const Task4Icon = ({icon, click, state, count}) => {
  return (
    <div className={classes.IconWithSpan}>
      <span
        className={`material-icons ${classes.Icon} ${state ? classes.Active : ''}`}
        onClick={click}>
        {icon}
      </span>
      <span className={classes.Span + ' ' + (state ? classes.Active : '')}>{count}</span>
    </div>
  )
}

export default Task4Icon;