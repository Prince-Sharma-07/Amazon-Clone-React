import { useNavigate } from "react-router"

export default function MainCard2({ category, img_link, product_name, discounted_price, actual_price, product_id }) {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`/products/${product_id}`)} className='flex flex-col justify-between h-105 font-amazonEmber px-5 gap-2 py-4 w-full rounded-[1px] bg-white shadow-xl '>
            <span className='text-[20px] text-[#0f1111] font-[600] break-all line-clamp-2'>{category?.replaceAll("|", " | ") ?? ""}</span>
            <img src={img_link} alt="" className='h-50 object-contain cursor-pointer' />
            <span className='text-[#0f1111] text-[15px] font-[400] cursor-pointer line-clamp-2'>{product_name}</span>
            <span className='text-[21px] text-[#0f1111] font-[400] cursor-pointer flex gap-2 items-center'>{discounted_price}
                <span className='text-sm font-[400] font-amazonEmber text-[#565959] gap-1 flex self-end p-[3.5px]'>M.R.P:
                    <s>{actual_price}</s>
                </span>
            </span>
        </div>
    )
}