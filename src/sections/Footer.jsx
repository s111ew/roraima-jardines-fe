import Input from "../components/Input"
import Button from "../components/Button"
import facebookIcon from "../assets/facebook_black.svg"
import instagramIcon from "../assets/instagram_black.svg"

function Footer() {
  return (
    <footer>
      <h2>Consulta Con Nosotros</h2>
      <div className="form-container" >
        <p>
          <span>Si necesitas contactarnos por algo, escríbenos aquí y te responderemos lo antes posible.</span>
          <span>También puedes llamarnos o visitarnos:</span>
          <span>Teléfono<br></br>+34 616626407</span>
        </p>
        <form action="">
          <Input text="Nombre*" />
          <Input text="Email*" />
          <Input text="Mensaje*" />
          <Button text="Enviar Mensaje" />
        </form>
      </div>
      <h2>Síguenos en redes</h2>
      <div className="links-container">
        <div className="link facebook">
          <img src={ facebookIcon }></img>
          <span>Facebook</span>
        </div>
        <div className="link instagram">
          <img src={ instagramIcon }></img>
          <span>Instagram</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer