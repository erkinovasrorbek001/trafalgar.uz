import React from 'react'
import './ourser.css';
import { FaSearch } from "react-icons/fa";
import { MdLocalPharmacy } from "react-icons/md";
const Service = () => {
  return (
     <div class="service">
            <div class="container sercice__container">
                <h1 class="service__title">Our services</h1>
                <hr/>
                <p class="service__text">We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
                <ul class="service__list">
                    <li class="service__item">
                        <FaSearch />
                        <h2 class="service__title-name">Online pharmacy</h2>
                        <p class="service__text-name">Buy  your medicines with our mobile application with a simple delivery system</p>
                    </li>
                    <li class="service__item">
                        <MdLocalPharmacy />
                        <h2 class="service__title-name">Online pharmacy</h2>
                        <p class="service__text-name">Buy  your medicines with our mobile application with a simple delivery system</p>
                    </li>
                    <li class="service__item">
                         <MdLocalPharmacy />
                        <h2 class="service__title-name">Consultation</h2>
                        <p class="service__text-name">Free consultation with our trusted doctors and get the best recomendations</p>
                    </li>
                    <li class="service__item">
                        <MdLocalPharmacy />
                        <h2 class="service__title-name">Details info</h2>
                        <p class="service__text-name">Free consultation with our trusted doctors and get the best recomendations</p>
                    </li>
                    <li class="wrapper__item">
                         <MdLocalPharmacy />
                        <h2 class="service__title-name">Emergency care</h2>
                        <p class="service__text-name">You can get 24/7 urgent care for yourself or your children and your lovely family</p>
                    </li>
                    <li class="service__item">
                         <MdLocalPharmacy />
                        <h2 class="service__title-name">Tracking</h2>
                        <p class="service__text-name">Track and save your medical history and health data </p>
                    </li>
                </ul>
                <button class="container service_button">Learn more</button>
            </div>
        </div>
  )
}
export default Service

