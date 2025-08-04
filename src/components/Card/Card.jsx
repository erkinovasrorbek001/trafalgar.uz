

import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import './Card.css'
import img1 from "../Card/Images/img1.png"
import img2 from "../Card/Images/img2.png"
import img3 from "../Card/Images/img3.png"



export default function Card(){
    return(
        <div className="card">
            <div className="container">
                <h1 className="card-title">
                    Check out our latest article
                </h1>
                <hr />
                <ul className="card-list">
                    <li className="card-item">
                        <img className='card-img' src={img1} alt="" />
                        <h3 className="card-subtitle">
                            Disease detection, check 
                            up in the laboratory
                        </h3>
                        <p className="card-text">
                            In this case, the role of the health laboratory is very important to do
                            a disease detection...
                        </p>
                        <div className="card-bar">
                            <a href="#" className="card-link">Read More</a>
                            <FaLongArrowAltRight className='card-icon' />
                        </div>
                    </li>
                    <li className="card-item">
                        <img className='card-img' src={img2} alt="" />
                        <h3 className="card-subtitle">
                            Herbal medicines that are 
                            safe for consumption
                        </h3>
                        <p className="card-text">
                            Herbal medicine is very widely used at this time because of its very good for your health...
                        </p>
                        <div className="card-bar">
                            <a href="#" className="card-link">Read More</a>
                            <FaLongArrowAltRight className='card-icon' />
                        </div>
                    </li>
                    <li className="card-item">
                        <img className='card-img' src={img3} alt="" />
                        <h3 className="card-subtitle">
                            Natural care for healthy 
                            facial skin
                        </h3>
                        <p className="card-text">
                            A healthy lifestyle should start from now and also for your skin health.
                            There are some...
                        </p>
                        <div className="card-bar">
                            <a href="#" className="card-link">Read More</a>
                            <FaLongArrowAltRight className='card-icon' />
                        </div>
                    </li>
                </ul>
                <button className="card-btn">
                    View all
                </button>
            </div>
        </div>
    )
}