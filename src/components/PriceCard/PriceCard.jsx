import React from 'react';

const PriceCard = ({price}) => {
     return (
          <div>
               <h2 className='text-3xl text-indigo-600 font-bold'>{price.price}</h2>
               <h4 className='text-4xl font-semibold'>{price.name}</h4>
          </div>
     );
};

export default PriceCard;