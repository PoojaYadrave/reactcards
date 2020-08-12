import React from 'react';
import data from "./data"; 
import {Card} from "react-bootstrap";
import "./Box.css";
const practice =()=>{
const renderCard = (r,index)=>{
    return(
        
            <div >
           
            <Card className="box" key={index}>
            <Card.Img variant="top" src={r.img}/>
            <Card.Body>
            <Card.Title>{r.name}</Card.Title>
            <Card.Subtitle>{r.cuisine_type}</Card.Subtitle>
            <Card.Text>
             
             </Card.Text>
             <Card.Footer>{r.rating}    .   {r.time}     .    {r.cost}</Card.Footer>

            </Card.Body>
            </Card>
           
            </div>
    )
};
    return <div className="grid">{data.restaurants.map(renderCard)}</div>;
};
     
export default practice;
