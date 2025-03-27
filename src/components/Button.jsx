import arrow from '../assets/arrow_white.svg'

function Button({ text }) {
  return(
    <button className='button-default'>
        <span className='button-text' >{ text } <img src={ arrow }></img></span>
    </button>
  )
}

export default Button