import React from "react";

export const InfoBlock = () => {
  return (
    <div className="jumbotron about-page__info info col-md-12 col-lg-8">
      <div className="info__developer developer">
        <h5 className="developer__title">Developer</h5>
        <p className="developer__content">Bilokrynytskyi Yehor</p>
      </div>
      <div className="info__social social">
        <h5 className="social__title">Social</h5>
        <div className="social__content">
          <p>
            <a
              href="https://t.me/sallin_prod"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-telegram" aria-hidden="true" />
              <span className="link-text"> Telegram</span>
            </a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/sallin.prod/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-instagram" aria-hidden="true" />
              <span className="link-text"> Instagram</span>
            </a>
          </p>
        </div>
      </div>
      <div className="info__contacts">
        <h5>Contacts</h5>
        <p>
          <i className="fa fa-mobile" aria-hidden="true"></i>
          <span> +380969753760</span>
        </p>
        <p>
          <i className="fa fa-envelope-o" aria-hidden="true"></i>
          <span className="link-text"> sallin.prod@gmail.com</span>
        </p>
      </div>
    </div>
  );
};
