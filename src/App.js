import React from "react"
import { Routes, Route } from 'react-router-dom';
import "./App.css"
import HomePage from "./pages/home/homePage";
import AboutPage from "./pages/about/aboutPage";
import ContactPage from "./pages/contact/contactPage";
import ServicePage from "./pages/services/servicesPage";
import ProjectsPage from "./pages/projects/projectsPage";
import Error from "./pages/404/404Error";

const App = () => {
  return(
    <main>
      <Routes>

        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/services" element={<ServicePage/>} />
        <Route path="/projects" element={<ProjectsPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="*" element={<Error/>} />

      </Routes>
    </main>
  )
}
export default App