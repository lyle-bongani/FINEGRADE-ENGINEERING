import React from 'react';
import AboutHero from '../components/AboutPage/AboutHero';
import AboutSection from '../components/AboutPage/AboutSection';
import MissionVisionSection from '../components/AboutPage/MissionVisionSection';
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
        <OurServicesSection />
        <CoreValuesSection />
        <CustomerSupplierCommunitySection />
        <OurWorkSection />
        <MeetTheTeamSection />
      </>
    );
};

export default AboutUs;