import React from 'react'

const Carousel = (props) => {
    const {data}= props

    console.log(data, 'data from lesson2')

  return (
    <div className="carousel rounded-box mt-4">
        {data?.map(
            (item, index) => {
                return <div key={index} className="carousel-item">
                <img src={item.images[0]} alt="Burger" className='object-scale-down' />
              </div> 
            }
        )}
  
</div>
  )
}

export default Carousel