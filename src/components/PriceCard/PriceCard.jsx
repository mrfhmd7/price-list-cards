import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
     return (
          <div className='bg-violet-300 mt-4 p-3 text-center rounded-md flex flex-col'>
               <h2 className='text-3xl text-indigo-600 font-bold'>{price.price}</h2>
               <h4 className='text-4xl my-2 font-semibold'>{price.name}</h4>
               <div className='text-left ml-2'>
                    <p className='underline text-zinc-700 font-bold'>Features</p>
                    {
                         price.features.map((feature, idx) => <Feature
                         key={idx}
                         feature = {feature}
                         ></Feature>)
                    }
               </div>
               <button className='text-white w-full mt-auto
                bg-teal-600 py-2 font-bold rounded-md hover:bg-emerald-700'>Buy now</button>
          </div>
     );
};

export default PriceCard;