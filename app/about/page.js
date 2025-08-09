import Navbar from "../components/navbar";
import Partner from "../components/partner";
import Payment from "../components/payment";
import styles from "./about.module.css";
import Link from "next/link";
import jobs from "./data";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.back}>
        <Navbar />
        <div className={styles.herosection}>
          <p className={styles.title}>JOIN US</p>
          <h1>
            JOIN THE TEAM
          </h1>
          <p className={styles.para}>WANT TO BE A CAR TRACKER? CHOOSE AN OPPORTUNITY BELOW THAT FITS YOUR SKILLS.</p>
        </div>
      </div>
      <Partner/>

      <section className={styles.section}>
      <div className={styles.header}>
        <a href="#" className={styles.joinLink}>JOIN US</a>
        <h2 className={styles.car}>Careers</h2>
      </div>
      <div className={styles.grid}>
        {jobs.map((job, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardContent}>
              <h3 className={styles.jobTitle}>{job.title}</h3>
              <p className={styles.location}>{job.location}</p>
            </div>
            <div>
              <Link href={`/about/${index}`}>
          <button className={styles.viewBtn}>VIEW</button>
        </Link>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className={styles.opportunity}>
        <div className={styles.content}>
          <p className={styles.heading}>opportunities</p>
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

export default About;
