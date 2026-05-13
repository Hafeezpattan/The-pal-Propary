import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProperties from '../components/FeaturedProperties';
import NewLaunches from '../components/NewLaunches';
import HowItWorks from '../components/HowItWorks';
import CitySearch from '../components/CitySearch';
import WhyChoose from '../components/WhyChoose';
import Testimonials from '../components/Testimonials';
import LeadBanner from '../components/LeadBanner';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProperties />
      <NewLaunches />
      <HowItWorks />
      <CitySearch />
      <WhyChoose />
      <Testimonials />
      <LeadBanner />
    </>
  );
};


export default Home;
