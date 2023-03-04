import React from 'react'

const Card = (props) => {
  const { data, reStyle } = props

  const renderCardItem = data?.map((item, index) => {
    return (
      <div
       key={item.id}
        aria-label="card-item-v1"
        className='flex flex-col w-[400px] bg-blue-300 px-2 py-8 rounded-md min-h-[500px]'
     
      >
        <div className="relative flex-shrink-0 mb-5 h-[250px] ">
          <img
            src={item.imgUrl}
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="flex flex-col flex-1">
          <h3 className="mb-3 text-lg font-bold">
            {item.title}
          </h3>
          <div className="text-white">
            {item.description}
          </div>
        </div>
      </div>
    )
  })

  return <div className={`flex flex-1 gap-x-4 items-center justify-center ${reStyle}` }>{renderCardItem}</div>
}

export default Card
