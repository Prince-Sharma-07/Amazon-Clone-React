import { useNavigate } from 'react-router';
import { ProductsData } from '../Constants';
import { useCart } from '../Contexts/CartContext'
import greenTick from '../assets/greenTick.svg'


export default function Cart() {

  const { totalItems = 0, cart = [], subTotalFormatted = 0 } = useCart();
  let img_url = null;

  return (
    <div className='flex justify-between relative top-[97px] font-amazonEmber p-4 px-4 bg-[#EAEDED]'>
      <div className='w-[78%] flex flex-col p-4 bg-white'>
        <h2 className='font-[400] text-[28px]'>Shopping Cart</h2>
        <div className='text-end text-[#565959] text-[14px] font-[400]'>Price</div>
        <hr className='text-[#ced4d4] size-[1]' />

        {cart.length ?

          cart.map((item) => {
            const { product_name, img_link, discounted_price, discount_percentage, actual_price, product_id } = ProductsData.find(({ product_id }) => product_id === item.product_id)
            img_url = img_link
            return (
              <div className='flex flex-col pt-4 pl-4 gap-4'>
                <CartProduct product_name={product_name} img_link={img_link} discount_percentage={discount_percentage} discounted_price={discounted_price} actual_price={actual_price} product_id={product_id} quantity={item.quantity} />
                <hr className='text-[#ced4d4] size-[1]' />
              </div>
            )
          }
          ) : (
            <div className='flex gap-2 text-lg p-2'>Cart is empty :( <br />Try Adding Something...</div>
          )
        }
      </div>

      <div className='w-[21%] h-fit flex flex-col gap-4 p-6 bg-white'>

        {cart.length ?
          <div className='flex gap-2 items-center'>
            <img src={img_url} alt="" className='object-contain size-10' />
            <img src={greenTick} alt="tick" />
            <span>Added to Cart</span>
          </div> :
          <div className='flex text-lg '>Cart is empty :( </div>
        }

        <div className='flex flex-col'>
          <span className='text-[18px] font-[400]'>{`Subtotal (${totalItems} items): ₹`}<span className='font-[700] text-[18px]'>{`${subTotalFormatted}`}</span></span>
          <label className='flex items-center gap-2'>
            <input type="checkbox" />
            This order contains a gift
          </label>
        </div>
        <button className='p-[6px] px-[9px] border-none text-[13px] font-[400] text-[#0f1111] cursor-pointer bg-[#FFD814] hover:bg-[#FFCE12] rounded-2xl' >Proceed to buy</button>
      </div>

    </div>
  )
}


function CartProduct({ product_name, img_link, discount_percentage, discounted_price, actual_price, product_id, quantity }) {
  const { addToCart = () => { }, deleteFromCart = () => { }, removeFromCart = () => { } } = useCart()
  const navigate = useNavigate()
  return (
    <div className='flex justify-between gap-4 font-amazonEmber'>
      <div className='w-[18%]'><img onClick={() => navigate(`/products/${product_id}`)} src={img_link} className='h-40 w-full object-contain' alt="" /></div>
      <div className='flex flex-col justify-between gap-2 w-[62%]'>
        <div className='flex flex-col'>
          <span className='text-[18px] font-[400] line-clamp-2'>{product_name}</span>
          <span className='text-[12px] text-[#067d62]'>In stock</span>
        </div>
        <div>
          <label className='text-xs flex items-center gap-1'><input type="checkbox" />This will be a gift <a href="#" className='hover:text-[#0c3353] text-[#2162A1] hover:underline cursor-pointer'> Learn more</a></label>
          <span className='text-sm'>Eligible for FREE Shipping</span>
        </div>
        <div className='flex gap-2 text-xs items-center text-nowrap'>
          <div className='flex justify-center items-center gap-6 border-[#FFD814] border-[3px] rounded-3xl px-2'>
            <button onClick={() => removeFromCart(product_id)} className='text-2xl font-[300] self-start cursor-pointer'>-</button>
            <span className='text-[15px] font-[400]'>{quantity}</span>
            <button onClick={() => addToCart(product_id)} className='text-2xl font-[300] cursor-pointer'>+</button>
          </div>
          <BreakPoint />
          <button onClick={() => deleteFromCart(product_id)} className='hover:text-[#0c3353] text-[#2162A1] hover:underline cursor-pointer'>Delete</button>
          <BreakPoint />
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