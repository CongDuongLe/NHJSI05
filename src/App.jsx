import { useState } from 'react'
import Lesson1 from './pages/lesson1/Lesson1'
import Lesson2 from './pages/lesson2/Lesson2'
import Lesson3 from './pages/lesson3/Lesson3'
import Lesson3_2 from './pages/lesson3/Lesson3_2'
import Lesson3_3 from './pages/lesson3/Lesson3_3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-1 bg-[#EEEEEE] h-screen w-screen'>
        {/* <Lesson1 /> */}
        <Lesson3_3 />
    </div>
  )
}

export default App


// trong trạng thái ntn thì file app đang là file cha của 
// file lesson1.jsx