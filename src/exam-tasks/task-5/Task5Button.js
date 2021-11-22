import classes from './Task5.module.css';

const Task5Button = ({className, text}) => {
  return (
    <button
      className={className}>
      {text}
    </button>
  )
}

export default Task5Button;
