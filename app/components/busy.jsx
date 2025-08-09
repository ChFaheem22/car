import Image from "next/image";
const BusyBanner =() => {
    return(
        <div className="captions">
        <div className="left-logo">
          <Image
            src="/logo-bio.png"
            width={220}
            height={200}
            alt="Company Logo"
          />
        </div>
        <div className="bio">
          <h1>
            WE UNDERSTAND <span>HOW BUSY YOU ARE.</span>
          </h1>
          <p>
            We can do videocall appraisal to purchase your vehicle from the
            convenience of your home, or anywhere you have signal. Our <br />
            licensed appraisers will handle everything from paperwork to
            payment.
          </p>
        </div>
        <div className="right-logo">
          <Image
            src="/logo-bio.png"
            width={220}
            height={200}
            alt="Company Logo"
          />
        </div>
      </div>
    );
}
export default BusyBanner;
