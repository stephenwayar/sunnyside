import React from "react"
import { Link } from "react-router-dom"
import facebook from "../../assests/images/icon-facebook.svg"
import instagram from "../../assests/images/icon-instagram.svg"
import twitter from "../../assests/images/icon-twitter.svg"
import pinterest from "../../assests/images/icon-pinterest.svg"
import "./footer.component.css"


const Footer = () => {
  return(
    <div className="bg-green-200">
      <div className="w-full text-center">
        <p className="text-green-800 font-bold font-sans text-3xl pt-11 pb-9">sunnyside</p>
        <Link to="/about" className="px-6 text-sm text-green-800 hover:text-white">About</Link>
        <Link to="/services" className="px-6 text-sm text-green-800 hover:text-white">Services</Link>
        <Link to="/projects" className="px-6 text-sm text-green-800 hover:text-white">Projects</Link>
      </div>

      <div className="">
        <div className=" py-14 social-box flex flex-row">
          <a className="pr-5" href="https://facebook.com"><img src={facebook} alt="facebook icon" /></a>
          <a className="px-5" href="https://instagram.com"><img src={instagram} alt="instagram icon" /></a>
          <a className="px-5" href="https://twitter.com"><img src={twitter} alt="twitter icon" /></a>
          <a className="pl-5" href="https://pinterest.com"><img src={pinterest} alt="pintrest icon" /></a>
        </div>
      </div>
    </div>
  )
}
export default Footer