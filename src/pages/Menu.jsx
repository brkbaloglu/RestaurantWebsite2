import React, { useState } from 'react'
import { MenuData } from '../data/menu'
import { Link } from 'react-router-dom'

function Menu() {

  const [products, setProducts] = useState(MenuData)

    const filter = (type) => {
        setProducts(MenuData.filter((product => product.type === type)))
    }


  return (
    <div className='flex items-center justify-center flex-col m-20'>
      <h3 className='text-6xl font-bold text-center mb-10'>Our <span className='text-orange-500 border-b-8 border-orange-500'>Menu</span></h3>
      <div>
        <ul className='flex items-center justify-center my-10'>
          <li className='p-2 mx-4 border-2 border-orange-500 text-orange-500 rounded-xl hover:bg-orange-500 hover:text-white cursor-pointer' onClick={() => setProducts(MenuData)}>All</li>
          <li className='p-2 mx-4 border-2 border-orange-500 text-orange-500 rounded-xl hover:bg-orange-500 hover:text-white cursor-pointer' onClick={() => filter("burger")}>Burger</li>
          <li className='p-2 mx-4 border-2 border-orange-500 text-orange-500 rounded-xl hover:bg-orange-500 hover:text-white cursor-pointer' onClick={() => filter("pizza")}>Pizza</li>
          <li className='p-2 mx-4 border-2 border-orange-500 text-orange-500 rounded-xl hover:bg-orange-500 hover:text-white cursor-pointer' onClick={() => filter("cake")}>Cake</li>
          <li className='p-2 mx-4 border-2 border-orange-500 text-orange-500 rounded-xl hover:bg-orange-500 hover:text-white cursor-pointer' onClick={() => filter("coffee")}>Coffee</li>
      </ul>
      <div className='grid grid-cols-1' >
          {
               products.map((product, i) => (
                  <div className='w-full flex items-center justify-between  px-10 my-5 py-5 border-b-4 border-orange-500 shadow-2xl'>
                      <div >
                          <div className="flex flex-col">
                              <span className='text-2xl text-orange-500 font-bold'>{product.name}</span>
                              <div className='my-5 text-left'>
                                <span className='mr-4 text-sm opacity-70'>{product.description}</span>                
                              <div>
                                <span className='mr-4 text-sm opacity-70'>Energy: {product.ingredients.energy}</span>                
                                <span className='mr-4 text-sm opacity-70'>Protein: {product.ingredients.protein}</span>                
                                <span className='mr-4 text-sm opacity-70'>Carbonhydrate: {product.ingredients.carbohydrate}</span>                
                                <span className='mr-4 text-sm opacity-70'>Fat: {product.ingredients.fat}</span>                
                                <span className='mr-4 text-sm opacity-70'>Sodium: {product.ingredients.sodium}</span>  
                              </div>             
                              </div>       
                             <div>
                             <span className='mt-2 text-lg mr-10'>{product.price} TL</span>   
                              <Link className='shadow-xl text-orange-500 border-2 py-2 px-4 rounded-xl border-orange-500 text-center hover:bg-orange-500 hover:text-white max-w-[115px]' to="/">Show Now</Link>
                           
                              </div>                            
                          </div>
                      </div>
                      
                      <img src={product.img} className='w-[200px]' alt="" />

                  </div>
              ))
          }
        </div>
      </div>
    </div>
  )
}

export default Menu