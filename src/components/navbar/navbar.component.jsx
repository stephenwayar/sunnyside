import React from "react";
import { Link } from "react-router-dom";
import Toggle from "../toggle/toggle.component";
import logo from "../../assests/images/logo.svg"
import NavItems from "../navItems/navitems.component";
import "./navbar.component.css"

const Navbar = () => {
  return(
    <div className="">  

      <Link to="/"><img className="px-5 py-6 float-left" src={logo} alt="toggle 
      button"/></Link>

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