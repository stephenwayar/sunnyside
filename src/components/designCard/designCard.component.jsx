import React from "react"
import "./designCard.component.css"

const DesignCard = ({bg, title, content}) => {
  return(
    <div className={`${bg} bg-contain bg-height bg-no-repeat w-full text-center px-3 pt-80`}>
      <h1 className="text-2xl font-serif font-bold pb-5">{title}</h1>
      <p className="text-sm">{content}</p>
    </div>
  )
}
export default DesignCard