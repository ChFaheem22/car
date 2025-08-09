'use client';
import { useState } from 'react';
import Navbar from "../components/navbar"
import Partner from "../components/partner";
import Payment from "../components/payment";
import styles from "./kbb.module.css";
import Image from "next/image";
const slides = [
  { src: '/kbb/app1.jpg', alt: 'Slide 1' },
  { src: '/kbb/app2.jpg', alt: 'Slide 2' },
  { src: '/kbb/app3.jpg', alt: 'Slide 3' },
  { src: '/kbb/app4.jpg', alt: 'Slide 4' },
];

const Kbb = () => {
    const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);
  return (
    <div className={styles.faq}>
        <div className={styles.back}>
        <Navbar />
        <div className={styles.herosection}>
          <p className={styles.title}>beat my offer</p>
          <h1>MEET OUR APPRAISER</h1>
        </div>
      </div>
      <Partner/>
      <section className={styles.slider}>
          <p className={styles.subheading}>MEET OVER APPRAISAL</p>
          <h2 className={styles.heading}>Instruction</h2>
          
      <div className={styles.imageWrapper}>
        <Image
          src={slides[current].src}
          alt={slides[current].alt}
          fill
          className={styles.image}
        />
        <div className={styles.overlay}>
          <button className={styles.playButton}>▶</button>
        </div>
        <button className={styles.prev} onClick={prevSlide}>‹</button>
        <button className={styles.next} onClick={nextSlide}>›</button>
        <div className={styles.dots}>
          {slides.map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${i === current ? styles.active : ''}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </section>

    <section className={styles.opportunity}>
        <div className={styles.content}>
          <p className={styles.head}>opportunities</p>
          <h3 className={styles.description}>
            <a href="https://thecartrackers.com/learn-how-easy-it-can-be-to-sell-your-car-fast-with-car-trackers/" target="_blank">
            CAR TRACKER PROVIDES A FUN-FILLED LEARNING</a> ENVIRONMENT AND MAINTAINS FAMILY VALUES THROUGHOUT EVERY DEPARTMENT OF THE COMPANY.
            NOW THAT YOU HAVE HEARD WHAT OUR APPRAISERS THINK, FEEL FREE TO SIGN UP AND SEE WHAT YOU ARE MISSING OUT ON!
          </h3>
          <a href="#" className={styles.cta}>+ JOIN THE TEAM</a>
        </div>
    </section>

    <Payment/>

    </div>
  )
}

export default Kbb
