import React from "react"
import facebook from "../../assests/images/icon-facebook.svg"
import instagram from "../../assests/images/icon-instagram.svg"
import twitter from "../../assests/images/icon-twitter.svg"
import pinterest from "../../assests/images/icon-pinterest.svg"


const Footer = () => {
  return(
    <div className="bg-green-200 w-full text-center">
      <p className="text-green-800 font-bold font-sans text-3xl pt-11 pb-9">sunnyside</p>
      <a className="px-6 text-sm text-green-800 hover:text-white" href="https://github.com/stephenwayar/Sunnyside">About</a>
      <a className="px-6 text-sm text-green-800 hover:text-white" href="https://github.com/stephenwayar/Sunnyside">Services</a>
      <a className="px-6 text-sm text-green-800 hover:text-white" href="https://github.com/stephenwayar/Sunnyside">Projects</a>

      <div className="grid grid-cols-4 py-20 m-auto">
        <a href="https://facebook.com"><img className=" pl-12 sm:pl-36 lg:pl-40 2xl:pl-52" src={facebook} alt="facebook icon" /></a>
        <a href="https://instagram.com"><img className=" pl-8 sm:pl-20 lg:pl-28" src={instagram} alt="instagram icon" /></a>
        <a href="https://twitter.com"><img className=" pl-4 sm:pl-12 lg:pl-24" src={twitter} alt="twitter icon" /></a>
        <a href="https://pinterest.com"><img className=" pr-6 sm:pr-32 lg:pl-16" src={pinterest} alt="pintrest icon" /></a>
      </div>
    </div>
  )
}
export default Footer