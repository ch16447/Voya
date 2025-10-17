import "@/src/styles/Testimonials.css"

export default function Testimonials(){
    return (
        <section id="testimonials" className="section__container testimonials__section">
            <div className="container">
                <div className="section__header reveal__bottom">
                    <h2 className="section__title">What Our Travelers Say</h2>
                    <p className="section__description">Hear from our happy customers about their unforgettable experiences</p>
                </div>

                <div className="swiper testimonials__swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="testimonial__card">
                                <div className="testimonial__header">
                                    <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="Alice Johnson" className="testimonial__avatar" />
                                    <div className="testimonial__info">
                                        <h3 className="testimonial__name">Alice Johnson</h3>
                                        <div className="testimonial__stars">★★★★★</div>
                                    </div>
                                </div>
                                <p className="testimonial__text">"Voya Travel made my dream vacation a reality! The itinerary was perfect, and every detail was handled flawlessly. Highly recommend!"</p>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="testimonial__card">
                                <div className="testimonial__header">
                                    <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="Bob Williams" className="testimonial__avatar" />
                                    <div className="testimonial__info">
                                        <h3 className="testimonial__name">Bob Williams</h3>
                                        <div className="testimonial__stars">★★★★★</div>
                                    </div>
                                </div>
                                <p className="testimonial__text">"An incredible adventure from start to finish. The team was super helpful, and the destinations were breathtaking. Can't wait for my next trip!"</p>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="testimonial__card">
                                <div className="testimonial__header">
                                    <img src="https://randomuser.me/api/portraits/women/3.jpg" alt="Carol Davis" className="testimonial__avatar" />
                                    <div className="testimonial__info">
                                        <h3 className="testimonial__name">Carol Davis</h3>
                                        <div className="testimonial__stars">★★★★★</div>
                                    </div>
                                </div>
                                <p className="testimonial__text">"The best travel experience I've ever had. Everything was seamless, and the local guides were fantastic. Five stars!"</p>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="testimonial__card">
                                <div className="testimonial__header">
                                    <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="David Lee" className="testimonial__avatar" />
                                    <div className="testimonial__info">
                                        <h3 className="testimonial__name">David Lee</h3>
                                        <div className="testimonial__stars">★★★★★</div>
                                    </div>
                                </div>
                                <p className="testimonial__text">"Absolutely loved my trip! The attention to detail and personalized service were outstanding. A truly memorable experience."</p>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="testimonial__card">
                                <div className="testimonial__header">
                                    <img src="https://randomuser.me/api/portraits/women/5.jpg" alt="Eva Green" className="testimonial__avatar" />
                                    <div className="testimonial__info">
                                        <h3 className="testimonial__name">Eva Green</h3>
                                        <div className="testimonial__stars">★★★★★</div>
                                    </div>
                                </div>
                                <p className="testimonial__text">"From booking to return, everything was smooth and enjoyable. Wanderlust Travel exceeded all my expectations. Thank you!"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}