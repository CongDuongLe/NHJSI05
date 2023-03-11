import React from 'react'

const ImageCard = (props) => {
  const { imageUrl, isOnline } = props

  console.log(isOnline)

  //   const renderAvatarOffline = () => {
  //     return (
  //       <div className="avatar offline">
  //         <div className="w-24 rounded-full">
  //           <img src={imageUrl} />
  //         </div>
  //       </div>
  //     )
  //   }

  //   const renderAvatarOnline = () => {
  //     <div className="avatar online">
  //       <div className="w-24 rounded-full">
  //         <img src={imageUrl} />
  //       </div>
  //     </div>
  //   }

  return (
    <div className={`avatar  ${isOnline === true ? 'online' : 'offline'} `}>
      <div className="w-24 rounded-full">
        <img src={imageUrl} />
      </div>
    </div>
  )
}

export default ImageCard
