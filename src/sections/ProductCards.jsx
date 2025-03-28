import ProductCard from "../components/ProductCard.jsx"
import homePageImage9 from "../assets/homepage_images/HP9.jpg"
import homePageImage10 from "../assets/homepage_images/HP10.jpg"
import homePageImage11 from "../assets/homepage_images/HP11.jpg"

import huerto1 from "../assets/product_images/Huerto 1.jpg"
import huerto2 from "../assets/product_images/Huerto 2.jpg"
import plantas1 from "../assets/product_images/Plantas 1.jpg"
import plantas2 from "../assets/product_images/Plantas 2.jpg"
import sustrato1 from "../assets/product_images/Sustrato 1.jpg"
import sustrato2 from "../assets/product_images/Sustrato 2.jpg"

function ProductCards() {
  return(
    <section className="product-cards">
      <h2>Nuestros Productos</h2>
      <div className="product-card-container">
        <ProductCard src={sustrato1} src2={sustrato2} alt="" title="Sustrato Universal" desc="Para uso en macetas y jardinería" />
        <ProductCard src={huerto1} src2={huerto2} alt="" title="Huerto & Jardin" desc="Para uso exterior" />
        <ProductCard src={plantas1} src2={plantas2} alt="" title="Plantas ornamentales" desc="Variedades de cactus, aptenias y mesen" />
      </div>
      <div className="images-container">
        <img className="homepage-image" id="homepage-img-11" src={homePageImage11} alt="" />
        <img className="homepage-image" id="homepage-img-10" src={homePageImage10} alt="" />
        <img className="homepage-image" id="homepage-img-9" src={homePageImage9} alt="" />
      </div>
    </section>
  )
}

export default ProductCards