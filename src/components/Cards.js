import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/toll.jpg'
              text='Calculate Tollgate  inter City Routes'
              label='tollgate'
              path='/tollgates'
            />
            <CardItem
              src='images/exp.jpg'
              text='Cherk Vehicle Registration Status'
              label='vehicles'
              path='/vehicles'
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
