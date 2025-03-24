import arrow from '../assets/arrow_white.svg'

function Button({ text }) {
  return(
    <button className='button-default'>
      <span className='button-text' >{ text }</span>
      <img src={ arrow }></img>
    </button>
  )
}

export default Button