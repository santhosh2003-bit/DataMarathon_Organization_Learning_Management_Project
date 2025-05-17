import Footer from '@/components/Footer'
import { Header } from '@/components/Header'
import User_Profile from '@/components/User_Profile'
import React from 'react'
import { FaBlog } from 'react-icons/fa'
import { FcAbout } from 'react-icons/fc'
import { MdOutlineAssessment } from 'react-icons/md'
import { GrDocumentPerformance } from 'react-icons/gr'
const Profile = () => {
  const navItems = [
    {
      link: '/#courses',
      label: 'Courses',
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
      label: 'Blog',
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
    {
      link: '/registration',
      label: 'Webinars',
      icon: (
        <MdOutlineAssessment
          style={{
            fontSize: '24px',
          }}
        />
      ),
    },
  ]
  return (
    <div>
      <Header navItems={navItems} />
      <User_Profile />
      <Footer />
    </div>
  )
}

export default Profile
