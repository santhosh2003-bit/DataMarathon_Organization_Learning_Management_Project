'use client'
import { useState } from 'react'
import { Button } from '@/components/Button'
import { XMarkIcon } from '@heroicons/react/24/outline'; // Corrected import

export default function BannerPage() {
  const [showBanner, setShowBanner] = useState(true) // State to control banner visibility

  const handleRemoveBanner = () => {
    setShowBanner(false) // Hide the banner when clicked
  }

  return (
    <div className="relative bg-gray-100">
      {/* Conditional Rendering of Banner */}
      {showBanner && (
        <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-red-500 to-yellow-600 text-white py-1 px-4 shadow-lg flex justify-center items-center gap-x-4">
          <p className="text-lg font-semibold">
            Skills Marathon 2025 - <span>Register here to see what is coming next</span>
          </p>
          <Button href="/register" className="bg-black text-blue-600 px-4 py-2 rounded-md shadow-md">
            Register Now
          </Button>
          {/* Wrong Icon next to Register Now button */}
          <XMarkIcon
            onClick={handleRemoveBanner}
            className="w-6 h-6 text-white cursor-pointer"
          />
        </div>
      )}
    </div>
  )
}
