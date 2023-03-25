import React, { useState, useEffect, memo, Children, useMemo } from 'react'
import Carousel from '../../components/center/card/Carousel'
import CustomInput from '../../components/center/Input/CustomInput'
import Navbar from '../../components/header/Navbar'
import axios from 'axios'
import CustomFooter from '../../components/footer/CustomFooter'
import CustomStackCard from '../../components/center/card/CustomStackCard'

const Home = () => {
  const defaultValues = 'Ha Noi'
  const [inputValue, setInputValue] = useState('')
  const [weather, setWeather] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const API_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${
    inputValue ? inputValue : defaultValues
  }?unitGroup=metric&key=484DCQEQR8WZWTPM9GJLH7BH6&contentType=json`

  const fetchWeather = async () => {
    setIsLoading(true)
    const res = await axios.get(API_URL)
    const data = res.data
    setWeather({
      weather,
      ...data,
    })
    setIsLoading(false)
  }

  useEffect(() => {

    const timer = setTimeout(() => { 
        fetchWeather()
    }, 2000)
    return () => clearTimeout(timer)

  }, [inputValue])

  // cap nhat lai ham fetchWeather moi khi input value thay doi => truyen input value vao dependency cua useEffect

  if (isLoading)
    return (
      <div className="w-screen h-screen bg-blue-100 ">
        <div
          aria-label="loading-skeleton"
          className="w-full h-full bg-slate-200 animate-pulse"
        ></div>
      </div>
    )

  const RenderWeather = () => {
    if (weather) {
      return (
        <>
          <div>
            <CustomStackCard data={weather} />
          </div>
          <div className="h-2/3">
            <Carousel data={weather?.days} />
          </div>
        </>
      )
    }
  }

  return (
    <div className="w-screen h-screen bg-blue-100 ">
      <div>
        {/* input field */}
        <div className="w-screen h-[100px] flex flex-1 justify-center items-center">
          <CustomInput
            placeholder="Enter your city"
            value={inputValue}
            setValue={setInputValue}
          />
        </div>
        {/* card field */}
        <div className="w-screen h-2/3 bg-red-300 flex flex-1 justify-center items-center flex-col gap-y-4 py-4">
            <RenderWeather />
        </div>
      </div>
    </div>
  )
}

export default Home
