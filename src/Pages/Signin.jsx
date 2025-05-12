import React from 'react'
import AmazonLogo from '../assets/amazonLogoBlack.svg'
import { useNavigate } from 'react-router'

export default function Signup() {
  const navigate = useNavigate()
  const borderStyles = 'border-transparent border hover:border-white'

  return (
    <div className=''>
      <div onClick={() => navigate('/home')} className={`${borderStyles} h-[90%] flex justify-center px-2 py-6 `}>
        <img src={AmazonLogo} alt="Logo" className='h-8' />
        <span className='mb-1'>.in</span>
      </div>
    </div>
  )
}
