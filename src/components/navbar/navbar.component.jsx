import React from "react";
import Toggle from "../toggle/toggle.component";
import logo from "../../assests/images/logo.svg"
import NavItems from "../navItems/navitems.component";
import "./navbar.component.css"

const Navbar = () => {
  return(
    <div className="">  

      <img className="px-5 py-6 float-left" src={logo} alt="toggle 
      button"/>

      <div className="md:hidden">
        <Toggle />
      </div>

      <div className="hidden md:block py-6 pr-5 text-right">
        <NavItems />
      </div>
    </div>
  )
}
export default Navbar