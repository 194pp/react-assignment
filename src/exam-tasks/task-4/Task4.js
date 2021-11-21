import React, {useState} from 'react';
import Task4Icon from "./Task4Icon";
import classes from './Task4.module.css';

function Task4() {
  const [likes, setLikes] = useState(12);
  const [dislikes, setDislikes] = useState(2);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const likeClickHandler = (e) => {
    if (!liked) {
      setLikes(() => likes + 1);
    }
    if (disliked) {
      setDislikes(() => dislikes -1);
    }
    setLiked(true);
    setDisliked(false);
  }
  const dislikeClickHandler = (e) => {
    if (!disliked) {
      setDislikes(() => dislikes + 1);
    }
    if (liked) {
      setLikes(() => likes - 1);
    }
    setDisliked(true);
    setLiked(false);
  }

  return (
    <div className={classes.Task}>
      <Task4Icon icon='thumb_up' state={liked} count={likes} click={likeClickHandler}/>
      <Task4Icon icon='thumb_down' state={disliked} count={dislikes} click={dislikeClickHandler}/>
    </div>
  );
}

export default Task4;

/* Task 4
Atkurkite šį komponentą: https://prnt.sc/1296zmk

Pastabos, leidžiama balsuoti, tik vieną kartą. 
Paspaudus ant vieno mygtuko, antrą kartą paspausti ant jo 
negalima, tačiau leidžiama pakeisti nuomonę ir paspausti 
ant kito. Tokiu atveju nuo prieš tai paspausto balsas "nuimamas"
ir perduodamas kitam.

Pastaba: būtina panaudoti useReducer
*/
