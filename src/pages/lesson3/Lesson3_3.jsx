import React, { useState, useEffect } from 'react'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

// react-query + zustand (redux) , buoi 4 se ontap lai tu b1,b3,b3 va lam checkpoint

const Lesson3_3 = () => {
  const [securityText, setSecurityText] = useState(true)
  const [canContinue, setCanContinue] = useState(false)
  const [notMatch, setNotMatch] = useState(true)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const REX_PASSWORD = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/

  // dieu kien check email k chua @ va password k du 6 ky tu, password chua ki tu dac biet

  // effect rat kho nen can tim hieu ki va thuc hanh nhieu cho quen

  useEffect(() => {
    if (
      email.includes('@') &&
      REX_PASSWORD.test(password) &&
      password === passwordConfirm &&
      REX_PASSWORD.test(passwordConfirm)
    ) {
      setCanContinue(true)
      setNotMatch(false)
    } else {
      setCanContinue(false)
      setNotMatch(true)
    }
  }, [email, password, passwordConfirm])

  return (
    <div className="w-screen h-screen flex flex-1 justify-center items-center">
      <form
        autoComplete="off"
        className="w-full max-w-[600px] p-10 bg-white rounded-lg shadow"
        aria-label="signup-form"
      >
        <h2 className="mb-10 text-3xl font-bold text-center">Sign Up Form</h2>
        <div className="flex flex-col items-start mb-5 gap-y-3">
          <label htmlFor="email" className="text-sm font-medium cursor-pointer">
            Email
          </label>
          <input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            placeholder="Enter your email address..."
          />
        </div>
        <div className="flex flex-col items-start mb-5 gap-y-3 relative">
          <label
            htmlFor="password"
            className="text-sm font-medium cursor-pointer"
          >
            Password
          </label>
          <input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={securityText ? 'password' : 'text'}
            // type="password"
            className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            placeholder="Enter your password"
          />
          <div
            onClick={() => {
              console.log('runn')
              setSecurityText(!securityText)
            }}
            className="text-gray-400 text-[22px] cursor-pointer absolute right-4 bottom-4"
          >
            {securityText ? <AiFillEyeInvisible /> : <AiFillEye />}
          </div>
        </div>
        <div className="flex flex-col items-start mb-5 gap-y-3 relative">
          <label
            htmlFor="password"
            className="text-sm font-medium cursor-pointer"
          >
            Confirm Password
          </label>
          <input
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            type={securityText ? 'password' : 'text'}
            // type="password"
            className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            placeholder="Enter your password"
          />
          <div
            onClick={() => {
              console.log('runn')
              setSecurityText(!securityText)
            }}
            className="text-gray-400 text-[22px] cursor-pointer absolute right-4 bottom-4"
          >
            {securityText ? <AiFillEyeInvisible /> : <AiFillEye />}
          </div>
        </div>
        {
            notMatch && ( <div className="toast">
            <div className="alert alert-error">
              <div>
                <span>Password not match</span>
              </div>
            </div>
          </div> )
        }
       
        <div className="flex items-center justify-end mb-5 text-slate-400">
          <p>Already have an account?</p>
          <a href="#" className="text-blue-500 underline">
            Sign In
          </a>
        </div>
        <button
          type="submit"
          disabled={!canContinue}
          className={`inline-flex w-full items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white ${
            canContinue ? 'bg-blue-600' : 'bg-blue-300'
          } rounded-lg h-[60px]`}
        >
          Create an account
        </button>
      </form>
    </div>
  )
}

export default Lesson3_3
