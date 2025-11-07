import SubCard1 from "./SubCard1";
import SubCard2 from "./SubCard2";

export default function MainCard1({ title, subData = [], redirect_label }) {
    return (
        <div className='flex flex-col h-105 w-[90%] relative font-amazonEmber gap-1 px-5 py-4 sm:w-full  rounded-[1px] bg-white shadow-xl'>
            <span className='text-[21px] text-[#0f1111] h-fit font-[700] '>{title}</span>
            <div className='h-full justify-around flex flex-col cursor-pointer'>
                {
                    subData.length > 1 ?
                        <div className='grid grid-cols-2 h-full gap-x-4 gap-y-2'>
                            {subData?.map(({ img_link, product_name, product_id }) => <SubCard1 img_link={img_link} product_name={product_name} product_id={product_id} />)}
                        </div>
                        : subData.length === 1 ?
                            <SubCard2 img_link={subData[0].img_link} product_id={subData[0].product_id} />
                            : null
                }
                <span className='text-[#2162A1]  text-[13px] font-[400] cursor-pointer hover:text-[#0C3353]'>{redirect_label}</span>
            </div>
        </div>
    )
}