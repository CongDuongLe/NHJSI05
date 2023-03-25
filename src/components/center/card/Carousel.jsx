import React from 'react'
import CustomCard from './CustomCard'

const Carousel = (props) => {
    const {data} = props
    
  return (
    <div className="w-[320px] carousel rounded-box h-1/2">
      <div className="carousel-item w-full">
        {
            data?.map(
                (item, index ) => {
                    return (
                        <div key={index}>

                        <CustomCard 
                            item={item}
                        />
                        </div>
                    )
                }
            )
        }
        <CustomCard />
      </div>
    </div>
  )
}

export default Carousel
