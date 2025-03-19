const imgHero = '' // Image to put here

const Artworks = () => {
  return (
    <div className=" bg-[#151c25] gradient-bg-artworks">
      <div className="w-4/5 py-10 mx-auto">
        <h4 className="text-white text-3xl font-bold uppercase text-gradient">Latests Artworks </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-10">

            {Array.from({ length: 4 }, (_, i) => (
                <Card key={i} nft={i + 1}/>
            ))}
        </div>
      </div>
    </div>
  );
  
    
    
  
}
const Card = ({ nft }) => {
    return (
        <div className="w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3">

            <img 
            className="h-60 w-full object-cover shaodow-black rounded-lg mb-3 " src ={imgHero} alt="NFT IMAGE" />

            <h4 className="text-white font-semibold">NFT #{nft}</h4>

            <p className="text-gray-400 text-sm my-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis nam quaerat, optio eos nobis ipsum dolor sint officiis provident nostrum unde illum sapiente cumque maxime tempore nemo eligendi saepe sunt!
            </p>

            <div className="flex justify-between items-center mt-3 text-white">
                <div className="flex flex-col">
                    <small className="text-xs">Current Price</small>
                    <p className="text-sm font-semibold">0.34 ETH</p>
                </div>

                <button className="shadow-lg shadow-black text-sm bg-gradient-to-r from-[#FF8C00] to-[#FF0080] text-white font-semibold px-4 py-2 rounded-lg">View Details</button>
            </div>
        </div>
    );
}
    
export default Artworks
