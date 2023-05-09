import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";

const Navbar = () => {
     const [open, setOpen] = useState(false);

     const routes = [
         { id: 1, name: "Home", path: "/" },
         { id: 2, name: "About", path: "/about" },
         { id: 3, name: "Contact", path: "/contact" },
         { id: 4, name: "Products", path: "/products" },
         { id: 5, name: "Services", path: "/services" },
     ];

     return (
          <nav className='bg-blue-300'>
               <div onClick={() => setOpen(!open)} className='md:hidden'>
                    <span>
                         {
                         open === true ? 
                         <XMarkIcon className="h-6 w-6 text-blue-950"/> : 
                         <Bars3Icon className="h-6 w-6 text-blue-950" />
                         }
                         </span>
               </div>
               <ul className={`md:flex absolute md:static duration-300 bg-cyan-300 rounded pl-8 py-2 ${open ? 'top-6' : '-top-48'}`}>
                    {
                         routes.map(route => 
                         <Link
                         key = {route.id}
                         route = {route}
                         ></Link>)
                    }
               </ul>
          </nav>
     );
};

export default Navbar;