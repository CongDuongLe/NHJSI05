import React, {useState} from 'react'
import TextInput from './TextInput'

const MockUpPhone = (props) => {
  const { count, setCount } = props 
  
    // console.log(typeof count)  // number
    // console.log(typeof setCount) // function
    // khi prop và fuction, truyền prop ngược lại từ con sang cha bắt buộc phải dùng hàm callback




  const [number, setNumber] = useState()

  const handleIncrease = () => {
    setCount((prev) => prev + 1)  // prev : previous State ( trạng thái state trước đó)
    // setCount(count => count +1)
    // logic thực hiện : hàm setCount sẽ nhận vào 1 function, function này nhận vào 1 tham số là state trước đó
    // và thực hiện logic mang state trước đó + 1
  }

  const handleDecrease = () => {
    setCount((prev) => prev - 1)
  }

  const handleReset = () => {
    setCount(60)
  }

  const handleIncreaseByNumber = () => { 
    setCount((prev) => prev + +number) // gia tri truoc do + gia tri trong o iput
  }

  const handleDecreaseByNumber = () => { 
    setCount((prev) => prev - +number)
  }

  // '100' => danng number +string => 100




  return (
    <div className="mockup-phone border-primary mt-4">
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1">
          <div>
            <TextInput 
                label="Enter Your Number"
                placeholder="Enter Your Number"
                number={number}
                setNumber={setNumber}
            />
          </div>

          <p> Your Current Number Is :</p>
          <p>{count}</p>
          <div className="flex flex-col gap-y-2 mt-4">
            <button onClick={handleIncrease} className="btn btn-info">
              Increase by 1
            </button>
            <button onClick={handleDecrease} className="btn btn-success">
              Decrease by 1
            </button>
            {/* <button className="btn btn-error">Error</button> */}
            <button onClick={handleReset} className="btn btn-warning">
              Reset count
            </button>
            <button onClick={handleIncreaseByNumber} className="btn btn-info">
              Increase by input number
            </button>
            <button onClick={handleDecreaseByNumber} className="btn btn-success">
              Decrease by input number
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MockUpPhone
