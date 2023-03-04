import React from 'react'
import Card from './Card'


const fakeData = [
    {
        id : 1,
        title: 'Welcome to the best place to travel on the world 1',
        description: 'This is id1 description',
        imgUrl : 'https://images.unsplash.com/photo-1677577442620-b487154b3b77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    }, 
    {
        id : 2,
        title: 'Welcome to the best place to travel on the world 2',
        description: 'This is id2 description',
        imgUrl :'https://images.unsplash.com/photo-1677840147161-49e9c1508b0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
        id : 3,
        title: 'Welcome to the best place to travel on the world 3',
        description: 'This is id3 description',
        imgUrl : 'https://images.unsplash.com/photo-1677830181821-cd489bfcc2bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    }
]


const fakeData1 = [
    {
        id : 1,
        title: 'Fake 1',
        description: 'This is id1 description',
        imgUrl : 'https://images.unsplash.com/photo-1677577442620-b487154b3b77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    }, 
    {
        id : 2,
        title: 'Fake 2',
        description: 'This is id2 description',
        imgUrl :'https://images.unsplash.com/photo-1677840147161-49e9c1508b0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
        id : 3,
        title: 'Fake 3',
        description: 'This is id3 description',
        imgUrl : 'https://images.unsplash.com/photo-1677830181821-cd489bfcc2bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    }
]





const Main = () => {
  return (
    <div className='mt-[64px] flex flex-1 items-center justify-center mx-auto flex-col w-full overflow-x-auto'>
        <Card  data={fakeData}  />
        <Card  data={fakeData1} reStyle='mt-4'  />
    </div>
  )
}

export default Main