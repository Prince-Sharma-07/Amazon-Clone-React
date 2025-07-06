import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { ProductsData } from '../Constants';
import ChevronDown from '../assets/ChevronDown'
import { useCart } from '../Contexts/CartContext';

export default function Product() {

  const { productId = '' } = useParams();

  const navigate = useNavigate()

  const { addToCart } = useCart()

  const [quantityValue, setQuantityValue] = useState(1)

  const productData = ProductsData.find((product) => product.product_id === productId)

  const { img_link, product_name, discounted_price, rating, rating_count, actual_price, discount_percentage, about_product } = productData

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);


  return (

    productData ? (

      <div className='flex flex-col w-full h-auto overflow-auto gap-2'>

        <div className='flex max-md:flex-col justify-between w-[100%] px-6 gap-4 pt-[95px] md:pt-[120px] font-amazonEmber text-[#0f1111]'>
          <h1 className='md:hidden text-[#0f1111] font-[400] text-[24px]'>{product_name}</h1>
          {/* Product Image  1st section*/}
          <div className='max-md:w-full w-[45%]'><img src={img_link} alt="product_image" className='h-150 w-full object-contain' /></div>

          {/* Container for section 2 & 3 */}
          <div className='w-[55%] max-md:w-full flex overflow-auto scrollbar-hidden'>

            {/* Product Details 2nd Section*/}
            <div className='flex w-[70%] max-md:hidden h-screen flex-col gap-2 px-10'>

              <span className='text-[#0f1111] font-[400] text-[24px]'>{product_name}</span>

              <div className='flex gap-4 text-[14px] w-full justify-start font-[400]'>

                <span className='flex gap-2 justify-start items-center'>
                  <span className=''>{rating}</span>
                  <span className='flex justify-center items-center gap-1 relative h-2'>
                    <img src="/rating.jpg" alt="" className='w-23 h-4' />
                    <ChevronDown className={'size-4'} />
                  </span>
                </span>

                <span className='flex justify-start gap-2 flex-1'>
                  <a className='hover:text-[#0c3353] text-[#2162A1] hover:underline cursor-pointer'>{rating_count} ratings</a>
                  <span> | </span>
                  <a href="#" className='hover:text-[#0c3353] text-[#2162A1]  hover:underline cursor-pointer'>Search this page</a>
                </span>

              </div>

              <div className='flex flex-col gap-1 text-[12px] font-[400]'>
                <span>
                  <strong>1K+ bought</strong> in past month
                </span>
                <hr className='text-[#ced4d4] size-[1]' />
              </div>

              <div>

                <span className='text-[#cc0c39] text-[24px] font-light  flex gap-2'>{discount_percentage}
                  <span className='text-[28px] text-[#0f1111] font-[400] cursor-pointer flex gap-2 items-center'>{discounted_price}</span>
                </span>
                <span className='text-sm font-[400] font-amazonEmber text-[#565959] gap-1 flex self-end p-[3.5px]'>M.R.P:
                  <s>{actual_price}</s>
                </span>
              </div>

              <div className='text-[14px] font-[400]'>Inclusive of all taxes</div>

              <div className='flex flex-col gap-2'>
                <span className='flex gap-2'>
                  <div className="w-[28px] h-[28px] overflow-hidden relative">
                    <img
                      src="/offers_sprite.png"
                      className="absolute top-[-29px]" />
                  </div>
                  <span>offers</span>
                </span>

                <div className='flex w-full overflow-auto scrollbar-hidden gap-1 p-1'>
                  <OfferCard type={"Cashback"} desc={"Upto ₹4.00 cashback as Amazon Pay Balance when you pay with Amazon Pay ICICI Bank Credit Cards"} redirect_label={"1 offer >"} />
                  <OfferCard type={"Bank Offer"} desc={"Upto ₹2,000.00 discount on select Credit Cards, HDFC Bank Debit Cards"} redirect_label={"33 offers >"} />
                  <OfferCard type={"Partner Offers"} desc={"Get GST invoice and save up to 28% on business purchases. "} redirect_label={"1 offer >"} />
                </div>
              </div>

              <div className='flex flex-col gap-5'>
                <hr className='text-[#ced4d4] size-[1]' />
                <span className='flex flex-col gap-1'>
                  <strong>About this item</strong>
                  <span>{about_product.replaceAll('|', " ") ?? ""}</span>
                </span>
              </div>

            </div>

            {/* Product Purchase Card Section 3 */}
            <div className='w-[30%] max-md:w-full max-md:border-0 h-fit p-4 flex flex-col gap-3 border-[1px] border-[#ced4d4] rounded-b-md'>
              <span className='text-[28px] font-[400]'>{discounted_price}</span>
              <span className='text-[14px] font-[400]'>FREE delivery <strong>Tuesday, 13 May</strong> to <a href="#" className='hover:text-[#0c3353] text-[#2162A1] underline cursor-pointer'>Dehradun 248001</a> on your first order.</span>
              <span className='text-[14px] font-[400]'>Or fastest delivery <strong>Tomorrow, 9 May</strong>. Order within <span className='text-[#067d62] font-[400]'>7 hrs 41 mins. </span><a href="" className='hover:text-[#0c3353] text-[#2162A1] underline cursor-pointer'> Details</a></span>
              <span className='text-[#067d62] text-[18px] font-[400]'>In stock</span>
              <div className='grid grid-cols-2 gap-y-1 text-[12px] w-full font-[400] text-[#565959]'>
                <span>Ships from</span>
                <strong>Amazon</strong>
                <span>Sold by</span>
                <span className='hover:text-[#0c3353] text-[#2162A1] cursor-pointer hover:underline'>Cocoblu Retail</span>
                <span>Payment</span>
                <span className='hover:text-[#0c3353] text-[#2162A1] cursor-pointer hover:underline'>Secure transaction</span>
                <span>Packaging</span>
                <span className='hover:text-[#0c3353] text-[#2162A1] cursor-pointer hover:underline'>Ships in product packaging</span>
              </div>
              <label className='flex items-center text-[13px] font-[400] bg-[#E3E6E6] px-2 rounded-md border-[1px] border-[#ced4d4]'>Quantity:
                <select onChange={e => setQuantityValue(e.target.value)} className='p-[6px] px-[9px] w-full'>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </select>
              </label>
              <button onClick={() => {
                addToCart(productId, quantityValue, discounted_price)
                navigate('/cart')
              }
              } className='p-[6px] px-[9px] border-none text-[13px] font-[400] text-[#0f1111] cursor-pointer bg-[#FFD814] hover:bg-[#FFCE12] rounded-2xl'>Add to cart</button>
              <button className='p-[6px] px-[9px] border-none text-[13px] font-[400] text-[#0f1111] cursor-pointer bg-[#FFA41C] hover:bg-[#FA8900] rounded-2xl'>Buy Now</button>
              <label><input className='size-[14px] text-[14px] font-[400]' type="checkbox" /> Add gift options</label>
              <hr className='text-[#ced4d4] size-[1]' />
              <button className='p-[6px] px-[9px] flex justify-start border-[#888C8C] border-[1px] rounded-md font-[400] text-[13px]'>Add to Wish List</button>
            </div>

          </div>

        </div>


      </div>
    ) : (
      <div className='flex justify-between w-[100%] px-6 gap-4 relative top-[150px]'>No product found</div>
    )
  )
}

function OfferCard({ type, desc, redirect_label }) {
  return (
    <div className=' flex flex-col max-w-40 min-w-40 gap-1 shadow-[-0.5px_0.5px_4px_0.5px_rgba(0,0,0,0.2)] font-[400] text-[14px] p-2 rounded-md'>
      <strong className='text-[14px]'>{type}</strong>
      <span className='line-clamp-3'>{desc}</span>
      <a href="#" className='hover:text-[#0c3353] text-[#2162A1] cursor-pointer hover:underline' >{redirect_label}</a>
    </div>
  )
}
