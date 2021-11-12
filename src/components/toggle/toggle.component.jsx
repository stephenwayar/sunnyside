import React, {useState} from "react";
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
          <img onClick={handleClick} src={toggleIcon} alt="toggle icon"/>
        </div>

        <div className="bg-white toggleDiv shadow-2xl rounded-sm text-center text-xl sm:text-2xl text-gray-600">
          <p className="py-3  pt-16 hover:text-gray-900"><a href="#">About</a></p>
          <p className="py-3 sm:py-4 hover:text-gray-900"><a href="#">Services</a></p>
          <p className="py-3 sm:py-4 hover:text-gray-900"><a href="#">Projects</a></p>
          <p className="py-3 sm:py-4"><button className="text-sm text-gray-900 hover:text-gray-700 bg-yellow-300 hover:bg-yellow-200 font-bold py-3 rounded-full px-7">CONTACT</button></p>
        </div>
      </div>
    )
  }

  return(
    <div>
      <img onClick={handleClick} src={toggleIcon} alt="toggle icon"/>
    </div>
  )
}
export default Toggle