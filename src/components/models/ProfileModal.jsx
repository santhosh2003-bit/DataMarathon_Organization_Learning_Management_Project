import conf from '@/conf/conf'
import appwriteService from '@/appwrite/appwrite_config'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { toast, Bounce } from 'react-toastify'
import { MdEdit } from 'react-icons/md'

const ProfileModal = ({ isOpen, onClose }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState({})
  const { user, isLoggedIn } = useSelector((state) => state.auth)
  const [emailVerification, setEmailVerification] = useState(false)
  const [profilePhoto, setProfilePhoto] = useState(null)
  const [profilePreview, setProfilePreview] = useState(null)
  const [isSaving, setIsSaving] = useState(false) // Added missing state
  let first_initial = ''
  let last_initial = ''

  if (isLoggedIn) {
    first_initial = firstName?.charAt(0).toUpperCase()
    last_initial = lastName?.charAt(0).toUpperCase()
  }

  useEffect(() => {
    if (isLoggedIn) {
      console.log('Calling saveAuthUser from useEffect')
      appwriteService.saveAuthUser()
    }
  }, [isLoggedIn])

  useEffect(() => {
    if (isOpen && isLoggedIn) {
      setFirstName(user?.name.replace(/["\\]/g, '').split(' ')[0] || '') // Assuming name is "First Last"
      setLastName(user?.name.replace(/["\\]/g, '').split(' ')[1] || '')
      setEmail(user?.email || '')
      setEmailVerification(user?.emailVerification || false)
    }
  }, [isOpen, isLoggedIn, user])

  useEffect(() => {
    const fetchProfilePhoto = async () => {
      if (isOpen && isLoggedIn && user) {
        try {
          const result = await getProfilePhoto(user?.email)
        } catch (error) {
          console.log('Error loading profile photo:', error)
        }
      }
    }

    fetchProfilePhoto()
  }, [isOpen, isLoggedIn, user])

  const getProfilePhoto = async (email) => {
    try {
      const profileData = await appwriteService.getProfile(email)
      setProfilePhoto(profileData.profilePictureId || null)

      return profileData
    } catch (error) {
      toast.error('Failed to load profile photo.', {
        position: 'top-right',
        autoClose: 5000,
        theme: 'light',
        transition: Bounce,
      })
    }
  }

  useEffect(() => {
    if (profilePhoto instanceof File) {
      const objectUrl = URL.createObjectURL(profilePhoto)
      setProfilePreview(objectUrl)
      return () => URL.revokeObjectURL(objectUrl)
    }
    setProfilePreview(profilePhoto)
  }, [profilePhoto])

  useEffect(() => {
    if (!isOpen) {
      setProfilePreview(null) // Modal close hone par preview ko clear karo
    }
  }, [isOpen])

  useEffect(() => {
    return () => {
      if (profilePreview) URL.revokeObjectURL(profilePreview)
    }
  }, [profilePreview])

  const validateInputs = () => {
    const newErrors = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Simple email regex
    if (!firstName.trim()) newErrors.firstName = 'First Name is required.'
    if (!lastName.trim()) newErrors.lastName = 'Last Name is required.'
    if (!email) {
      newErrors.email = 'Email is required.'
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Email is not valid.'
    }
    return newErrors
  }

  const handleSave = async () => {
    const validationErrors = validateInputs()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    try {
      setIsSaving(true)
      await appwriteService.changeName(user?.id, firstName, lastName)
      toast.success('Profile updated successfully!', {
        position: 'top-right',
        autoClose: 5000,
        theme: 'light',
        transition: Bounce,
      })
      setErrors({})
      onClose()
    } catch (error) {
      toast.error(
        `Failed to update profile: ${error.message || 'An error occurred.'}`,
        {
          position: 'top-right',
          autoClose: 5000,
          theme: 'light',
          transition: Bounce,
        },
      )
    } finally {
      setIsSaving(false)
    }
  }

  const handleVerifyEmail = async () => {
    try {
      await appwriteService.sendverifyemail(email)
      toast.success('A link has been sent to your account. Check it.', {
        position: 'top-right',
        autoClose: 5000,
        theme: 'light',
        transition: Bounce,
      })
    } catch (error) {
      toast.error(error.message, {
        position: 'top-right',
        autoClose: 5000,
        theme: 'light',
        transition: Bounce,
      })
    }
  }

  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Set the profile photo state as the selected file
      setProfilePhoto(file)
      const objectUrl = URL.createObjectURL(file) // Create a URL for the image preview
      setProfilePreview(objectUrl) // Set the preview URL
      handleUploadPhoto(file) // Pass the file to the upload function
    }
  }

  const handleUploadPhoto = async (file) => {
    if (!file) {
      toast.error('Please select a profile photo to upload.', {
        position: 'top-right',
        autoClose: 5000,
        theme: 'light',
        transition: Bounce,
      })
      return
    }

    try {
      setIsSaving(true)
      const response = await appwriteService.uploadProfilePicture(
        user.email,
        file,
      )
      toast.success(response.message, {
        position: 'top-right',
        autoClose: 5000,
        theme: 'light',
        transition: Bounce,
      })
      setProfilePhoto(response.fileUrl) // Update the profile photo URL in state
      setProfilePreview(response.fileUrl) // Update the preview as well
    } catch (error) {
      toast.error(
        `Failed to upload photo: ${error.message || 'An error occurred.'}`,
        {
          position: 'top-right',
          autoClose: 5000,
          theme: 'light',
          transition: Bounce,
        },
      )
    } finally {
      setIsSaving(false)
    }
  }

  const handleRemovePhoto = async () => {
    try {
      setIsSaving(true)
      await appwriteService.removeProfilePicture(user?.email)
      setProfilePhoto(null)
      toast.success('Profile photo removed successfully.', {
        position: 'top-right',
        autoClose: 5000,
        theme: 'light',
        transition: Bounce,
      })
    } catch (error) {
      toast.error(
        `Failed to remove photo: ${error.message || 'An error occurred.'}`,
        {
          position: 'top-right',
          autoClose: 5000,
          theme: 'light',
          transition: Bounce,
        },
      )
    } finally {
      setIsSaving(false)
    }
  }

  if (!isOpen) return null
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-gray-500 bg-opacity-50">
      <div className="w-100 mt-10 rounded-lg bg-white p-6 shadow-lg">
        <div className="relative mb-4 flex items-center justify-between">
          <div className="flex items-center justify-center">
            <div className="group relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full md:h-24 md:w-24">
              {/* Profile Image */}
              <div className="absolute inset-0 bg-yellow-300 bg-cover bg-center transition duration-300 group-hover:blur-sm">
                {/* Display profile photo from Appwrite if available, else show default image */}
                <img
                  src={
                    profilePhoto
                      ? `${conf.appwrite_url}/storage/buckets/${conf.appwrite_bucket_id}/files/${profilePhoto}/view?project=${conf.appwrite_project_id}`
                      : profilePreview ||
                        'https://static.vecteezy.com/system/resources/previews/005/129/844/non_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg'
                  }
                  alt="profilePreview"
                  className="h-full w-full object-cover"
                />
              </div>
              <label className="absolute flex h-14 w-14 cursor-pointer items-center justify-center text-xl text-black opacity-0 transition duration-300 group-hover:opacity-100">
                <MdEdit />
                <input
                  type="file"
                  onChange={handleProfilePhotoChange}
                  accept="image/*"
                  className="hidden"
                />
                {profilePhoto && (
                  <button
                    className="rounded-md bg-red-500 px-1 py-2 text-[10px] text-white md:px-4 md:py-2 md:text-sm"
                    onClick={handleRemovePhoto}
                    disabled={isSaving}
                  >
                    {isSaving ? 'Removing...' : 'Remove Photo'}
                  </button>
                )}
              </label>
            </div>
          </div>

          {/* <h2 className="text-lg font-bold">User Information</h2> */}
          <div
            className="absolute right-0 top-0 cursor-pointer"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <form>
          <div className="mb-4 flex space-x-2">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
              {errors.firstName && (
                <p className="text-sm text-red-500">{errors.firstName}</p>
              )}
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
              {errors.lastName && (
                <p className="text-sm text-red-500">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>

            <div className="flex items-center gap-x-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block flex-1 rounded-md border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
              <>
                {!emailVerification ? (
                  <button
                    type="button"
                    onClick={handleVerifyEmail}
                    className="ml-2 rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700"
                  >
                    Verify Email
                  </button>
                ) : (
                  <p className="text-gray-400">Verified</p>
                )}
              </>
            </div>
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 rounded-md bg-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-400"
            >
              Discard
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="rounded-md bg-blue-900 px-4 py-2 text-white hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default ProfileModal
