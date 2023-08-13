import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineArrowDown, AiOutlineInstagram, AiOutlineTwitter, AiFillFacebook} from 'react-icons/ai'
import {FaHamburger, FaPizzaSlice, FaBirthdayCake} from 'react-icons/fa'
import {SiBuymeacoffee} from 'react-icons/si'
function Home() {
  return (
    <div>
      <div className='bg-[url("https://res.cloudinary.com/buddy-industries-cc/image/upload/v1581003333/app_business_medias/116df464169d7af90eb69562f2b15cec")] w-full h-[80vh] bg-center bg-cover'>
        <div className='text-white flex items-center justify-center flex-col pt-[10rem]'>
          <h3 className='font-bold text-4xl mb-5'>Welcome to our restaurant</h3>
          <p className='mb-3 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, ab.</p>
          <Link to="/" className='border-2 py-2 px-4 rounded-xl hover:bg-white hover:text-orange-500'>See Our Menu</Link>
        </div>
        <Link to="/"><AiOutlineArrowDown size={50} className='absolute border-4 hover:bg-white hover:text-orange-500 hover:border-orange-500 rounded-full p-2 right-2 text-white bottom-20'/></Link>
        <div className='text-white absolute bottom-20 left-2'>
          <AiFillFacebook size={40} className='cursor-pointer hover:text-white rounded-lg p-1 hover:bg-orange-500'/>
          <AiOutlineTwitter size={40} className='cursor-pointer hover:text-white rounded-lg p-1 hover:bg-orange-500'/>
          <AiOutlineInstagram size={40} className='cursor-pointer hover:text-white rounded-lg p-1 hover:bg-orange-500'/>
        </div>
      </div>
      <div className='grid grid-cols-4 '>
        <div className='shadow-xl flex items-center justify-center flex-col border-2 mx-10 py-4 my-5 border-orange-500 rounded-3xl hover:bg-orange-500 text-xl cursor-pointer text-orange-500 hover:text-white w-[300px]'>
          <FaHamburger/>
          <p>Hamburger</p>
        </div>
        
        <div className='shadow-xl flex items-center justify-center flex-col border-2 mx-10 py-4 my-5 border-orange-500 rounded-3xl hover:bg-orange-500 text-xl cursor-pointer text-orange-500 hover:text-white w-[300px]'>
          <FaPizzaSlice/>
          <p>Pizza</p>
        </div>

        <div className='shadow-xl flex items-center justify-center flex-col border-2 mx-10 py-4 my-5 border-orange-500 rounded-3xl hover:bg-orange-500 text-xl cursor-pointer text-orange-500 hover:text-white w-[300px]'>
          <FaBirthdayCake/>
          <p>Cake</p>
        </div>

        <div className='shadow-xl flex items-center justify-center flex-col border-2 mx-10 py-4 my-5 border-orange-500 rounded-3xl hover:bg-orange-500 text-xl cursor-pointer text-orange-500 hover:text-white w-[300px]'>
          <SiBuymeacoffee/>
          <p>Coffee</p>
        </div>
      </div>
    </div>
  )
}

export default Home