import React from "react"
import "./designCard.component.css"

const DesignCard = ({bg, title, content}) => {
  return(
    <div className={`${bg} bg-cover bg-center md:px-6 bg-height bg-no-repeat text-center px-4 pt-80`}>
      <h1 className="text-2xl md:text-3xl font-serif font-bold pb-5">{title}</h1>
      <p className="text-sm md:text-lg 2xl:px-20 sm:px-20">{content}</p>
    </div>
  )
}
export default DesignCard