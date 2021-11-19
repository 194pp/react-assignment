import classes from './App.module.css';
// Tasks imports
import Task1 from './exam-tasks/task-1/Task1';
import Task2 from './exam-tasks/task-2/Task2';
import Task3 from './exam-tasks/task-3/Task3';
import Task4 from './exam-tasks/task-4/Task4';
import Task5 from './exam-tasks/task-5/Task5';
import Task6 from './exam-tasks/task-6/Task6';
import Task7 from './exam-tasks/task-7/Task7';
import Task8 from './exam-tasks/task-8/Task8';
import Task9 from './exam-tasks/task-9/Task9';
import Task10 from './exam-tasks/task-10/Task10';
import {NavLink, Route, Routes} from "react-router-dom";
import NavLinkItem from "./GlobalComponents/NavLinkItem";
import TaskBundle from "./GlobalComponents/TaskBundle";

function App() {
  return (
    <div className={classes.App}>
      <h1 className={classes.Header}>
        React Assignment
      </h1><hr />
      <TaskBundle path='/task1' text='Task 1' elem={<Task1 />} />
      <TaskBundle path='/task2' text='Task 2' elem={<Task2 />} />
      <TaskBundle path='/task3' text='Task 3' elem={<Task3 />} />
      <TaskBundle path='/task4' text='Task 4' elem={<Task4 />} />
      <TaskBundle path='/task5' text='Task 5' elem={<Task5 />} />
      <TaskBundle path='/task6' text='Task 6' elem={<Task6 />} />
      <TaskBundle path='/task7' text='Task 7' elem={<Task7 />} />
      <TaskBundle path='/task8' text='Task 8' elem={<Task8 />} />
      <TaskBundle path='/task9' text='Task 9' elem={<Task9 />} />
      <TaskBundle path='/task10' text='Task 10' elem={<Task10 />} />
    </div>
  );
}

export default App;
