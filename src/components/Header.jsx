import timelessLogo from '../assets/timeless.png'


const Header = () => {
return (
    <div className="w-4/5 flex justify-between md:justify-center items-center py-4 mx-auto ">
        <div className='md:flex-[0.5] flex-initial justify-start items-center mr-10'>
            <img className='w-40 cursor-pointer' src={timelessLogo} alt="logo"/>
        </div>

        <ul className="flex space-x-8 text-white font-semibold">
            <li className="hover:text-gray-300 cursor-pointer">Markets</li>
            <li className="hover:text-gray-300 cursor-pointer">Artists</li>
            <li className="hover:text-gray-300 cursor-pointer">Features</li>
            <li className="hover:text-gray-300 cursor-pointer">Community</li>
        </ul>

        <button className='ml-8 shadow-md bg-gradient-to-r from-[#FF8C00] to-[#FF0080] text-white font-semibold px-4 py-2 rounded-lg'>
            Connect Wallet
        </button>
    </div>
)
}

export default Header
