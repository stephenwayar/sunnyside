import React from "react"
import Navbar from "./components/navbar/navbar.component"
import arrow from "./assests/images/icon-arrow-down.svg"
import "./App.css"

const App = () => {
  return(
    <div>

      <div className="bg-header md:bg-desktop-header lg:bg-cover lg:bg-center h-screen sm:bg-cover sm:bg-center bg-contain bg-no-repeat">
        <Navbar />
        <div className="w-44 sm:w-72 text-center m-auto text-white font-bold text-3xl sm:text-5xl font-serif pt-16 hd-header">
          WE ARE CREATIVES
        </div>
        <div className="m-auto w-7 im-arrw sm:hidden pt-12">
          <img src={arrow} alt="arrow down"/>
        </div>
      </div>

      
      
    </div>
  )
}
export default App