
import React, { useEffect } from 'react'
import InputItem from './InputItem'
const SearchSection = () => {

   const {souce,setSouce} = useContext(SourceContext);
   const {destination,setDestination} = useContext(DestinationContext);

   useEffect(()=>{
    

   },[source,destination])
  return (
    <div className='p-2 mt-10 ms-20 md:pd-5 border-[2px] rounded-xl w-80  grid justify-center align-middle'>
      <p className='text-[20px] font-bold'>Get a ride</p>
      <InputItem type='source'/>
      <InputItem type='destination'/>

      <button className='p-3 bg-black w-full mt-5 text-wite rounded-lg border-solid border-2 w-40'>Search</button>
    

    </div>
  )
}

export default SearchSection
