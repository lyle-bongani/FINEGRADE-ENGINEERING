import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import HomeAbout from '../components/Home/HomeAbout';
import MissionVisionValues from '../components/Home/MissionVisionValues';
import WorldClassBrands from '../components/Home/WorldClassBrands';
import OurCommitment from '../components/Home/OurCommitment';
import ServicesSection from '../components/Home/ServicesSection';
import HomePartnersMarquee from '../components/HomePartnersMarquee';
import NewsletterSection from '../components/Home/NewsletterSection';

const Home: React.FC = () => {
    return (
        <>
            <HeroSection />
            <HomeAbout />
            <MissionVisionValues />
            <HomePartnersMarquee />
            <ServicesSection />
            <WorldClassBrands />
            <OurCommitment />
            <NewsletterSection />
        </>
    );
};

export default Home; 