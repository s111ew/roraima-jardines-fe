import ProductCard from "../components/ProductCard.jsx"

import huerto1 from "../assets/product_images/Huerto 1.jpg"
import huerto2 from "../assets/product_images/Huerto 2.jpg"

function ProductCards() {
  return(
    <section className="product-cards">
      <h2>Nuestros Productos</h2>
      <div className="product-card-container"></div>
        <ProductCard src={huerto1} src2={huerto2} alt="" title="Huerto & Jardin" desc="Para uso exterior" />
        <ProductCard src={huerto1} src2={huerto2} alt="" title="Huerto & Jardin" desc="Para uso exterior" />
        <ProductCard src={huerto1} src2={huerto2} alt="" title="Huerto & Jardin" desc="Para uso exterior" />
    </section>
  )
}

export default ProductCards