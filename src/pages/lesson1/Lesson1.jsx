import React from 'react'
import Main from './components/Main'
import TabBar from './components/TabBar'

const Lesson1 = () => {

  const onPressHeaderName = () => {
    alert('Xin chào, đây là buổi 1 của JSI 05')
  }



  return (
    <div className='flex flex-1'>
        <TabBar headerName={'LESSON 1 JSI05'} onPressHeaderName={onPressHeaderName} />
        <div className='mt-[64px] mx-auto'>
        <Main />
        </div>
       
    </div>
  )
}

export default Lesson1


// với mỗi file có import react, khai báo tên hàm và export cái hàm đó thì sẽ được gọi là 1 component