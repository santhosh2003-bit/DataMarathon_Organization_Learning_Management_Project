'use client'
import Link from 'next/link'

import { TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import appwriteService from '@/appwrite/appwrite_config'
import IsAuth from '@/components/IsAuth'
import { useDispatch } from 'react-redux'

import Spinner from '@/components/Spinner'
import { toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FaEyeSlash } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa'
import { RxCross1 } from 'react-icons/rx'

function Login({ setLoginHandle, setRegisterHandle }) {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const [user, setUser] = useState()
  const [showresetpass, setshowresetpass] = useState(false)
  const [formdata, setFormdata] = useState({
    email: '',
    password: '',
  })
  const [error, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [showEyeIcon, setShowEyeIcon] = useState(false)

  const handlePasswordFocus = () => setShowEyeIcon(true)
  const handlePasswordBlur = () => {
    // Hide the eye icon only if the password is not being toggled
    if (!showPassword) {
      setShowEyeIcon(false)
    }
  }
  //  add client side validation
  const validate = () => {
    const newErrors = {}

    if (!formdata.email) {
      newErrors.email = 'Email is required.'
    } else if (!/\S+@\S+\.\S+/.test(formdata.email)) {
      newErrors.email = 'Email address is invalid.'
    }
    if (!formdata.password) {
      newErrors.password = 'Password is required.'
    } else if (formdata.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters.'
    }
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormdata((prev) => ({ ...prev, [name]: value }))
  }

  // ^ login user email and password
  const loginwithemailandpassword = async (e) => {
    e.preventDefault()

    try {
      const validationErrors = validate()
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors)
      } else {
        setErrors({})
        setLoading(true)
        const session = await appwriteService.login(
          formdata.email,
          formdata.password,
        )
        toast.success('user loggedIn successfully !', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        })
        router.push('/')
      }
    } catch (error) {
      toast.error(error.message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })
      setFormdata({
        email: '',
        password: '',
      })
    } finally {
      setLoading(false)
    }
  }

  // ^ reset password
  const handlereserPassword = async (e) => {
    e.preventDefault()
    setLoading(true)
    const { email } = formdata
    try {
      const response = await appwriteService.recover(email)
      toast.info('link has been sent successfully check your mail!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })
    } catch (error) {
      toast.error(error.message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <Spinner />
  }

  return (
    <div className="background_dark absolute left-0 top-[12%] -z-40 flex h-screen w-full justify-center md:top-[100%] md:items-center">
      <div className="flex w-full flex-col items-center justify-center bg-white p-6 shadow-2xl md:w-[60%] md:flex-row md:rounded-lg">
        <div className="flex w-full flex-col items-center">
          <Link href="/" aria-label="Home">
            <Logo className="mb-6 h-10 w-auto" />
          </Link>

          <h2 className="mt-10 text-center text-lg font-semibold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-700">
            If you Don’t have an account?{' '}
          </p>
          <button
            className="rounded-lg bg-blue-900 px-4 py-2 text-white"
            onClick={() => {
              setRegisterHandle(true)
              setLoginHandle(false)
            }}
          >
            Sign up
          </button>
        </div>
        <div className="relative w-full rounded-lg bg-white p-6">
          <div className="absolute right-4 top-4 cursor-pointer">
            <RxCross1
              style={{
                fontSize: '20px',
              }}
              onClick={() => setLoginHandle(false)}
              className="block"
            />
          </div>
          <h1 className="text-center text-2xl font-bold text-blue-900">
            Sign In
          </h1>
          <form action="#" className="mt-10 grid w-full grid-cols-1 gap-y-8">
            {!showresetpass ? (
              <>
                <TextField
                  label="Email address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="example@gmail.com"
                  required
                  onChange={handleChange}
                  value={formdata.email}
                />
                {error.email && (
                  <p className="p-2 text-red-600 outline-red-800">
                    {error.email}
                  </p>
                )}
                <div className="relative">
                  <TextField
                    label="Password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="*************"
                    autoComplete="current-password"
                    required
                    onChange={handleChange}
                    value={formdata.password}
                    onFocus={handlePasswordFocus}
                    onBlur={handlePasswordBlur}
                  />
                  <div
                    className="absolute left-[90%] top-[65%] cursor-pointer"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showEyeIcon && (showPassword ? <FaEyeSlash /> : <FaEye />)}
                  </div>
                </div>
                {error.password && (
                  <p className="p-2 text-red-600 outline-red-800">
                    {error.password}
                  </p>
                )}
                <p
                  className="cursor-pointer text-blue-900 underline"
                  onClick={() => setshowresetpass(true)}
                >
                  Forgot password?
                </p>
                <button
                  className="w-full rounded-lg bg-blue-900 py-2 text-white"
                  onClick={loginwithemailandpassword}
                >
                  <span>
                    Sign in <span aria-hidden="true">&rarr;</span>
                  </span>
                </button>
              </>
            ) : (
              <>
                <TextField
                  label="Email address"
                  name="email"
                  type="email"
                  placeholder="Enter your registered email"
                  autoComplete="email"
                  required
                  onChange={handleChange}
                  value={formdata.email}
                />
                <p
                  className="cursor-pointer text-blue-900 underline"
                  onClick={() => setshowresetpass(false)}
                >
                  Back
                </p>

                <button
                  className="w-full rounded-lg bg-blue-900 py-2 text-white"
                  onClick={handlereserPassword}
                >
                  <span>
                    Send reset link <span aria-hidden="true">&rarr;</span>
                  </span>
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default IsAuth(Login)
