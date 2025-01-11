import Footer from '@/components/footer/page';
import Navbar from '@/components/navbar/page';
import React from 'react';

const About = () => {
  return (
    <div>
        <Navbar/>
    
    <section className="py-12 px-6 text-center">
      <h2 className="text-3xl font-semibold mb-6">About Us</h2>
      <p className="text-xl mb-4">We are a company that believes in providing high-quality products for all your needs.</p>
      <p className="text-lg max-w-3xl mx-auto">
        Our goal is to ensure that you have the best experience with our products. We pride ourselves on customer satisfaction and always strive for excellence in every product we offer.
      </p>
    </section>
    <Footer/>
    </div>
  );
};

export default About;
