import React from "react";
import './CSS/menu.css'
function Menu(props){
    return(
        <div className={`menu-container ${props.class}`}>
            <div className="lang">
                <a href="#" className='en active'>English</a>
                <a href="#" className='hi' disabled>हिन्दी</a>
            </div>
            <p>Categories</p>
            <ul className="topics-list">
                <li className='active'> <a href="all"> All </a></li>
                <li>
                    <a href="india">India</a>
                </li>
                <li>
                    <a href="business">Business</a>
                </li>
                <li>
                    <a href="sport"> Sport</a>
                </li>
                <li>
                    <a href="politics">Politics</a>
                </li>
                <li>
                    <a href="international">International</a>
                </li>
                <li>
                    <a href="science">Science</a>
                </li>
                <li>
                    <a href="startup">Startup</a>
                </li>
                <li>
                    <a href="technology">Technology</a>
                </li>
                <li>
                    <a href="automobile">Automobile</a>
                </li>
                <li>
                    <a href="hatke">Hatke</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu
