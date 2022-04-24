import React from 'react';

export default function Navbar(){
  return(
    <nav className='navbar'>
    <img className="logo-img" src={process.env.PUBLIC_URL + "/images/earth.png"}  alt="logo"/>
    <h1>My Travel Journey</h1>
    </nav>
  );
}