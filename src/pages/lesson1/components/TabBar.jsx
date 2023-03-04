import React from 'react'

const TabBar = ({
    headerName,
    onPressHeaderName
}) => {
    // const {headerName, onPressHeaderName} = props


  return (
    <div className='fixed top-0 right-0 left-0 h-[64px] w-screen bg-[#1C315E]'>
        <div className='flex flex-1 items-center justify-center'>
            <p 
              onClick={onPressHeaderName}
            className='text-white font-semibold text-[32px] hover:text-blue-400 '>{headerName}</p>
        </div>
    </div>
  )
}

export default TabBar