import Profile from '../assets/profile.svg'
import ChevronRight from '../assets/ChevronRight.jsx'
import {slideBarData} from '../Constants'

export default function Slidebar({toggleSlideBar = false , handleHamburger = ()=>{}}) { 

  return (
    toggleSlideBar &&
    <div className='h-screen w-screen fixed top-0 left-0 bg-[#000000cc] font-amazonEmber z-20' onClick={handleHamburger}>
      <div className='p-3 h-[7%] font-semibold xl:w-[24%] lg:w-[30%] md:w-[50%] sm:w-[60%] w-[75%] bg-[#28323f] text-[#ffffff] flex gap-2 md:px-8 sm:px-6 px-4 text-lg' onClick={(e) => e.stopPropagation()}>
        <span className='flex items-center px-[1.5px] bg-white rounded-[100%]'>
          <img src={Profile} alt="customer_profile" />
          </span>Hello, sign in
      </div>
      <div onClick={(e) => e.stopPropagation()} className='h-[93%] xl:w-[24%] lg:w-[30%] md:w-[50%] sm:w-[60%] w-[75%] bg-[#ffffff] overflow-auto'>
        {slideBarData.map(({ title, content }) =>
          <div className='w-full '>
            <SlidebarBlock title={title} content={content} />
            <hr className='text-[#ced4d4] w-full' />
          </div>)}
      </div>
    </div>
  )
}


function SlidebarBlock({title , content}) {
  return (
    <div className='flex flex-col gap-3 py-4 w-full'>
        <h2 className='font-bold text-lg md:px-8 sm:px-6 px-4'>{title}</h2>
        <div className='flex flex-col w-full'>{content.map(({label , chevron})=><BlockItems label={label} chevron={chevron}/>)}</div>
    </div>
  )
}

function BlockItems({label , chevron = false}){
 
  return (
        <div className='flex w-full justify-between md:px-8 sm:px-6 px-4 text-sm hover:bg-[#e5e5e6] cursor-pointer p-3 group' >
        <span className='text-[14px] text-[#111111]'>{label}</span>
        {chevron &&
        <ChevronRight className={'group-hover:text-black text-[#879596] max-md:hidden'}/>
        }</div>
  )
}
