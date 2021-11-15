import React from "react"

const ClientsReport = ({imgURL, feedback, name, position}) => {
  return(
    <div className="text-center">
      <img className="mx-auto rounded-full w-20" src={imgURL} alt="woman with long brown hair"/>
      <p className="py-8 px-5 sm:px-20 lg:px-10 md:text-lg 2xl:px-14 text-gray-600 font-sans">{feedback}</p>
      <p className="font-serif font-bold text-gray-900 text-lg md:text-xl">{name}</p>
      <p className="text-gray-500 font-sans pt-3 pb-14 text-sm md:text-base">{position}</p>
    </div>
  )
}
export default ClientsReport