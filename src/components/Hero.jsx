import Identicon from 'react-identicons'

const imgHero = 'data:image/jpeg;base64,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'
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
