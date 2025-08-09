import Image from 'next/image';

export default function Payment() {
  return (
    <div className="payment">
      <div className="paymentbio">
        <h1><span>GOT QUESTIONS?</span></h1>
        <p>Give us a call and we’ll walk you through everything</p>
        <button className="paymentbutton">
          <span>+GET IN TOUCH</span>
        </button>
      </div>
      <div className="paymentrightlogo">
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
