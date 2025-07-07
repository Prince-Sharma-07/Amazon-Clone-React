import AmazonLogo from '../assets/amazonLogoWhite.svg'
import Flag from '../assets/flag.svg'
export default function Footer({backToTop}) {

    const cat1 = ["About Amazon", "Careers", "Press Releases", "Amazon Science"]
    const cat2 = ["Facebook", "Twitter", "Instagram"]
    const cat3 = [
        "Sell on Amazon",
        "Sell under Amazon Accelerator",
        "Protect and Build Your Brand",
        "Amazon Global Selling",
        "Supply to Amazon",
        "Become an Affiliate",
        "Fulfilment by Amazon",
        "Advertise Your Products",
        "Amazon Pay on Merchants"
    ]
    const cat4 = [
        "Your Account",
        "Returns Centre",
        "Recalls and Product Safety Alerts",
        "100% Purchase Protection",
        "Amazon App Download",
        "Help"
    ]

    return (
        <div className='w-full bg-white flex flex-col items-center'>
            <div onClick={() => {
                backToTop.current.scrollIntoView({ behaviour: 'smooth' })
            }
            } className='font-[400] text-[13px] text-[#ffffff] bg-[#37475A] hover:bg-[#485769] text-center p-4 cursor-pointer w-full'
            >Back to top</div>

            <div className='bg-[#232F3E] flex w-full justify-center py-10'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-x-5 bg-[#232F3E] text-white w-[70%] justify-items-center'>
                    <div className='flex flex-col w-full md:w-[40%] h-fit gap-2'>
                        <h2 className='text-[16px] font-[700]'>Get to Know Us</h2>
                        {cat1.map((cat) => <span className='hover:underline text-[14px] font-[400] text-[#ddd]'>{cat}</span>)}
                    </div>
                    <div className='flex flex-col w-full md:w-[40%] h-fit gap-2'>
                        <h2 className='text-[16px] font-[700]'>Connect with Us</h2>
                        {cat2.map((cat) => <span className='hover:underline text-[14px] font-[400] text-[#ddd]'>{cat}</span>)}
                    </div>
                    <div className='flex flex-col w-[80%] h-fit gap-2 max-md:hidden'>
                        <h2 className='text-[16px] font-[700]'>Make Money with Us</h2>
                        {cat3.map((cat) => <span className='hover:underline text-[14px] font-[400] text-[#ddd]'>{cat}</span>)}
                    </div>
                    <div className='flex flex-col w-[80%] h-fit gap-2 max-md:hidden'>
                        <h2 className='text-[16px] font-[700]'>Let Us Help You</h2>
                        {cat4.map((cat) => <span className='hover:underline text-[14px] font-[400] text-[#ddd]'>{cat}</span>)}
                    </div>
                </div>
            </div>

            <div className='text-[#ced4d4] outline-[0.5px] w-full' />

            <div className='bg-[#232F3E] w-full  flex p-4 gap-18 justify-center items-center text-white py-10'>
                <img height={100} width={100} src={AmazonLogo} alt="Logo" className='min-h-10 min-w-10' />
                <div className='flex items-center gap-2 text-[13px]'>
                    <button className='flex gap-1 border-1 rounded-[2p] px-4 py-1'>
                        <img src="" alt="" />
                        <span>English</span>
                    </button>
                    <button className='flex gap-2 border-1 rounded-[2px] px-4 py-1 justify-center '>
                        <img height={18} width={18} src={Flag} alt="" />
                        <span>India</span>
                    </button>
                </div>
            </div>

            <div className='bg-[#131A22] w-full flex flex-col items-center gap-2 p-4 text-xs text-[#DDDDDD]'>
                <span className=''>
                    <a href='#'>Conditions of Use & Sale</a>
                    <a href='#'>Privacy Notice</a>
                    <a href='#'>Interest-Based Ads</a>
                </span>
                <span className=''>© 1996-2025, Amazon.com, Inc. or its affiliates</span>
            </div>
        </div>
    )
}
