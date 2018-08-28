import React from 'react'

const Grid = ({ elemId, title, subtitle, services }) =>
  (
    <section className="we-offer-area section-gap" id={elemId}>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-60 col-lg-10">
            <div className="title text-center">
              <h1 className="mb-10">{title}</h1>
              <p>{subtitle}</p>
            </div>
          </div>
        </div>
        <div className="row flex-wrap">
          {services.map((service, i) => (
            <div className="single-offer d-flex flex-row pb-30" key={i}>
              <div className="icon">
                <img src={`img/${service.icon}`} alt={service.title}/>
              </div>
              <div className="desc">
                <a href=""><h4>{service.title}</h4></a>
                <p>{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )

export default Grid
