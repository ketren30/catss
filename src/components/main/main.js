import React, { useState, useEffect } from "react";
import './main.css';
import {Card} from '../card/card';

export const Main = (prop) => {
    const [cats, setCats] = useState([]);
    const [error, setError] = useState(null);
    const [filtr, setFiltr]=React.useState('1');
    
    useEffect(()=> {
      let mounted = true;

      fetch("https://raw.githubusercontent.com/ketren30/catss/main/cats.json")
      .then((res) => {console.log(res); return res.json().then((result)=> {if (mounted) setCats(result)})})
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("successfully aborted");
        } else {
          setError(err);
        }
      });
      return function cleanup() {
        mounted = false;
    }
    },[]); 

   
  const SetElem=(obj)=> {
        return <Card breed={obj.breed}
        country={obj.country}
        longoflife={obj.longoflife}
        size={obj.size}
        weight={obj.weight}
        fur={obj.fur}
        color={obj.color} 
        link={obj.picture} 
        key={obj.breed} 
        onChangeLike={ChangeLike}
        onChangeDeleted={ChangeDeleted} />
  }        
      
  const [cards, setCards]=React.useState();
  React.useEffect(()=> { 
        console.log(filtr);
        switch (filtr) { 
        case "1":
          setCards(cats.map((item) => {
            if (!item.isdeleted) return SetElem(item)
            else return null
          }));
          break;
        case "2":
          setCards(cats.map((item) => {
            if (item.isliked) return SetElem(item);
            else return null
          }));
        break;
      };
      
    }, [cats, filtr]); 


      const ChangeLike = (breed) => {
        setCats(prevState =>
          prevState.map(item =>
            item.breed === breed
            ? { ...item, isliked: !item.isliked }
            : item
          )
        )
      };

      const ChangeDeleted = (breed) => {
        setCats(prevState =>
          prevState.map(item =>
            item.breed === breed
            ? { ...item, isdeleted: true }
            : item
          )
        )
      };
                
      
      const setValueF = (event) => {
        setFiltr(event.target.value);
      };
      
      return (
      <div>
      {!error ? (
        <div className='wrapper'>
        Фильтр: <select onChange={ setValueF }>
          <option value='1'>Показывать все породы</option>
          <option value='2'>Показать только понравившиеся</option>
        </select>
        {cards}</div>
      ) : (
        <p>{error}</p>
      )}
      </div>
      )
};



 