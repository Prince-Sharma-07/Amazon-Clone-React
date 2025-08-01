import { useState } from 'react'
import { sliceDataCard1, sliderData1, sliderData2, sliceDataCard2 } from '../Constants'
import { useNavigate } from 'react-router'


export default function Home() {
  const [i, setI] = useState(0);
  return (
    <div className='flex flex-col gap-4 min-h-screen items-center bg-[#E3E6E6] max-md:pt-[80px] md:pt-[97px]'>

      <div className='flex relative'>
        <div className='absolute bg-gradient-to-b from-[transparent] to-[#E3E6E6] w-full h-20 sm:h-40 md:h-60 lg:h-80 bottom-0'></div>
        <button className='absolute text-4xl left-2 px-4 rounded-md border-2 border-transparent hover:border-[#0A7CD1] hover:outline-2 outline-white py-5 sm:py-10 md:py-15 lg:py-20 xl:py-26 m-[1px] cursor-pointer' onClick={() => setI(prev => {
          if (prev == 0) return prev + 5
          return prev - 1
        })}
        ><img height={38} width={40} src={'/left_arrow.svg'} className='max-md:h-[18px] max-md:w-[20px] max-lg:h-[24px] max-lg:w-[26px] max-xl:h-[28px] max-xl:w-[30px]' /></button>
        <img key={i} height={1000} width={2000} src={`/carousel${i}.jpg`} alt="carousel_img_1" className="px-2 " />
        <button className='absolute text-4xl right-2 px-4 rounded-md border-2 border-transparent hover:border-[#0A7CD1] hover:outline-2 outline-white py-5 sm:py-10 md:py-15 lg:py-20 xl:py-26 m-[1px] cursor-pointer' onClick={() => setI(prev => (prev + 1) % 6)}
        ><img height={38} width={40} src={'/right_arrow.svg'} className='max-md:h-[18px] max-md:w-[20px] max-lg:h-[24px] max-lg:w-[26px] max-xl:h-[28px] max-xl:w-[30px]' />
        </button>
      </div>

      <div className='-mt-[100px] sm:-mt-[180px] md:-mt-[208px] lg:-mt-[270px] xl:-mt-[385px] mx-2 p-5 grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center w-full'>
        {sliceDataCard1.map(({ title, subCardData, redirect_label }) => <MainCard1 title={title} subData={subCardData} redirect_label={redirect_label} />)}
        <SliderCard title={sliderData1[0].category} redirect_label={"See all offers"} sliderData={sliderData1} />
        {sliceDataCard2.map(({ product_id, product_name, img_link, discounted_price, category, actual_price }) => <MainCard2 product_name={product_name} actual_price={actual_price} category={category} img_link={img_link} discounted_price={discounted_price} product_id={product_id} />)}
        <SliderCard title={sliderData2[0].category} redirect_label={"See all offers"} sliderData={sliderData2} />
      </div>

    </div>

  )
}

function SliderCard({ title, redirect_label, sliderData }) {
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

function MainCard1({ title, subData = [], redirect_label }) {

  return (
    <div className='flex flex-col h-105 w-[90%] relative font-amazonEmber gap-1 px-5 py-4 sm:w-full  rounded-[1px] bg-white shadow-xl'>

      <span className='text-[21px] text-[#0f1111] h-fit font-[700] '>{title}</span>

      <div className='h-full justify-around flex flex-col cursor-pointer'>

        {subData.length > 1 ?
          <div className='grid grid-cols-2 h-full gap-x-4 gap-y-2'>
            {subData?.map(({ img_link, product_name, product_id }) => <Subcard1 img_link={img_link} product_name={product_name} product_id={product_id} />)}
          </div>
          : subData.length === 1 ?
            <Subcard2 img_link={subData[0].img_link} product_id={subData[0].product_id} />
            : null
        }
        <span className='text-[#2162A1]  text-[13px] font-[400] cursor-pointer hover:text-[#0C3353]'>{redirect_label}</span>
      </div>
    </div>
  )
}

function MainCard2({ category, img_link, product_name, discounted_price, actual_price, product_id }) {
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

function Subcard1({ img_link, product_name, product_id }) {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/products/${product_id}`)} className='flex flex-col'>
      <img src={img_link} className='h-28 object-contain' alt="" />
      <span className='max-w-full text-[12px] font-medium truncate'>{product_name}</span>
    </div>
  )
}

function Subcard2({ img_link, product_id }) {
  const navigate = useNavigate()
  return (
    <img onClick={() => navigate(`/products/${product_id}`)} src={img_link} className='h-[80%] w-full object-contain' alt="" />
  )
}


