import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

// using props
const Songsitem = ({name,image,desc,id}) => {

  // for play the songs we add playwithId function
  const {playWithId} = useContext(PlayerContext)
  return (
    <div onClick={()=>playWithId(id)} className='min-w-[180px] p-2 rounded cursor-pointer hover:bg-[#ffffff25]'>
      <img className='rounded' src={image} alt=''/>
      <p className='font-bold mt-2 mb-1 text-sm'>{desc}</p>
    </div>
  )
}

export default Songsitem