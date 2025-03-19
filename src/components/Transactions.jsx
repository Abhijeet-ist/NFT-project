import {BiTransfer} from 'react-icons/bi'
import {MdOpenInNew} from 'react-icons/md'


function Transactions() {
  return (
    <div className="bg-[#151c25] "> 
      <div className="w-4/5 py-10 mx-auto">
        <h4 className="text-white text-3xl font-bold uppercase text-gradient">Latest Transactions</h4>

        <div className="grid grid-cols-1 md:grid-cols-3  gap-6 md:gap-4 lg:gap-2 py-2.5">

            
            {Array(3)
            .fill(null)
            .map((nft, i) => (
                <TransactionItem key={i} tx={i+1}></TransactionItem>
            ))}
        </div>
        

        <div className="flex justify-center items-center mt-5">
        <button className="shadow-lg shadow-black text-sm bg-gradient-to-r from-[#FF8C00] to-[#FF0080] text-white font-semibold px-4 py-2 rounded-lg">Load More</button>
        </div>
      </div>
    </div>
  )
}

const TransactionItem = ({tx}) => {
    return (
        <div className="bg-[#1c2531] rounded-lg overflow-hidden shadow-lg shadow-black/50 transition-all duration-300 hover:shadow-pink-500/20 hover:transform hover:scale-[1.02] mb-4">
            <div className="bg-gradient-to-r from-[#FF8C00]/20 to-[#FF0080]/20 p-4 flex justify-between items-center border-b border-pink-500/30">
                <div className="flex items-center gap-2">
                    <div className='rounded-full bg-[#252f3f] p-3 shadow-md shadow-pink-500/30'>
                        <BiTransfer className="text-[#FF8C00] text-xl" />
                    </div>
                    
                    <div className="ml-3">
                        <h4 className='text-white font-semibold text-md'>#{tx} Fund Transfer</h4>
                        <div className='flex items-center text-gray-400 text-xs mt-1'>
                            <span>Received by</span>
                            <a className='text-pink-500 mx-2 hover:text-[#FF8C00] transition-colors duration-300'
                            href='#' target="_blank" rel="noopener noreferrer"> 0x21...786</a>
                            <MdOpenInNew className="text-gray-400 hover:text-pink-500 cursor-pointer" />
                        </div>
                    </div>
                </div>
                
                <div className="bg-[#252f3f] text-xs text-gray-400 px-2 py-1 rounded-full">
                    2 mins ago
                </div>
            </div>
        </div>
    )
}

export default Transactions
