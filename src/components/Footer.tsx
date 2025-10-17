import "@/src/styles/Footer.css"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer(){
    return(
        <>
           <footer className="footer">
                <div className="container">
                    <div className="footer__grid">
                        <div className="footer__col">
                            <div className="footer__logo">
                                <span className="logo__text">Voya</span>
                            </div>
                            <p className="footer__description">
                                Your trusted partner in creating unforgettable travel experiences around the globe.
                            </p>
                        </div>

                        <div className="footer__col">
                            <h3 className="footer__title">Explore</h3>
                            <ul className="footer__links">
                                <li><a>Destinations</a></li>
                                <li><a>Travel Guidess</a></li>
                                <li><a>Experiences</a></li>
                                <li><a>Blog</a></li>
                            </ul>
                        </div>

                        <div className="footer__col">
                            <h3 className="footer__title">Contact</h3>
                            <ul className="footer__contact">
                                <li><a>123 Travel Street</a></li>
                                <li><a>Taiwan, Teipei</a></li>
                                <li><a>info@voya.com</a></li>
                                <li><a>+886 912-222-333-444</a></li>
                            </ul>
                        </div>

                        <div className="footer__col">
                            <h3 className="footer__title">Follow Us</h3>
                            <div className="footer__social">
                                <a href="#" className="social__link">
                                    <FaFacebookF></FaFacebookF>
                                </a>
                                <a href="#" className="social__link">
                                    <FaInstagram></FaInstagram>
                                </a>
                                <a href="#" className="social__link">
                                    <FaXTwitter></FaXTwitter>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="footer__bottom">
                        <p>&copy; 2025 Voya Travel. All rights reserved. Designed with passion for exploration.</p>
                    </div>
                </div>
            </footer>

        </>
    )
}