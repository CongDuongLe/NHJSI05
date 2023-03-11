import React from 'react'

const TextInput = (props) => {
  const { label, placeholder, value, onChange, email, setEmail, number, setNumber } = props
  return (
    // <div className="form-control w-full max-w-xs">
    //   <label className="label">
    //     <span className="label-text">{label}</span>
    //   </label>
    //   <input
    //     type="text"
    //     placeholder={placeholder}
    //     value={value}
    //     onChange={onChange}
    //     className="input input-bordered w-full max-w-xs"
    //   />
    // </div>

    // <div className="form-control w-full max-w-xs">
    //   <label className="label">
    //     <span className="label-text">{label}</span>
    //   </label>
    //   <input
    //     type="text"
    //     placeholder={placeholder}
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value) } // ham callback SetEmail
    //     className="input input-bordered w-full max-w-xs"
    //   />
    // </div>

    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type='number'
        placeholder={placeholder}
        value={number}
        onChange={(e) => setNumber(e.target.value)} // ham callback SetEmail
        className="input input-bordered w-full max-w-xs"
      />
    </div>
  )
}

export default TextInput
