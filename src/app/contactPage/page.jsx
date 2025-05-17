// pages/contact.js
'use client'

import React from 'react'
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { Header } from '@/components/Header'
import Footer from '@/components/Footer'
import { FaBlog } from 'react-icons/fa'
import { FcAbout } from 'react-icons/fc'
import { MdOutlineAssessment } from 'react-icons/md'
import { GrDocumentPerformance } from 'react-icons/gr'
import { IoMdContact } from 'react-icons/io'

const ContactUs = () => {
  const navItems = [
    {
      link:
        typeof window !== 'undefined' &&
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        )
          ? '/#courses'
          : '',
      label: 'Marathons',
      icon: (
        <GrDocumentPerformance
          style={{
            fontSize: '24px',
          }}
        />
      ),
      onClick:
        typeof window !== 'undefined' &&
        !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        )
          ? () => setShowModal(true)
          : undefined,
    },
    {
      link: '/#blog',
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
  const [showModal, setShowModal] = React.useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const data = {}
    formData.forEach((value, key) => {
      data[key] = value
    })
    try {
      const response = await fetch('api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await response.json()
      if (result.message) {
        setShowModal(true)
      }
    } catch (error) {
      console.error('Error submitting form:', error.message)
    }
  }
  return (
    <section id="contactPage">
      <Header navItems={navItems} />
      <div className="min-h-screen bg-white">
        {/* Header Section */}
        <motion.div className="flex h-60 flex-col items-center justify-center bg-cover bg-center px-4 text-white">
          <h1 className="text-3xl font-bold text-gray-800 md:mt-14 md:text-4xl">
            Contact Us
          </h1>
          <p className="mt-2 text-sm text-gray-800 md:text-base">
            We’d love to hear from you. Reach out to us today!
          </p>
        </motion.div>

        <div className="mx-auto max-w-6xl p-4">
          {/* Enlarged Info Cards */}
          <motion.div
            className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.div className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <FiMapPin className="mb-3 text-4xl text-blue-500" />
              <h3 className="text-lg font-semibold text-gray-800">Address</h3>
              <p className="mt-2 text-sm text-gray-600">
                Hyderabad, Hi-Tech City, Telangana 500020
              </p>
            </motion.div>
            <motion.div className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <a
                href="tel:+911234567890"
                className="flex flex-col items-center text-center"
              >
                <FiPhone className="mb-3 text-4xl text-blue-500" />
                <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                <p className="mt-2 text-sm text-gray-600">+91 91827 69918</p>
              </a>
            </motion.div>

            <motion.div className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=support@skillsmarathon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center"
              >
                <FiMail className="mb-3 text-4xl text-blue-500" />
                <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                <p className="mt-2 text-sm text-gray-600">
                  support@skillsmarathon.com
                </p>
              </a>
            </motion.div>
          </motion.div>

          {/* Form with Centered Image Section */}
          <motion.div
            className="flex flex-col overflow-hidden rounded-lg bg-white shadow-lg md:flex-row"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {/* Centered Image Section */}
            <div className="flex h-full w-full items-center justify-center md:w-1/2">
              <img
                src="/image-dm/contact-bg.jpg"
                alt="Contact Us"
                className="mt-40 max-h-[400px] max-w-full object-cover"
              />
            </div>

            {/* Stylish Form Section */}
            <motion.div
              className="w-full p-8 md:w-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <h2 className="mb-6 text-center text-2xl font-semibold text-indigo-800 md:text-left">
                Get in Touch
              </h2>
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  handleSubmit(e)
                }}
              >
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block font-medium text-indigo-700"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block font-medium text-indigo-700"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-medium text-indigo-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block font-medium text-indigo-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="courses"
                    className="block font-medium text-indigo-700"
                  >
                    Courses
                  </label>
                  <select
                    id="courses"
                    name="courses"
                    className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select a Course</option>
                    <option value="data-science">Data Science</option>
                    <option value="salesforce">Salesforce</option>
                    <option value="sap">SAP</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-medium text-indigo-700"
                  >
                    Enter Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    name="message"
                    placeholder="Your message here..."
                    className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-indigo-600 py-3 text-white transition duration-300 hover:bg-indigo-700 focus:outline-none"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </motion.div>
        </div>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="mx-auto w-fit rounded-lg bg-white p-8 text-center shadow-lg">
              <h2 className="whitespace-nowrap text-2xl font-bold text-blue-900 md:text-3xl">
                Request Submission!
              </h2>
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-36 w-36 text-blue-900"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9 16.2l-4.2-4.2-1.4 1.4L9 19 20 8l-1.4-1.4z" />
                </svg>
              </div>
              <p className="mt-4 text-xl text-gray-600">
                Your Request has been submitted successfully!
              </p>
              <button
                onClick={() => setShowModal(false)} // Close the modal
                className="mt-4 rounded-lg bg-blue-900 px-4 py-2 text-white hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </section>
  )
}

export default ContactUs
