import "@/src/styles/Contact.css"
import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

export default function Contact(){
    return (
        <>
          <section id="contact" className="section__container contact__section">
            <div className="container">
                <div className="section__header reveal__bottom">
                <h2 className="section__title">Let's Plan Your Next Adventure</h2>
                <p className="section__description">
                    Have questions or ready to book? Reach out to us, and we'll help you create unforgettable memories.
                </p>
                </div>

                <div className="contact__grid">
                <div className="contact__form__wrapper reveal__left">
                    <h3 className="contact__form__title">Send Us a Message</h3>
                    <form className="contact__form">
                    <input type="text" placeholder="Your Name" className="form__input" />
                    <input type="email" placeholder="Email Address" className="form__input" />
                    <textarea
                        rows={6}
                        placeholder="Tell us about your dream destination..."
                        className="form__textarea"
                    ></textarea>
                    <button type="submit" className="btn btn__primary btn__full">
                        Send Message
                    </button>
                    </form>
                </div>

                <div className="contact__info__wrapper reveal__right">
                    <h3 className="contact__info__title">Contact Information</h3>
                    <div className="contact__info__list">
                    <div className="contact__info__item">
                        <div className="contact__icon">
                        <AiOutlineMail></AiOutlineMail>
                        </div>
                        <div>
                        <p className="contact__label">Email Us</p>
                        <p className="contact__value">info@wanderlust.com</p>
                        </div>
                    </div>

                    <div className="contact__info__item">
                        <div className="contact__icon">
                            <IoCallOutline></IoCallOutline>
                        </div>
                        <div>
                            <p className="contact__label">Call Us</p>
                            <p className="contact__value">+1 (555) 123-4567</p>
                        </div>
                    </div>

                    <div className="contact__info__item">
                        <div className="contact__icon">
                            <CiLocationOn></CiLocationOn>
                        </div>
                        <div>
                        <p className="contact__label">Visit Us</p>
                        <p className="contact__value">123 Travel Street, Adventure City</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </>
    )
}