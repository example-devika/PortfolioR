import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink, Router} from "react-router-dom";
import Banner from "../Banner/Banner";
import  "../../App";



const Navbar = ({isScrolled}) => {

  return (
    <>
    <div className="home-page">
      <div className="home">
        <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
          <div class="nav">
            <h2>Devika-Portfolio</h2>
          
            <ul class="list">
            <NavLink to="/" activeClassName='active'>Home</NavLink>

            <NavLink to="/projects" >Projects</NavLink>

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
