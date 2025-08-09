import Navbar from "../components/navbar"
import Partner from "../components/partner";
import Payment from "../components/payment";
import styles from "./beat.module.css";

const BeatOffer = () => {
  return (
    <div className={styles.BeatOffer}>
      <div className={styles.back}>
        <Navbar />
        <div className={styles.herosection}>
          <p className={styles.title}>beat my offer</p>
          <h1>BEAT MY OFFER <br />
          BY CARTRACKER</h1>
        </div>
      </div>
      <Partner/>

      <section className={styles.wrapper}>
      <h3 className={styles.heading}>Send us your offer to receive an instant quote!</h3>
      <form className={styles.form}>
        <div className={styles.grid}>
          <input type="text" placeholder="VIN" className={styles.input} />
          <input type="text" placeholder="Make" className={styles.input} />
          <input type="text" placeholder="Mileage" className={styles.input} />
          <input type="text" placeholder="Desired Price" className={styles.input} />
          <input type="text" placeholder="Year" className={styles.input} />
        <input type="text" placeholder="Model" className={styles.input} />
        </div>
        
        <input type="text" placeholder="Written Offer" className={styles.input} />
        <button type="submit" className={styles.button}>SUBMIT NOW</button>
      </form>
    </section>
    <Payment/>
    </div>
  )
}

export default BeatOffer
