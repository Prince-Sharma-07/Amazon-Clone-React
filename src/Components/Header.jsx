import { useEffect, useState } from 'react'
import AmazonLogo from '../assets/amazonLogoWhite.svg'
import Search from './../assets/search.svg'
import DownArrow from '../assets/down-arrow.svg'
import Flag from '../assets/flag.svg'
import Location from '../assets/location.svg'
import Cart from '../assets/Cart.svg'
import { useNavigate } from 'react-router'
import { useCart } from '../Contexts/CartContext'
import { useProductsContext } from '../Contexts/ProductsContext'
import profileWhite from '../assets/profileWhite.svg'

export default function Header() {

  const borderStyles = 'border-transparent border hover:border-white'
  const navigate = useNavigate()
  const { totalItems = 0 } = useCart()
  const [inputValue, setInputValue] = useState('')
  const { handleSearch = () => { } } = useProductsContext()

  useEffect(() => handleSearch(inputValue), [inputValue])

  return (
    <div className='w-full fixed z-10 bg-[#131921] max-md:justify-around flex px-4 text-white text-sm font-amazonEmber items-center max-md:h-12 md:h-15'>

      <div onClick={() => navigate('/home')} className={`${borderStyles} h-[90%] flex items-center max-md:w-30 md:px-1 md:py-4 lg:px-2 lg:py-6 cursor-pointer`}>
        <img height={90} width={90} src={AmazonLogo} alt="Logo" className='min-h-10 min-w-10' />
        <span className='mb-1 text-xs sm:text-sm md:text-md '>.in</span>
      </div>

      <div className={`${borderStyles} h-[90%] sm:ml-5 md:ml-2 lg:ml-1 flex items-center p-1 max-md:hidden`}>
        <img src={Location} alt="location" className='mt-2' />
        <div className='flex flex-col'>
          <span className='text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] xl:text-[12px] text-[#e5e5e6] leading-3 '>Delivering to Saharanpur 247001</span>
          <span className='font-bold text-[8px] sm:text-[10px] md:text-[12px] lg:text-[13px] xl:text-[14px]'>Update location</span>
        </div>
      </div>

      <form onSubmit={(e) => {
        e.preventDefault()
        console.log()
        handleSearch(inputValue)
        navigate('/products')
      }}
        className={`flex flex-1 focus-within:outline-2 w-fit sm:focus-within:outline-3 max-sm:h-8 sm:h-10 mx-1 md:mx-2 lg:mx-3 xl:mx-4 focus-within:outline-orange-400 rounded-md`}>
        <button className='bg-[#e6e6e6] border-none max-sm:text-xs h-full w-10 lg:w-12 xl:w-14 rounded-l-md text-black active:outline-orange-400 active:outline-3 flex items-center justify-center gap-2 cursor-pointer'>
          <span>All</span>
          <img height={8} width={8} src={DownArrow} alt="" />
        </button>
        <input value={inputValue} onChange={e => setInputValue(e.target.value)} type="text" className='bg-white w-30 border-none flex-1 text-black max-sm:p-1 p-2 max-sm:text[12px] sm:text[13px] md:text[14px] lg:text[15px] xl:text-[16px] font-[400] outline-none' placeholder='Search Amazon.in' />
        <button className='h-full sm:w-10 w-8' type="submit"><img src={Search} alt="search_icon" className='bg-yellow-500 h-full rounded-r-md cursor-pointer p-1 md:p-2 outline-none focus-within:outline-3 focus-within:outline-orange-300' /></button>
      </form>

      <div className={`${borderStyles} h-[90%] max-md:hidden flex w-16 mr-2 justify-around items-center`}>
        <img src={Flag} alt="" />
        <span className='text-[8px] sm:text-[10px] md:text-[12px] lg:text-[13px] xl:text-[14px]'>EN</span>
        <img src={DownArrow} alt="Down_arrow" />
      </div>


      <div onClick={() => navigate('/auth')} className={`${borderStyles} max-md:hidden h-[90%] w-10 md:w-35 md:px-2 flex flex-col justify-center`}>
        <span className='text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] xl:text-[12px] leading-3'>Hello, sign in</span>
        <div className='flex w-full md:justify-between'>
          <span className='font-bold text-[8px] sm:text-[10px] md:text-[12px] lg:text-[13px] xl:text-[14px]'>Accounts & Lists</span>
          <img src={DownArrow} alt="drop_down" />
        </div>
      </div>

      <div onClick={() => navigate('/auth')} className={`${borderStyles} max-sm:hidden md:hidden h-[90%] gap-1 w-20 md:w-35 md:px-2 flex items-center justify-center`}>
        <span className='text-[13px]  leading-3 '>{'Sign in '}</span>
        <img src={profileWhite} alt="profile" className={`h-6 w-6`} />
      </div>

      <div onClick={() => navigate('/cart')} className={`${borderStyles} h-[90%] px-2 max-md:hidden flex flex-col justify-center`}>
        <span className='leading-3 text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] xl:text-[12px]'>Returns</span>
        <span className='font-bold text-[8px] sm:text-[10px] md:text-[12px] lg:text-[13px] xl:text-[14px]'>& Orders</span>
      </div>

      <div onClick={() => navigate('/cart')} className={`${borderStyles} h-[90%] md:px-2 flex items-end`}>
        <div>
          <span className='absolute top-1.5 right-[30px] sm:right-[54px] md:top-3.5 md:right-[58px] lg:right-[62px] xl:right-[68px] max-sm:text[12px] sm:text[13px] md:text[14px] lg:text[15px] xl:text-[16px] font-[700] text-orange-400'>{totalItems}</span>
          <img height={50} width={50} src={Cart} className='min-h-8 min-w-7' alt="" />
        </div>
        <span className='mb-2 font-bold max-sm:hidden text-[8px] sm:text-[10px] md:text-[12px] lg:text-[13px] xl:text-[14px]'>Cart</span>
      </div>

    </div>
  )
}

