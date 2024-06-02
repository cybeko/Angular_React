import React from 'react';
import './Card.css';

function Card(props) 
{
  const {name, image, desc, price, rating } = props;

  const getStars = () => {
    let stars = '';
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars += '★';
      } else {
        stars += '☆';
      }
    }
    return stars;
  };

  return (
    <div className="product">
      <img src={image} alt={name} className="product-image"/>
      <h2>{name}</h2>
      <p>{desc}</p>
      <p className='price'>${price.toFixed(2)}</p>
      <p className='rating'>{getStars()}</p>
      <button>Buy Now</button>
    </div>
  );
}
export default Card;
