import {FaTimes} from 'react-icons/fa'
import { useState } from 'react'
const imgHero = ""

const CreateNFT = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [imageBase64, setImageBase64] = useState('')
    const [fileUrl, setFileUrl] = useState('Null')
    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(!title || !price || !description || !imageBase64) {
            console.log('Please fill all the fields')
            return
        }
        console.log('Minted...')
    }

    const resetForm = () => {
        setTitle('')
        setPrice('')
        setDescription('')
        setImageBase64('Null')
    }

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-50 flex justify-center items-center transform transition-transform duration-300 scale-100">
      <div 
      className="bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">

        <form onSubmit={handleSubmit}  className="flex flex-col">

            <div className="flex justify-between items-center  text-gray-400">
                <p className="font-semibold">Add NFT</p>
                <button
                type="button"
                className="border -8 bg-transparent focus:outline-none">
                    <FaTimes />
                </button>
            </div>
            <div>
                <div>
                    <img 
                    src={imageBase64 || imgHero}
                    alt="NFT" 
                    className="h-full w-full object-cover cursor-pointer"/>
                </div>
            </div>

            <div className='flex justify-between items-center bg-gray-800 rounded-xl mt-5'>
                <label className='block'> 
                    <span className='sr-only'>Choose Profile Photo</span>
                    <input type="file"
                    accept="image/png, image/gif, image/jpeg, image/wepg"
                    className='block w-ful text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file: border-0 file:text-sm file:font-semibold hover:file:bg-[#1d2631] focus:outline-none cursor-pointer focus:ring-0'
                    required
                    />
                </label>
            </div>
            <div className='flex justify-between items-center bg-gray-800 rounded-xl mt-5'>
                
                    
                    <input 
                    type="text"
                    className="block w-ful text-sm text-slate-500 focus:outline-none cursor-pointer focus:ring-0
                    bg-transparent border-0"
                    placeholder="Title"
                    name="title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    required
                    />
                
            </div>
            <div className='flex justify-between items-center bg-gray-800 rounded-xl mt-5'>
                
                    
                <input 
                type="text"
                className="block w-ful text-sm text-slate-500 focus:outline-none cursor-pointer focus:ring-0
                bg-transparent border-0"
                placeholder="Price(ETH)"
                min={0.01}
                set={0.01}
                name="price"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                required
                />  
        </div>

        <div className='flex justify-between items-center bg-gray-800 rounded-xl mt-5'>
                
                    
                <textarea 
                type="text"
                className="block w-ful text-sm text-slate-500 focus:outline-none cursor-pointer focus:ring-0
                bg-transparent border-0 h-20 resize-none"
                placeholder="Description"
                name="description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                required
                ></textarea>
            
        </div>
        <div className="text-color my-5">
          <button className="flex justify-center  shadow-lg shadow-black text-white mt-5 text-md py-2 bg-[#e32970] hover:bg-[#bd255f] rounded-full p-2">
            Mint Now
          </button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default CreateNFT
