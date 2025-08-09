import Navbar from "../components/navbar"
import BusyBanner from "../components/busy";
import styles from "./apply.module.css"; 
import Image from "next/image";
import Payment from "../components/payment";

const Apply = () => {
  return (
    <div className={styles.apply}>
      <div className={styles.back}>
        <Navbar />
        <div className={styles.herosection}>
          <p className={styles.title}>New Car</p>
          <h1>APPLY FOR A <br />
          NEW CAR</h1>
        </div>
      </div>
      <BusyBanner/>

      <div className={styles.logoBox}>
        <div>
        <Image
                    src="/logo.png"
                    width={80}
                    height={80}
                    alt="Company Logo"
                  />
        </div>
        <div>
      <h1 className={styles.logoText}>
        <span className={styles.car}>car</span>
        <span className={styles.trackers}>tracker</span>
      </h1>
      </div>
    </div>

    <form className={styles.form}>
      <h2>Pre-Approval Application</h2>

      {/* Contact Info */}
      <div className={styles.row}>
        <div className={styles.group}>
          <label>Email*</label>
          <input type="email" />
        </div>
        <div className={styles.group}>
          <label>Phone Number*</label>
          <input type="tel" />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.group}>
          <label>First Name*</label>
          <input type="text" />
        </div>
        <div className={styles.group}>
          <label>Last Name*</label>
          <input type="text" />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.group}>
          <label>Date of Birth*</label>
          <input type="date" />
        </div>
        <div className={styles.group}>
          <label>Social Security Number*</label>
          <input type="text" />
        </div>
      </div>

      {/* Housing Info */}
      <div className={styles.group}>
        <label>Do you own or rent your home?*</label>
        <div className={styles.radioGroup}>
          <label><input type="radio" name="housing" /> Own</label>
          <label><input type="radio" name="housing" /> Rent</label>
          <label><input type="radio" name="housing" /> Live with parents</label>
        </div>
      </div>
      
        <h3>Current Address</h3>
      <div className={styles.row}>
        <div className={styles.group}>
          <label>Monthly Mortgage/Rent*</label>
          <input type="number" />
        </div>
        <div className={styles.group}>
          <label>Years/Months at Address*</label>
          <input type="text" />
        </div>
      </div>

      <div className={styles.group}>
        <label>Street Address*</label>
        <input type="text" />
      </div>
      <div className={styles.group}>
        <label>2nd Street Address</label>
        <input type="text" />
      </div>

      <div className={styles.row}>
        <div className={styles.group}>
          <label>City*</label>
          <input type="text" />
        </div>
        <div className={styles.group}>
          <label>State / Province*</label>
          <input type="text" />
        </div>
      </div>

      <div className={styles.group}>
        <label>Are You Currently Working?*</label>
        <div className={styles.radioGroup}>
          <label><input type="radio" name="working" /> Yes</label>
          <label><input type="radio" name="working" /> No</label>
        </div>
      </div>
<h3>Work Address</h3>
      <div className={styles.group}>
        <label>Street Address</label>
        <input type="text" />
      </div>
      <div className={styles.group}>
        <label>2nd Street Address</label>
        <input type="text" />
      </div>

      <div className={styles.row}>
        <div className={styles.group}>
          <label>City</label>
          <input type="text" />
        </div>
        <div className={styles.group}>
          <label>State / Province</label>
          <input type="text" />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.group}>
          <label>Postal / Zip Code</label>
          <input type="text" />
        </div>
        <div className={styles.group}>
          <label>Work Phone Number</label>
          <input type="tel" />
        </div>
      </div>

      <div className={styles.group}>
        <label>Gross Monthly Income*</label>
        <input type="number" />
      </div>

      {/* Vehicle Info */}
      <h3>Requested Vehicle Details</h3>
      <div className={styles.row}>
        <div className={styles.group}>
          <label>Year</label>
          <input type="text" />
        </div>
        <div className={styles.group}>
          <label>Make</label>
          <input type="text" />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.group}>
          <label>Model</label>
          <input type="text" />
        </div>
        <div className={styles.group}>
          <label>Trim</label>
          <input type="text" />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.group}>
          <label>Mileage</label>
          <input type="text" />
        </div>
        <div className={styles.group}>
          <label>Color</label>
          <input type="text" />
        </div>
      </div>

      <div className={styles.group}>
        <label>Full Price of Vehicle</label>
        <input type="text" />
      </div>

      {/* Loan Info */}
      <h3>Requested Loan Details</h3>
      <div className={styles.group}>
        <label>Loan Amount</label>
        <input type="text" />
      </div>

      <div className={styles.group}>
        <label>Term</label>
        <div className={styles.radioGroup}>
          <label><input type="radio" name="term" /> 1 Year</label>
          <label><input type="radio" name="term" /> 2 Year</label>
          <label><input type="radio" name="term" /> 3 Year</label>
        </div>
      </div>

      <div className={styles.group}>
        <label>Preferred Payment</label>
        <div className={styles.radioGroup}>
          <label><input type="radio" name="payment" /> Monthly</label>
          <label><input type="radio" name="payment" /> Yearly</label>
          <label><input type="radio" name="payment" /> Other</label>
        </div>
      </div>

      <div className={styles.group}>
        <label>Do you have a co-signer?</label>
        <div className={styles.radioGroup}>
          <label><input type="radio" name="cosigner" /> Yes</label>
          <label><input type="radio" name="cosigner" /> No</label>
        </div>
      </div>

      <div className={styles.group}>
        <label>Loan Type</label>
        <div className={styles.radioGroup}>
          <label><input type="radio" name="loanType" /> Used Car</label>
          <label><input type="radio" name="loanType" /> New Car</label>
        </div>
      </div>

      {/* Co-signer Info */}
      <div className={styles.row}>
        <div className={styles.group}>
          <label>Co-signer First Name</label>
          <input type="text" />
        </div>
        <div className={styles.group}>
          <label>Co-signer Last Name</label>
          <input type="text" />
        </div>
      </div>

      <div className={styles.group}>
        <label>Co-signer s Phone Number</label>
        <input type="tel" />
      </div>

      <div className={styles.group}>
        <label>Co-signer s Social Security Number</label>
        <input type="text" />
      </div>

      {/* Consent */}
      <div className={styles.consent}>
        <p>
          By signing this application form, I hereby give the right to obtain a consumer credit report... <br />
          I certify that the information above is correct to the best of my knowledge...
        </p>
      </div>

      <div className={styles.group}>
        <label>Signature*</label>
  <textarea id="sign" name="sign" rows={8} />
      </div>

      <button type="submit">Submit Application</button>
    </form>
    <Payment/>
    </div>
  )
}

export default Apply
