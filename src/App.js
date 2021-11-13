import React from "react"
import Navbar from "./components/navbar/navbar.component"
import arrow from "./assests/images/icon-arrow-down.svg"
import "./App.css"
// import egg from "./assests/images/mobile/image-transform.jpg"

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

      {/* <div className="egg-img">
        <img className="w-full" src={egg} alt="egg on yellow background"/>
      </div> */}
    </div>
  )
}
export default App