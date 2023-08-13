import React, { useState } from 'react'
import { ChefData } from '../data/chef'
import { Link } from 'react-router-dom'
import {AiOutlineTwitter, AiOutlineInstagram, AiOutlineFacebook} from 'react-icons/ai'
function Chef() {

  const [products, setProducts] = useState(ChefData)

    const filter = (type) => {
        setProducts(ChefData.filter((product => product.type === type)))
    }


  return (
    <div className='flex items-center justify-center flex-col m-20'>
      <h3 className='text-6xl font-bold text-center mb-10'>Our <span className='text-orange-500 border-b-8 border-orange-500'>Chefs</span></h3>
      <div className='grid grid-cols-2' >
          {
               products.map((chef, i) => (
                  <div className=' flex w-[600px] items-center justify-between flex-col px-20 m-5 py-5 border-b-2 border-orange-500 shadow-2xl'>
                      <div className='' > 
                      <img src={chef.img} className='rounded-2xl w-[250px] h-[350px] shadow-2xl mb-5' alt="" />
                          <div className="flex flex-col">
                              <span className='text-2xl text-orange-500 font-bold'>{chef.name}</span>
                              <div className='my-5 text-left flex items-center justify-between'>
                                <span className='mr-4 text-sm opacity-70'>{chef.country}</span>                
                                <span className='mr-4 text-sm opacity-70'>{chef.age}</span>                                                      
                              </div>       
                             <div className='flex items-center justify-center '>
                                <AiOutlineFacebook size={40} className='p-2 cursor-pointer rounded-xl mx-2  hover:bg-orange-500 hover:text-white shadow-xl border-2 border-orange-500 text-orange-500'/>
                                <AiOutlineInstagram size={40} className='p-2 cursor-pointer rounded-xl mx-2  hover:bg-orange-500 hover:text-white shadow-xl border-2 border-orange-500 text-orange-500'/>
                                <AiOutlineTwitter size={40} className='p-2 cursor-pointer rounded-xl mx-2  hover:bg-orange-500 hover:text-white shadow-xl border-2 border-orange-500 text-orange-500'/>
                              </div>                            
                          </div>
                      </div>
                      

                  </div>
              ))
          }
        </div>
      </div>
  
  )
}

export default Chef