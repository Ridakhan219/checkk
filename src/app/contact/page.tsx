import Footer from '@/components/footer/page';
import Navbar from '@/components/navbar/page';
import React from 'react';

const Contact = () => {
  return (
    <div>
        <Navbar/>
    <section className="py-12 px-6 text-center bg-gray-100">
      <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
      <p className="text-lg mb-6">We d love to hear from you! Please fill out the form below to get in touch with us.</p>
      
      <form action="your-server-endpoint" method="POST" className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            
            
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">Send Message</button>
      </form>
    </section>
    <Footer/>
    </div>
  );
};

export default Contact;
