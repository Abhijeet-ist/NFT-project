import React from 'react'
import {FaTimes} from 'react-icons/fa'
import Identicon from 'react-identicons'
import { setGlobalState, useGlobalState } from '../store'

const imgNFT = 'https://cdna.artstation.com/p/assets/images/images/024/634/210/large/ninon-rodriguez-asset.jpg?1583059328'
function ShowNFT() {
    const [modal] = useGlobalState('showModal')
    const onChangePrice = () => {
        setGlobalState('showModal','scale-0')
        setGlobalState('updateModal','scale-100')
    }

    const closeModal = () => {
        setGlobalState('showModal', 'scale-0')
    }


  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center
        justify-center bg-black bg-opacity-50 transform
        transition-transform duration-300 ${modal}`}>
        <div className='bg-[#151c25] shadow-xl shadow-[#2E8EEE] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6'>

        <div className="flex flex-col"  >
            <div className="flex justify-between items-center text-gray-400">
                <p className='font-semibold'>Purchase NFT</p>
                <button type="button" className="border-0 bg-transparent focus:outline-none">
                    <FaTimes className="text-gray-400" onClick={closeModal} />
            </button>
            </div>

            <div className='flex justify-center items-center rounded-xl mt-5'>
                <div className='shrink-0 h-40 w-40 rounded-xl overflow-hidden'>
                    <img className='h-full w-full object-cover cursor-pointer' src={imgNFT} alt="NFT Image" />
                </div>
            </div>

            <div className='flex flex-col justify-start rounded-xl mt-5'>
                <h4 className='text-white font-semibold'>Title</h4>
                <p className='text-gray-400 text-xs my-1'>This is a skull candy photo.</p>
                <div className='flex justify-between items-center mt-3 text-white'>
                    <div className='flex justify-start items-start'>
                        <Identicon className='h-10 w-10 object-contain rounded-full mr-3' string={'h3ll0FT'} size={50}/>
                        <div className='flex flex-col justify-center items-start'>
                            <small className='text-white font-semibold'>@Owner</small>
                            <small className='text-yellow-400 font-semibold'>0x31..2116a</small>
                        </div>
                    </div>

                    <div className='text-white flex flex-col'>
                        <small className='text-xs'>Current Price</small>
                        <p className='text-sm font-semibold'>0.34 ETH</p>
                    </div>

                </div>
            </div>

            <div className='flex flex-col justify-between items-center'>
                <button className='flex justify-center items-center shadow-lg shadow-black text-white p-2 mt-5 bg-[#2E8EEE] hover:bg-[#256EB7] rounded-xl px-1.5 py-2 w-full'>Purchase</button>
                <button className='flex justify-center items-center shadow-lg shadow-black text-white p-2 mt-5 bg-[#2E8EEE] hover:bg-[#256EB7] rounded-xl px-1.5 py-2 w-full' onClick={onChangePrice}>Change Price</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ShowNFT