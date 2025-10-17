import "@/src/styles/Packages.css"
import Image from 'next/image'

export default function Packages(){
    return(
        <>
            <section id="packages" className="section__container packages__section">
                <div className="container">
                    <div className="section__header reveal__bottom">
                        <h2 className="section__title">Our Best Packages</h2>
                        <p className="section__description">Handpicked travel packages for every adventurer</p>
                    </div>

                    <div className="packages__grid">
                        <div className="package__card reveal__bottom">
                            <Image src='/images/package-1.jpg' alt="img" width='300' height='240' style={{width : '100%', height : '240px'}} className="package__image"></Image>
                            <div className="package__content">
                                <h3 className="package__title">Tropical Island Escape</h3>
                                <p className="package__duration">7 Days / 6 Nights - $1,999</p>
                                <ul className="package__features">
                                    <li>Luxury Accommodation</li>
                                    <li>Guided Tours</li>
                                    <li>Snorkeling & Diving</li>
                                </ul>
                                <button className="btn btn__primary btn__full">View Details</button>
                            </div>
                        </div>

                        <div className="package__card reveal__bottom">
                            <Image src='/images/package-2.jpg'  alt="img" width='300' height='240' style={{width : '100%', height : '240px'}} className="package__image"></Image>
                            <div className="package__content">
                                <h3 className="package__title">Mountain Adventure</h3>
                                <p className="package__duration">5 Days / 4 Nights - $1,299</p>
                                <ul className="package__features">
                                    <li>Hiking Trails</li>
                                    <li>Camping Experience</li>
                                    <li>Local Cuisine</li>
                                </ul>
                                <button className="btn btn__primary btn__full">View Details</button>
                            </div>
                        </div>

                        <div className="package__card reveal__bottom">
                            <Image src='/images/package-3.jpg'  alt="img" width='300' height='240' style={{width : '100%', height : '240px'}} className="package__image"></Image>
                            <div className="package__content">
                                <h3 className="package__title">Desert Safari & Oasis</h3>
                                <p className="package__duration">3 Days / 2 Nights - $899</p>
                                <ul className="package__features">
                                    <li>Dune Bashing</li>
                                    <li>Camel Ride</li>
                                    <li>Stargazing</li>
                                </ul>
                                <button className="btn btn__primary btn__full">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}