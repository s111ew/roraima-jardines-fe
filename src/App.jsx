import Navbar from "./sections/Navbar"
import Footer from "./sections/Footer"
import "./App.css"
import ProductCards from "./sections/ProductCards"
import Testimonial from "./sections/Testimonials"
import Hero from "./sections/Hero"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductCards />
      <Testimonial />
      <Footer />
    </>
  )
}

export default App