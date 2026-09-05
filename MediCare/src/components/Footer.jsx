import React from 'react';
import {
  FaApple,
  FaFacebookF,
  FaGooglePlay,
  FaHeart,
  FaInstagram,
  FaLinkedinIn,
  FaPlus,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const socialItems = [
  { label: 'Facebook', icon: FaFacebookF, className: 'footer-social-blue' },
  { label: 'Instagram', icon: FaInstagram, className: 'footer-social-pink' },
  { label: 'Twitter', icon: FaTwitter, className: 'footer-social-sky' },
  { label: 'YouTube', icon: FaYoutube, className: 'footer-social-red' },
  { label: 'LinkedIn', icon: FaLinkedinIn, className: 'footer-social-linkedin' },
];

function StoreBadge({ type }) {
  const isApple = type === 'apple';
  const Icon = isApple ? FaApple : FaGooglePlay;

  return (
    <button
      type="button"
      aria-label={isApple ? 'Download on the App Store' : 'Get it on Google Play'}
      className="footer-store-badge"
    >
      <Icon className="footer-store-icon" />
      <span className="footer-store-copy">
        <span className="footer-store-small">{isApple ? 'Download on the' : 'GET IT ON'}</span>
        <span className="footer-store-name">{isApple ? 'App Store' : 'Google Play'}</span>
      </span>
    </button>
  );
}

export default function Footer() {
  return (
    <footer className="medicare-footer">
      <div className="medicare-footer-inner">
        <div className="medicare-footer-main">
          <div className="medicare-footer-brand">
            <div className="medicare-footer-logo-row">
              <div className="medicare-footer-logo">
                <FaHeart className="medicare-footer-heart" />
                <FaPlus className="medicare-footer-plus" />
              </div>
              <div>
                <div className="medicare-footer-brand-name">
                  MediCare<span>+</span>
                </div>
                <div className="medicare-footer-tagline">Care. Connect. Better Health.</div>
              </div>
            </div>

            <p className="medicare-footer-description">
              A complete healthcare support platform designed to care, connect and support you and your loved ones.
            </p>

            <div className="medicare-footer-socials">
              {socialItems.map(({ label, icon: Icon, className }) => (
                <button
                  key={label}
                  type="button"
                  aria-label={label}
                  className={`medicare-footer-social ${className}`}
                >
                  <Icon />
                </button>
              ))}
            </div>
          </div>

          <div className="medicare-footer-column">
            <h3>Quick Links</h3>
            <ul>
              {['About Us', 'Find Doctors', 'Hospitals', 'Medicines', 'Health Articles', 'Careers'].map((link) => (
                <li key={link}><button type="button">{link}</button></li>
              ))}
            </ul>
          </div>

          <div className="medicare-footer-column">
            <h3>Support</h3>
            <ul>
              {['Help Center', 'Contact Us', 'Patient Support', 'Book an Appointment', 'Terms & Conditions', 'Privacy Policy'].map((link) => (
                <li key={link}><button type="button">{link}</button></li>
              ))}
            </ul>
          </div>

          <div className="medicare-footer-column">
            <h3>Community</h3>
            <ul>
              {['Community Guidelines', 'Blood Donation', 'Volunteer', 'Health Awareness', 'NGO / Partners', 'Events'].map((link) => (
                <li key={link}><button type="button">{link}</button></li>
              ))}
            </ul>
          </div>

          <div className="medicare-footer-app">
            <h3>Download Our App</h3>
            <p>Get the best healthcare experience on your mobile device.</p>
            <div className="medicare-footer-stores">
              <StoreBadge type="google" />
              <StoreBadge type="apple" />
            </div>
          </div>
        </div>

        <div className="medicare-footer-bottom">
          <div>© 2025 MediCare+. All rights reserved.</div>
          <div className="medicare-footer-slogan">
            A Healthier Tomorrow, Together
            <FaHeart />
            <span>— —</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
