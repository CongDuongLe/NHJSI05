import React from 'react'

const CustomStackCard = (props) => {

    const {data} = props

  return (
    <div className="stack">
  <div className="card shadow-md bg-primary text-primary-content">
    <div className="card-body">
      <h2 className="card-title">{data?.address}{' - '}{data?.timezone}</h2> 
      <p>{data?.resolvedAddress}</p>
      <p>{data?.description}</p>
      <p>Temp : {data?.currentConditions?.temp} celsius - Feel like : {data?.currentConditions?.feelslike}</p>
      <p>Humidity : {data?.currentConditions?.humidity} % - Wind speed : {data?.currentConditions?.windspeed} m/s</p>
    </div>
  </div> 
</div>
  )
}

export default CustomStackCard