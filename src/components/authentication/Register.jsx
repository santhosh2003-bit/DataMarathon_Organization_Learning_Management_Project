'use client'
import Link from 'next/link'

import { SelectField, TextField } from '@/components/Fields'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import appwriteService from '@/appwrite/appwrite_config'
import IsAuth from '@/components/IsAuth'
import { useDispatch } from 'react-redux'

import { FcGoogle } from 'react-icons/fc'
import { IoLogoLinkedin } from 'react-icons/io5'
import Spinner from '@/components/Spinner'
import { toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { OAuthProvider } from 'appwrite'
import { FaEyeSlash } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa'
import { RxCross1 } from 'react-icons/rx'
function Register({ setRegisterHandle, setLoginHandle }) {
  const dispatch = useDispatch()
  const router = useRouter()

  const [loading, setloading] = useState(false)
  const [formdata, setFormdata] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    referral_source: '',
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showEyeIcon, setShowEyeIcon] = useState(false)

  const handlePasswordFocus = () => setShowEyeIcon(true)
  const handlePasswordBlur = () => {
    // Hide the eye icon only if the password is not being toggled
    if (!showPassword) {
      setShowEyeIcon(false)
    }
  }

  const [error, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!formdata.first_name) newErrors.first_name = 'First Name is required.'
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
    setFormdata((prev) => ({ ...prev, [name]: value.trim() }))
  }

  const create = async (e) => {
    e.preventDefault()
    try {
      const validationErrors = validate()
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors)
      } else {
        setErrors({})
        setloading(true)
        const user = await appwriteService.createUserAccount(formdata)
        toast.success('Successfully Registered and Logged In!', {
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
    } finally {
      setloading(false)
    }
  }

  const googleLogin = async (e) => {
    e.preventDefault()
    try {
      await appwriteService.authLogin(OAuthProvider.Google)
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
    }
  }

  const linkedinLogin = async (e) => {
    e.preventDefault()
    try {
      await appwriteService.authLogin(OAuthProvider.Linkedin)
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
    }
  }

  if (loading) {
    return <Spinner />
  }

  return (
    <div className="background_dark absolute left-0 top-[12%] -z-40 flex w-full justify-center md:top-[100%]">
      <div className="flex w-full flex-col items-center gap-x-9 bg-white py-11 shadow-md sm:p-6 md:mt-2 md:w-fit md:flex-row md:rounded-lg">
        <div className="flex flex-col text-center">
          <h2 className="text-center text-2xl font-semibold text-gray-900">
            Welcome Back!
          </h2>
          <strong className="text-blue-900">SkillsMarathon</strong>
          <p className="mt-2 text-sm text-gray-700">
            Enter your personal details to use all of site features
          </p>
          <button
            className="w-fit self-center rounded-lg bg-blue-900 px-4 py-1 text-white"
            onClick={() => {
              setLoginHandle(true)
              setRegisterHandle(false)
            }}
          >
            Sign in
          </button>
        </div>
        <div className="relative w-full px-4 md:w-[50%] md:px-1">
          <div className="absolute right-2 top-2 cursor-pointer">
            <RxCross1
              style={{
                fontSize: '20px',
              }}
              onClick={() => setRegisterHandle(false)}
              className=""
            />
          </div>
          <h1 className="text-center text-2xl font-bold text-[#1E3A8A]">
            Create an account
          </h1>
          <div className="mt-2 flex flex-col items-center justify-center">
            <div className="mt-3 flex gap-2">
              <button
                className="flex items-center justify-center gap-2 rounded-md border-2 border-slate-600 px-5 py-2"
                onClick={googleLogin}
              >
                <FcGoogle size={30} />
                {/* <span>Google</span> */}
              </button>
              <button
                className="flex items-center justify-center gap-2 rounded-md border-2 border-slate-600 px-5 py-2"
                onClick={linkedinLogin}
              >
                <IoLogoLinkedin size={30} color="#0a66c2" />
                {/* <span>LinkedIn</span> */}
              </button>
            </div>
            <h3 className="mt-3 text-center">OR</h3>
          </div>
          <form
            action="#"
            className="mt-5 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2"
            onSubmit={create}
          >
            <TextField
              label="First name"
              name="first_name"
              type="text"
              autoComplete="given-name"
              required
              value={formdata.first_name}
              onChange={handleChange}
            />
            {error.first_name && (
              <p className="p-2 text-red-600 outline-red-800">
                {error.first_name}
              </p>
            )}
            <TextField
              label="Last name"
              name="last_name"
              type="text"
              autoComplete="family-name"
              value={formdata.last_name}
              onChange={handleChange}
            />
            <div className="col-span-full flex flex-col">
              <TextField
                className="col-span-full"
                label="Email address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formdata.email}
                onChange={handleChange}
              />
              {error.email && (
                <p className="p-2 text-red-600 outline-red-800">
                  {error.email}
                </p>
              )}
              <div className="relative">
                <TextField
                  className="col-span-full"
                  label="Password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  required
                  value={formdata.password}
                  onChange={handleChange}
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
            </div>
            <SelectField
              className="col-span-full"
              label="How did you hear about us?"
              name="referral_source"
              value={formdata.referral_source}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              <option value="AltaVista search">Linkedin search</option>
              <option value="Super Bowl commercial">Google</option>
              <option value="Our route 34 city bus ad">
                Social media platforms
              </option>
              {/* <option value="The 'Never Use This' podcast">The Never Use This podcast</option> */}
            </SelectField>
            <div className="col-span-full rounded-2xl bg-[#1E3A8A] py-2 text-white">
              <button type="submit" className="w-full">
                <span>
                  Submit <span aria-hidden="true">&rarr;</span>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default IsAuth(Register)
