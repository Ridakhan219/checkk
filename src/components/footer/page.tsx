import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-4 space-x-6">
          <a href="#" className="hover:text-blue-300">Privacy Policy</a>
          <a href="#" className="hover:text-blue-300">Terms of Service</a>
          <a href="#" className="hover:text-blue-300">FAQ</a>
        </div>
        <div className="flex justify-center mb-6 space-x-6">
          <a href="#" className="text-2xl hover:text-blue-300">
            <i className="fab fa-facebook-f"></i> {/* Example Facebook Icon */}
          </a>
          <a href="#" className="text-2xl hover:text-blue-300">
            <i className="fab fa-twitter"></i> {/* Example Twitter Icon */}
          </a>
          <a href="#" className="text-2xl hover:text-blue-300">
            <i className="fab fa-instagram"></i> {/* Example Instagram Icon */}
          </a>
        </div>
        <p className="text-sm">&copy; 2025 My Web. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
