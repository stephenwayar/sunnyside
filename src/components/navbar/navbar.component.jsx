import React from "react";
import Toggle from "../toggle/toggle.component";
import logo from "../../assests/images/logo.svg"
import NavItems from "../navItems/navitems.component";
import "./navbar.component.css"

const Navbar = () => {
  return(
    <div className="grid grid-cols-2">  

      <img className="px-5 py-6" src={logo} alt="toggle 
      button"/>

      <div className="pt-7 pl-36 sm:pl-64 mn-iphone sm:ml-5 md:hidden">
        <Toggle />
      </div>

      <div className="hidden md:block py-5 mr-5 text-right">
        <NavItems />
      </div>
    </div>
  )
}
export default Navbar