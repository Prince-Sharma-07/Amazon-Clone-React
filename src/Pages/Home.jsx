import MainCard1 from '../Components/Cards/MainCard1'
import MainCard2 from '../Components/Cards/MainCard2'
import SliderCard from '../Components/Cards/SliderCard'
import Carousel from '../Components/Carousel'
import { sliceDataCard1, sliceDataCard2, sliderData1, sliderData2 } from '../Constants'


export default function Home() {
  
  return (
    <div className='flex flex-col gap-4 min-h-screen items-center bg-[#E3E6E6] max-md:pt-[80px] md:pt-[97px]'>
      <Carousel />
      <div className='-mt-[100px] sm:-mt-[180px] md:-mt-[208px] lg:-mt-[270px] xl:-mt-[385px] mx-2 p-5 grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center w-full'>
        {sliceDataCard1.map(({ title, subCardData, redirect_label }) => <MainCard1 title={title} subData={subCardData} redirect_label={redirect_label} />)}
        <SliderCard title={sliderData1[0].category} redirect_label={"See all offers"} sliderData={sliderData1} />
        {sliceDataCard2.map(({ product_id, product_name, img_link, discounted_price, category, actual_price }) => <MainCard2 product_name={product_name} actual_price={actual_price} category={category} img_link={img_link} discounted_price={discounted_price} product_id={product_id} />)}
        <SliderCard title={sliderData2[0].category} redirect_label={"See all offers"} sliderData={sliderData2} />
      </div>
    </div>
  )
}






