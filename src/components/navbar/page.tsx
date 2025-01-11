import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-blue-950 text-white flex justify-between items-center p-4'>
      <h1 className='text-2xl font-semibold'>my web</h1>
      <nav>
        <ul className='flex space-x-6'>
          <li> <Link href='/products' className='hover:text-blue-300 transition duration-300 ease-in-out'>Products </Link></li>
          <li> <Link href= '/about' className='hover:text-blue-300 transition duration-300 ease-in-out'>About </Link></li>
          <li><Link href='/contact' className='hover:text-blue-300 transition duration-300 ease-in-out'>Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar

