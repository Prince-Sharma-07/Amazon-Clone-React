import { useEffect, useState } from 'react';

export default function Carousel() {
    const [i, setI] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setI(prev => (prev + 1) % 5);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='flex relative overflow-hidden'>
            <div className='absolute bg-gradient-to-b from-[transparent] to-[#E3E6E6] w-full h-20 sm:h-40 md:h-60 lg:h-80 bottom-0'></div>
            <button className='absolute text-4xl left-2 px-4 rounded-md border-2 border-transparent hover:border-[#0A7CD1] hover:outline-2 outline-white py-5 sm:py-10 md:py-15 lg:py-20 xl:py-26 m-[1px] cursor-pointer'
                onClick={() => setI(prev => {
                    if (prev == 0) return prev + 5
                    return prev - 1
                })}>
                <img height={38} width={40} src={'/left_arrow.svg'} className='max-md:h-[18px] max-md:w-[20px] max-lg:h-[24px] max-lg:w-[26px] max-xl:h-[28px] max-xl:w-[30px]' />
            </button>
            <img key={i} height={1000} width={2000} src={`/carousel${i}.jpg`} alt={`/carousel${i}`} className="px-2" />
            <button className='absolute text-4xl right-2 px-4 rounded-md border-2 border-transparent hover:border-[#0A7CD1] hover:outline-2 outline-white py-5 sm:py-10 md:py-15 lg:py-20 xl:py-26 m-[1px] cursor-pointer'
                onClick={() => setI(prev => (prev + 1) % 6)}>
                <img height={38} width={40} src={'/right_arrow.svg'} className='max-md:h-[18px] max-md:w-[20px] max-lg:h-[24px] max-lg:w-[26px] max-xl:h-[28px] max-xl:w-[30px]' />
            </button>
        </div>
    )
}
