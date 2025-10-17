import "@/src/styles/Home.css"
import Image from "next/image";
import { BiPolygon } from "react-icons/bi";

export default function HomeComponent(){
    return (
        <>
            <section id="home" className="hero__section">
                <div className="container">
                    <div className="hero__grid">
                        <div className="hero-content reveal__left">
                            <h1 className="hero__title">
                                Explore the <span className="text__gradient">World</span> with Us
                            </h1>
                            <p className="hero__description">
                                Discover breathtaking destinations, create unforgettable memories, and embark on the adventure of a lifetime. Your journey begins here.
                            </p>
                            <div className="hero__buttons">
                                <button className="btn btn__primary">Start Exploring</button>
                                <button className="btn btn__outline">Learn More</button>
                            </div>
                        </div>
                        <div className="hero__image__wrapper reveal__right">
                            <Image src='/images/beach-2.jpg' alt="img" width='800' height='800' style={{ width: '100%', height: '500' }} className="hero__image"></Image>
                            <div className="hero__state__card">
                                <div className="stat__icon">
                                    <BiPolygon className='svg__icon'></BiPolygon>
                                </div>
                                <div className="stat__content">
                                    <p className="stat__number">500+</p>
                                    <p className="stat__label">Destinations</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}