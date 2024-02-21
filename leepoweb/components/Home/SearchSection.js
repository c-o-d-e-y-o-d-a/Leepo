import React from 'react'
import InputItem from './InputItem'

const SearchSection = () => {
  return (
    <div className='p-2 md:pd-5 border-[2px] rounded-xl md:w-80'>
       <p className='text-[20px] font-bold'>Get a ride</p>
       <InputItem/>
       <InputItem/>
       <button className='p-3  bg-black w-full mt-6 text-white rounded-lg' >Search</button>
    </div>
  )
}

export default SearchSection
