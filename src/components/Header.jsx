import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='flex items-center justify-between px-10 py-6 bg-orange-500 top-0 sticky z-50'>
      <img className='w-[50px] ml-20' src="https://i.hizliresim.com/fn2l832.png" alt="" />
      <div>
        <Link className='text-lg font-bold hover:underline underline-offset-4 text-white mx-2' to="/">Home</Link>
        <Link className='text-lg font-bold hover:underline underline-offset-4 text-white mx-2' to="About">About</Link>
        <Link className='text-lg font-bold hover:underline underline-offset-4 text-white mx-2' to="Menu">Menu</Link>
        <Link className='text-lg font-bold hover:underline underline-offset-4 text-white mx-2' to="Chef">Chef</Link>
        <Link className='text-lg font-bold hover:underline underline-offset-4 text-white mx-2' to="Contact">Contact</Link>
      </div>
    </div>
  )
}

export default Header