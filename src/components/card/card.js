import React from 'react';
import like from "../like.jpg";
import nolike from "../nolike.jpg";
import "./card.css";


export const Card= (props) => {
  const [isLike, setIsLike]=React.useState(false);
  const [likeLink, setLikeLink]=React.useState(nolike);
  
  React.useEffect(()=> {
    if (isLike) setLikeLink(like); 
    else setLikeLink(nolike);
  }, [isLike]
  )

    return (
      <div className="cards">
        <img src={props.link} className="img"></img>
        Порода: {props.breed}<br/>
        Страна происхождения: {props.country}<br/>
        Продолжительность жизни: {props.longoflife}<br/>
        Размер: {props.size}<br/>
        Вес: {props.weight}<br/>
        Шерсть: {props.fur}<br/>
        Окрас: {props.color}<br/>
        Лайк <img src={likeLink} width='25px' height='20px' onClick={()=>{setIsLike(!isLike); props.onChangeLike(props.breed)}} ></img>
        <button onClick={()=>props.onChangeDeleted(props.breed)}>Удалить породу</button>
      </div>
    )
}