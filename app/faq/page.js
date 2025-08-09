import BusyBanner from "../components/busy";
import Navbar from "../components/navbar";
import Payment from "../components/payment";
import styles from "./faq.module.css";
import Image from "next/image";

const Faq = () => {
  return (
    <div className={styles.faq}>
      <div className={styles.back}>
        <Navbar />
        <div className={styles.herosection}>
          <p className={styles.title}>FAQ&lsquo;S</p>
          <h1>
            SELL YOUR CARS <br />
            OVER THE PHONE
          </h1>
        </div>
      </div>
      <BusyBanner />

      <section className={styles.wrapper}>
        <div className={styles.left}>
          <h2 className={styles.heading}>GOT A QUESTION? NO PROBLEM.</h2>
          <h2 className={styles.subheading}>GOT A QUESTION</h2>
          <ul className={styles.list}>
            <li className={styles.item}>Customer Service</li>
            <li className={styles.item}>General Inquiry</li>
            <li className={styles.item}>Business</li>
          </ul>
        </div>
        <div className={styles.right}>
          <Image
            src="/faq/paid2.jpg"
            width={660}
            height={510}
            alt="Thoughts"
            className="image"
          />
        </div>
      </section>

      <section className={styles.wrapper}>
        <div className={styles.right}>
          <Image
            src="/faq/box2.jpg"
            width={668}
            height={510}
            alt="Questions"
            className="image"
          />
        </div>
        <div className={styles.left}>
          <h2 className={styles.heading}>COMMON QUESTIONS.</h2>
          <h2 className={styles.subheading}>COMMON QUESTIONS</h2>
          <ul className={styles.list}>
            <li className={styles.item}>
              I want to sell my car, but what&lsquo;s the process?
            </li>
            <li className={styles.item}>
              How long does this whole process take?
            </li>
            <li className={styles.item}>When I call in what happens?</li>
            <li className={styles.item}>If like the offer, what then?</li>
            <li className={styles.item}>Do i have to drive to you?</li>
          </ul>
        </div>
      </section>

      <section className={styles.wrapper}>
        <div className={styles.left}>
          <h2 className={styles.heading}>APPRAISAL.</h2>
          <h2 className={styles.subheading}>APPRAISAL</h2>
          <ul className={styles.list}>
            <li className={styles.item}>What is an appraisal?</li>
            <li className={styles.item}>Purpose of an appraisal</li>
            <li className={styles.item}>Process of an appraisal</li>
          </ul>
        </div>
        <div className={styles.right}>
          <Image
            src="/faq/box3.jpg"
            width={660}
            height={510}
            alt="Thoughts"
            className="image"
          />
        </div>
      </section>

      <section className={styles.wrapper}>
        <div className={styles.right}>
          <Image
            src="/faq/box4.jpg"
            width={668}
            height={510}
            alt="Thoughts"
            className="image"
          />
        </div>
        <div className={styles.left}>
          <h2 className={styles.heading}>CASHFLOW.</h2>
          <h2 className={styles.subheading}>BUSSINESS CASH</h2>
          <ul className={styles.list}>
            <li className={styles.item}>
              How can bussniess increase cash inflow?
            </li>
            <li className={styles.item}>Practicing cash flow mangagent</li>
            <li className={styles.item}>What is cash flow mangagent?</li>
            <li className={styles.item}>Have an emergency backup</li>
          </ul>
        </div>
      </section>
      <Payment />
    </div>
  );
};
export default Faq;
