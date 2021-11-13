import React from "react"
import Navbar from "./components/navbar/navbar.component"
import arrow from "./assests/images/icon-arrow-down.svg"
import "./App.css"
import Body from "./components/body/body.component"

const App = () => {
  return(
    <div>
      <div className="bg-header h-screen md:bg-desktop-header md:bg-center bg-center bg-cover bg-no-repeat">
        <Navbar />
        <div className="text-center sm:text-5xl text-white font-bold text-3xl font-serif hd-header">
          WE ARE CREATIVES
        </div>
        <div className="m-auto w-7 im-arrw sm:hidden pt-12">
          <img src={arrow} alt="arrow down"/>
        </div>
      </div>

      <Body />
    </div>
  )
}
export default App