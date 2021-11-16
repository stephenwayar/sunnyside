import React from "react"
import { Link } from "react-router-dom"
import "./serviceCard.component.css"

const ServiceCard = ({headline, content, extend}) => {
  return(
    <div className="px-6 text-center mb-10 lg:mb-0 sm:my-36 threexl sm:px-10 xl:pt-10 2xl:pt-16">
      <h1 className="text-gray-900 pb-5 pt-14 sm:pt-0 font-bold font-serif xl:text-3xl text-2xl">{headline}</h1>
      <p className="text-gray-600 pb-7 xl:text-xl">{content}</p>
      <Link to="/services" className="font-serif font-bold hover:underline text-sm xl:text-lg">{extend.toUpperCase()}</Link>
    </div>
  )
}
export default ServiceCard