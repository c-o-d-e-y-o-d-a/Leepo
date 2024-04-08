
import React from 'react'

import Image from 'next/image';

const Header = () => {
    const headerMenu = [
        {
            id:1,
            name:'Ride',
            icon:"/taxi.png"
        },
        {
            id:2,
            name:'Package',
            icon:"/package.png"
        }
    ]
  return (
    <div className='p-5 pb-3 pl-10 border-b-[4px] border-gray-200 flex items-center justify-between'>
      <div className='flex gap-24 items-center'>
        <Image src='/uber.png' width={70} height={70} alt='logo'/>
      </div>
      <div className='flex gap-6 items-center'>
        {headerMenu.map((item)=>(
            <div key={item.id}> 
                <Image src={item.icon} width={17} height={17}/>
                <h2 className='text-[14px] font-medium'>{item.name}</h2>
            </div>
        ))};
      </div>
      
    </div>
  )
}

export default Header;
