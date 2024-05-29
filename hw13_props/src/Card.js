import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="product">
      <div className="product--image">
        <img src={props.image} alt="Product"/>
      </div>
      <div className="product--desc">
        <h1>{props.name}</h1>
        {props.list && props.list.length > 0 && ( 
          <ul>
            {props.list.map((item) => ( <li>{item}</li>))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Card;