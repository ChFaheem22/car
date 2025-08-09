import styles from "./contact.module.css"
import Navbar from "../components/navbar"
import BusyBanner from "../components/busy"
import Payment from "../components/payment";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const contact = () => {
  return (
    <div className={styles.contact}>
        <div className={styles.back}>
        <Navbar />
        <div className={styles.herosection}>
          <p className={styles.title}>Contact Us</p>
          <h1>SELL YOUR CAR 
            <br />OVER THE PHONE
          </h1>
        </div>
      </div>
      <BusyBanner />

      <section className={styles.contactSection}>
      <div className={styles.contactInfo}>
        <div className={styles.infoItem}>
          <FaMapMarkerAlt className={styles.icon}/>
          <p>198 West 21th Street, Suite 721 New York NY 10016</p>
        </div>
        <div className={styles.infoItem}>
          <FaPhone className={styles.icon}/>
          <p>+1235 2355 98</p>
        </div>
        <div className={styles.infoItem}>
          <FaEnvelope className={styles.icon} />
          <p>info@yoursite.com</p>
        </div>
      </div>

      <h2 className={styles.heading}>Get in touch with us</h2>

      <form className={styles.form}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="text" placeholder="Subject" />
        <textarea  rows="6"></textarea>
        <button type="submit">SEND MESSAGE</button>
      </form>
    </section>
    <Payment/>
      
    </div>
  )
}

export default contact
