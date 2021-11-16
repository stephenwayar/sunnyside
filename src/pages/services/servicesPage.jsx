import React from "react";
import Navbar from "../../components/navbar/navbar.component";

const ServicePage = () => {

  document.title = "Sunnyside | Services"

  return(
    <div className="bg-gray-900 h-screen text-center text-green-500">
      <Navbar />
      <h1>Services Page</h1>
      <h2>Coming soon...</h2>
    </div>
  )
}
export default ServicePage