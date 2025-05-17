import React from 'react'
const companyData = [
  { companyLogoUrl: '/image-dm/euronone_logo.jpg' },
  { companyLogoUrl: '/image-dm/coursevox.jpg' },
  { companyLogoUrl: '/image-dm/TagSkills.jpg' },
]
import FreaturedIn from '@/images/FeaturedIn.jpg'
import Image from 'next/image'
const FeaturedIn = () => {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold text-blue-900 md:text-4xl">
        Featured In{' '}
      </h1>
      <div className="flex items-center justify-evenly p-5 md:flex-row flex-row">
        {companyData.map((logo, index) => {
          return (
            <div key={index}>
              <img
                className="mr-2 h-[100px] w-[200px] object-contain"
                src={logo.companyLogoUrl}
                alt={logo.companyLogoUrl}
              />
            </div>
          )
        })}
        {/* <Image src={FreaturedIn} className="h-full w-full" /> */}
      </div>
    </div>
  )
}

export default FeaturedIn
