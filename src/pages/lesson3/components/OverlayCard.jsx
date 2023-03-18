import React from 'react'

const OverlayCard = (props) => {

    const {imgSrc, title, content, setImage, isLoading, getRandomQuote} = props


    const handleChangeAvatar = () => {
        setImage('https://ss-ava.saostar.vn/w1200/pc/1597225374504/vegeta-dragon-ball-super_3840x2160_xtrafondos_com(1).jpg')
    }


    if(isLoading) { 
      return (
        <progress className="progress w-56"></progress>
      )
     }



  return (
    <div className='flex flex-col gap-y-4'>
        <div
          aria-label="card-overlay-v2"
          className="relative w-[250px] h-[300px] overflow-hidden rounded-lg"
        >
          <img
            src={imgSrc}
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
          <div className="absolute bottom-0 left-0 right-0 flex flex-col p-5 text-white gap-y-1 bg-gradient-to-t from-black">
            <h3 className="text-base font-bold">{title}</h3>
            <span className="text-sm">{content}</span>
          </div>
          
        </div>
        <button 
            onClick={getRandomQuote}
            className="btn btn-wide">Random Quote
            </button>
    </div>
  )
}

export default OverlayCard