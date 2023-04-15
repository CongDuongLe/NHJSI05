import React from 'react'

const QuoteCard = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://burst.shopify.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page/download"
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  )
}

export default QuoteCard
