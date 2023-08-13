import React from 'react'
import {AiOutlineArrowRight, AiOutlineCopyrightCircle} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>
      <div className='grid grid-cols-3 my-10 mx-20'>
        <img className='w-[200px] mx-20 rounded-2xl' src="https://i.hizliresim.com/fn2l832.png" alt="" />
        <div className='border-x-2 border-orange-500 flex items-center justify-center flex-col'>
          <h5 className='font-bold text-2xl mb-4 text-orange-500 border-b-2 border-orange-500'>Links</h5>

          <Link className='flex items-center hover:text-orange-500 cursor-pointer hover:translate-x-4 duration-300' to="/"><AiOutlineArrowRight/>Home</Link>
          <Link className='flex items-center hover:text-orange-500 cursor-pointer hover:translate-x-4 duration-300' to="about"><AiOutlineArrowRight/>About</Link>
          <Link className='flex items-center hover:text-orange-500 cursor-pointer hover:translate-x-4 duration-300' to="menu"><AiOutlineArrowRight/>Menu</Link>
          <Link className='flex items-center hover:text-orange-500 cursor-pointer hover:translate-x-4 duration-300' to="chef"><AiOutlineArrowRight/>Chef</Link>
          <Link className='flex items-center hover:text-orange-500 cursor-pointer hover:translate-x-4 duration-300' to="contact"><AiOutlineArrowRight/>Contact</Link>
        </div>
        <div className='flex items-center justify-center flex-col'>
          <h5 className='font-bold text-2xl mb-4 text-orange-500 border-b-2 border-orange-500'>Branches</h5>
          <ul>
            <li className='flex items-center hover:text-orange-500 cursor-pointer hover:translate-x-4 duration-300'><MdLocationOn/>Turkey</li>
            <li className='flex items-center hover:text-orange-500 cursor-pointer hover:translate-x-4 duration-300'><MdLocationOn/>USA</li>
            <li className='flex items-center hover:text-orange-500 cursor-pointer hover:translate-x-4 duration-300'><MdLocationOn/>Germany</li>
            <li className='flex items-center hover:text-orange-500 cursor-pointer hover:translate-x-4 duration-300'><MdLocationOn/>France</li>
            <li className='flex items-center hover:text-orange-500 cursor-pointer hover:translate-x-4 duration-300'><MdLocationOn/>Italy</li>
          </ul>
        </div>
      </div>
      <div className='flex items-center px-20 py-4 bg-orange-500 text-white my-4'>
        <AiOutlineCopyrightCircle/>
        <p>Copyright 2023 | All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer