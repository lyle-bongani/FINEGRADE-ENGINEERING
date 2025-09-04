import React from 'react';
import AboutHero from '../components/AboutPage/AboutHero';
import AboutSection from '../components/AboutPage/AboutSection';
import MissionVisionSection from '../components/AboutPage/MissionVisionSection';
import CoreValuesSection from '../components/AboutPage/CoreValuesSection';
import CustomerSupplierCommunitySection from '../components/AboutPage/CustomerSupplierCommunitySection';
import OurWorkSection from '../components/AboutPage/OurWorkSection';
import OurServicesSection from '../components/AboutPage/OurServicesSection';
import HomePartnersMarquee from '../components/HomePartnersMarquee';

const AboutUs: React.FC = () => {
    return (
      <>
        <AboutHero />
        <AboutSection />
        <MissionVisionSection />
        <CustomerSupplierCommunitySection />
        <OurServicesSection />
        <CoreValuesSection />
        <div className="h-[25vh] flex items-center overflow-hidden">
          <HomePartnersMarquee />
        </div>
        <OurWorkSection />
      </>
    );
};

export default AboutUs;