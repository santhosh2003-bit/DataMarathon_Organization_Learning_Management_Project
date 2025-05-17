import React from 'react'
import { motion } from 'framer-motion'
import { RxCross1 } from 'react-icons/rx'

const PopUp = ({ setPopup, message }) => {
  const isError = message !== `We'll send you all the webinar details soon!`

  return (
    <div className="fixed inset-0 z-[9999999] flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: '0%', opacity: 1 }}
        exit={{ y: '100%', opacity: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative flex w-80 flex-col items-center justify-center rounded-lg bg-slate-100 p-6 shadow-lg"
      >
        <div className="absolute right-5 top-5 flex h-6 w-6 items-center justify-center rounded-full hover:bg-slate-200">
          <RxCross1
            className="cursor-pointer"
            onClick={() => {
              setPopup(false)
            }}
          />
        </div>
        <div
          className={`flex h-[100px] w-[100px] items-center justify-center rounded-full ${isError ? 'bg-yellow-500' : 'bg-green-500'
            }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            {isError ? (
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h2V7zm0 8h-2v2h2v-2z" />
            ) : (
              <path d="M9 16.2l-4.2-4.2-1.4 1.4L9 19 20 8l-1.4-1.4z" />
            )}
          </svg>
        </div>
        <h2 className="mt-4 text-center text-2xl font-semibold text-slate-900">
          {isError ? 'User already exists!' : 'Congratulations!'}
        </h2>
        <p className="text-center text-sm text-slate-700">
          {message}
        </p>
        <button
          className={`mt-4 rounded-xl bg-green-500 px-10 py-2 text-white shadow-2xl transition delay-100 duration-200 ease-in-out hover:bg-green-400`}
          onClick={() => {
            setPopup(false)
          }}
        >
          Done
        </button>
      </motion.div>
    </div>
  )
}

export default PopUp
