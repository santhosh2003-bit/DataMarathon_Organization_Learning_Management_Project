import conf from '@/conf/conf'
import { useState, useEffect } from 'react'
import { logoutUser } from '@/lib/store/features/auth/authslice'
import { useRouter } from 'next/navigation'
import appwriteService from '@/appwrite/appwrite_config'
import Spinner from '../Spinner'
import { useDispatch, useSelector } from 'react-redux'
import { toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FaRegUserCircle } from 'react-icons/fa'
import { IoDocumentText } from 'react-icons/io5'
import { MdModeEdit } from 'react-icons/md'
import { IoLogOut } from 'react-icons/io5'
import { RxCross1 } from 'react-icons/rx'

const AboutModal = ({ isOpen, onClose, showsecondmodal }) => {
  const [userdata, setUserdata] = useState(false)
  const router = useRouter()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const { isLoggedIn, user } = useSelector((state) => state.auth)
  const [profilePhoto, setProfilePhoto] = useState(null)
  let first_initial = ''
  let last_initial = ''

  if (isLoggedIn) {
    const nameParts = user.name.split(' ')
    first_initial = nameParts[0].charAt(0).toUpperCase()
    last_initial =
      nameParts.length > 1 ? nameParts[1].charAt(0).toUpperCase() : ''
  }

  const getProfilePhoto = async (email) => {
    try {
      const profileData = await appwriteService.getProfile(email)
      if (profileData && profileData.profilePictureId) {
        setProfilePhoto(profileData.profilePictureId)
      } else {
        console.log('No profile picture found.')
      }

      return profileData
    } catch (error) {
      console.error('Error loading profile data:', error)
    }
  }

  useEffect(() => {
    const fetchProfilePhoto = async () => {
      if (isLoggedIn && user) {
        try {
          const result = await getProfilePhoto(user?.email)
        } catch (error) {
          console.error('Error loading profile photo:', error)
        }
      }
    }

    fetchProfilePhoto()
  }, [isLoggedIn, user])

  // Conditionally render the component based on `isOpen` and `isLoggedIn`
  if (!isOpen || !isLoggedIn) return null

  const handleLogout = async () => {
    try {
      setLoading(true)
      await appwriteService.logout()
      toast.success('User logged out successfully', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
        transition: Bounce,
      })

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
      setLoading(false)
      router.push('/')
    } catch (error) {
      setLoading(false)
      toast.error(error.message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
        transition: Bounce,
      })
    }
  }

  console.log('AboutModal isOpen:', isOpen)
  return (
    <div className="background_dark absolute inset-0 top-20 z-50 flex items-start justify-center px-4 md:justify-end md:pr-20">
      <div className="relative w-full max-w-xs rounded-lg border-2 border-[#1e3a8a] bg-white p-6 shadow-lg md:max-w-sm lg:max-w-md">
        {loading ? (
          <Spinner />
        ) : (
          <div className="popup_top_triangle">
            <div className="relative mb-5 flex justify-between">
              {userdata.emailVerification && (
                <div className="flex flex-col">
                  <p className="rounded-md p-2 text-sm leading-5 outline outline-red-500">
                    Please verify your account via the email we sent you. If you
                    didn&apos;t receive it, request a new link. Thank you!
                  </p>
                </div>
              )}
            </div>
            <div
              className="absolute right-4 top-4 cursor-pointer"
              onClick={onClose}
            >
              <RxCross1
                style={{
                  fontSize: '20px',
                }}
              />
            </div>

            <div className="mb-4 flex flex-col space-y-2 bg-white">
              <div className="flex items-center gap-x-3">
                <div className="z-30 items-center gap-x-5 md:flex md:gap-x-8">
                  <div className="flex items-center justify-center">
                    <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-blue-900 text-lg font-bold text-white transition duration-200 hover:bg-[#0073BD]">
                      {profilePhoto ? (
                        <img
                          src={`${conf.appwrite_url}/storage/buckets/${conf.appwrite_bucket_id}/files/${profilePhoto}/view?project=${conf.appwrite_project_id}`}
                          alt="Profile"
                          className="h-full w-full rounded-full object-cover"
                        />
                      ) : (
                        `${first_initial}${last_initial}`
                      )}
                      {/* {first_initial}
                      {last_initial} */}
                    </div>
                  </div>
                </div>
                <h2 className="text-lg font-bold">{user.name}</h2>
              </div>
              <div className="flex cursor-pointer gap-5 border-b-2 px-4 py-2">
                <FaRegUserCircle
                  style={{
                    fontSize: '24px',
                  }}
                />
                <div
                  className=""
                  onClick={() => {
                    router.push('/user_profile')
                  }}
                >
                  My Profile
                </div>
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
        )}
      </div>
    </div>
  )
}

export default AboutModal
