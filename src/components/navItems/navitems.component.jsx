import React from "react";
import { Link } from "react-router-dom";

const NavItems = () => {
  return(
    <div>
      <Link to="/about" className="text-white hover:text-gray-700 lg:px-6 px-4">About</Link>
      <Link to="/services" className="text-white hover:text-gray-700 lg:px-6 px-4">Services</Link>
      <Link to="/projects" className="text-white hover:text-gray-700 lg:px-6 px-4">Projects</Link>
      <Link to="/contact"><button className="text-sm text-gray-700 lg:px-6  lg:mr-3 hover:bg-opacity-25 bg-white hover:text-white font-bold py-3 rounded-full px-8 md:px-4 l md:py-2">CONTACT</button></Link> 
    </div>
  )
}  
export default NavItems