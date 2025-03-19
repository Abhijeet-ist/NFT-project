import {FaTimes} from 'react-icons/fa'
import { useState } from 'react'
import { setAlert, setGlobalState, setLoadingMsg, useGlobalState } from '../store'
import { create } from 'ipfs-http-client'
import { mintNFT } from '../Blockchain.services'
const imgHero = ""

const imgNFT = 'https://cdna.artstation.com/p/assets/images/images/024/634/210/large/ninon-rodriguez-asset.jpg?1583059328'

const auth =
  'Basic ' +
  Buffer.from(
    '2I4XO5Rt8rR8qwStrBiuAuwZsnE' + ':' + '27cf8cad21d788d649d2d44032f77420',
  ).toString('base64')

const client = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: auth,
  },
})
const CreateNFT = () => {
    const [modal] = useGlobalState('modal')
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [fileUrl, setFileUrl] = useState('')
    const [imgBase64, setImgBase64] = useState(null)


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!title || !price || !description) return
        setGlobalState('modal', 'scale-0')
        setGlobalState('loading', { show: true, msg: 'Uploading IPFS data...' })
        try{
            const created = await client.add(fileUrl);
            setLoadingMsg('Uploaded, approve transaction now...')
            const meteDataURI = `https://ipfs.io/ipfs/${created.path}`
            const nft = {title, description, price, meteDataURI}

            await mintNFT(nft)
            closeModal()
            setAlert('Minting completed...')
        }catch(error){
            console.log('Error uploading file', error)
            setAlert('Minting failed :(', 'red')
        }
        closeModal()
    }

    const changeImage = async (e) => {
        const reader = new FileReader()
        if(e.target.files[0]) reader.readAsDataURL(e.target.files[0])

        reader.onload = (readerEvent) => {
            const file = readerEvent.target.result
            setImgBase64(file)
            setFileUrl(e.target.files[0])
        }
    }

    const closeModal = () => {
        setGlobalState('modal', 'scale-0')
        resetForm()
    }

    const resetForm = () => {
        setFileUrl('')
        setImgBase64(null)
        setTitle('')
        setPrice('')
        setDescription('')
    }

  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center
        justify-center bg-black bg-opacity-50 transform
        transition-transform duration-300 ${modal}`}>
        <div className='bg-[#151c25] shadow-xl shadow-[#2E8EEE] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6'>

        <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="flex justify-between items-center text-gray-400">
                <p className='font-semibold'>Add NFT</p>
                <button type="button" onClick={closeModal} className="border-0 bg-transparent focus:outline-none">
                    <FaTimes className="text-gray-400" />
            </button>
            </div>

            <div className='flex justify-center items-center rounded-xl mt-5'>
                <div className='shrink-0 h-20 w-20 rounded-xl overflow-hidden'>
                    <img className='h-full w-full object-cover cursor-pointer' src={imgBase64 || imgNFT} alt="NFT Image" />
                </div>
            </div>

            <div className='flex justify-between items-center bg-gray-800 rounded-xl mt-5'>
                <label className='block'>
                    <span className='sr-only'>Choose Profile Photo</span>
                    <input className='block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold hover:file:bg-[#1d2631] focus:outline-none cursor-pointer focus:ring-0' type="file" accept='image/png, image/gif, image/jpeg, image/jpg, image/webp' required onChange={changeImage} />
                </label>
            </div>

            <div className='flex justify-between items-center bg-gray-800 rounded-xl mt-5'>
                <input className='block w-full text-sm text-slate-500 bg-transparent border-0 focus:outline-none focus:ring-0' type="text" required placeholder='Title' name='title' onChange={(e) => setTitle(e.target.value)} value = {title} />
            </div>

            <div className='flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-5'>
                <input className='block w-full text-sm text-slate-500 bg-transparent border-0 focus:outline-none focus:ring-0' type="number" min={0.01} step={0.01} name='price' placeholder='Price (ETH)' required onChange={(e) => setPrice(e.target.value)} value={price} />
            </div>

            <div className='flex justify-between items-center bg-gray-800 rounded-xl mt-5'>
                <textarea className='block w-full text-sm text-slate-500 focus:outline-none cursor-pointer resize-none focus:ring-0 bg-transparent border-0 h-20' type="text" required placeholder='Description' name='description' onChange={(e) => setDescription(e.target.value)} value={description} ></textarea>
            </div>
            <button className='flex justify-center items-center shadow-lg shadow-black text-white p-2 mt-5 bg-[#2E8EEE] hover:bg-[#256EB7] rounded-full px-1.5 py-2'>Mint the NFT</button>
        </form>
        </div>
    </div>
  )
}

export default CreateNFT
