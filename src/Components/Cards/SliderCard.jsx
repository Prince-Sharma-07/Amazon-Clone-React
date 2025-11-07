import { useNavigate } from "react-router"

export default function SliderCard({ title, redirect_label, sliderData }) {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 gap-2 w-full bg-white px-6 py-4'>
            <div className='flex gap-4 items-center'>
                <span className='text-lg font-semibold'>{title.replaceAll('|', " | ") ?? ""}</span>
                <span className='text-[#2162A1] text-md font-[400] cursor-pointer hover:text-[#0C3353]'>{redirect_label}</span>
            </div>
            <div className='flex flex-nowrap gap-2  overflow-auto '>
                {sliderData.map(({ img_link, product_id }) => <img onClick={() => navigate(`/products/${product_id}`)} className='object-contain w-[15%] cursor-pointer' src={img_link}></img>)}
            </div>
        </div>
    )
}