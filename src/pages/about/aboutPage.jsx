import React from "react";
import Navbar from "../../components/navbar/navbar.component";

const AboutPage = () => {

  document.title = "Sunnyside | About"

  return(
    <div className="bg-gray-900 h-screen text-center text-blue-500">
      <Navbar />
      <h1>About Page</h1>
      <h2>Coming soon...</h2>
    </div>
  )
}
export default AboutPage