import React from 'react';

const Features = () => {
  return (
    <section className="py-12 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-semibold mb-8">Our Key Features</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {/* Feature 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="text-blue-500 text-4xl mb-4">
            <i className="fas fa-cogs"></i> {/* Example Icon */}
          </div>
          <h3 className="text-xl font-semibold mb-4">Customizable Settings</h3>
          <p className="text-lg">Our platform allows you to customize every aspect of the service to fit your needs.</p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="text-blue-500 text-4xl mb-4">
            <i className="fas fa-shield-alt"></i> {/* Example Icon */}
          </div>
          <h3 className="text-xl font-semibold mb-4">Top-notch Security</h3>
          <p className="text-lg">We take security seriously, ensuring your data is protected with the latest technologies.</p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="text-blue-500 text-4xl mb-4">
            <i className="fas fa-mobile-alt"></i> {/* Example Icon */}
          </div>
          <h3 className="text-xl font-semibold mb-4">Mobile-friendly</h3>
          <p className="text-lg">Our service is fully optimized for mobile, ensuring a seamless experience across all devices.</p>
        </div>

        {/* Feature 4 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="text-blue-500 text-4xl mb-4">
            <i className="fas fa-clock"></i> {/* Example Icon */}
          </div>
          <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
          <p className="text-lg">Get the help you need at any time with our dedicated 24/7 customer support team.</p>
        </div>

        {/* Feature 5 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="text-blue-500 text-4xl mb-4">
            <i className="fas fa-users"></i> {/* Example Icon */}
          </div>
          <h3 className="text-xl font-semibold mb-4">Team Collaboration</h3>
          <p className="text-lg">Collaborate effortlessly with your team through our integrated platform.</p>
        </div>

        {/* Feature 6 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="text-blue-500 text-4xl mb-4">
            <i className="fas fa-rocket"></i> {/* Example Icon */}
          </div>
          <h3 className="text-xl font-semibold mb-4">Fast Performance</h3>
          <p className="text-lg">Experience blazing-fast speeds with our optimized infrastructure and cutting-edge technology.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;

