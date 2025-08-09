import BusyBanner from "../components/busy";
import Navbar from "../components/navbar";
import Payment from "../components/payment";
import styles from "./media.module.css";
import Image from "next/image";

const post = [
  {
    title: "Efficient repairs, reliable Results, every time here",
    date: "15 MAY",
    author: "Malen",
    comments: 3,
    image: "/worker-1.jpg",
  },
  {
    title: "We’ll get your car back on the road",
    date: "15 MAY",
    author: "Malen",
    comments: 3,
    image: "/worker-2.jpg",
  },
  {
    title: "Quality repairs for your car at affordable prices",
    date: "15 MAY",
    author: "Malen",
    comments: 3,
    image: "/worker-3.jpg",
  },
  {
    title: "Efficient repairs, reliable Results, every time here",
    date: "15 MAY",
    author: "Malen",
    comments: 3,
    image: "/worker-1.jpg",
  },
  {
    title: "We’ll get your car back on the road",
    date: "15 MAY",
    author: "Malen",
    comments: 3,
    image: "/worker-2.jpg",
  },
  {
    title: "Quality repairs for your car at affordable prices",
    date: "15 MAY",
    author: "Malen",
    comments: 3,
    image: "/worker-3.jpg",
  },
  {
    title: "Efficient repairs, reliable Results, every time here",
    date: "15 MAY",
    author: "Malen",
    comments: 3,
    image: "/worker-1.jpg",
  },
  {
    title: "We’ll get your car back on the road",
    date: "15 MAY",
    author: "Malen",
    comments: 3,
    image: "/worker-2.jpg",
  },
  {
    title: "Quality repairs for your car at affordable prices",
    date: "15 MAY",
    author: "Malen",
    comments: 3,
    image: "/worker-3.jpg",
  },
];

const Media = () => {
  return (
    <div className={styles.faq}>
      <div className={styles.back}>
        <Navbar />
        <div className={styles.herosection}>
          <p className={styles.title}>BLOGS</p>
          <h1>
            SELL YOUR CARS <br />
            OVER THE PHONE
          </h1>
        </div>
      </div>
      <BusyBanner />

      <section className={styles.blogSection}>
        <p className={styles.blogSubheading}>BLOGS</p>
        <h2 className={styles.blogHeading}>Latest Blog & News</h2>
        <div className={styles.blogGrid}>
          {post.map(({ title, author, comments, image, date }, i) => (
            <div key={i} className={styles.blogCard}>
              <div className={styles.blogImageWrapper}>
                <Image
                  src={image}
                  width={300}
                  height={180}
                  alt={title}
                  className={styles.blogImage}
                />
                <span className={styles.date}>{date}</span>
              </div>
              <div className={styles.blogContent}>
                <div className={styles.blogMeta}>
                  <strong>Post by </strong>
                  <span>{author}</span>
                  <span className={styles.comments}> {comments} Comments</span>
                </div>
                <h3 className={styles.blogTitle}>{title}</h3>
                <a href="#" className={styles.blogReadmore}>
                  <span>RE</span>AD MORE{" "}
                  <span className={styles.blogArrow}>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Payment />
    </div>
  );
};
export default Media;
