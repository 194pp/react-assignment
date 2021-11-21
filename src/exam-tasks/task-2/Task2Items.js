import classes from './Task2Items.module.css';

const Task2Items = ({data}) => {
  return (
    <div className={classes.ItemsList}>
      {data.map(item => {
        return <TaskItem src={item.src} label={item.label}/>
      })}
    </div>
  )
}

const TaskItem = ({src, label}) => {
  return (
    <div className={classes.ItemContainer}>
      <img src={src} alt={label}/>
      <label>{label}</label>
    </div>
  );
}

export default Task2Items;