import React, { useState, useEffect } from "react";
import "../../styles/Header.scss";
import iconPhone from "/public/images/Icon-Phone-call.png";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isMenuOpen]);

    return (
        <header>
            <section className="topOfHeader">
                <div className={`logoOfHeader ${isMenuOpen ? "logoDark" : ""}`}>
                    <p className="textLogo">My</p>
                    <p className="textLogo">BIKE</p>
                </div>

                <div className="navigationOfHeader">
                    <div>
                        <img className="iconPhone" src={iconPhone} alt="Phone Icon" />
                    </div>
                    <div className="burgerMenu">
                        <button onClick={toggleMenu} className={`burgerButton ${isMenuOpen ? "open" : ""}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <nav className={`menu ${isMenuOpen ? "open" : ""}`}>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Compare Bikes</a></li>
                                <li><a href="#">Details</a></li>
                                <li><a href="#">Contacts</a></li>
                            </ul>
                            <div className="firstContact">
                                <p className="firstP">+1 234 5555-55-55</p>
                            </div>
                            <p className="footerLink">Book a test ride</p>
                        </nav>
                    </div>
                </div>
            </section>

            <div className="centeredText">
                <h1 className="h1Text">Take the Streets</h1>
            </div>
        </header>
    );
};

export default Header;