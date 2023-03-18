import React, {useState, useEffect} from 'react'
import OverlayCard from './components/OverlayCard'
import axios from 'axios'

const Lesson3 = () => {

  const API_URL = 'https://api.quotable.io/quotes/random'


  const [quote,setQuote] = useState([])
  const [isLoading, setIsLoading] = useState(false)



  const fetchQuote = async () => {
    setIsLoading(true)
    const res = await axios.get(API_URL)
    const data = res.data
    setQuote(data)
    setIsLoading(false)
  }


  useEffect(
    ()=> {
      fetchQuote()
      
    }, []
  )

  console.log(quote[0])



  // khai bao state

  // const [stateName, setStateName] = useState(initialState)

  // initialState: gia tri khoi tao cua state, co the nhan tat ca
  // cac kieu du lieu thuong gap trong js
  const imgUrl = 'https://w0.peakpx.com/wallpaper/387/534/HD-wallpaper-majin-vegeta-ball-dragonball-dragonball-z-dragon-anime.jpg'

  const [image, setImage] = useState(imgUrl)

  //  state image co gia tri khoi tao la imgUrl


  // const handleChangeAvatar = () => {
  //   setImage('https://ss-ava.saostar.vn/w1200/pc/1597225374504/vegeta-dragon-ball-super_3840x2160_xtrafondos_com(1).jpg')
  //   // set lai image la link trong setImage
  // }




  return (
    <div className='flex-1 justify-center items-center flex flex-col gap-y-4'>
      <OverlayCard 
        setImage={setImage}  
        imgSrc={image} 
        title={quote[0]?.author} 
        content={quote[0]?.content} 
        isLoading={isLoading}
        getRandomQuote={fetchQuote}
        />
    </div>
  )
}

export default Lesson3



// Buổi 3 : quản lí side effect trong ứng dụng với useEffect

// 1, side effect là gì ?
// side effect là các hành động xảy ra xung quanh 1 component, nhưng không phải là kết quả của render của component đó
// ví dụ như:
// - fetch data từ server
// - set up 1 event listener
// - thay đổi giá trị của 1 biến toàn cục
// - thay đổi giá trị của 1 biến trong local storage

// 2, useEffect là gì ?
// nó là 1 hook của react, dùng để quản các side effect của component
// useEffect có 3 dạng chính
// - useEffect(() => {}, []) : có dependency array  rỗng :[] => nghĩa là side effect này chỉ chạy 1 lần duy nhất trong ứng dụng
// - useEffect(() => {}, [dep1, dep2, dep3,  ..., depN]) : có dependency array  khác array rỗng => nghĩa là side effect này sẽ được gọi lại
// khi các giá trị dep1, dep2, dep3,  ..., depN thay đổi
// - useEffect(() => {}) : không có dependency array => nghĩa là side effect này sẽ được gọi lại mỗi khi component render lại (loop vô hạn) : không nên dùng nên sẽ k tìm hiểu