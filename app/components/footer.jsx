import { FaFacebookF, FaTwitter, FaInstagram, FaDribbble, FaPinterest } from 'react-icons/fa';
const Footer =() =>{
    return(
<footer className="footer-wrapper">
  <div className="support-banner">
    <div className="support-email">
      <h2>
        SUPPORT<span>@CARTRACKERS.COM</span>
      </h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolor et.</p>
    </div>
    <button className="arrow-button">→</button>
  </div>

  <div className="footer">
    <div className="footer-left">
      <div className="logo">
        <img src="/logo.png" alt="logo" />
        <span><strong>car</strong>trackers</span>
      </div>
      <p>Hit the road with the astounding ShiftUp theme, made especially for repair shops, car rental and automotive easing services.</p>
      <p>Support center 24/7<br/>+1 329 465 7980</p>
      <p>Our address<br/>9th FBA MARKA<br/>WEST JAKARTA CITY</p>
    </div>

    <div className="footer-links">
      <div>
        <h4>ABOUT US</h4>
        <p>About Us</p>
        <p>Who We Are</p>
        <p>Our Offers</p>
        <p>Our Clients</p>
      </div>
      <div>
        <h4>SERVICES</h4>
        <p>FAQ Page</p>
        <p>Wheels & Tires</p>
        <p>Driving Events</p>
        <p>Classic Store</p>
      </div>
      <div>
        <h4>CONTACT</h4>
        <p>Where We Are</p>
        <p>Contact Us</p>
        <p>Our Team</p>
      </div>
      <div>
        <h4>DISCOVER MORE</h4>
        <p>Oil Change</p>
        <p>Vehicles</p>
        <p>Schedule</p>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© 2024 CARTRACKERS. All Rights Reserved</p>
    <div className="social-icons">
      <FaFacebookF />
      <FaTwitter />
      <FaInstagram /> 
      <FaPinterest/>
    </div>
  </div>
</footer>
) }
export default Footer;