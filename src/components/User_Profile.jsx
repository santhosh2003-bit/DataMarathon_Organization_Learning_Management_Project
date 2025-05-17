'use client'
import conf from '@/conf/conf'
import React, { useState, useEffect } from 'react'
import { MdEdit } from 'react-icons/md'
import { PrimaryFeatures } from './PrimaryFeatures'
import { useSelector } from 'react-redux'
import ProfileModal from './models/ProfileModal'
import appwriteService from '@/appwrite/appwrite_config'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const User_Profile = () => {
  const [isOpenSecond, setisOpenSecond] = useState(false)
  const { user } = useSelector((state) => state.auth)
  const [profilePhoto, setProfilePhoto] = useState(null)
  const [isSaving, setIsSaving] = useState(false)

  // Fetch profile photo on component mount
  useEffect(() => {
    const fetchProfilePhoto = async () => {
      if (!user?.email) return
      try {
        const profileData = await appwriteService.getProfile(user.email)
        setProfilePhoto(profileData.profilePictureId || null)
      } catch (error) {
        toast.error('Failed to load profile photo.')
      }
    }
    fetchProfilePhoto()
  }, [user?.email])

  const handleProfilePhotoChange = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    setIsSaving(true)
    try {
      const response = await appwriteService.uploadProfilePicture(
        user.email,
        file,
      )
      setProfilePhoto(response.fileUrl)
      toast.success('Profile photo uploaded successfully.')
    } catch (error) {
      toast.error('Failed to upload profile photo.')
    } finally {
      setIsSaving(false)
    }
  }

  const handleRemovePhoto = async () => {
    if (!profilePhoto) {
      toast.info('No photo to remove.')
      return
    }
    setIsSaving(true)
    try {
      await appwriteService.removeProfilePicture(user.email)
      setProfilePhoto(null)
      toast.success('Profile photo removed successfully.')
    } catch (error) {
      toast.error('Failed to remove profile photo.')
    } finally {
      setIsSaving(false)
    }
  }

  const [value, setValue] = useState(50)
  const handleInputChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className="mx-auto max-w-5xl">
      {/* Profile Section */}
      <div className="mt-2 flex items-center gap-x-6 border-b-2 px-2 pb-5 md:justify-between md:py-32">
        <div className="flex items-center gap-x-5">
          <div className="group relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full md:h-20 md:w-20">
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-300 group-hover:blur-sm"
              style={{
                backgroundImage: `url(${
                  profilePhoto
                    ? `${conf.appwrite_url}/storage/buckets/${conf.appwrite_bucket_id}/files/${profilePhoto}/view?project=${conf.appwrite_project_id}`
                    : 'https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg'
                })`,
              }}
            ></div>

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
          <div>
            <h1 className="text-xl font-semibold md:text-2xl">{user?.name}</h1>
            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>
        </div>

        <button
          className="rounded-md bg-blue-900 px-1 py-2 text-[10px] text-white md:px-4 md:py-2 md:text-sm"
          onClick={() => setisOpenSecond(true)}
        >
          Edit Profile
        </button>
      </div>

      {/* Edit Profile Modal */}
      <ProfileModal
        isOpen={isOpenSecond}
        onClose={() => setisOpenSecond(false)}
      />

      {/* Courses Section */}
      <div className="border-b-2 px-3 pt-4">
        <h1 className="text-xl font-bold">My Courses</h1>
        <div className="flex flex-col justify-center gap-4 p-6 md:flex-row">
          {/* <img
            src="https://thumbs.dreamstime.com/b/ingen-presentationsikon-f%C3%B6r-onlineutbildning-b%C3%A4rbara-datorer-enkelt-tunt-skiss-%C3%B6ver-f%C3%B6rbudet-mot-vidareutbildning-online-att-179468851.jpg"
            alt="Courses"
            className="h-[50%] w-[50%] transition duration-300"
          /> */}
          <div className="flex flex-col gap-3 rounded-lg px-4 py-3 shadow-md">
            <img
              src="https://www.mygreatlearning.com/blog/wp-content/uploads/2019/09/What-is-data-science-2.jpg"
              alt="Courses"
              className="h-[200px] w-[300px] rounded-lg transition duration-300"
            />
            <h1 className="text-2xl font-bold">Data Science</h1>
            <p className="text-sm">
              Data Science is used in almost every industry today that can
              predict customer behavior and trends and identify new
              opportunities.
            </p>
            <div className="mx-auto flex w-64 items-center space-x-4">
              <input
                type="range"
                value={value}
                min="0"
                max="100"
                className="range-input no-thumb"
                onChange={handleInputChange}
                style={{
                  background: `linear-gradient(to right, #1e3a8a ${value}%, #d1d5db ${value}%)`,
                }}
              />

              <span className="font-semibold text-blue-900">{value}%</span>
            </div>
            <button className="w-full rounded-xl bg-blue-900 px-3 py-2 text-white">
              Continue
            </button>
          </div>
          <div className="flex flex-col gap-3 rounded-lg px-4 py-3 shadow-md">
            <img
              src="https://i0.wp.com/krct.ac.in/blog/wp-content/uploads/2024/03/AI.png?fit=1377%2C900&ssl=1"
              alt="Courses"
              className="h-[200px] w-[300px] rounded-lg transition duration-300"
            />
            <h1 className="text-2xl font-bold">Artificial Intelligence</h1>
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              hic doloremque repellat molestiae similique? Vel officiis quam
              voluptate odit eligendi.
            </p>
            <div className="mx-auto flex w-64 items-center space-x-4">
              <input
                type="range"
                value={value}
                min="0"
                max="100"
                className="range-input no-thumb"
                onChange={handleInputChange}
                style={{
                  background: `linear-gradient(to right, #1e3a8a ${value}%, #d1d5db ${value}%)`,
                }}
              />

              <span className="font-semibold text-blue-900">{value}%</span>
            </div>
            <button className="w-full rounded-xl bg-blue-900 px-3 py-2 text-white">
              Continue
            </button>
          </div>
          <div className="flex flex-col gap-3 rounded-lg px-4 py-3 shadow-md">
            <img
              src="https://platform3solutions.com/wp-content/uploads/2024/02/SAP-Data-Archival-Success-Story.webp"
              alt="Courses"
              className="h-[200px] w-[300px] rounded-lg transition duration-300"
            />
            <h1 className="text-2xl font-bold">SAP</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium dolor facilis quidem saepe. Omnis, necessitatibus
              blanditiis! In odit laborum mollitia.
            </p>
            <div className="mx-auto flex w-64 items-center space-x-4">
              <input
                type="range"
                value={value}
                min="0"
                max="100"
                className="range-input no-thumb"
                onChange={handleInputChange}
                style={{
                  background: `linear-gradient(to right, #1e3a8a ${value}%, #d1d5db ${value}%)`,
                }}
              />

              <span className="font-semibold text-blue-900">{value}%</span>
            </div>
            <button className="w-full rounded-xl bg-blue-900 px-3 py-2 text-white">
              Continue
            </button>
          </div>
        </div>
      </div>

      {/* Primary Features Section */}
      <div>
        <PrimaryFeatures />
      </div>
    </div>
  )
}

export default User_Profile
