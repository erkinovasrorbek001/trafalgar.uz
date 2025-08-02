import React from 'react';
import './Leading.css';
import Doctor from './images/Doctor.png';
import App from './images/App.png';


const Leading = () => {
  return (
    <div className="Leading">
      <div className="container">
        <div className="Leading__container">
          <div className="Leading__body">
            <div className="Leading__box">
              <img className="Leading__img" src={Doctor} alt="Doctor" />
            </div>

            <div className="Leading__boxs">
              <h1 className="Leading__title">Leading healthcare providers</h1>
              <p className="Leading__text">
                Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. 
                To us, it’s not just work. We take pride in the solutions we deliver.
              </p>
              <button className="Leading__button">Learn more</button>
            </div>
          </div>

          <div className="Leading__apps">
            <div className="Leading__mobile">
              <h2 className='apps__title'>Download our mobile apps</h2>
              <p className='apps__text'>Our dedicated patient engagement app and 
             web portal allow you to access information instantaneously no tedeous form, long calls, 
             or administrative hassle and securely</p>
             <button className='apps__button'>Download</button>
            </div>

            <div className="apps__dev">
              <img className='apps__img' src= {App} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leading;
