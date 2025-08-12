'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Sell your Car', path: '/sellcar' },
    { name: 'Apply for a New Car', path: '/apply' },
    { name: 'Beat my Offer', path: '/beat-offer' },
    { name: 'About us', path: '/about' },
    { name: 'Faq', path: '/faq' },
    { name: 'Kelley Blue Book', path: '/kbb' },
    { name: 'Media', path: '/media' },
  ];

  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <Image src="/logo.png" width={60} height={60} alt="Company Logo" className="nav-logo" />
        </div>
        <div>
        <Link href="/" className="brand">
          car<span className="highlight">trackers</span>
        </Link>
        </div>

        {/* Hamburger Button */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
      </div>

      <nav className={`menu-links ${isOpen ? 'open' : ''}`}>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className={`nav-link ${pathname === link.path ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/offer" onClick={() => setIsOpen(false)}>
              <button className="btn-outline">Get Offer</button>
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <button className="btn-filled">Contact Us</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
