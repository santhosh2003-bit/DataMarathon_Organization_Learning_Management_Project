import React from 'react'
import { Header } from '@/components/Header'
import { FaBlog } from 'react-icons/fa'
import { FcAbout } from 'react-icons/fc'
import { MdOutlineAssessment } from 'react-icons/md'
import { GrDocumentPerformance } from 'react-icons/gr'
import Footer from '@/components/Footer'
const data = [
  {
    name: 'Manideep',
    designation: 'Software Engineer',
    location: 'Hyderabad',
    preScaler: 'TCS',
    postScaler: 'Arcesium',
    salaryIncrease: '30%',
  },
  {
    name: 'Shriram',
    designation: 'Software Engineer 3',
    location: 'Bangalore',
    preScaler: 'HCL',
    postScaler: 'PayPal',
    salaryIncrease: '40%',
  },
  {
    name: 'Krishna Chaitanya',
    designation: 'Software Engineer III',
    location: 'Hyderabad',
    preScaler: 'Innodatatics',
    postScaler: 'Walmart',
    salaryIncrease: '35%',
  },
]
const navItems = [
  {
    link: '#courses',
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
  {
    link: '/registration',
    label: 'Webinars',
    icon: (
      <MdOutlineAssessment
        style={{
          fontSize: '24px',
          color: '#2c3e50',
          transition: 'transform 0.2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.1)',
          },
        }}
      />
    ),
  },
]

const ProfileCard = ({ profile }) => {
  const { name, designation, location, preScaler, postScaler, salaryIncrease } =
    profile

  return (
    <div className="flex flex-col items-center gap-2 rounded-lg px-10 py-5 text-center shadow-2xl">
      <h5 className="text-xl font-bold" style={{ color: '#2c3e50' }}>
        {name}
      </h5>
      <p className="text-sm text-zinc-900">{designation}</p>
      <p className="" style={{ color: '#7f8c8d' }}>
        {location}
      </p>
      <div className="text-sm">
        <p className="" style={{ color: '#8e44ad' }}>
          Pre Skill Marathon:{' '}
          <span className="font-bold" style={{ color: '#9b59b6' }}>
            {preScaler}
          </span>
        </p>
        <p className="" style={{ color: '#2980b9' }}>
          Post Skill Marathon:{' '}
          <span className="font-bold" style={{ color: '#3498db' }}>
            {postScaler}
          </span>
        </p>
      </div>
      <div className="mt-3">
        <span
          className="font-bold"
          style={{ fontSize: '1.2rem', color: '#27ae60' }}
        >
          <i className="bi bi-arrow-up"></i> {salaryIncrease} hike in salary
        </span>
      </div>
      <button className="rounded-x flex items-center p-2 font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-2 h-5 w-5"
        >
          <path d="M22.23 0H1.77C.79 0 0 .774 0 1.73v20.54C0 23.226.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.73V1.73C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.687c-1.14 0-2.06-.926-2.06-2.065 0-1.136.92-2.063 2.06-2.063s2.06.927 2.06 2.063c0 1.14-.92 2.065-2.06 2.065zM20.452 20.452h-3.56v-5.89c0-1.4-.028-3.2-1.95-3.2-1.95 0-2.25 1.523-2.25 3.093v6h-3.56V9h3.42v1.56h.05c.48-.912 1.65-1.87 3.39-1.87 3.62 0 4.29 2.38 4.29 5.46v6.303z" />
        </svg>
      </button>
    </div>
  )
}

const ProfileList = () => {
  return (
    <>
      <Header navItems={navItems} />
      <div className="py-10 md:mt-24">
        <h1 className="pb-7 text-center text-2xl font-bold text-blue-900 md:text-5xl">
          Hall of Fame
        </h1>
        <div className="flex w-full flex-wrap justify-evenly gap-y-9">
          {data.map((profile, index) => (
            <ProfileCard key={index} profile={profile} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProfileList
