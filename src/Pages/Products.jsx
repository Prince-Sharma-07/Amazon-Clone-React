import { useNavigate } from 'react-router';
import { ProductsData } from '../Constants';
import { useProductsContext } from '../Contexts/ProductsContext';

export default function Products() {

  const { filteredData = [] } = useProductsContext()

  return (
    <div className='flex justify-between relative top-[97px] font-amazonEmber p-4 px-4 bg-[#EAEDED]'>

      <div className='w-[16%] h-fit flex flex-col gap-4 p-6 bg-white'>


        <div className='flex gap-2 items-center'>
          <span>Filter Products</span>
        </div>


        <div className='flex flex-col'>
          <span className='text-[18px] font-[400]'>Brands:</span>
          <label className='flex items-center gap-2'>
            <input type="checkbox" />
            This order contains a gift
          </label>
        </div>
        <button className='p-[6px] px-[9px] border-none text-[13px] font-[400] text-[#0f1111] cursor-pointer bg-[#FFD814] hover:bg-[#FFCE12] rounded-2xl' >Proceed to buy</button>
      </div>

      <div className='w-[83%] flex flex-col p-4 bg-white'>
        <h3 className='font-[400] text-[18px]'>Searched Results</h3>
        <div className='text-end text-[#565959] text-[14px] font-[400]'>Price</div>
        <hr className='text-[#ced4d4] size-[1]' />

        {filteredData.length ?

          filteredData.map((item) => {
            const { product_name, img_link, discounted_price, discount_percentage, actual_price, product_id } = ProductsData.find(({ product_id }) => product_id === item.product_id)
            return (
              <div className='flex flex-col pt-4 pl-4 gap-4'>
                <Product product_name={product_name} img_link={img_link} discount_percentage={discount_percentage} discounted_price={discounted_price} actual_price={actual_price} product_id={product_id} quantity={item.quantity} />
                <hr className='text-[#ced4d4] size-[1]' />
              </div>
            )
          }
          ) : (
            <div className='flex text-lg p-2'>Oops no products found :( <br />Search something different...</div>
          )
        }
      </div>

    </div>
  )
}


function Product({ product_name, img_link, discount_percentage, discounted_price, actual_price, product_id }) {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/products/${product_id}`)} className='flex justify-between gap-4 font-amazonEmber'>
      <div className='w-[18%]'><img src={img_link} className='h-40 w-full object-contain' alt="" /></div>
      <div className='flex flex-col justify-between gap-2 w-[62%]'>
        <div className='flex flex-col'>
          <span className='text-[18px] font-[400] line-clamp-2'>{product_name}</span>
          <span className='text-[12px] text-[#067d62]'>In stock</span>
        </div>
        <div onClick={(e) => e.stopPropagation()}>
          <label className='text-xs flex items-center gap-1'><input type="checkbox" />This will be a gift <a href="#" className='hover:text-[#0c3353] text-[#2162A1] hover:underline cursor-pointer'> Learn more</a></label>
          <span className='text-sm'>Eligible for FREE Shipping</span>
        </div>
        <div className='flex gap-2 text-xs items-center text-nowrap'>
          <button className='hover:text-[#0c3353] text-[#2162A1] hover:underline cursor-pointer'>Save for later</button>
          <BreakPoint />
          <button className='hover:text-[#0c3353] text-[#2162A1] hover:underline cursor-pointer'>See more like this</button>
          <BreakPoint />
          <button className='hover:text-[#0c3353] text-[#2162A1] hover:underline cursor-pointer'>Share</button>
        </div>
      </div>
      <div className='flex flex-col w-[15%]'>
        <div className='flex gap-2 items-center justify-end w-full'>
          <span className='bg-[#CC0C39] text-white p-1 px-2 text-xs rounded-xs font-[600] text-nowrap'>{discount_percentage} off</span>
          <span className='text-[12px] font-[700] text-nowrap text-[#CC0C39]'>Limited time deal</span>
        </div>
        <div className='flex justify-end w-full text-[18px] font-[700]'>{discounted_price}.00</div>
        <div className='text-xs font-[400] font-amazonEmber text-[#565959] gap-1 flex self-end p-[3.5px]'>M.R.P:
          <s>{actual_price}</s>
        </div>

      </div>
    </div>
  )
}


function BreakPoint() {
  return (
    <span className='text-[#ced4d4] text-[15px] font-thin flex '> | </span>
  )
}