import React from 'react'

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://via.placeholder.com/1500)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
        <h2 className="text-4xl font-bold mb-4">Welcome to My Web</h2>
        <p className="text-xl mb-8">Explore amazing products and experiences</p>
        <a href="#products" className="bg-blue-500 px-6 py-3 rounded-lg text-white font-semibold text-lg transition hover:bg-blue-600">
          Shop Now
        </a>
      </div>
    </section>
  )
}

export default Hero
