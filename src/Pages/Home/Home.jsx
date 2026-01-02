import React from 'react'
import About from "../../Components/About/About"
import Faq from "../../Components/Faq/Faq"
import Footer from "../../Components/Footer/Footer"
import Hero from "../../Components/Hero/Hero"
import Highlights from "../../Components/Highlights/Highlights"
import Navbar from "../../Components/Navbar/Navbar"
import Results from "../../Components/Results/Results"
import Role from "../../Components/Role/Role"
import Services from "../../Components/Services/Services"
import Testimonial from "../../Components/Testimonial/Testimonial"
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs"
import Work from "../../Components/Work/Work"

function Home() {
  return (
    <>
   <Hero/>
   <Highlights/>
   <About/>
   <Results/>
   <Services/>
   <WhyChooseUs/>
   <Role/>
   <Work/>
   <Testimonial/>
   <Faq/>
   </>
  )
}

export default Home