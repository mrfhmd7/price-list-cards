import React from 'react';

const Link = ({route}) => {
     return (
          <li className='mr-12 hover:bg-blue-400 rounded-sm p-1'>
              <a href={route.path}>{route.name}</a> 
          </li>
     );
};

export default Link;