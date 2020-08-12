import React, { Component } from 'react';
import data from "./data"; 
import {Card} from "react-bootstrap";
import "./Box.css";
import { Button } from 'react-bootstrap';
//import {star} from "./str.png";
import { BsFillStarFill } from "react-icons/bs";
import { IconContext } from "react-icons";

//const resto =data.restaurants;
class demo extends Component {
    constructor(props) {
        super(props);
        this.state = {  cost: '',
                        quantity:0 }
    }
    render() { 
        return (
            <div className="grid">
                 {data.restaurants.map(r=> (
                
               
                <Card className="box" style={{width:'50rem',color:'#000000'}} border="success">
                <Card.Img variant="top" src={r.img}/>
                <Card.Body className="card-body" >
                <Card.Title style={{fontSize:'15px'}}>{r.name}</Card.Title>
                <Card.Subtitle style={{fontSize:'12.5px'}}>{r.cuisine_type}</Card.Subtitle>
                <Card.Text className="card-text" style={{fontSize:'12.5px'}}>
                 {r.loc}
                 </Card.Text>
                 <Card.Footer style={{fontSize:'14px',verticalAlign:'middle',color:'#000000'}} className="card-footer" ><IconContext.Provider value={{ style:{verticalAlign: 'middle'},size:'14px',color:'#FFD700'}}><div><BsFillStarFill/>{r.rating} &nbsp; | &nbsp;  &nbsp;  {r.time} &nbsp;| &nbsp;  &nbsp; {'\u20B9'} {r.cost}</div></IconContext.Provider></Card.Footer>
                 <Button variant="success"  className="bt" value={this.props.cost}  onClick={()=>this.props.action(this.props.cost,this.props.name,this.state.quantity)}>Add</Button>
                </Card.Body>
                </Card>
               
               
            ))}
             </div>
          )
         
    }
   
    }


 
export default demo;