'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const MobileViewPopup = ({ navItems, setisOpenFirst }) => {
  const router = useRouter()

  return (
    <div
      className="fixed inset-0 z-50 flex bg-black bg-opacity-50 md:hidden"
      onClick={() => setisOpenFirst(false)} // Use onClick instead of onClickCapture
    >
      <div
        className="relative top-[12%] mx-auto h-fit w-full rounded-lg bg-white p-8"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <div className="flex flex-col">
          {navItems.map((item) => (
            <Link href={item.link} key={item.label}>
              <div
                className="flex cursor-pointer gap-5 border-b-2 px-4 py-2"
                onClick={() => setisOpenFirst(false)}
              >
                {item.icon}
                <div>{item.label}</div>
              </div>
            </Link>
          ))}
        </div>
        <button
          className="mt-4 w-full rounded-xl bg-blue-900 py-2 text-white"
          onClick={(e) => {
            e.stopPropagation() // Ensure it doesn't trigger parent div's close function
            router.push('https://courses.skillsmarathon.com/s/store')
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  )
}

export default MobileViewPopup
