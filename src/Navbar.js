import React from 'react';
import './App.css'; // Import your CSS file
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Select,Option } from '@material-ui/core';

const Navbar = () => {
  return (
   <div>
    <nav className="navbar">
      <div className="logo">
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8obMnLjiiTI7_zuFZgu1SDbSUzAN72_5rcg&usqp=CAU'/></div>
      
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      <ul className="nav-links">

        <li className='hover-color-change'> <a href='/'>Home</a></li>
        <li className='hover-color-change'> <a href='/About'>About</a></li>
        <li className='hover-color-change'> <a href='/Contact'>Contact</a></li>
        <li className='hover-color-change'> <a href='/Services'>Services</a></li>
      

       <select className='select'>
        <option  > <a href='/Services'>Services</a></option>
        <option>Amazon</option>
        <option>Website Developing</option>
        <option>Digital Marketing</option>
        <option>Network Marketing</option>
        
       </select>    
    
      </ul>
    </nav>
    

{/* <div className='logo'>Muhammad Umar</div> */}
</div>

  );
};

export default Navbar;
