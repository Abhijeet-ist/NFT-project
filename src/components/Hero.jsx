import Identicon from 'react-identicons'

const imgHero = ""
const hero = () => {
  return (
    <div className="flex flex-col md:flex-row w-4/5 justify-between items-center py-10 mx-auto">
      <div className="md:w-3/6 w-full">
        <div>
          <h1 className="text-white text-5xl font-bold">
            Buy and Sell <br/>Digital Arts, <br/>
            <span className="text-gradient">NFTs</span> Collections
          </h1>
          <p className="text-gray-500 font-semibold text-sm mt-3">Mint and collect the hottest NFTs around</p>
        </div>


        <div className="flex mt-5">
          <button 
          className="shadow-md bg-gradient-to-r from-[#FF8C00] to-[#FF0080] text-white font-semibold px-4 py-2 rounded-lg"
          onClick={() => setGlobalState('modal', 'scale-0')}
          >
            CREATE NFTs
          </button>
        </div>

        <div className="w-3/4 flex justify-between items-center mt-5">
          <div className="text-white">
            <p className="font-bold">123k</p>
            <small className="text-gray-300">User</small>
          </div>
          <div className="text-white">
            <p className="font-bold">152k</p>
            <small className="text-gray-300">Artworks</small>
          </div>
          <div className="text-white">
            <p className="font-bold">200</p>
            <small className="text-gray-300">Artists</small>
          </div>
        </div>
      </div>

      <div>
        <img
          className="h-60 w-full object-cover" 
          src={imgHero} alt="AN UNCOPIED IMAGE IS HERE"
        />
        <div className='flex justify-start items-center mt-3 p-3'>
          <Identicon 
          className = "h-10 w-10 object-contain rounded-full mr-3"
          string = {'0x21...786'} size = {50}  />
          <div>
            <p className='text-white font-semibold'>0x21...786</p>
            <small className='text-pink-500 font-bold'>@you</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default hero
