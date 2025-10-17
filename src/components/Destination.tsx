import "@/src/styles/Destination.css"
import { IoLocationOutline } from "react-icons/io5";
import Image from 'next/image'

export default function Destination(){
    return(
        <>
           <section id="destination" className="section__container destination__section">
                <div className="container">
                    <div className="section__header revea__-bottom">
                        <h2 className="section__title">Popular Destinations</h2>
                        <p className="section__description">Explore our handpicked selection of breathtaking locations</p>
                    </div>

                    <div className="destination__grid">
                        <div className="destination__card reveal__bottom">
                            <Image src='/images/destination-1.jpg' width={300} height={400} alt="img"  className="destination__image"></Image>
                            <div className="destination__overlay"></div>
                            <div className="destination__content">
                                <div className="destination__location">
                                    <IoLocationOutline></IoLocationOutline>
                                    <span>Indian Ocean</span>
                                </div>
                                <h3 className="destination__title">Seychelles Paradise</h3>
                                <div className="destination__footer">
                                    <span className="destination__price">From $2,499</span>
                                    <button className="btn btn__white">Explore</button>
                                </div>
                            </div>
                        </div>

                        <div className="destination__card reveal__bottom">
                            <Image src='/images/destination-2.jpg' alt="img"  width={300} height={400} className="destination__image"></Image>
                            <div className="destination__overlay"></div>
                            <div className="destination__content">
                                <div className="destination__location">
                                    <IoLocationOutline></IoLocationOutline>
                                    <span>Caribbean Islands</span>
                                </div>
                                <h3 className="destination__title">Caribbean Dreams</h3>
                                <div className="destination__footer">
                                    <span className="destination__price">From $1,899</span>
                                    <button className="btn btn__white">Explore</button>
                                </div>
                            </div>
                        </div>

                        <div className="destination__card reveal__bottom">
                            <Image src='/images/destination-3.jpg' alt="img"  width={300} height={400} className="destination__image"></Image>
                            <div className="destination__overlay"></div>
                            <div className="destination__content">
                                <div className="destination__location">
                                    <IoLocationOutline></IoLocationOutline>
                                    <span>Maldives</span>
                                </div>
                                <h3 className="destination__title">Maldives Luxury</h3>
                                <div className="destination__footer">
                                    <span className="destination__price">From $3,299</span>
                                    <button className="btn btn__white">Explore</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}