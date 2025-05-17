'use client'
import Blog from '@/components/Blog'
import { Faqs } from '@/components/Faqs'
import Footer from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import Stats from '@/components/Stats'
import Team from '@/components/Team'
import react, { useEffect, useState } from 'react'
import Testimonials from '@/components/Testimonials'
import appwriteService from '@/appwrite/appwrite_config'
import { useDispatch } from 'react-redux'
import { loginUser } from '@/lib/store/features/auth/authslice'
import Spinner from '@/components/Spinner'
import { FaBlog } from 'react-icons/fa'
import { FcAbout } from 'react-icons/fc'
import { MdOutlineAssessment } from 'react-icons/md'
import { GrDocumentPerformance } from 'react-icons/gr'
import Advisors from '@/components/Advisors'
import Instructors from '@/components/instructor'
import FeaturedIn from '@/components/FeaturedIn'
import { IoMdContact } from 'react-icons/io'
import Doodle from '@/components/Doodle'
import { color } from 'framer-motion'
import HeroPage from '@/components/HeroPage'
import Whatsapp from '@/components/whatsapp'
export default function Home() {
  const navItems = [
    {
      link: '/#courses',
      label: 'Marathons',
      icon: (
        <GrDocumentPerformance
          style={{
            fontSize: '24px',
          }}
        />
      ),
    },
    {
      link: '#blog',
      label: 'Blogs',
      icon: (
        <FaBlog
          style={{
            fontSize: '24px',
          }}
        />
      ),
    },
    {
      link: '/about',
      label: 'About',
      icon: (
        <FcAbout
          style={{
            fontSize: '24px',
            color: 'black',
          }}
        />
      ),
    },
    // {
    //   link: '/registration',
    //   label: 'Webinars',
    //   icon: (
    //     <MdOutlineAssessment
    //       style={{
    //         fontSize: '24px',
    //       }}
    //     />
    //   ),
    // },
    {
      link: '/contactPage',
      label: 'Contact',
      icon: (
        <IoMdContact
          style={{
            fontSize: '24px',
          }}
        />
      ),
    },
  ]
  const [loading, setloading] = useState(false)
  const dispatch = useDispatch()
  const getAccount = async () => {
    try {
      const result = await appwriteService.getUser()
      if (result) {
        const { $id, name, email, emailVerification } = result
        const extractedData = {
          isLoggedIn: true,
          user: {
            id: $id,
            name: name,
            email: email,
            emailVerification: emailVerification,
          },
        }
        dispatch(loginUser(extractedData))
      }
    } catch (error) {
    } finally {
      setloading(false)
    }
  }
  useEffect(() => {
    getAccount()
  })

  if (loading) {
    return <Spinner />
  }

  return (
    <>
      <Header navItems={navItems} />
      <main>
        <div className="relative">
          <div className="relative pt-7">
            <HeroPage />
          </div>
        </div>
        <Hero />
        {/* <Doodle/> */}

        {/* <Instructors /> */}
        <Instructors />
        <Testimonials />
        <Blog />
        <Faqs />
      </main>
      <Footer />
      <Whatsapp />
    </>
  )
}
