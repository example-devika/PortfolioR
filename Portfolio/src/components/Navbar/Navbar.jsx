import React, { useState } from "react";
import "./Navbar.css";
import { Link} from "react-router-dom";
import Banner from "../Banner/Banner";
import  "../../App";



const Navbar = ({isScrolled}) => {
  const[menuvar,setMenu]=useState('Home')

  return (
    <>
    <div className="home-page">
      <div className="home">
        <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
          <div class="nav">
            <h2>Devika-Portfolio</h2>
            <ul class="list">
            <Link to="/" onClick={()=>setMenu('Home')} className={menuvar==='Home'?"active":""}>Home</Link>

            <Link to="/projects" onClick={()=>setMenu('Projects')} className={menuvar==='Projects'?"active":""}>Projects</Link>

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
