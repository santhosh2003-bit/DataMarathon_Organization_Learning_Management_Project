'use client'
import React, { useState } from 'react'
import { Header } from '@/components/Header'
import Footer from '@/components/Footer'
import { Image } from 'next/image'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { GrDocumentPerformance } from 'react-icons/gr'
import { IoMdContact } from 'react-icons/io'
import { FcAbout } from 'react-icons/fc'
import { FaBlog } from 'react-icons/fa'
const ScholarshipPage = () => {
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
      link: '/#blog',
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
  const skillsOptions = [
    {
      header: 'Unlock New Opportunities',
      description:
        'Participate in our scholarship test to access exclusive discounts and benefits on premium courses. Open doors to advanced learning opportunities and elevate your career in technology and data science.',
    },
    {
      header: 'Challenge Yourself',
      description:
        'Take on an expertly crafted test designed to evaluate your fundamental and advanced skills. Compete with top learners and see where you stand in the competitive tech landscape.Achieve a score of 80% or higher to unlock access to premium courses!',
    },
    {
      header: 'Bridge the Knowledge Gap',
      description:
        'Discover areas where you can improve with detailed performance insights. Our scholarship test helps identify learning gaps, enabling you to focus on the skills that need the most attention.',
    },
    {
      header: 'Get Recognized',
      description:
        'Stand out with certificates and scholarships that validate your skills and showcase your potential. Enhance your profile with achievements recognized by industry professionals',
    },
    {
      header: 'Prepare for the Future',
      description:
        'Equip yourself with industry-relevant knowledge and skills to stay ahead of the curve. Our scholarship test ensures you’re ready to tackle challenges in the rapidly evolving tech industry.',
    },
  ]
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [errorModel, setErrorModel] = useState(false)
  const handleSubmission = async (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const data = {}
    formData.forEach((value, key) => {
      data[key] = value
    })
    // console.log(data)
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await response.json()
      if (result.message) {
        setShowModal(true)
        form.reset()
      } else {
        setErrorModel(true)
        form.reset()
      }
    } catch (error) {
      console.error('Error submitting form:', error.message)
    }
  }

  return (
    <>
      <Header navItems={navItems} />
      <section
        id="scholarship-page"
        className="relative bg-black text-white"
        style={{
          backgroundImage: "url('/image-dm/animation.gif')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Background Design */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-0 h-1/3 w-1/3 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute bottom-0 right-0 h-2/5 w-2/5 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute left-1/4 top-1/3 h-1/2 w-1/2 rounded-full opacity-20 blur-xl"></div>
        </div>

        {/* Content Section */}
        <div
          className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between px-5 py-12 lg:flex-row lg:px-12"
          id="Register-Right-Now"
        >
          {/* Left Section (Text Content) */}
          <div className="lg:w-4/3 ml-4 flex flex-col items-start">
            <h1 className="mb-4 font-sans text-3xl font-extrabold text-white lg:text-4xl">
              Join Skills Marathon Scholarship Test
            </h1>
            <p className="mb-6 font-serif text-lg font-medium text-white lg:text-2xl">
              Let us Make Success Possible!
            </p>
            <div className="flex flex-wrap items-center gap-4">
              Take the first step towards your dream career with this incredible
              opportunity. Don’t miss out!
              <span className="rounded-md bg-green-400 px-4 py-2 font-bold text-black">
                Upto 100% Scholarship*
              </span>
              <p>
                <strong>Score 80%</strong> or above to unlock exclusive premium
                courses designed to accelerate your learning journey.{' '}
                <p>
                  Gear up and get ready to excel—your path to success starts
                  here!
                </p>
              </p>
            </div>
          </div>

          {/* Right Section (Image) */}
          {/* <div className="mt-6 flex justify-center lg:mt-0 lg:w-2/3">
            <img
              src="/image-dm/scholarship_img.jpg"
              alt="Scholarship Test"
              className="w-6/3 h-auto max-w-xs rounded-lg shadow-xl"
            />
          </div> */}

          {/* Form Section (Increased Width) */}
          <div className="mt-14 rounded-lg bg-white p-6 text-black shadow-lg sm:w-full md:w-2/4 lg:w-2/3">
            <h2 className="mb-4 text-center text-xl font-bold">
              Register Now!
            </h2>
            <p className="mb-4 text-center">
              Secure your chance to win scholarships and rewards!
            </p>
            <form
              className="form space-y-3"
              onSubmit={(e) => handleSubmission(e)}
            >
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-1 block text-sm font-bold"
                >
                  Full Name<sup>*</sup>
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  name="fullName"
                  placeholder="Enter your name"
                  className="w-full rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-bold">
                  Email<sup>*</sup>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  name="email"
                  placeholder="Enter your email"
                  className="w-full rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="mb-1 block text-sm font-bold">
                  Phone Number<sup>*</sup>
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  name="phone"
                  placeholder="Enter phone number"
                  className="w-full rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Course and Profession Side-by-Side */}
              <div className="flex flex-wrap gap-2">
                {/* Course */}
                <div className="flex-1">
                  <label
                    htmlFor="course"
                    className="mb-1 block text-sm font-bold"
                  >
                    Course<sup>*</sup>
                  </label>
                  <select
                    id="course"
                    name="course"
                    required
                    className="w-full rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="" disabled selected>
                      Select Course
                    </option>
                    <option value="dataScience">Data Science</option>
                    <option value="salesforce">Salesforce</option>
                    <option value="sap">SAP</option>
                  </select>
                </div>

                {/* Profession */}
                <div className="flex-1">
                  <label
                    htmlFor="profession"
                    className="mb-1 block text-sm font-bold"
                  >
                    Profession<sup>*</sup>
                  </label>
                  <select
                    id="profession"
                    name="profession"
                    required
                    className="w-full rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="" disabled selected>
                      Select Profession
                    </option>
                    <option value="student">Student</option>
                    <option value="workingProfessional">
                      Working Professional
                    </option>
                  </select>
                </div>
              </div>

              {/* Where Did You Hear From */}
              <div>
                <label
                  htmlFor="hearFrom"
                  className="mb-1 block text-sm font-bold"
                >
                  Where did you hear about us?
                </label>
                <select
                  id="hearFrom"
                  name="hearFrom"
                  className="w-full rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled selected>
                    Select an option
                  </option>
                  <option value="google">Google</option>
                  <option value="wordOfMouth">Word of Mouth</option>
                  <option value="socialMedia">Social Media</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-md bg-blue-500 py-2 font-bold text-white transition duration-300 hover:bg-blue-600"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </section>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="mx-auto w-fit rounded-lg bg-white p-8 text-center shadow-lg">
            <h2 className="whitespace-nowrap text-2xl font-bold text-blue-900 md:text-3xl">
              Registration Successful!
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
              You have been registered successfully.
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
      {errorModel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="mx-auto max-w-sm rounded-lg bg-white p-8 text-center shadow-lg">
            <h2 className="text-3xl font-bold text-red-500">
              Registration Failed!
            </h2>
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-36 w-36 text-red-600"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h2V7zm0 8h-2v2h2v-2z" />
              </svg>
            </div>
            <p className="mt-4 text-xl text-gray-600 md:text-2xl">
              Email is already registered!.
            </p>
            <button
              onClick={() => setErrorModel(false)} // Close the modal
              className="mt-4 rounded-lg bg-blue-900 px-4 py-2 text-white hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="mx-auto w-full max-w-7xl px-4 py-4 md:px-12">
        <h1 className="text-center text-xl font-bold md:mt-6 md:text-4xl">
          Why should you take{' '}
          <span className="font-bold text-blue-900">this test</span>?
        </h1>
        <div className="mt-7 w-full">
          <div className="hide-scrollbar flex w-full min-w-[150px] flex-row flex-nowrap items-center gap-4 overflow-auto md:gap-x-20">
            {skillsOptions.map((option, index) => (
              <button
                key={index}
                className={`cursor-pointer whitespace-nowrap text-sm font-bold ${
                  index === selectedIndex ? 'border-b-2 border-blue-900' : ''
                }`}
                onClick={() => setSelectedIndex(index)}
              >
                {option.header}
              </button>
            ))}
          </div>
          <div className="flex flex-col-reverse items-center justify-between py-4 md:flex-row">
            <div className="flex flex-col items-start justify-center gap-3">
              <h1 className="text-xl font-bold capitalize">
                {skillsOptions[selectedIndex].header}
              </h1>
              <p>{skillsOptions[selectedIndex].description}</p>
              <a
                href="#Register-Right-Now"
                className="flex items-center rounded-md bg-blue-900 px-3 py-2 text-white"
              >
                Register for Free <MdOutlineArrowOutward />
              </a>
            </div>
            <img
              src="/image-dm/img-test.webp"
              alt="E-learning platform"
              className="h-56 w-96 md:w-1/2"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 gap-x-40 px-4 py-4 md:flex-row md:px-12">
        <img
          src="https://s3.ap-south-1.amazonaws.com/ilwebsite2.devinfinitylearn.in/scoreonline/prize/scoreprize.webp"
          alt="Gift-box"
        />
        <div className="flex flex-col gap-y-5">
          <h1 className="text-center text-xl font-bold md:text-start md:text-4xl">
            Unlock
            <span className="text-blue-900">
              {' '}
              premium courses for free
            </span>{' '}
            with Scholorship test
          </h1>
          <div className="flex gap-x-4">
            <img
              src="https://s3.ap-south-1.amazonaws.com/ilwebsite2.devinfinitylearn.in/scoreonline/prize/scholarship.svg"
              alt="ScholarShip"
            />
            <div>
              <h1 className="font-bold">upto 100% scholarship</h1>
              <p>
                Access premium courses at significantly reduced prices and save
                on your learning journey.
              </p>
            </div>
          </div>
          <div className="flex gap-x-4">
            <img
              src="https://s3.ap-south-1.amazonaws.com/ilwebsite2.devinfinitylearn.in/scoreonline/prize/study.svg"
              alt="ScholarShip"
            />
            <div>
              <h1 className="font-bold">Personalized Learning Path</h1>
              <p>
                Gain insights into your strengths and weaknesses to create a
                customized roadmap for achieving your career goals
              </p>
            </div>
          </div>
          <div className="flex gap-x-4">
            <img
              src="https://s3.ap-south-1.amazonaws.com/ilwebsite2.devinfinitylearn.in/scoreonline/prize/allowance.svg"
              alt="ScholarShip"
            />
            <div>
              <h1 className="font-bold">Skill Assessment</h1>
              <p>
                Evaluate your knowledge across various domains to understand
                your strengths and areas for improvement.
              </p>
            </div>
          </div>
          <a
            href="#Register-Right-Now"
            className="flex w-fit items-center rounded-md bg-blue-900 px-3 py-2 text-white"
          >
            Register for Free <MdOutlineArrowOutward />
          </a>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ScholarshipPage
