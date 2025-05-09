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
        <div className={`bg-[#232f3e] fixed top-15 z-10 w-full flex text-nowrap gap-3 overflow-auto font-amazonEmber px-4 `} >
            <Slidebar toggleSlideBar={toggleSlideBar} handleHamburger={handleHamburger}/>
            <div className={`${borderStyles} text-white text-sm flex items-center  px-1 py-1`} onClick={()=>handleHamburger()}><img src={Hamburger}/>All</div>
            {categoriesData.map(data => <div className={`${borderStyles} text-white font-[400] text-sm px-1 py-2`}>{data}</div>)}
        </div>
    )
}
