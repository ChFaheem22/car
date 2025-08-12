import Navbar from "../components/navbar";
import Payment from "../components/payment";
import styles from "./offer.module.css";
import Image from "next/image";
import {
  FaIndustry,
  FaTools,
  FaHandshake,
  FaRocket,
  FaCogs,
} from "react-icons/fa";

const partners = [
  { name: "Pertamina", icon: <FaIndustry /> },
  { name: "Kyocera", icon: <FaTools /> },
  { name: "Turbologo", icon: <FaHandshake /> },
  { name: "Turkcell", icon: <FaRocket /> },
  { name: "Blender", icon: <FaCogs /> },
];

const offer = () => {
  return (
    <div className={styles.offer}>
      <div className={styles.back}>
        <Navbar />
        <div className={styles.herosection}>
          <p className={styles.title}>Get offer</p>
          <h1>GET AN OFFER</h1>
          <p className={styles.bio}>
            WANT TO BE A CAR TRACKER? CHOOSE AN OPPORTUNITY BELOW THAT FITS YOUR
            SKILLS
          </p>
        </div>
      </div>

      <section className="partners-section">
        <p className="partners-head">OUR PARTNERS & SUPPORTS</p>
        <ul className="partners-grid">
          {partners.map(({ name, icon }, i) => (
            <li key={i} className="partner-card">
              <div className="partner-icon">{icon}</div>
              <p className="partner-name">{name}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.container}>
        <p className={styles.para}>GET AN OFFER</p>
        <h2>Vehicle</h2>
        <p className={styles.para2}>[cq-year] [cq-make] [cq-model] [cq-trim]</p>
        <div className={styles.flexbox}>
          <div className={styles.flex}>
            <input type="text" placeholder="Mileage" />
          </div>
          <div className={styles.flex}>
            <input type="text" placeholder="Condition" />
          </div>
        </div>
        <div className={styles.checkbox}>
          <label className={styles.label}>
            Has your vehicle been in an accident?
          </label>
          <div className={styles.radioGroup}>
            <label className={styles.radioOption}>
              <input
                type="radio"
                name="accident"
                value="yes"
                className={styles.radio}
              />
              <span>Yes</span>
            </label>
            <label className={styles.radioOption}>
              <input
                type="radio"
                name="accident"
                value="no"
                className={styles.radio}
              />
              <span>No</span>
            </label>
          </div>
        </div>
        <button className={styles.button}>Next →</button>
      </section>
      <Payment/>
      
    </div>
  );
};

export default offer;
