import React, {useState, useEffect} from 'react'
import CustomFooter from '../../components/footer/CustomFooter'
import Navbar from '../../components/header/Navbar'
import QuoteCard from '../../components/center/card/QuoteCard'
import axios from 'axios'
import GlobalCount from '../../components/center/common/GlobalCount'
import { useUserInfo } from '../../store/UserStore'
import { useColorTheme } from '../../store/useColorTheme'



const API_URL = 'https://api.quotable.io/quotes/random'

const Layout = () => {

  const [quote, setQuote] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const { classes } = useUserInfo()

  const { name } = classes

  const {currentTheme, changeTheme } = useColorTheme()



  const handleGetQuote = async () => {
    setIsLoading(true)
    const res = await axios.get(API_URL)
    if(res.status === 200) { 
      const data = res.data
      setQuote(data)
      setIsLoading(false)
    } else {
      console.log('error')
    }
  }


  useEffect(
    () => {
      handleGetQuote()
    } , []
  )






  return (
    <div className="w-full h-full bg-blue-100 ">
      <div>
        <Navbar name={name}  theme={currentTheme}  />
      </div>
      <div className='bg-red-100 flex flex-1'>
        {/* <Home/> */}
        {/* <p>Count: {count}</p>
      <button onClick={handleClick}>Click me</button> */}
      <div className='w-1/2 h-screen  flex flex-1 justify-center  items-center'>
        <GlobalCount  />
      </div>
      </div>
      <div>
        <CustomFooter />
      </div>
    </div>
  )
}

export default Layout