import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
     const [prices, setPrices] = useState([]);

     useEffect(() => {
          fetch('prices.json')
               .then(res => res.json())
               .then(data => setPrices(data))
     }, [])
     return (
          <div className='mx-10'>
               <h2 className='text-5xl font-bold bg-teal-300 text-center rounded text-teal-950 p-2'>Awesome affordable price</h2>
               <div className='grid md:grid-cols-3 gap-3'>
                    {
                         prices.map(price => 
                         <PriceCard 
                              key={price.id}
                              price = {price}
                         ></PriceCard>)
                    }
               </div>
          </div>
     );
};

export default PriceList;