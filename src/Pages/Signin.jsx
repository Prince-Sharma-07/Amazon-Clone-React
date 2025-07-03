import React from 'react'
import AmazonLogo from '../assets/amazonLogoBlack.svg'
import { useNavigate } from 'react-router'

export default function Signup() {
  const navigate = useNavigate()
  const borderStyles = 'border-transparent border hover:border-white'

  return (
    <div className='flex flex-col gap-8 items-center font-amazonEmber'>
      <div onClick={() => navigate('/home')} className={`${borderStyles} h-[90%] flex justify-center mt-4`}>
        <img src={AmazonLogo} alt="Logo" className='h-8' />
        <span className='mb-1'>.in</span>
      </div>
      <form onSubmit={e=>e.preventDefault()} className='flex flex-col gap-4 border rounded-md xl:w-[23%] lg:w-[30%] md:w-[40%] sm:w-[50%] w-[80%] justify-center items-stretch px-8 py-6'>
        <h2 className='text-[20px] font-[400]'>Sign in or create account</h2>
        <div className='flex flex-col items-stretch'>
          <label htmlFor='username' className='text-[14px] font-[700]' children={'Enter mobile number or email'} />
          <input type="text" id='username' className='border rounded-xs px-1.5 py-1' />
        </div>
        <div className='flex flex-col items-stretch'>
          <label htmlFor='password' className='text-[14px] font-[700]' children={'Enter the password'} />
          <input type="password" id='password' className='border rounded-xs px-1.5 py-1' />
        </div>
        <button className='p-2 bg-amber-300 rounded-4xl text-[14px] cursor-pointer'>Continue</button>
        <span className='text-[13px] font-[400]'>By continuing, you agree to Amazon's <a href="#" className='hover:text-[#0c3353] text-[#2162A1] cursor-pointer hover:underline'> Conditions of Use</a> and <a href="" className='hover:text-[#0c3353] text-[#2162A1] cursor-pointer hover:underline'>Privacy Notice.</a></span>
        <hr className='text-[#ced4d4] size-[1]'/>
        <div>
          <div className='text-[14px] font-[700]'>Buying for work?</div>
          <a href="#" className='hover:text-[#0c3353] text-[#2162A1] cursor-pointer hover:underline text-[14px] font-[400]'>Create a free business account</a>
        </div>
      </form>
      <hr className='text-[#ced4d4] w-full border' />
      <div className='grid grid-col-3 gap-x-4 gap-y-3 text-[12px] font-[400]'>
        <a href="#" className='hover:text-[#0c3353] text-[#2162A1] cursor-pointer hover:underline'>Conditions of Use </a>
        <a href="#" className='hover:text-[#0c3353] text-[#2162A1] cursor-pointer hover:underline'>Privacy Notice </a>
        <a href="#" className='hover:text-[#0c3353] text-[#2162A1] cursor-pointer hover:underline'>Help </a>
        <span className='col-span-3'>© 1996–2025, Amazon.com, Inc. or its affiliates</span>
      </div>
    </div>
  )
}
