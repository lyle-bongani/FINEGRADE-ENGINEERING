import React from 'react';
import AboutHero from '../components/AboutPage/AboutHero';
import AboutSection from '../components/AboutPage/AboutSection';
import MissionVisionSection from '../components/AboutPage/MissionVisionSection';
import BreakImageSection from '../components/AboutPage/BreakImageSection';
import CoreValuesSection from '../components/AboutPage/CoreValuesSection';
import CustomerSupplierCommunitySection from '../components/AboutPage/CustomerSupplierCommunitySection';
import OurWorkSection from '../components/AboutPage/OurWorkSection';
import MeetTheTeamSection from '../components/AboutPage/MeetTheTeamSection';
import OurServicesSection from '../components/AboutPage/OurServicesSection';

const AboutUs: React.FC = () => {
    return (
      <>
        <AboutHero />
        <AboutSection />
        <MissionVisionSection />
        <BreakImageSection />
        <CoreValuesSection />
        <CustomerSupplierCommunitySection />
        <OurServicesSection />
        <OurWorkSection />
        <MeetTheTeamSection />
      </>
    );
};

export default AboutUs;