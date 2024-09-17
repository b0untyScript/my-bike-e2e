import React from "react";
import "../../styles/Footer.scss";

const Footer = () => {
    return (
        <section className="contactUs">
            <p className="pContact">Contact us</p>

            <div className="wrapper">
                <section className="formCallback">
                    <form className="contactForm">
                        <input type="text" name="name" placeholder="Name" className="inputField nameField" />
                        <input type="email" name="email" placeholder="Email" className="inputField emailField" />
                        <textarea name="message" placeholder="Message" className="inputField messageField"></textarea>
                        <button type="submit" className="submitButton">Send</button>
                    </form>
                </section>

                <section className="firstContainer">
                    <div className="contactConteiner">
                        <p className="element">Phone</p>
                        <p className="element">+1 234 5555-55-55</p>
                    </div>
                    <div className="contactConteiner">
                        <p className="element">Email</p>
                        <p className="element">hello@miami.com</p>
                    </div>
                    <div className="contactConteiner">
                        <p className="element">Address</p>
                        <p className="element">400 first ave.suite 700 Minneapolis, MN 55401</p>
                    </div>
                </section>
            </div>
            <div className="footerImg"></div>
        </section>
    );
};

export default Footer;
