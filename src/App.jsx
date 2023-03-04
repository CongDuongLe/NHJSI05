import { useState } from 'react'
import Lesson1 from './pages/lesson1/Lesson1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-1 bg-[#EEEEEE] h-screen w-screen'>
        <Lesson1 />
    </div>
  )
}

export default App


// trong trạng thái ntn thì file app đang là file cha của 
// file lesson1.jsx