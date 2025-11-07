import { useNavigate } from "react-router"

export default function SubCard1({ img_link, product_name, product_id }) {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`/products/${product_id}`)} className='flex flex-col'>
            <img src={img_link} className='h-28 object-contain' alt="" />
            <span className='max-w-full text-[12px] font-medium truncate'>{product_name}</span>
        </div>
    )
}
