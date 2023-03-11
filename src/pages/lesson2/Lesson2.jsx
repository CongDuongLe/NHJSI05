import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Carousel from './components/Carousel'
import ImageCard from './components/ImageCard'
import MockUpPhone from './components/MockUpPhone'
import TextInput from './components/TextInput'

const Lesson2 = () => {
  const [showImage, setShowImage] = useState(true)
  const [isOnline, setIsOnline] = useState(true) 
  // state dang boolean

  const [email, setEmail] = useState('')
  // state dang string
  // state dang number
  const [count, setCount] = useState(60) // count là state, setCount là function để thay đổi state

  // state dang obj (obj, arrray, ...)
  const [products, setProducts] = useState([]) // ban dau la 1 array rong
  const API_URL = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=10'


  const handleGetProducts = async () => {
    const response = await axios.get(API_URL)
    const data = response.data
    setProducts(data) // cap nhat lai state products tu data minh nhan tu API
  }

  useEffect(()=> {
    handleGetProducts()
  }, [])


  const handleShowImage = () => {
    setShowImage(!showImage) // khi dang la false thi !false = true, khi dang la true thi !true = false
  }

  const handleOnlineStateChange = () => {
    setIsOnline(!isOnline)
  }

  const renderAlert = () => {
    return (
      <div className="alert alert-success shadow-lg">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Your email submit is {email} </span>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-1 items-center justify-center flex-col py-4 w-screen">
      {/* {showImage && (
        <ImageCard 
            isOnline={isOnline}
        imageUrl="https://media.vov.vn/sites/default/files/styles/large/public/2023-03/2023-03-05t191059z_287260231_up1ej351evtyi_rtrmadp_3_soccer-england-liv-mun-report.jpg" />
      )} */}

      {/* <button onClick={handleShowImage} className="btn btn-wide mt-4">
        {showImage ? 'Hide Image' : 'Show Image'}
      </button> */}

      <ImageCard
        isOnline={isOnline}
        imageUrl="https://media.vov.vn/sites/default/files/styles/large/public/2023-03/2023-03-05t191059z_287260231_up1ej351evtyi_rtrmadp_3_soccer-england-liv-mun-report.jpg"
      />

      {/* <TextInput
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // ham onChange nhan vao la cac event ( cac phim bam vao) va
        // truyen vao ham setEmail, voi e.target.value la gia tri cua event (gia tri trong o input hien tai)
      /> */}

      {/* <button onClick={handleOnlineStateChange} className="btn btn-wide mt-4">
        {isOnline ? 'Turn Off Online Status' : 'Turn On Online Status'}
      </button>

      <TextInput
        label="Email"
        placeholder="Enter your email"
        email={email}
        setEmail={setEmail}
      /> */}

      <MockUpPhone  // có 2 props là count và setCount ứng với state là count và hàm cập nhật lại state setCount
        count={count}
        setCount={setCount} // 2prop trùng tên với state và hàm cập nhật lại state

      />

        {/* {email && renderAlert()} */}
        {/* <div className='px-10'>

        <Carousel data={products}/>
        </div> */}



    </div>
  )
}

export default Lesson2

// học về state : là trạng thái của 1 component, mỗi khi trạng thái thay đổi thì component sẽ re-render

// ví dụ: 1 component có thể có state : màu sắc ( đen - trắng), 1 nút bấm có thể bấm được hay không, khi load data từ
// api thì quản lí cái skeleton loading cũng có thể nhờ vào trạng thái

// cú pháp const [stateName, functionNametoChangeState] = useState(initialState)
// stateName : tên của state ( tên trạng thái)
// functionNametoChangeState : tên của hàm để thay đổi trạng thái : setStateName
// initialState : giá trị ban đầu của state (có thể là string, number, obj, array, boolean, null, ...)


// truyen prop tu con sang cha theo dang callback function