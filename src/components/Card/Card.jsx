

import './Card.css'
import { FaLongArrowAltRight } from "react-icons/fa";



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
                        <img src="" alt="" />
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
                            <FaLongArrowAltRight />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}