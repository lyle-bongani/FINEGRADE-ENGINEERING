import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import HomeAbout from '../components/Home/HomeAbout';
import FloatingHelpButton from '../components/FloatingHelpButton';
import BackToTopButton from '../components/BackToTopButton';
import MissionVisionValues from '../components/Home/MissionVisionValues';
import WorldClassBrands from '../components/Home/WorldClassBrands';
import OurCommitment from '../components/Home/OurCommitment';
import HomeBlogSection from '../components/Home/HomeBlogSection';
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
            <HomeBlogSection />
            <NewsletterSection />
            <FloatingHelpButton />
            <BackToTopButton />
        </>
    );
};

export default Home; 