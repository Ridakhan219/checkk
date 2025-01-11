import Footer from '@/components/footer/page';
import Navbar from '@/components/navbar/page';

import React from 'react';

const Products = () => {
  return (
    <div>
        <Navbar/>
    <section className="py-12 px-6 text-center bg-gray-100">
      <h2 className="text-3xl font-semibold mb-6">Our Products</h2>
      <p className="text-xl mb-6">Discover our wide range of products designed for your needs</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Product 1</h3>
          <p className="text-lg mb-4">Description of product 1 Its a great choice for your needs</p>

          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Buy Now</button>
        
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Product 2</h3>
          <p className="text-lg mb-4">Description of product 2 Highly recommended by our customers</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Buy Now</button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Product 3</h3>
          <p className="text-lg mb-4">Description of product 3 Perfect for everyday use.</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Buy Now</button>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default Products;
