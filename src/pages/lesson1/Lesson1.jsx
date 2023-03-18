import React from 'react'
import Main from './components/Main'
import TabBar from './components/TabBar'

const Lesson1 = () => {

  const onPressHeaderName = () => {
    alert('Xin chào, đây là buổi 1 của JSI 05')
  }


  const player = [
    {
      id : 1,
      name : 'Messi',
      age : 34,
      position : 'ST',
    },
    {
      id : 2,
      name : 'Ronaldo',
      age : 36,
      position : 'ST',
    },
    {
      id : 3,
      name : 'Neymar',
      age : 29,
      position : 'ST',
    },
    {
      id : 4,
      name : 'Mbappe',
      age : 22,
      position : 'ST',
    },

  ]



  // map array to get array like [ 1 :{id : 1, name}]
  
  const playerMap = player.map((item) => {
    return {
      [item.id] : item,
    }
  })

  // reduce array to get object like { 1 :{id : 1, name}}

  const playerReduce = player.reduce((acc, item) => {
    return {
      ...acc,
      [item.id] : item,
    }
  }, {})






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