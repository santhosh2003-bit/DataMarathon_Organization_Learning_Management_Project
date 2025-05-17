'use client'
import Link from 'next/link'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import appwriteService from '@/appwrite/appwrite_config'
import IsAuth from '@/components/IsAuth'
import { useDispatch } from 'react-redux'
import { loginUser } from '@/lib/store/features/auth/authslice'
import { FcGoogle } from 'react-icons/fc'
import { IoLogoLinkedin } from 'react-icons/io5'
import Spinner from '@/components/Spinner'
import { toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { OAuthProvider } from 'appwrite'
import { FaEyeSlash } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa'
function Register() {
  const dispatch = useDispatch()
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setloading] = useState(false)
  const [formdata, setFormdata] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    referral_source: '',
  })
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
    <SlimLayout className="h-screen overflow-y-auto bg-white">
      <div className="w-full max-w-sm rounded-lg bg-white p-4 shadow-md sm:max-w-md sm:p-6 md:max-w-lg">
        <h2 className="mt-10 text-lg font-semibold text-gray-900">
          Get started for free{' '}
          <Link href="/" aria-label="Home">
            {/* <div className="flex">
    <Link href="/" aria-label="Home">
      <Logo className="h-10 w-auto" />
    </Link>
  </div> */}
            <strong className="text-blue-900">SkillsMarathon</strong>
          </Link>
        </h2>
        <p className="mt-2 text-sm text-gray-700">
          Already registered?{' '}
          <Link
            href="/login"
            className="font-medium text-blue-600 hover:underline"
          >
            Sign in
          </Link>{' '}
          to your account.
        </p>

        <div className="mt-5 flex flex-col items-center justify-center">
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
        </div>
        <h3 className="mt-3 text-center">OR</h3>
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
              <p className="p-2 text-red-600 outline-red-800">{error.email}</p>
            )}
            <TextField
              className="col-span-full"
              label="Password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="new-password"
              required
              value={formdata.password}
              onChange={handleChange}
            />
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
          <div className="col-span-full">
            <Button
              type="submit"
              variant="solid"
              color="blue"
              className="w-full"
            >
              <span>
                Submit <span aria-hidden="true">&rarr;</span>
              </span>
            </Button>
          </div>
        </form>
      </div>
    </SlimLayout>
  )
}

export default IsAuth(Register)
