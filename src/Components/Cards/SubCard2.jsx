import { useNavigate } from "react-router"

export default function SubCard2({ img_link, product_id }) {
    const navigate = useNavigate()
    return (
        <img onClick={() => navigate(`/products/${product_id}`)} src={img_link} className='h-[80%] w-full object-contain' alt="" />
    )
}
