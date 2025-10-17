"use client"

import "@/src/styles/Navbar.css"
import { MdOutlineMenu } from "react-icons/md";
import { useEffect } from 'react'

export default function Navbar(){

    useEffect(() => {
        const navbar = document.getElementById('navbar') as HTMLElement     
        const menuToggle = document.getElementById('mobileMenuToggle') as HTMLElement 
        const navLinks = document.querySelector('.nav__links')  as HTMLElement 

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active')
        })

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    })

    return (
        <>
            <nav className="navbar" id="navbar">
                <div className="nav__container">
                    
                    <div className="logo">
                        <a className="logo__text">Voya</a>
                        <button className="mobile__menu__toggle" id="mobileMenuToggle">
                            <MdOutlineMenu className="hamburger"></MdOutlineMenu>
                        </button>
                    </div>

                    <ul className="nav__links">
                        <li><a href="#home" className="nav__link">Home</a></li>
                        <li><a href="#service" className="nav__link">Service</a></li>
                        <li><a href="#packages" className="nav__link">Package</a></li>
                        <li><a href="#contact" className="nav__link">Contact</a></li>
                    </ul>
                
                    <div className="nav__cta">
                        <button className="btn btn__primary">Book Now</button>
                    </div>
                </div>
            </nav>
        </>
    )
}