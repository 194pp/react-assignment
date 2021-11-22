import React, {useReducer} from 'react';
import Task4Icon from "./Task4Icon";
import classes from './Task4.module.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'LIKE':
      if (state.isLiked) return state;
      return {
        likes: state.likes + 1,
        dislikes: state.isLiked !== undefined ? state.dislikes - 1 : state.dislikes,
        isLiked: true
      }
    case 'DISLIKE':
      if (state.isLiked === false) return state;
      return {
        likes: state.isLiked !== undefined ? state.likes - 1 : state.likes,
        dislikes:  state.dislikes + 1,
        isLiked: false
      }
    default: return state;
  }
}

function Task4() {
  const [state, dispatch] = useReducer(reducer, {
    likes: 12,
    dislikes: 2,
    isLiked: undefined
  })

  const likeClickHandler = () => dispatch({type: 'LIKE'});
  const dislikeClickHandler = () => dispatch({type: 'DISLIKE'});

  return (
    <div className={classes.Task}>
      <Task4Icon
        icon='thumb_up'
        active={state.isLiked}
        count={state.likes}
        click={likeClickHandler}/>
      <Task4Icon
        icon='thumb_down'
        active={!state.isLiked && state.isLiked !== undefined}
        count={state.dislikes}
        click={dislikeClickHandler}/>
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
