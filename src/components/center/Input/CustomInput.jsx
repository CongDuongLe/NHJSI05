import React, { memo } from 'react'

const CustomInput = (props) => {
  const { value, setValue, placeholder } = props
  return (
    <div className="flex flex-1 gap-x-4 items-center justify-center">
      <input
        type="text"
        placeholder={placeholder}
        className="input input-bordered w-full max-w-xs"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {/* search thi moi cap nhat value */}

      <button 
        onClick={() => {
            if(value) {
                setValue(value)
            }
        }}
        className="bg-base-200 px-4 py-3 rounded-lg active:bg-blue-500 active:text-black">
        Search
      </button>
    </div>
  )
}

export default memo(CustomInput)
