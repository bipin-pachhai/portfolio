import React from 'react';
import "./Navbar.css";


const Navbar = ()=>{
  return(
   
    <nav className="navbar navbar-expand-md navbar-light bg-dark-100 container-fluid justify-content-between" role="navigation" > 
    <a className="navbar-brand text-white display-4 font-weight-bolder ml-5">Bipin Pachhai</a> 
 
     
    <div  className = "collapse navbar-collapse justify-content-end mr-0" id="navigation-items">
      <ul className = "navbar-nav ms-auto ">
      <li className="nav-item px-5">
                <a className="nav-link text-white" href= '/'>
                  HOME
                </a>
                </li>
               <li className="nav-item px-5">
                <a className="nav-link text-white" href= '/resume'>
                RESUME
                </a>
                </li>
                <li className="nav-item px-5">
                <a className="nav-link text-white" href="/projects" >
                 PROJECTS
                </a>
                </li>
                <li className="nav-item px-5">
                <a className="nav-link text-white" href="/blogs">
                 BLOGS
                </a>
              </li>
              <li className="nav-item px-5">
                  <a className="nav-link text-white" href="/about">
                  ABOUT
                  </a>
             </li>
      </ul>

    </div>
   

</nav>  
  

  );
}

export default Navbar;
