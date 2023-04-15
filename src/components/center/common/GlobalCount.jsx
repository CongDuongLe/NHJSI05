import React, {useState} from 'react'
import { useUserInfo } from '../../../store/UserStore'
import CustomInput from '../Input/CustomInput'
import { useColorTheme } from '../../../store/useColorTheme'

const GlobalCount = () => {

    // implement useUserInfo from zustand store
    const [inputValue, setInputValue] = useState('')

    const {number, increaseByOne,decreaseByOne, resetCount, classes, updateClassName  } = useUserInfo()

    const {studentList} = classes

    const {changeTheme} = useColorTheme()



    const mapStudent = studentList?.map((item, index) => {
        return (
            <div key ={index}>
                <p>{item.name}</p>
                <p>{item.age}</p>
            </div>
        )
           

    })





  return (
    <div className='flex flex-col justify-center item-cent
     gap-y-4'>

        <CustomInput
            setValue={setInputValue}
            value={inputValue}
            placeholder='Enter your new class name'
        />


        <p className='text-black text-3xl'>Count: {number}</p>
        <div className='flex flex-row gap-x-4'>
        <button 
            onClick={decreaseByOne}
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Decrease by 1</button>
        <button 
            onClick={increaseByOne}
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Increase by 1</button>
        <button 
            onClick={resetCount}
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Reset Store</button>

        <button 
            onClick={() => updateClassName(inputValue)}
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Update ClassName</button>
             <button 
            onClick={() => changeTheme()}
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Change theme</button>


            
        </div>


    </div>
  )
}

export default GlobalCount