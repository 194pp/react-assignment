import React from 'react';
import Task2Items from "./Task2Items";
import classes from './Task2.module.css';
import apparelImg from '../../assets/task2/apparel.png';
import calendarsImg from '../../assets/task2/calendars.png';
import cupsImg from '../../assets/task2/cups.png';
import postersImg from '../../assets/task2/posters.png';
import stickersImg from '../../assets/task2/stickers.png';

const data = [
  {
    src: postersImg,
    label: 'POSTERS'
  }, {
    src: apparelImg,
    label: 'APPAREL'
  }, {
    src: stickersImg,
    label: 'STICKERS'
  }, {
    src: cupsImg,
    label: 'CUPS'
  }, {
    src: calendarsImg,
    label: 'CALENDARS'
  }
]

function Task2() {
  return (
    <div className={classes.Task}>
      <h3>CATEGORIES</h3>
      <Task2Items data={data}/>
    </div>
  );
}

export default Task2;

/* TASK 2
Atkurkite šį komponentą: https://prnt.sc/1296ht1

Paveikslėliai:
- posters: https://per4mmedia.com/wp-content/uploads/2021/03/posters.jpg
- apparel" https://per4mmedia.com/wp-content/uploads/2021/03/apparel.jpg
- stickers: https://per4mmedia.com/wp-content/uploads/2021/03/stickers.jpg
- cups: https://per4mmedia.com/wp-content/uploads/2021/03/cups.jpg
- calendars" https://per4mmedia.com/wp-content/uploads/2021/03/calendars.jpg

Pastaba: paveikslėlius talpinti projekto aplanke.
*/
