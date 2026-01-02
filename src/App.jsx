import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar"
import Contact from "./Pages/Contact/Contact"
import Home from "./Pages/Home/Home"
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
   </Routes>
   <Footer/>
   </>
  )
}

export default App
