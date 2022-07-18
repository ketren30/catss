import React from 'react';
import { useSelector } from "react-redux";
import {Card} from '../components/card/card';

export const Cards = () => {
    const cats = useSelector(state => state.main.cats);
    const filtr = useSelector(state => state.main.filtr);

    if (filtr==="1") return (
        <div>
            {cats.map((item) => {
                if (!item.isdeleted) return <Card key={item.breed} cat={item}/>   
            })}
        </div>
    )
    
    if (filtr==="2") return (
        <div>
            {cats.map((item) => {
                if (item.isliked && !item.isdeleted) return <Card key={item.breed} cat={item} />   
            })}
        </div>
    )
}