import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ProductCard from './components/ProductCard'

const Lesson3_2 = () => {
  const [currentId, setCurrentId] = useState(1)
  const API_URL = `https://fakestoreapi.com/products/${currentId}`  // 1

  const [products, setProducts] = useState({})
  const [loading, setLoading] = useState(false)

  const fetchProduct = async () => {
    setLoading(true)
    const res = await axios.get(API_URL)
    const data = res.data
    setProducts(data)
    setLoading(false)
   }

  useEffect(
    () => {
      fetchProduct()
    }, [currentId] // khi currrentId duoc thay doi thi efffect se
    // tu dong chay lai va render ra giao dien ung voi currrentId do
  )


  console.log(currentId)
  



  return (
    <div className='flex-1 justify-center items-center flex flex-col gap-y-4'>
      <ProductCard
        products={products}
        setCurrentId={setCurrentId}
        loading={loading}
      
      />
    </div>
  )
}

export default Lesson3_2