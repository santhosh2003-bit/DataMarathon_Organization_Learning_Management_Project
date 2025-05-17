'use client'
import React, { useState } from 'react'
import { IoLogOut } from 'react-icons/io5'
import { RxCross1 } from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux'
import { FaRegUserCircle } from 'react-icons/fa'
import { IoDocumentText } from 'react-icons/io5'
import { MdModeEdit } from 'react-icons/md'
import appwriteService from '@/appwrite/appwrite_config'
import { useRouter } from 'next/navigation'
import { logoutUser } from '@/lib/store/features/auth/authslice'

const LoginPop = ({ setisOpenFirst }) => {
  const [loading, setLoading] = useState(false)
  const { isLoggedIn, user } = useSelector((state) => state.auth)
  const router = useRouter()
  const dispatch = useDispatch()
  let first_initial = ''
  let last_initial = ''

  if (isLoggedIn) {
    const nameParts = user.name.split(' ')
    first_initial = nameParts[0].charAt(0).toUpperCase()
    last_initial =
      nameParts.length > 1 ? nameParts[1].charAt(0).toUpperCase() : ''
  }
  const handleLogout = async () => {
    try {
      setLoading(true)
      await appwriteService.logout()

      dispatch(
        logoutUser({
          isLoggedIn: false,
          user: {
            id: '',
            email: '',
            name: '',
            emailVerification: '',
          },
        }),
      )
      setisOpenFirst(false)
      setLoading(false)
      router.push('/')
    } catch (error) {
      setLoading(false)
    }
  }
  return (
    <div>
      <div className="mb-5 flex justify-between">
        <div className="absolute right-4 top-4 cursor-pointer">
          <RxCross1
            style={{
              fontSize: '20px',
            }}
            onClick={() => setisOpenFirst(false)}
            className="hidden md:block"
          />
        </div>
      </div>

      <div className="mb-4 flex flex-col space-y-2">
        <div
          className="flex cursor-pointer gap-5 border-b-2 px-4 py-2"
          onClick={() => {
            router.push('/user_profile')
          }}
        >
          <FaRegUserCircle
            style={{
              fontSize: '24px',
            }}
          />
          <div>My Profile</div>
        </div>
        <div
          className="flex cursor-pointer gap-5 border-b-2 px-4 py-2"
          onClick={() => {
            router.push('/user_profile')
          }}
        >
          <IoDocumentText
            style={{
              fontSize: '24px',
            }}
          />
          <div className="">My Courses</div>
        </div>
        <div
          className="flex cursor-pointer gap-5 border-b-2 px-4 py-2"
          onClick={() => {
            router.push('/user_profile')
          }}
        >
          <MdModeEdit
            style={{
              fontSize: '24px',
            }}
          />
          <div className="">Edit Profile</div>
        </div>

        <div
          className="flex cursor-pointer items-center justify-center gap-2 rounded bg-red-500 py-2 text-center text-white hover:bg-red-600"
          onClick={handleLogout}
        >
          <IoLogOut
            style={{
              fontSize: '24px',
              fontFamily: 'bold',
            }}
          />
          Logout
        </div>
      </div>
    </div>
  )
}

export default LoginPop
