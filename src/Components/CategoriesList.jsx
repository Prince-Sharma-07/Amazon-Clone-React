import Hamburger from '../assets/hamburger.svg'
import { categoriesData } from '../Constants'
import { useState } from 'react'
import Slidebar from './Slidebar'


export default function CategoriesList() {
   
    const borderStyles = 'border-transparent border hover:border-white'
    const [toggleSlideBar , setToggleSlideBar] = useState(false)
    function handleHamburger(){
        setToggleSlideBar(!toggleSlideBar)
    }

    return (
        <div className={`bg-[#232f3e] fixed max-md:h-8 max-md:top-12 md:top-15 z-10 w-full flex items-center text-nowrap max-md:gap-2 md:gap-3 overflow-auto font-amazonEmber`} >
            <Slidebar toggleSlideBar={toggleSlideBar} handleHamburger={handleHamburger}/>
            <div className={`${borderStyles} mr-2 text-white max-md:text-xs md:text-sm flex items-center px-1 py-1`} onClick={()=>handleHamburger()}><img src={Hamburger}/>All</div>
            {categoriesData.map(data => <div className={`${borderStyles} text-white font-[400] max-md:text-xs md:text-sm max-md:px-0.5 max-md:py-1 md:px-1 md:py-2 `}>{data}</div>)}
        </div>
    )
}
