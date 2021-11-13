import React from "react";

const ServiceCard = ({headline, content, extend}) => {
  return(
    <div className="px-6 text-center mb-10 lg:mb-0  sm:my-36 sm:px-10">
      <h1 className="text-gray-900 pb-5 pt-14 sm:pt-0 font-bold font-serif text-2xl">{headline}</h1>
      <p className="text-gray-600 pb-7">{content}</p>
      <a href="https://google.com" className="font-serif font-bold hover:underline text-sm">{extend.toUpperCase()}</a>
    </div>
  )
}
export default ServiceCard