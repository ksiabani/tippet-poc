import React from 'react';

const Banner = ({title, text, btnTxt}) =>
  (
    <section className="banner-area" id="home">
      <div className="container">
        <div className="row fullscreen d-flex align-items-center justify-content-center">
          <div className="banner-content col-lg-7">
            <h1>
              {title}
            </h1>
            <p className="pt-20 pb-20">
              {text}
            </p>
            <a className="primary-btn" href="">{btnTxt}</a>
          </div>
        </div>
      </div>
    </section>
  )

export default Banner;
