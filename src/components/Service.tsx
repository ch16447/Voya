import "@/src/styles/Service.css"
import { RiEarthFill } from "react-icons/ri";
import { IoAirplane } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { RiVipCrownFill } from "react-icons/ri";

export default function Service(){
    return (
        <>
            <section id="service" className="section__container service__section">
                <div className="container">
                    <div className="section__header reveal__bottom">
                        <h2 className="section__title">Our Services</h2>
                        <p className="section__description">We provide comprehensive travel solutions tailored to your needs</p>
                    </div>

                    <div className="service__grid">
                        <div className="service__card reveal__bottom">
                            <div className="service__icon">
                                <RiEarthFill></RiEarthFill>
                            </div>
                            <h3 className="service__title">Tour Packages</h3>
                            <p className="service__description">Curated travel experiences to amazing destinations worldwide</p>
                        </div>

                        <div className="service__card reveal__bottom">
                            <div className="service__icon">
                                <IoAirplane></IoAirplane>
                            </div>
                            <h3 className="service__title">Flight Booking</h3>
                            <p className="service__description">Best deals on flights with flexible booking options</p>
                        </div>

                        <div className="service__card reveal__bottom">
                            <div className="service__icon">
                                <FaUserGroup></FaUserGroup>
                            </div>
                            <h3 className="service__title">Group Tours</h3>
                            <p className="service__description">Join like-minded travelers on exciting group adventures</p>
                        </div>

                        <div className="service__card reveal__bottom">
                            <div className="service__icon">
                                <RiVipCrownFill></RiVipCrownFill>
                            </div>
                            <h3 className="service__title">VIP Services</h3>
                            <p className="service__description">Premium travel experiences with exclusive benefits</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}