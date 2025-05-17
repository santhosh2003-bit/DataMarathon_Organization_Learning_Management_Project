'use client'

import React from 'react'
import { IoLogoWhatsapp } from 'react-icons/io'

const Whatsapp = () => {
  return (
    <a
      href="https://wa.me/9182769918"
      target="_blank"
      rel="noopener noreferrer"
      className="popup-animation fixed bottom-5 right-10 rounded-full bg-green-500 p-3 text-white shadow-lg"
    >
      <div className="relative">
        <IoLogoWhatsapp size={32} />
        {/* <div className="absolute top-0 right-8 bg-red-500 text-white rounded-full text-xs px-2 py-1 notification-badge">Enquiry</div> */}
      </div>
    </a>
  )
}

export default Whatsapp

;<style jsx>{`
  .popup-animation {
    animation: popup 1.5s infinite;
  }
  .notification-badge {
    animation: move-up 1s ease-in-out infinite alternate;
  }
  @keyframes popup {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
  @keyframes move-up {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }
`}</style>
