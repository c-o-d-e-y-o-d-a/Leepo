import React from 'react'
import Image from 'next/image'
const InputItem = ({type1}) => {
  return (
    <div className='bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4'>
      <Image src={type1== 'source' ? "/source.png" : "/dest.png"}width={15} height={15}/>
      <input type= "text" placeholder={type1 =='source' ? "Pickup Location" : "DropOff Location"}
      className='bg-transparent w-full outline-none'/>

    </div>
  )
}

export default InputItem
