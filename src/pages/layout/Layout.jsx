import React from 'react'
import CustomInput from '../../components/center/Input/CustomInput'
import CustomFooter from '../../components/footer/CustomFooter'
import Navbar from '../../components/header/Navbar'
import Home from '../home/Home'

const Layout = () => {
  return (
    <div className="w-screen h-screen bg-blue-100 ">
      <div>
        <Navbar name="JSI05" />
      </div>
      <div>
        <Home/>
      </div>
      <div>
        <CustomFooter />
      </div>
    </div>
  )
}

export default Layout