import React from 'react';

import './Header.css'

const Header = () => {
   return (
       <div className='Container'>
           <ul>
                <li><a className='Logo' href="#">Logo</a></li>
                <div className="Sing">
                    <li><a href="#">Sing Up</a></li>
                </div>        
           </ul>
       </div>
   )
}

export default Header;