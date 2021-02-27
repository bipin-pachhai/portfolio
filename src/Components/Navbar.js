import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar = ()=>{
  return(
   
    <nav className="navbar navbar-expand-md navbar-light bg-dark-100 container-fluid justify-content-between" role="navigation" > 
    <a className="navbar-brand text-white display-4 font-weight-bolder ml-5">Bipin Pachhai</a> 
 
     
    <div  className = "collapse navbar-collapse justify-content-end mr-0" id="navigation-items">
      <ul className = "navbar-nav ms-auto ">
      <li className="nav-item px-5">
            <Link className='nav-link text-white' to="/">HOME</Link>
                 
                </li>
               <li className="nav-item px-5">
               <Link className='nav-link text-white' to="/projects">PROJECTS</Link>
                </li>
                <li className="nav-item px-5">
                <Link className='nav-link text-white' to="/resume">RESUME</Link>
                </li>
                <li className="nav-item px-5">
                <Link className='nav-link text-white' to="/blogs">BLOGS</Link>
              </li>
              <li className="nav-item px-5">
              <Link className='nav-link text-white' to="/about">ABOUT</Link>
             </li>
      </ul>

    </div>
   

</nav>  
  

  );
}

export default Navbar;
