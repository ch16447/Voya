import "@/src/styles/Gallery.css"
import Image from 'next/image'

export default function Gallery(){
    return(
        <>
            <section id="gallery" className="section__container gallery__section">
                <div className="container">
                    <div className="section__header reveal__bottom">
                        <h2 className="section__title">Travel Gallery</h2>
                        <p className="section__description">Captured moments from our travelers' incredible journeys</p>
                    </div>

                    <div className="gallery__grid">
                        <div className="gallery__item reveal__bottom"><Image src='/images/gallery-1.jpg' alt="img" width='500' height='500' style={{width:'100%', height:'100%'}}></Image></div>
                        <div className="gallery__item reveal__bottom"><Image src='/images/gallery-2.jpg' alt="img" width='500' height='500' style={{width:'100%', height:'100%'}}></Image></div>
                        <div className="gallery__item reveal__bottom"><Image src='/images/gallery-3.jpg' alt="img" width='500' height='500' style={{width:'100%', height:'100%'}}></Image></div>
                        <div className="gallery__item reveal__bottom"><Image src='/images/gallery-4.jpg' alt="img" width='500' height='500' style={{width:'100%', height:'100%'}}></Image></div>
                        <div className="gallery__item reveal__bottom"><Image src='/images/gallery-5.jpg' alt="img" width='500' height='500' style={{width:'100%', height:'100%'}}></Image></div>
                        <div className="gallery__item reveal__bottom"><Image src='/images/gallery-6.jpg' alt="img" width='500' height='500' style={{width:'100%', height:'100%'}}></Image></div>
                        <div className="gallery__item reveal__bottom"><Image src='/images/gallery-7.jpg' alt="img" width='500' height='500' style={{width:'100%', height:'100%'}}></Image></div>
                        <div className="gallery__item reveal__bottom"><Image src='/images/gallery-8.jpg' alt="img" width='500' height='500' style={{width:'100%', height:'100%'}}></Image></div>
                    </div>
                </div>
            </section>

        </>
    )
}