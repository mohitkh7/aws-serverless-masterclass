import React from 'react';
import {FaEnvelope, FaPhone} from 'react-icons/fa';

const Profile = () => {
  return <div className="card profile mt-4">
    <div className="card-body">
      <div className="row">
        <div className="col-lg-2 col-md-3 text-center">
          <img className="img img-fluid profile__img" src="./mohit_profile_image.jpg" alt="Mohit Khandelwal profile" />
        </div>
        <div className="col-lg-10 col-md-9">
          <div className="profile__head">
            <header className="profile__info mt-3 mt-md-0">
              <h3 className="profile__name">Mohit Khandelwal</h3>
              <div className="profile__title">Full-Stack Developer</div>
            </header>
            <address className="profile__contact mt-3 mt-md-0">
              <div className="profile__email">
                <FaEnvelope /> 
                <a className="no-anchor-style" href="mailto: mohitkh7@gmail.com"> mohitkh7@gmail.com</a>
              </div>
              <div className="profile__phone">
                <FaPhone /> 
                <a className="no-anchor-style" href="tel:+9194072211xx"> (+91) 9407 2211 xx</a></div>
            </address>
          </div>
          <main className="profile__description">
            Mohit is a self learned full stack developer. He specializes in Python and Javascript and
            thrives to make websites that users love. He is always eager to learn, share and expand
            knowledge.
          </main>
        </div>
      </div>
    </div>
  </div>
}

export default Profile;
