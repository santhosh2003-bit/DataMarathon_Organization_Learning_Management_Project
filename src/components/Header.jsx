'use client'
import conf from '@/conf/conf'
import Link from 'next/link'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { useSelector } from 'react-redux'
import AboutModal from './models/AboutModal'
import ProfileModal from './models/ProfileModal'
import { IoChevronDownSharp } from 'react-icons/io5'
import LoginPop from './LoginPop'
import { LiaSignInAltSolid } from 'react-icons/lia'
import { toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { RxCross1 } from 'react-icons/rx'
import appwriteService from '@/appwrite/appwrite_config'
import Register from './authentication/Register'
import Login from './authentication/Login'
import BannerPage from './BannerPage'
import CoursePop from './CoursePop'
import { useRouter } from 'next/navigation'
import MobileViewPopup from './MobileViewPopup'

function MobileNavLink({ href, children }) {
  return (
    <PopoverButton
      as={Link}
      href={href}
      className="flex w-full items-center justify-center gap-3 rounded-lg bg-blue-900 p-2 text-center text-white"
    >
      <LiaSignInAltSolid
        style={{
          fontSize: '25px',
          color: 'white',
        }}
      />
      {children}
    </PopoverButton>
  )
}

function MobileNavIcon({ isOpenFirst, setisOpenFirst }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
      onClick={() => setisOpenFirst(true)}
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          isOpenFirst && 'scale-90 opacity-0',
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !isOpenFirst && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}

export function Header({ navItems }) {
  // &for showing  signup and login link if the user is not logged in
  const { isLoggedIn, user } = useSelector((state) => state.auth)
  const [isOpenFirst, setisOpenFirst] = useState(false)
  const [isOpenSecond, setisOpenSecond] = useState(false)
  const [profilePhoto, setProfilePhoto] = useState(null)
  const [registerHandle, setRegisterHandle] = useState(false)
  const [loginHandle, setLoginHandle] = useState(false)
  const [activatedCourse, setActivatedCourse] = useState(false)
  const [coursePopup, setCoursePopup] = useState(false)
  const route = useRouter()
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

  const getProfilePhoto = async (email) => {
    try {
      const profileData = await appwriteService.getProfile(email)
      setProfilePhoto(profileData.profilePictureId || null)
      return profileData
    } catch (error) {
      // console.log('Failed to load profile photo.')
    }
  }
  const handlefirstmodal = () => {
    setisOpenFirst(!isOpenFirst) // Open signup/login modal
  }

  const handlesecondmodal = () => {
    setisOpenSecond(true) // Open profile modal
  }

  let first_initial = ''
  let last_initial = ''
  if (isLoggedIn) {
    const nameParts = user.name.split(' ')
    first_initial = nameParts[0].charAt(0).toUpperCase()
    last_initial =
      nameParts.length > 1 ? nameParts[1].charAt(0).toUpperCase() : ''
  }

  const handleRegisterToggle = () => {
    setRegisterHandle((prev) => !prev)
  }
  return (
    <header className="z-50 w-full bg-white py-2 shadow-sm md:fixed">
      <Container>
        <nav className="relative flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="z-30 hidden md:flex md:items-center md:gap-x-6">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className={`${activatedCourse && item.label === 'Marathons' ? 'rounded-xl bg-white px-3 py-2' : ''} cursor-pointer md:flex md:items-center`}
                  onClick={() => {
                    setActivatedCourse(item.label === 'Marathons')
                    setCoursePopup(item.label === 'Marathons')
                    route.push(item.link)
                  }}
                >
                  {item.label}
                  <span>
                    {item.label === 'Marathons' && (
                      <IoChevronDownSharp
                        style={{
                          fontSize: '20px',
                        }}
                      />
                    )}
                  </span>
                  {activatedCourse && item.label === 'Marathons' && (
                    <div className="border-black-900 absolute ml-16 mt-10 h-4 w-4 -translate-x-1/2 rotate-45 bg-white"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <button
              className="font-sans-serif hidden rounded-lg bg-blue-900 p-2 text-white duration-[1s] hover:scale-[1.1] hover:bg-[#0566b0] md:block"
              onClick={() =>
                (window.location.href =
                  'https://courses.skillsmarathon.com/s/store')
              }
            >
              <span>Get Started</span>
            </button>
          </div>
          <div className="-mr-1 flex items-center md:hidden">
            <MobileNavIcon
              isOpenFirst={isOpenFirst}
              setisOpenFirst={setisOpenFirst}
            />
          </div>
        </nav>
        {isOpenFirst && (
          <MobileViewPopup
            navItems={navItems}
            setisOpenFirst={setisOpenFirst}
          />
        )}

        <ProfileModal
          isOpen={isOpenSecond}
          onClose={() => setisOpenSecond(false)}
        />
        {/* Register Modal */}
        {registerHandle && (
          <Register
            setRegisterHandle={setRegisterHandle}
            setLoginHandle={setLoginHandle}
          />
        )}
        {loginHandle && (
          <Login
            setLoginHandle={setLoginHandle}
            setRegisterHandle={setRegisterHandle}
          />
        )}
        {coursePopup && (
          <CoursePop
            setActivatedCourse={setActivatedCourse}
            setCoursePopup={setCoursePopup}
          />
        )}
      </Container>
      {/* <BannerPage/> */}
    </header>
  )
}
