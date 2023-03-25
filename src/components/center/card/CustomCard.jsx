import React from 'react'

const CustomCard = (props) => {
    const {item} = props

  return (
    <div   
        className="card w-96 bg-base-100 shadow-xl image-full">
    <figure><img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80 " alt="Shoes" /></figure>
    <div className="card-body w-[320px]">
    <h2 className="card-title">{item?.datetime}</h2>
      <h2 className="card-title">Conditions: {item?.conditions}</h2>
      <p>{item?.description}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">{item?.temp}</button>
      </div>
    </div>
  </div>
  )
}

export default CustomCard
