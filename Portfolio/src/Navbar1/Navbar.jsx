import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink} from "react-router-dom";
import Banner from "../Banner1/Banner";


const Navbar = ({isScrolled}) => {
  const[menuvar,setMenu]=useState('Projects')

  return (
    <>
    <div className="home-page">
      <div className="home">
        <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
          <div class="nav">
            <h2>Devika-Portfolio</h2>
            <ul class="list">
            <NavLink to="/" >Home</NavLink>

            <NavLink to="/projects" activeClassName="active">Projects</NavLink>

            </ul>
          </div>
        </div>
        <Banner/>
      </div>
      </div>
    </>
  );
};

export default Navbar;
