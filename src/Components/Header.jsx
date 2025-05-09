import React from 'react'
import AmazonLogo from './../assets/amazon-logo-cropped.svg'
import Search from './../assets/search.svg'
import DownArrow from '../assets/down-arrow.svg'
import Flag from '../assets/flag.svg'
import Location from '../assets/location.svg'
import Cart from '../assets/Cart.svg'
import { Navigate, useNavigate } from 'react-router'

export default function Header() {

  const borderStyles = 'border-transparent border hover:border-white'
  const navigate = useNavigate()
  

  return (
    <div className='w-full fixed z-10 bg-[#131921] flex px-4 text-white text-sm font-amazonEmber items-center h-15'>
    
    <div onClick={()=>navigate('/home')} className={`${borderStyles} h-[90%] flex items-center px-2 py-6 `}>
      <img src={AmazonLogo} alt="Logo" className='h-8'/>
      <span className='mb-1'>.in</span>
    </div>

    <div className={`${borderStyles} h-[90%] flex items-center p-1`}>
      <img src={Location} alt="location" className='mt-2'/>
      <div className='flex flex-col'>
        <span className='text-[12px] text-[#e5e5e6] leading-3'>Delivering to Saharanpur 247001</span>
        <span className='font-bold'>Update Location</span>
      </div>
    </div>

    <form className={` flex flex-1 focus-within:outline-3 mx-4 focus-within:outline-orange-400 rounded-md`}>
        <select className='bg-[#e6e6e6] border-none w-14  rounded-l-md text-black active:outline-orange-400 active:outline-3'>
          <option value="all">All</option>
        </select>
        <input type="text" className='bg-white border-none flex-1 text-black p-2 text-[16px] outline-none' placeholder='Search Amazon.in'/>
        <img src={Search} alt="search_icon" className='bg-yellow-500 rounded-r-md cursor-pointer p-2 outline-none focus-within:outline-3 focus-within:outline-orange-300' />
    </form>

    <div className={`${borderStyles} h-[90%] flex w-16 mr-2 justify-around items-center`}>
        <img src={Flag} alt="" />
        <span>EN</span>
        <img src={DownArrow} alt="" />
    </div>
    

    <div className={`${borderStyles} h-[90%] w-35 px-2 flex flex-col justify-center`}>
        <span className='text-[12px] leading-3'>Hello, sign in</span>
        <div className='flex w-full justify-between'> 
            <span className='font-bold'>Accounts & Lists</span>
            <img src={DownArrow} alt="drop_down"/>
        </div>
    </div>

    <div className={`${borderStyles} h-[90%] px-2 flex flex-col justify-center`}>
        <span className='text-[12px] leading-3'>Returns</span>
        <span className='font-bold'>& Orders</span>
    </div>

    <div  className={`${borderStyles} h-[90%] px-2 flex items-end relative`}>
       <div> 
          <span className='absolute left-[30px] text-lg text-orange-400'>0</span>
          <img src={Cart} className='h-12' alt="" />
        </div>
        <span className='mb-2 font-bold'>Cart</span>
    </div>
    
  </div>
  )
}

