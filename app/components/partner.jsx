import {
  FaIndustry,
  FaTools,
  FaHandshake,
  FaRocket,
  FaCogs
} from "react-icons/fa";
const partners = [
    { name: "Pertamina", icon: <FaIndustry /> },
    { name: "Kyocera", icon: <FaTools /> },
    { name: "Turbologo", icon: <FaHandshake /> },
    { name: "Turkcell", icon: <FaRocket /> },
    { name: "Blender", icon: <FaCogs /> },
  ];
  const Partner =()=>{
    return(
        <section className="partners-section">
        <p className="partners-head">OUR PARTNERS & SUPPORTS</p>
        <ul className="partners-grid">
          {partners.map(({ name, icon }, i) => (
            <li key={i} className="partner-card">
              <div className="partner-icon">{icon}</div>
              <p className="partner-name">{name}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  export default Partner;