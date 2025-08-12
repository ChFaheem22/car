import Navbar from "./components/navbar";
import Partner from "./components/partner";
import Image from "next/image";
import {
  FaTag,
  FaMobileAlt,
  FaMoneyBillWave,
  FaShieldAlt,
  FaUniversity,
  FaCar,
  FaClock,
  FaAward,
  FaUsers,
} from "react-icons/fa";
import { MdPhoneAndroid, MdOutlineAttachMoney } from "react-icons/md";
import { BiTransferAlt } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const page = () => {
  const reviews = [
    {
      name: "Jane L.",
      location: "Venice Beach, CA",
      date: "July 6, 2024",
      text: "I ve been looking to get out of my lease. Car Trackers came through — better than the dealership buyout. The process was smooth and my car was picked up the following day. And the best part... He found me a new car the same week! For all my future car needs, I definitely plan to use Car Trackers again.",
    },
    {
      name: "Diane C.",
      location: "Ventura, CA",
      date: "Sept 1, 2024",
      text: "I dont often take the time to leave a review but it was so refreshing working with Car Trackers. I sold them my VW Golf and got an amazing price. The team was great and everything was extremely convenient.",
    },
    {
      name: "Robert C.",
      location: "Oceanside, CA",
      date: "Oct 10, 2024",
      text: "I had a great experience selling my car with Car Trackers! Everything was completely seamless — very legitimate company, and the money was in my bank without any issues. I would absolutely recommend them to friends and family!",
    },
  ];

  const stats = [
    { label: "Car Trackers Installed", value: "1,566+", icon: <FaCar /> },
    { label: "Years Experience", value: "25+", icon: <FaClock /> },
    { label: "Get Winning Awards", value: "125+", icon: <FaAward /> },
    { label: "Expert Team Members", value: "180+", icon: <FaUsers /> },
  ];

  const brands = [
    { name: "Audi", logo: "/cars/audi.png" },
    { name: "Jaguar", logo: "/cars/jaguar.png" },
    { name: "Volkswagen", logo: "/cars/volkswagen.png" },
    { name: "Acura", logo: "/cars/acura.png" },
    { name: "Honda", logo: "/cars/honda.png" },
  ];

  const blogPosts = [
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

  return (
    <div className="home">
      <div className="hero">
        <Navbar />
        <div className="hero-section">
          <h1>
            THE NEW WAY TO SELL
            <br />
            YOUR CAR
          </h1>
          <p>so you can sell your vehicle today!</p>
        </div>

        <div className="car-form">
          <form>
            <div className="form-group">
              <label htmlFor="makeModel">Make / Model</label>
              <input type="text" id="makeModel" name="makeModel" />
            </div>

            <div className="form-group">
              <label htmlFor="vin">VIN</label>
              <input type="text" id="vin" name="vin" />
            </div>

            <div className="form-group">
              <label htmlFor="licensePlate">License Plate</label>
              <input type="text" id="licensePlate" name="licensePlate" />
            </div>
            <button type="submit" className="submit-button">
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      <div className="how-work">
        <h2>How it Works</h2>
        <div className="flex">
          <div className="box">
            <FaTag className="icon" />
            <h3>Get Instant Offer</h3>
            <p>Submit your vehicle info online, it only take 2 minutes</p>
          </div>

          <div className="box">
            <FaMobileAlt className="icon" />
            <h3>10 Minutes Video Appraisal</h3>
            <p>
              Walk around your vehicle and show us the condition with your
              smartphone
            </p>
          </div>

          <div className="box">
            <FaMoneyBillWave className="icon" />
            <h3>Get Paid</h3>
            <p>Get paid instantly when we pick up the vehicle</p>
          </div>
        </div>
      </div>

      <div className="video-appraisal">
        <div className="left">
          <p className="headline">* Do You Have a Smart Mobile</p>
          <Image
            src="/call.png"
            width={400}
            height={200}
            alt="Video call example"
          />
        </div>

        <div className="right">
          <h2 className="section-title">10 Minutes Video Appraisal</h2>

          <div className="benefit-box">
            <div className="icon">
              <MdPhoneAndroid />
            </div>
            <div>
              <h3>Never Leave Your Home</h3>
              <p>
                Get a quick and accurate appraisal for your vehicle through a
                simple video call from the comfort of your home.
              </p>
            </div>
          </div>

          <div className="benefit-box">
            <div className="icon">
              <FaShieldAlt />
            </div>
            <div>
              <h3>Final Offer</h3>
              <p>
                Stop wasting time driving to dealerships only to get low offers.
                With Car Trackers, you&lsquo;ll receive a final offer instantly
                after we assess your vehicle via video call.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="captions">
        <div className="left-logo">
          <Image
            src="/logo-bio.png"
            width={240}
            height={220}
            alt="Company Logo"
          />
        </div>
        <div className="bio">
          <h1>
            WE UNDERSTAND <span>HOW BUSY YOU ARE.</span>
          </h1>
          <p>
            We can do videocall appraisal to purchase your vehicle from the
            convenience of your home, or anywhere you have signal. Our
            <br />
            licensed appraisers will handle everything from paperwork to
            payment.
          </p>
        </div>
        <div className="right-logo">
          <Image
            src="/logo-bio.png"
            width={240}
            height={220}
            alt="Company Logo"
          />
        </div>
      </div>

      <section className="payment-container">
        <div className="payment-left">
          <p className="left-bio">HOW TO GET PAID</p>
          <h1>
            HOW TO GET <br />
            PAID
          </h1>
          <p>
            Pick a payment option that works for you. <br />
            We know customers have different preferences – whether it&rsquo;s a
            tangible method of payment or a <br />
            direct transfer to your bank - we&rsquo;re ready to provide <br />
            you with certified <br />
            funds.
          </p>
          <button className="get-quote-btn">GET QUOTE →</button>
        </div>

        <div className="payment-right">
          <div className="payment-options">
            <IoIosArrowBack className="arrow-icon" />
            <div className="payment-card">
              <FaUniversity className="icon-card" />
              <h2>Same Day Wire Transfer</h2>
              <ul>
                <li>Instant delivery</li>
                <li>Direct Bank transfer</li>
              </ul>
            </div>
            <div className="payment-card">
              <BiTransferAlt className="icon-card" />
              <h2>Next Business Day ACH</h2>
              <ul>
                <li>Business day</li>
                <li>Direct bank transfer</li>
              </ul>
            </div>
            <div className="payment-card">
              <MdOutlineAttachMoney className="icon-card" />
              <h2>
                Company <br />
                Check
              </h2>
              <ul>
                <li>Shipped overnight</li>
                <li>Certified business check</li>
              </ul>
            </div>

            <IoIosArrowForward className="arrow-icon" />
          </div>
          <p className="payment-satisfaction">
            <span>&#x2606; &#x2606; &#x2606; &#x2606; &#x2606; </span>
            We’ve more than <strong>2,356+ customers</strong> satisfied with our
            services
            <a href="#"> Get Quote</a>
          </p>
        </div>
      </section>

      <section className="review-wrapper">
        <h1 className="star-bar-top">★★★★</h1>
        <h2 className="review-score">4 Stars on Yelp </h2>
        <h2 className="review-heading">
          What our cutomers are <br />
          saying about us
        </h2>
        <div className="review-row">
          {reviews.map((r, i) => (
            <div className="review-card" key={i}>
              <p className="star-bar">★★★★★</p>
              <p className="review-text">“{r.text}”</p>
              <h2 className="review-name">{r.name} </h2>
              <p className="review-meta">
                {r.location}, {r.date}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-grid">
          {stats.map(({ label, value, icon }, i) => (
            <div className="stat-card" key={i}>
              <h4 className="stat-icon">{icon}</h4>
              <h3>{value}</h3>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </section>

      <Partner />

      <section className="hero-vehicle-banner">
        <div className="hero-vehicle-overlay">
          <h1 className="hero-vehicle-title">
            We buy all years, makes, & models
          </h1>
          <ul className="hero-vehicle-brand-list">
            {brands.map(({ name, logo }, i) => (
              <li key={i} className="hero-vehicle-brand-item">
                <Image
                  src={logo}
                  alt={`${name} logo`}
                  width={140}
                  height={100}
                  className="hero-vehicle-logo"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-header">
          <h4 className="faq-head">FAQs</h4>
          <h1>Frequently Asked Questions</h1>
        </div>
        <div className="faq-qs">
          <label className="faq-question">
            How quickly can I get paid?
            <span className="icon">+</span>
          </label>

          <label className="faq-question">
            Do I need to drive my car anywhere?
            <span className="icon">+</span>
          </label>

          <label className="faq-question">
            How does the video call appraisal process work?
            <span className="icon">+</span>
          </label>

          <label className="faq-question">
            Is there any cost or obligation to get an offer?
            <span className="icon">+</span>
          </label>

          <label className="faq-question">
            What do I do after I get an online offer?
            <span className="icon">+</span>
          </label>
        </div>
      </section>

      <section className="captions-shopping">
        <div className="cap-left-logo">
          <Image
            src="/logo-bio.png"
            width={240}
            height={200}
            alt="Company Logo"
          />
        </div>
        <div className="cap-bio">
          <h1>SHOPPING AROUND? WE PAY THE MOST!</h1>
          <p>
            We beat most dealership offers by up to $500*. Send over a valid
            written offer and we can pay <br />
            you top dollar thanks to our low overhead.
          </p>
        </div>
        <div className="cap-right-logo">
          <Image
            src="/logo-bio.png"
            width={240}
            height={220}
            alt="Company Logo"
          />
        </div>
      </section>

      <section className="blog-section">
        <p className="blog-subheading">BLOGS</p>
        <h2 className="blog-heading">Latest Blog & News</h2>
        <div className="blog-grid">
          {blogPosts.map(({ title, author, comments, image, date }, i) => (
            <div key={i} className="blog-card">
              <div className="blog-image-wrapper">
                <Image
                  src={image}
                  width={300}
                  height={180}
                  alt={title}
                  className="blog-image"
                />
                <span className="blog-date">{date}</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <strong>Post by </strong>
                  <span>{author}</span>{" "}
                  <span className="comments"> {comments} Comments</span>
                </div>
                <h3 className="blog-title">{title}</h3>
                <a href="#" className="blog-readmore">
                  <span>RE</span>AD MORE <span className="blog-arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
