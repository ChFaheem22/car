"use client";
import { useParams } from "next/navigation";
import Navbar from "../../components/navbar";
import Partner from "../../components/partner";
import Payment from "../../components/payment";
import styles from "../about.module.css";
import jobs from "../data";

const About = () => {
  const { id } = useParams();
  const job = jobs[parseInt(id)];

  if (!job) {
    return <p>No data found</p>;
  }

  return (
    <div className={styles.about}>
      <div className={styles.back}>
        <Navbar />
        <div className={styles.herosection}>
          <p className={styles.title}>JOIN US</p>
          <h1>JOIN THE TEAM</h1>
          <p className={styles.para}>
            WANT TO BE A CAR TRACKER? CHOOSE AN OPPORTUNITY BELOW THAT FITS YOUR
            SKILLS.
          </p>
        </div>
      </div>
      <Partner />

      <section className={styles.careersSection}>
        <div className={styles.header}>
          <a className={styles.joinLink}>JOIN US</a>
          <h2 className={styles.car}>Careers</h2>
        </div>

        <div className={styles.jobCard}>
            <div className={styles.form}>
            <h3>Hiring organization</h3>
            <h3>The Car Trackers</h3>

            <p>Job Location</p>
            <p> Placentia, CA</p>

            <p>Date posted</p>
            <p> November 26, 2019</p>
            <button className={styles.formbutton}>APPLY NOW</button>
          </div>
          <div className={styles.jobContent}>
            <p className={styles.label}>Position Title</p>
            <h3 className={styles.jobTitle}>{job.title}</h3>

            <p className={styles.label}>Description</p>
            <p className={styles.jobDescription}>{job.Description}</p>

            <p className={styles.label}>Responsibilities</p>
            <ul className={styles.jobList}>
              {job.Responsibilities.map((item, i) => (
                <li key={i} className={styles.jobListItem}>
                  {item}
                </li>
              ))}
            </ul>

            <p className={styles.label}>Qualifications</p>
            <ul className={styles.jobList}>
              {job.Qualifications.map((item, i) => (
                <li key={i} className={styles.jobListItem}>
                  {item}
                </li>
              ))}
            </ul>

            <p className={styles.label}>Job Benefits</p>
            <ul className={styles.jobList}>
              {job.Benefits.map((item, i) => (
                <li key={i} className={styles.jobListItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </section>

      <section className={styles.opportunity}>
        <div className={styles.content}>
          <p className={styles.heading}>opportunities</p>
          <h3 className={styles.description}>
            <a
              href="https://thecartrackers.com/learn-how-easy-it-can-be-to-sell-your-car-fast-with-car-trackers/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CAR TRACKER PROVIDES A FUN-FILLED LEARNING
            </a>{" "}
            ENVIRONMENT AND MAINTAINS FAMILY VALUES THROUGHOUT EVERY DEPARTMENT
            OF THE COMPANY. NOW THAT YOU HAVE HEARD WHAT OUR APPRAISERS THINK,
            FEEL FREE TO SIGN UP AND SEE WHAT YOU ARE MISSING OUT ON!
          </h3>
          <a href="#" className={styles.cta}>
            + JOIN THE TEAM
          </a>
        </div>
      </section>

      <Payment />
    </div>
  );
};

export default About;
