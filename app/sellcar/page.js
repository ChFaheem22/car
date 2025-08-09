import Navbar from "../components/navbar";
import BusyBanner from "../components/busy";
import Payment from "../components/payment";
import styles from "./sellcar.module.css";
import Image from "next/image";

const sellCar = () => {
  return (
    <div className={styles.sellcar}>
      <div className={styles.back}>
        <Navbar />
        <div className={styles.herosection}>
          <p>we make this easy</p>
          <h1>
            SELL YOUR CAR
            <br />
            OVER THE PHONE
          </h1>
        </div>
      </div>
      <BusyBanner/>

      <section className={styles.sellSection}>
        <div className={styles.leftBox}>
          <h2 className={styles.stepTag}>SELL YOUR CAR</h2>
          <h3 className={styles.sellTitle}>Step: 01</h3>
          <p className={styles.sellDesc}>
            Send over your vehicle information and photos using this form and
            we’ll get you an offer right away.
          </p>
          <p className={styles.sellNote}>Photos must include:</p>
          <ul className={styles.photoList}>
            <li>4 corners of the vehicle</li>
            <li>Odometer reading</li>
            <li>Any damages</li>
          </ul>
        </div>

        <form className={styles.formBox}>
          <div className={styles.grid}>
            <div className={styles.fieldGroup}>
              <input type="text" required placeholder="Name (required)" />
            </div>

            <div className={styles.fieldGroup}>
              <input type="email" placeholder="Email Address" />
            </div>

            <div className={styles.fieldGroup}>
              <input
                type="tel"
                required
                placeholder="Phone Number (required)"
              />
            </div>

            <div className={styles.fieldGroup}>
              <input type="number" placeholder="Miles" />
            </div>

            <div className={styles.fieldGroup}>
              <input type="text" placeholder="Year, Make, Model" />
            </div>
          </div>

          <div className={styles.grid}>
            <div className={styles.fieldGroup}>
              <label>Upload Front Driver Corner</label>
              <input type="file" />
            </div>
            <div className={styles.fieldGroup}>
              <label>Upload Rear Passenger Corner</label>
              <input type="file" />
            </div>
            <div className={styles.fieldGroup}>
              <label>Upload Rear Driver Corner</label>
              <input type="file" />
            </div>
            <div className={styles.fieldGroup}>
              <label>Upload Front Passenger Corner</label>
              <input type="file" />
            </div>
            <div className={styles.fieldGroup}>
              <label>Upload Odometer Reading</label>
              <input type="file" />
            </div>
            <div className={styles.fieldGroup}>
              <label>Upload Any Damages</label>
              <input type="file" />
            </div>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Submit Now
          </button>
        </form>
      </section>

      <section className={styles.getPaidSection}>
        <div className={styles.textColumn}>
          <p className={styles.tag}>HOW TO GET PAID</p>
          <h2 className={styles.step}>Step: 02</h2>
          <p className={styles.details}>
            When you accept our offer, we ll send you paperwork + payment. After
            you get your money, send back the paperwork and we ll pick up your
            vehicle for free!
          </p>
          <button className={styles.quoteBtn}>GET QUOTE →</button>
        </div>

        <div className={styles.imageBoxTop}>
          <Image
            src="/sellcar/paid1.jpg"
            width={700}
            height={370}
            alt="Mechanic inspecting car"
          />
        </div>

        <div className={styles.imageBoxBottom}>
          <Image
            src="/sellcar/paid2.jpg"
            width={700}
            height={370}
            alt="Handing over keys"
          />
        </div>

        <div className={styles.faqBox}>
          <p className={styles.faqtag}>FREQUENT QUESTIONS</p>
          <h3 className={styles.faqTitle}>FREQUENT QUESTIONS</h3>
          <ul className={styles.faqList}>
            <li>What does a car tracker tell you?</li>
            <li>What frequency do car trackers use?</li>
            <li>How long do car trackers work?</li>
            <li>Can thieves block trackers?</li>
            <li>What does a car tracker tell you?</li>
          </ul>
        </div>
      </section>
      <Payment/>
      
    </div>
  );
};

export default sellCar;
