import React from 'react';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import QuickActions from './components/QuickActions';
import EmergencyBanner from './components/EmergencyBanner';
import PrimaryServices from './components/PrimaryServices';
import AIAssistant from './components/AIAssistant';
import HealthcareNearYou from './components/HealthcareNearYou';
import BloodSupport from './components/BloodSupport';
import CommunitySupport from './components/CommunitySupport';
import HealthInformation from './components/HealthInformation';
import TrustBar from './components/TrustBar';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  return (
    <div className="app-shell min-h-screen bg-transparent text-[#1A2250]">
      <div className="site-background-image" aria-hidden="true" />
      <div className="app-content">
        <TopBar />
        <NavBar />
        <main>
        <Hero />
        <QuickActions />
        <EmergencyBanner />
        <PrimaryServices />
        <AIAssistant />
        <HealthcareNearYou />
        <BloodSupport />
        <CommunitySupport />
        <HealthInformation />
        <TrustBar />
        </main>
        <Footer />
      </div>
    </div>
  );
}
