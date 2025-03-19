import timelessLogo from '../assets/timeless.png'

const Footer = () => {
    return(
  <div className='w-full fliex md:justify-center justify-between items-center gradient-bg-footer p-4 mx-auto'>
    <div className='w-full flex sm:flex-row flex-col justify-between items-center my-4'>
        <div className='flex flex-[0.25] justify-center items-center'>
            <img src={timelessLogo} alt="logo" className='w-32 cursor-pointer'/>
        </div>

        <div className='flex flex-1 justify-center items-center flex-wrap sm:mt-0 w-full text-white text-base text-centre'>
            <p className='cursor-pointer mx-2'>Market</p>
            <p className='cursor-pointer mx-2'>Artists</p>
            <p className='cursor-pointer mx-2'>Features</p>
            <p className='cursor-pointer mx-2'>Community</p>  
        </div>
        <div className='flex flex-[0.25] justify-center items-center'>
            <p className='text-white text-right text-sm'>&copy;2025 All rights reserved.</p>
        </div>
    </div>
  </div>
    )
}

export default Footer
