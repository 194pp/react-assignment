import classes from './Task4.module.css';

const Task4Icon = ({icon, click, active, count}) => {
  return (
    <div className={classes.IconWithSpan}>
      <span
        className={`material-icons ${classes.Icon} ${active ? classes.Active : ''}`}
        onClick={click}>
        {icon}
      </span>
      <span className={classes.Span + ' ' + (active ? classes.Active : '')}>{count}</span>
    </div>
  )
}

export default Task4Icon;