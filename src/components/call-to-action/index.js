import React from 'react';

const CallToAction = ({elemId, title, text, btnTxt}) => (
    <section className="callto-action-area relative section-gap" id={elemId}>
      <div className="overlay overlay-bg" />
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content col-lg-9">
            <div className="title text-center">
              <h1 className="mb-10 text-white">{title}</h1>
              <p className="text-white">{text}</p>
              <a className="primary-btn" href="">{btnTxt}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

export default CallToAction;
