import React,{useEffect} from 'react';
import { Dropdown, Collapse, initMDB } from "mdb-ui-kit";
import { IoReorderThreeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    useEffect(() => {
        initMDB({ Dropdown, Collapse });
      }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">

  <div className="container-fluid">
    <button data-mdb-collapse-init className="navbar-toggler" type="button" data-mdb-target="#navbarCenteredExample" aria-controls="navbarCenteredExample" aria-expanded="false" aria-label="Toggle navigation">
    <IoReorderThreeOutline />
    </button>
   
    <div className="collapse navbar-collapse justify-content-center" id="navbarCenteredExample">
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active"  aria-current="page" to="/">HOME</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link active"  aria-current="page" to="/details">DETAILS</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link active"  aria-current="page" to="/create">CREATE</NavLink>
        </li>
      </ul>
     
    </div>

  </div>
  
</nav>

  );
};

export default Navbar;
