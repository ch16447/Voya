"use client"

import '@/src/app/globals.css'
import Navbar from "@/src/components/Navbar";
import HomeComponent from "@/src/components/Home";
import Service from "@/src/components/Service";
import Packages from '@/src/components/Packages';
import Destination from "@/src/components/Destination";
import Gallery from "@/src/components/Gallery";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";
import Swiper from "swiper"
import 'swiper/css';
import { useEffect } from 'react';
import Testimonials from '@/src/components/Testimonials';

export default function Home() {

  useEffect(() => {
     const ScrollReveal = require("scrollreveal").default;
    ScrollReveal().reveal('.reveal__left', {
    origin: 'left',
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    delay: 200
    });

    ScrollReveal().reveal('.reveal__right', {
        origin: 'right',
        distance: '50px',
        duration: 1000,
        easing: 'ease-in-out',
        delay: 200
    });

    ScrollReveal().reveal('.reveal__bottom', {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        easing: 'ease-in-out',
        delay: 200,
        interval: 100
    });

    ScrollReveal().reveal('.reveal__top', {
        origin: 'top',
        distance: '50px',
        duration: 1000,
        easing: 'ease-in-out',
        delay: 200
    });

    ScrollReveal().reveal('.reveal__fade', {
        opacity: 0,
        duration: 1000,
        easing: 'ease-in-out',
        delay: 200
    });

    const swiper = new Swiper('.testimonials__swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            grabCursor: true,
            autoplay: {
                delay: 1800,
                disableOnInteraction: false,
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
        });
      })


  return (
    <>
      <Navbar></Navbar>
      <HomeComponent></HomeComponent>
      <Service></Service>
      <Packages></Packages>
      <Destination></Destination>
      <Gallery></Gallery>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
