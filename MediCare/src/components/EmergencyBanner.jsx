import React from 'react';
import { FaArrowRight, FaBell, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { SectionContainer } from './common/SectionTitle';
import { emergencyActions, toneStyles } from '../data/content';
import ambulanceImg from '../assets/ambulance-ref.png';

export default function EmergencyBanner() {
  return (
    <section className="emergency-section" aria-labelledby="emergency-title">
      <SectionContainer className="emergency-container">
        <div className="emergency-panel">
          <div className="emergency-heartbeat" aria-hidden="true">
            <svg viewBox="0 0 310 76" fill="none">
              <path
                d="M0 40H91L103 39L113 24L122 59L135 9L148 64L158 40H310"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="emergency-layout">
            <div className="emergency-main">
              <div className="emergency-heading">
                <div className="emergency-title-icon">
                  <FaBell />
                </div>
                <div>
                  <h2 id="emergency-title">Need urgent medical help?</h2>
                  <p>Get immediate assistance for emergencies.</p>
                </div>
              </div>

              <div className="emergency-actions">
                {emergencyActions.map((item) => {
                  const styles = toneStyles[item.tone];
                  return (
                    <button key={item.title} type="button" className="emergency-action-card">
                      <div className={`emergency-action-icon ${styles.iconBg} ${styles.iconText}`}>
                        <item.icon />
                      </div>
                      <h3 className={styles.title}>{item.title}</h3>
                      <p>{item.description}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="emergency-side">
              <img src={ambulanceImg} alt="Emergency ambulance" className="emergency-ambulance" />
              <button type="button" className="emergency-help-button">
                <FaPhoneAlt />
                <span>GET EMERGENCY HELP</span>
                <FaArrowRight />
              </button>
              <p className="emergency-location-note">
                <FaMapMarkerAlt />
                <span>Your location will be used to connect you faster</span>
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
