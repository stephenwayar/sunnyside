import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return(
    <div className="bg-gray-900 h-screen text-center text-white p-11">
      <h1 className="text-xl p-5">404 ERROR</h1>
      <Link to="/"><button className="text-sm text-gray-700 lg:px-6  lg:mr-3 hover:bg-opacity-25 bg-white hover:text-white font-bold py-3 rounded-full px-8 md:px-4 l md:py-2">HOME</button></Link>     
    </div>
  )
}
export default Error