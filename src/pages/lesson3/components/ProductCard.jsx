import React from 'react'

const ProductCard = (props) => {
  const { products, setCurrentId, loading } = props


    // make random id from 2 to 20
    const getRandomId = () => {
        const randomId = Math.floor(Math.random() * 16) + 2;
        setCurrentId(randomId)  // cap nhat currrent id tu con sang cha
    }




  if (loading)
    return (
      <div
        aria-label="loading-skeleton"
        className="w-full h-full bg-slate-200 animate-pulse"
      ></div>
    )

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={products?.image}
            alt="Shoes"
            className="w-full h-[300px] object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {products?.title}
            <div className="badge badge-primary w-auto h-[32px]">
              {products?.rating?.rate}☄️
            </div>
          </h2>
          <p>{products.description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">${products.price}</div>
          </div>
        </div>
      </div>
      <button
        onClick={getRandomId}
        className="btn btn-wide"
      >
        Random Product
      </button>
    </>
  )
}

export default ProductCard
