import React from 'react'
import {BsEnvelopeAt} from 'react-icons/bs'
import {AiOutlinePhone} from 'react-icons/ai'
import {HiOutlineLocationMarker} from 'react-icons/hi'
function Contact() {
  return (
    <div className='mx-20 my-20'>
      <h3 className='text text-black font-bold text-6xl text-center'>Contact <span className='text-orange-500 border-b-8 border-orange-500'>Us</span></h3>
      <div className='flex items-center justify-center my-10'>
          <div className='flex items-center justify-center flex-col mx-10 bg-white text-orange-500 p-4 rounded-xl w-[30%] border-2 border-orange-500 hover:bg-orange-500 hover:text-white cursor-pointer'>
          <BsEnvelopeAt size={40} className='mr-4 mb-4'/>
          <p>mehmetburakbaloglu@gmail.com</p>
          </div>
          <div className='flex items-center justify-center flex-col mx-10 bg-white text-orange-500 p-4 rounded-xl w-[30%] border-2 border-orange-500 hover:bg-orange-500 hover:text-white cursor-pointer'>
          <AiOutlinePhone size={40} className='mr-4 mb-4'/>
          <p>+111 222 33 44</p>
          </div>
          <div className='flex items-center justify-center flex-col mx-10 bg-white text-orange-500 p-4 rounded-xl w-[30%] border-2 border-orange-500 hover:bg-orange-500 hover:text-white cursor-pointer'>
          <HiOutlineLocationMarker size={40} className='mr-4 mb-4'/>
          <p>Bozuyuk, Bilecik, Turkey</p>
          </div>
      </div>
      <form action="" className='flex items-center justify-center flex-col'>
        <input type="text" placeholder='Enter your name' className='w-[30%] border-2 p-2 border-orange-500 mb-4 rounded-xl placeholder:text-orange-500' name="" id="" />
        <input type="email" placeholder='Enter your email' className='w-[30%] border-2 p-2 border-orange-500 mb-4 rounded-xl placeholder:text-orange-500' name="" id="" />
        <input type="number" placeholder='Enter your number' className='w-[30%] border-2 p-2 border-orange-500 mb-4 rounded-xl placeholder:text-orange-500' name="" id="" />
        <textarea name="" id="" placeholder='Enter your message' className='w-[30%] border-2 p-2 border-orange-500 mb-4 rounded-xl placeholder:text-orange-500 resize-none' cols="30" rows="10"></textarea>
        <button type="submit" className='text-orange-500 border-2 border-orange-500 py-2 px-6 rounded-xl hover:bg-orange-500 hover:text-white'>Submit</button>
      </form>
    </div>
  )
}

export default Contact