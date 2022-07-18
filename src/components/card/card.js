import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeLike, changeDeleted } from '../../redux/actions'
import "./card.css";


export const Card= ({cat}) => {
  const like='https://raw.githubusercontent.com/ketren30/catss/main/src/components/like.jpg';
  const nolike="https://raw.githubusercontent.com/ketren30/catss/main/src/components/nolike.jpg";
  const [likeLink, setLikeLink]=useState(nolike);
  const dispatch = useDispatch();
  

  const setLink = (liked) => {
    if (liked) setLikeLink(like)
    else setLikeLink(nolike);
    return likeLink
  }

    return (
      <div className="cards">
        <img src={cat.link} className="img"></img>
        Порода: {cat.breed}<br/>
        Страна происхождения: {cat.country}<br/>
        Продолжительность жизни: {cat.longoflife}<br/>
        Размер: {cat.size}<br/>
        Вес: {cat.weight}<br/>
        Шерсть: {cat.fur}<br/>
        Окрас: {cat.color}<br/>
        Лайк  <img src={setLink(cat.isliked)} width='25px' height='20px' onClick={dispatch(changeLike(cat.breed))} /> 
        <button onClick={dispatch(changeDeleted(cat.breed))}>Удалить породу</button>
      </div>
    )
}