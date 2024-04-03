import React from 'react'

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
    <div className='p-5 pb-3 pl-10 border-b-[4px] border-gray-200'>
      <div>
        <Image src='/logo.png' width={70} height={70} alt='logo'/>
      </div>
      <div>
        {headerMenu.map((item)=>(
            <div>
                <Image src={item.icon} width={17} height={17}/>
            </div>
        ))};
      </div>
    </div>
  )
}

export default Header
