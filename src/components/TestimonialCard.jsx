import quote from '../assets/quoteIcon.svg'

function TestimonalCard({text, logo, storeName, ownerName}) {
  return(
    <div className="testimonial-card">
      <div className="testimonial-top">
        <img className='quote-icon start' src={quote} alt="" style={{transform: 'rotate(180deg)'}} />
        <p className="testimonial-body">{text}</p>
        <img className='quote-icon end' src={quote} alt="" />
      </div>
      <div className="testimonial-bottom">
        <img className='testimonial-photo' src={logo} alt="" />
        <div className="testimonial-information">
          <h3 className="testimonial-name">{ownerName}</h3>
          <p className="testimonial-store">{storeName}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonalCard