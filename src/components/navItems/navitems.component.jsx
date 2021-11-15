import React from "react";

const NavItems = () => {
  return(
    <div>
      <a className="text-white hover:text-gray-700 lg:px-6 px-4" href="https://github.com/stephenwayar/Sunnyside">About</a>
      <a className="text-white hover:text-gray-700 lg:px-6 px-4" href="https://github.com/stephenwayar/Sunnyside">Services</a>
      <a className="text-white hover:text-gray-700 lg:px-6 px-4" href="https://github.com/stephenwayar/Sunnyside">Projects</a>
      <button className="text-sm text-gray-700 lg:px-6  lg:mr-3 hover:bg-opacity-25 bg-white hover:text-white font-bold py-3 rounded-full px-8 md:px-4 l md:py-2">CONTACT</button> 
    </div>
  )
}  
export default NavItems