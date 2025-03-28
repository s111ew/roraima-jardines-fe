function TestimonalCard({text, logo, storeName, ownerName}) {
  return(
    <div className="testimonial-card">
      <div className="testimonial-top">{text}</div>
      <div className="testimonial-bottom">
        <img src={logo} alt="" />
        <div className="testimonial-information">
          <h3 className="testimonial-name">{ownerName}</h3>
          <p className="testimonial-store">{storeName}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonalCard