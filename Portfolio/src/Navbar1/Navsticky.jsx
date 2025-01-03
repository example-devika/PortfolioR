import React from 'react'
import Navbar from './Navbar';
import { useState,useEffect } from 'react';


const Navsticky = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const bannerHeight = document.querySelector('.banner').offsetHeight;
        setIsScrolled(window.scrollY > bannerHeight * 0.5); // Adjust the factor as needed
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <>
        <Navbar isScrolled={isScrolled} />
       
      
      </>
    );
  };
  
    
   

export default Navsticky
