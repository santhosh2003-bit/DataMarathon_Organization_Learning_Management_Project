
'use client'
import Link from 'next/link'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import appwriteService from '@/appwrite/appwrite_config'
import IsAuth from '@/components/IsAuth'
import { useDispatch } from 'react-redux'
import { loginUser } from '@/lib/store/features/auth/authslice'
import Spinner from '@/components/Spinner'
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// export const metadata = {
//   title: 'Sign In',
// }

function Login() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false);
  const router = useRouter()
  const [user, setUser] = useState()
  const [showresetpass, setshowresetpass] = useState(false)
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  })
  const [error, setErrors] = useState({})

  //  add client side validation 
  const validate = () => {
    const newErrors = {};

    if (!formdata.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formdata.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formdata.password) {
      newErrors.password = "Password is required.";
    } else if (formdata.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormdata((prev) => ({ ...prev, [name]: value }));
  };

  // ^ login user email and password 
  const loginwithemailandpassword = async (e) => {
    e.preventDefault()

    try {
      const validationErrors = validate();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
      }
      else {
        setErrors({});
        setLoading(true)
        const session = await appwriteService.login(formdata.email, formdata.password)
        toast.success("user loggedIn successfully !", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        })
        router.push('/')
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
      setFormdata({
        email: "",
        password: ""
      })
    } finally {
      setLoading(false)
    }
  }

  // ^ reset password 
  const handlereserPassword = async (e) => {
    e.preventDefault();
    setLoading(true)
    const { email } = formdata;
    try {
      const response = await appwriteService.recover(email);
      toast.info("link has been sent successfully check your mail!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
    } finally {
      setLoading(false);
    }

  }


  if (loading) {
    return (
      <Spinner />
    )
  }

  return (
    <SlimLayout>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto mb-6" />
          </Link>

          <h2 className="mt-10 text-lg font-semibold text-gray-900 text-center">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-700 text-center">
            Don’t have an account?{' '}
            <Link
              href="/register"
              className="font-medium text-blue-600 hover:underline"
            >
              Sign up
            </Link>{' '}
            for a free trial.
          </p>

          <form
            action="#"
            className="mt-10 grid grid-cols-1 gap-y-8 w-full"
          >
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
                  <p className="text-red-600 outline-red-800 p-2">{error.email}</p>
                )}
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="*************"
                  autoComplete="current-password"
                  required
                  onChange={handleChange}
                  value={formdata.password}
                />
                {error.password && (
                  <p className="text-red-600 outline-red-800 p-2">{error.password}</p>
                )}
                <p
                  className="cursor-pointer text-blue-600 underline"
                  onClick={() => setshowresetpass(true)}
                >
                  Forgot password?
                </p>
                <Button variant="solid" color="blue" className="w-full" onClick={loginwithemailandpassword}>
                  <span>
                    Sign in <span aria-hidden="true">&rarr;</span>
                  </span>
                </Button>
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
                  className="cursor-pointer text-blue-600 underline"
                  onClick={() => setshowresetpass(false)}
                >
                  Back
                </p>

                <Button variant="solid" color="blue" className="w-full" onClick={handlereserPassword}>
                  <span>
                    Send reset link <span aria-hidden="true">&rarr;</span>
                  </span>
                </Button>
              </>
            )}
          </form>
        </div>
      </div>
    </SlimLayout>
  )

}

export default IsAuth(Login)