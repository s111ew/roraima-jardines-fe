import TestimonialCard from "../components/TestimonialCard";
import deliciasImg from "../assets/testimonial_images/delicias.jpg"
import benedeImg from "../assets/testimonial_images/flores-benede.jpg"
import carmenImg from "../assets/testimonial_images/flores-carmen.jpg"
import elValleImg from "../assets/testimonial_images/floristeria-el-valle.jpg"
import velaImg from "../assets/testimonial_images/jardineria-vela.jpg"
import rossiImg from "../assets/testimonial_images/rossiflor.jpg"
import hpImg12 from "../assets/homepage_images/HP12.jpg"
import hpImg13 from "../assets/homepage_images/HP13.jpg"
import hpImg14 from "../assets/homepage_images/HP14.jpg"
import hpImg15 from "../assets/homepage_images/HP15.jpg"


function Testimonial() {
  return(
    <section className="testimonials">
      <h2>Nuestros Clientes</h2>
      <div className="testimonials-container">
        <TestimonialCard text={"La tierra es excepcional; su textura es perfecta para el drenaje y retener la humedad, lo que ha permitido que mis plantas crezcan sanas y vigorosas."} logo={carmenImg} storeName={'Flores Carmen'} ownerName={'Nacho y Leticia'} />
        <TestimonialCard text={"Vendemos el sustrato de Roraima Jardines desde hace más de 15 años sabiendo que ofrecemos un producto de calidad. Quienes los prueban, repiten."} logo={deliciasImg} storeName={'Vivero Delicias'} ownerName={'Manuela'} />
        <TestimonialCard text={"La tierra es excepcional; su textura es perfecta para el drenaje y retener la humedad, lo que ha permitido que mis plantas crezcan sanas y vigorosas."} logo={elValleImg} storeName={'Floritería El Valle'} ownerName={'Kellyng'} />
      </div>
      <div className="testimonial-images">
        <img id="homepage-img-12" src={hpImg12} alt="" />
        <img id="homepage-img-13" src={hpImg13} alt="" />
        <img id="homepage-img-14" src={hpImg14} alt="" />
        <img id="homepage-img-15" src={hpImg15} alt="" />
      </div>
      <div className="testimonials-container">
      <TestimonialCard text={"La calidad es excelente: es rica en nutrientes, tiene una textura ideal para trabajar y ha mejorado notablemente el crecimiento de mis plantas."} logo={velaImg} storeName={'Jardinería Vela'} ownerName={'Isabel'} />
      <TestimonialCard text={"Estoy súper contenta con la amabilidad y la presentación de productos. Las entregas son puntuales y los resultados son estupendos."} logo={benedeImg} storeName={'Floristería Nieves'} ownerName={'Nieves'} />
      <TestimonialCard text={"Todos los clientes repiten después de haber probado otros. Para nosotros el servicio es estupendo, pides y enseguida te lo llevan."} logo={rossiImg} storeName={'Rossiflor'} ownerName={'Begoña'} />
      </div>
    </section>
  )
}

export default Testimonial