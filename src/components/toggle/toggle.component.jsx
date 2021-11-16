import React, {useState} from "react";
import { Link } from "react-router-dom";
import toggleIcon from "../../assests/images/icon-hamburger.svg"
import "./toggle.component.css"

const Toggle = () => {

  const [toggle, setToggle] =  useState(false)

  const handleClick = () => {
    setToggle(!toggle)
    console.log(toggle);
  }

  if(toggle === true){
    return(
      <div>
        <div>
          <img className="toggleIcn py-6 pr-5 float-right" onClick={handleClick} src={toggleIcon} alt="toggle icon"/>
        </div>

        <div className="bg-white shadow-2xl toggleDiv rounded-sm text-center text-xl text-gray-600">
          <p className="hover:text-gray-900 pb-4"><Link to="/about">About</Link></p>
          <p className="hover:text-gray-900 pb-4"><Link to="/services">Services</Link></p>
          <p className="hover:text-gray-900 pb-4"><Link to="/projects">Projects</Link></p>
          <Link to="/contact"><button className="text-sm text-gray-900 hover:text-gray-700 bg-yellow-300 hover:bg-yellow-200 font-bold rounded-full py-3 px-4">CONTACT</button></Link>
        </div>
      </div>
    )
  }

  return(
    <div>
      <img className="float-right py-6 pr-5" onClick={handleClick} src={toggleIcon} alt="toggle icon"/>
    </div>
  )
}
export default Toggle