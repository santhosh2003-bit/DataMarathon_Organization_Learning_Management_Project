'use client'
import React, { useState } from 'react'
import { Header } from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/Button'
import appwriteService from '@/appwrite/appwrite_config'

import 'react-toastify/dist/ReactToastify.css'
import { Description, Field, Input, Label, Select } from '@headlessui/react'
import clsx from 'clsx'
import PopUp from '@/components/PopUp'
import Image from 'next/image'
import {
  CalendarIcon,
  UserGroupIcon,
  ClockIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBook,
  faTags,
  faBrain,
  faCertificate,
  faGift,
  faFolderOpen,
} from '@fortawesome/free-solid-svg-icons'

const Page = () => {
  const [formdata, setFormdata] = useState({
    fullname: '',
    email: '',
    phone: '',
    school: '',
    qualification: '',
    referal: '',
    termsCheck: false,
  })
  const [error, setErrors] = useState({})
  const [showModal, setShowModal] = useState(false);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormdata((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }


 //popup message
  const [popup, setPopup] = useState(false)
  const [message, setMessage] = useState('')

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  
  const create = async (e) => {
    e.preventDefault()
    try {
      const validationErrors = validate()
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors)
      } else {
        setErrors({})
        await appwriteService.webinarRegistration(formdata)


        //& Call the backend API to send the email 
        // below code commented bcz of email credentials 

        // const res = await fetch('/api/send-email', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({ tosend: "datamarathondatabase@gmail.com" })
        // });
        // if (!res.ok) {
        //   throw new Error(`Failed to send email:`);
        // }


        setMessage(`We'll send you all the webinar details soon!`)
        setPopup(true)
        setFormdata({
          fullname: '',
          email: '',
          phone: '',
          school: '',
          qualification: '',
          referal: '',
          termsCheck: false,
        })
      }
    } catch (error) {
      setMessage(error.message)
      setPopup(true)
    }
  }

  const validate = () => {
    const newErrors = {}

    if (!formdata.fullname) newErrors.fullname = 'Name is required.'

    if (!formdata.email) {
      newErrors.email = 'Email is required.'
    } else if (!/\S+@\S+\.\S+/.test(formdata.email)) {
      newErrors.email = 'Email address is invalid.'
    }

    if (!formdata.phone) {
      newErrors.phone = 'Phone number is required.'
    } else if (!/^\d{10}$/.test(formdata.phone)) {
      newErrors.phone = 'Phone number must be exactly 10 digits.'
    }

    if (!formdata.school)
      newErrors.school = 'Institute/organization is required.'

    if (!formdata.qualification)
      newErrors.qualification = 'Qualification is required.'

    if (!formdata.termsCheck)
      newErrors.termsCheck = 'You must accept the terms and conditions.'

    return newErrors
  }

  const navItems = [
    {
      link: '/#blog',
      label: 'Blog',
    },
    {
      link: '/about',
      label: 'About',
    },
  ]
  return (
    <main>
      <section
        className="relative bg-cover bg-center bg-no-repeat px-4 py-8 sm:px-6 sm:py-12"
        style={{ backgroundImage: "url('image-dm/akhil-photo.png')" }}
      >
        <a href="/">
          <img
            src="/image-dm/logo-webinar-skills.png"
            alt="Logo"
            className="absolute left-2 top-0 z-10 h-12 h-auto w-12 sm:left-4 sm:top-1 sm:w-16 md:w-24 lg:-top-3 lg:w-28"
          />
        </a>
        {popup && <PopUp setPopup={setPopup} message={message} />}

        {/* Register Now Banner */}
        <div className="animate-marquee w-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 font-bold text-white sm:py-3">
          <p className="text-center text-sm leading-tight tracking-wide sm:text-lg md:text-xl lg:text-2xl">
            🚀 Register Now to Secure Your Spot in the Generative AI Workshop!
            🚀
          </p>
        </div>

        {/* Main Content Below Banner */}
        <div className="mx-auto mt-4 flex max-w-7xl flex-col items-start justify-between gap-6 sm:gap-10 md:flex-row">
          {/* Banner (Left side) */}
          <div className="animate-fadeIn flex-1 rounded-lg bg-opacity-90 p-4 text-center text-white sm:p-8 md:text-left">
            <h1 className="mb-4 text-2xl font-extrabold sm:mb-6 sm:text-3xl md:text-4xl">
              Generative AI in Art and Music: Creativity Meets Technology
            </h1>

            <div className="mb-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:justify-start">
              {/* Date */}
              <div className="flex items-center gap-1 sm:gap-2">
                <CalendarIcon className="h-5 w-5 text-yellow-200 sm:h-6 sm:w-6" />
                <p className="text-xs text-yellow-200 sm:text-sm md:text-base">
                  Nov 23–24, 2024
                </p>
              </div>

              {/* Duration */}
              <div className="flex items-center gap-1 sm:gap-2">
                <ClockIcon className="h-5 w-5 text-yellow-200 sm:h-6 sm:w-6" />
                <p className="text-xs text-yellow-200 sm:text-sm md:text-base">
                  6:00 PM - 8:00 PM
                </p>
              </div>

              {/* Platform */}
              <div className="flex items-center gap-1 sm:gap-2">
                <VideoCameraIcon className="h-5 w-5 text-yellow-200 sm:h-6 sm:w-6" />
                <p className="text-xs text-yellow-200 sm:text-sm md:text-base">
                  Hosted on Zoom
                </p>
              </div>
            </div>
            <p className="sm:text-md text-sm leading-relaxed md:text-lg">
              Join us for a two-day online workshop{' '}
              <p>
                to explore how Generative AI is revolutionizing art and music.
              </p>
              <p>Learn from experts about GANs, neural networks, and</p> the
              transformative impact of AI on creativity.
            </p>
          </div>

          {/* Registration Form (Right side) */}
          <div
            className="animate-slideIn flex w-full flex-col items-center justify-center rounded-lg bg-white p-6 shadow-lg shadow-xl sm:p-8 md:w-1/3"
            id="registration-form"
          >
            <form className="w-full max-w-sm" onSubmit={create}>
              <h2 className="bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-clip-text py-5 text-center text-xl font-bold text-transparent sm:py-7 sm:text-2xl md:text-3xl">
                Register to Save Your Spot
              </h2>
              <div className="w-full space-y-4">
                <Field>
                  <Label className="text-sm font-bold">Full Name</Label>
                  <Input
                    type="text"
                    required
                    name="fullname"
                    placeholder="Enter your Full Name"
                    value={formdata.fullname}
                    onChange={handleChange}
                    className="mb-2 block w-full rounded-md border border-gray-400 bg-white px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-purple-300"
                  />
                  {error.name && <p className="text-red-600">{error.name}</p>}
                </Field>

                <Field>
                  <Label className="text-sm font-bold">Email Address</Label>
                  <Input
                    type="email"
                    required
                    name="email"
                    placeholder="Enter your Mail Address"
                    value={formdata.email}
                    onChange={handleChange}
                    className="mb-2 block w-full rounded-md border border-gray-400 bg-white px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-purple-300"
                  />
                  {error.email && <p className="text-red-600">{error.email}</p>}
                </Field>

                <Field>
                  <Label className="text-sm font-bold">Phone Number</Label>
                  <Input
                    type="tel"
                    required
                    name="phone"
                    placeholder="Enter your Phone Number"
                    value={formdata.phone}
                    onChange={handleChange}
                    className="mb-2 block w-full rounded-md border border-gray-400 bg-white px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-purple-300"
                  />
                  {error.phone && <p className="text-red-600">{error.phone}</p>}
                </Field>

                <div className="flex gap-3">
                  <Field className="w-3/5">
                    <Label className="text-sm font-bold">
                      Institute/Organization
                    </Label>
                    <Input
                      type="text"
                      required
                      name="school"
                      placeholder="Enter your Institute/organization"
                      value={formdata.school}
                      onChange={handleChange}
                      className="mb-2 block w-full rounded-md border border-gray-400 bg-white px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-purple-300"
                    />
                    {error.school && (
                      <p className="text-red-600">{error.school}</p>
                    )}
                  </Field>
                  <Field>
                    <Label className="text-sm font-bold">Profession</Label>
                    <Select
                      name="qualification"
                      value={formdata.qualification}
                      onChange={handleChange}
                      className="mb-2 block w-full appearance-none rounded-md border border-gray-400 bg-white px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-purple-300"
                    >
                      <option value="select">Select</option>
                      <option value="student">Student</option>
                      <option value="Working Professional">
                        Working professional
                      </option>
                    </Select>
                  </Field>
                </div>

                <Field>
                  <Label className="text-sm font-bold">
                    How did you hear about us
                  </Label>
                  <Select
                    name="referal"
                    value={formdata.referal}
                    onChange={handleChange}
                    className="mb-2 block w-full appearance-none rounded-md border border-gray-400 bg-white px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-purple-300"
                  >
                    <option value="select">Select</option>
                    <option value="google">Google</option>
                    <option value="word of mouth">Word of Mouth</option>
                    <option value="social media">Social Media</option>
                    <option value="other">Other</option>
                  </Select>
                </Field>

                <div className="mt-4 flex h-5 items-center">
                  <input
                    id="terms"
                    name="termsCheck"
                    type="checkbox"
                    checked={formdata.termsCheck}
                    onChange={handleChange}
                    required
                    className="focus:ring-3 h-4 w-4 rounded border border-gray-400 bg-gray-50 focus:ring-purple-300"
                  />
                  <label htmlFor="terms" className="ml-2 text-sm">
              I agree with the{' '}
              <button
                type="button"
                onClick={handleShowModal}
                className="text-black underline"
              >
                terms and conditions
              </button>
            </label>
          </div>
          {error.termsCheck && (
            <p className="text-red-600">{error.termsCheck}</p>
          )}

                <Button className="text-white-900 mt-4 w-full rounded bg-blue-400 py-2 font-semibold transition duration-300 ease-in-out hover:bg-blue-500">
                  Register
                </Button>
              </div>
            </form>
            {showModal && (
       <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
       <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg">
         <h2 className="text-lg font-bold mb-4">Terms and Conditions</h2>
         
         <div className="overflow-y-auto max-h-60 text-sm mb-4 pr-2">
           <p>
             1. Eligibility and Registration<br />
             By registering for this webinar, you confirm that all information provided is accurate and complete. The organizer reserves the right to deny access if the provided information is incorrect or incomplete.
             <br /><br />
             2. Privacy and Data Use<br />
             Your registration information will be collected and stored securely, as per our Privacy Policy. We may use your contact information to send reminders, updates, and post-webinar materials. By registering, you consent to receive such communications.
             <br /><br />
             3. Recording and Content Use<br />
             The webinar may be recorded. By attending, you consent to the recording and agree that we may use the content, including your questions or comments, for future training, promotional, or educational purposes.
             <br /><br />
             4. Intellectual Property of Use<br />
             All materials provided during the webinar, including slides, recordings, and other resources, are the intellectual property of the organizer or presenters. You agree not to share, distribute, or reproduce these materials without prior permission.
             <br /><br />
             5. Webinar Code of Conduct<br />
             You agree to participate respectfully, avoiding disruptive behavior or inappropriate language. The organizer reserves the right to remove anyone who disrupts the session or violates this code of conduct.
             <br /><br />
             6. Technical Requirements<br />
             Please ensure you have the necessary equipment (computer, internet connection, software) to participate in the webinar. The organizer is not responsible for technical issues that may hinder your participation.
             <br /><br />
           </p>
         </div>
     
         <button
           onClick={handleCloseModal}
           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
         >
           Close
         </button>
       </div>
     </div>
     
      )}
          </div>

        </div>
      </section>

      {/* Remaining sections */}
      <section className="relative w-full bg-gray-50 px-6 py-16">
        <div className="relative z-10 mx-auto max-w-6xl space-y-6 text-center">
          <h2 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-[Poppins] text-3xl font-extrabold uppercase tracking-wide text-transparent drop-shadow-lg md:text-5xl">
            <span className="block">Workshop Overview</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Join{' '}
            <span className="font-semibold text-blue-600">
              Skills Marathon EdTech’s
            </span>{' '}
            exclusive two-day online workshop to discover how{' '}
            <span className="font-semibold">Generative AI</span> is
            revolutionizing the worlds of art and music! Designed to empower
            artists, musicians, and tech enthusiasts alike, this workshop delves
            into the latest AI advancements, like{' '}
            <span className="font-semibold">
              GANs (Generative Adversarial Networks)
            </span>
            , neural networks, and deep learning models, which are pushing
            creative boundaries like never before. Whether you’re an experienced
            creator or simply curious, this immersive experience will provide
            you with both inspiration and practical knowledge to apply AI in
            your creative endeavors.
          </p>
        </div>
      </section>
      <section className="bg-gray-50 py-12">
        <h2 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-center font-[Poppins] text-2xl font-extrabold uppercase tracking-wide text-transparent drop-shadow-lg md:text-5xl">
          <span className="block">Skills You’ll Gain from the Webinar</span>
        </h2>
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <ul className="space-y-6 text-lg">
                <li className="flex items-start gap-4 rounded-xl bg-[#d3d7df] p-4 shadow-2xl">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full text-lg font-bold">
                    1.
                  </div>
                  <p className="text-gray-800">
                    <strong>Introduction to Generative AI:</strong> Understand
                    how AI is transforming art and music—and how you can make it
                    part of your creative journey.
                  </p>
                </li>
                <li className="flex items-start gap-4 rounded-xl bg-[#d3d7df] p-4 shadow-2xl">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full text-lg font-bold">
                    2.
                  </div>
                  <p className="text-gray-800">
                    <strong>Exploring GANs, VAEs, and Neural Networks:</strong>{' '}
                    Uncover the power of these advanced AI models in creating
                    generative art and AI-enhanced music.
                  </p>
                </li>
                <li className="flex items-start gap-4 rounded-xl bg-[#d3d7df] p-4 shadow-2xl">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full text-lg font-bold">
                    3.
                  </div>
                  <p className="text-gray-800">
                    <strong>Hands-On Demos with Innovative Tools:</strong> Watch
                    AI-driven tools in action as our experts guide you through
                    live demos in art and music.
                  </p>
                </li>
                <li className="flex items-start gap-4 rounded-xl bg-[#d3d7df] p-4 shadow-2xl">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full text-lg font-bold">
                    4.
                  </div>
                  <p className="text-gray-800">
                    <strong>Insights from Industry Leaders:</strong> Learn from
                    Akhil Vydyula experienced data scientists who’ll inspire and
                    support your projects.
                  </p>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-center">
              <img
                src="/image-dm/background-form.jpeg"
                alt="Generative AI Workshop"
                className="h-auto max-w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-6 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-center font-[Poppins] text-3xl font-extrabold uppercase tracking-wide text-transparent drop-shadow-lg md:text-5xl">
            <span className="block">Meet your Mentor</span>
          </h2>
          <p className="mb-12 text-xl leading-relaxed">
            Get ready to learn from industry experts! Our mentors bring a wealth
            of knowledge and experience to help guide you through the webinar.
            Here are the amazing individuals you will be learning from.
          </p>
          <div className="flex justify-center">
            <div className="mentor-card w-80 p-6 text-center">
              <img
                src="/image-dm/6.png"
                alt="Mentor 1"
                className="h-76 mx-auto mb-4 w-96"
              />
              <h3 className="mb-2 text-2xl font-bold">Akhil Vydyula</h3>
              <p className="text-lg text-gray-500">Senior Data Scientist</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-extrabold"></h2>
          <h2 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-center font-[Poppins] text-3xl font-extrabold tracking-wide text-transparent drop-shadow-lg md:text-5xl">
            <span className="block">
              This isn’t your average webinar, it’s a creative journey. Here’s
              what awaits you
            </span>
          </h2>
          <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-lg bg-gray-800 p-6 text-left shadow-lg">
              <FontAwesomeIcon
                icon={faBook}
                className="mb-4 text-5xl text-yellow-300"
              />
              <h3 className="mb-2 text-xl font-semibold text-white">
                Free E-Books & Guides
              </h3>
              <p className="text-gray-300">
                Receive exclusive resources covering everything from Generative
                AI basics to advanced techniques in AI-powered art and music.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-lg bg-gray-800 p-6 text-left shadow-lg">
              <FontAwesomeIcon
                icon={faTags}
                className="mb-4 text-5xl text-yellow-300"
              />
              <h3 className="mb-2 text-xl font-semibold text-white">
                Discounts on Premium AI Tools
              </h3>
              <p className="text-gray-300">
                Get special rates on leading AI software to jumpstart your
                journey without breaking the bank.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-lg bg-gray-800 p-6 text-left shadow-lg">
              <FontAwesomeIcon
                icon={faCertificate}
                className="mb-4 text-5xl text-yellow-300"
              />
              <h3 className="mb-2 text-xl font-semibold text-white">
                Digital Certificates of Participation
              </h3>
              <p className="text-gray-300">
                Earn a certificate to showcase your new skills—perfect for your
                resume or LinkedIn.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-lg bg-gray-800 p-6 text-left shadow-lg">
              <FontAwesomeIcon
                icon={faGift}
                className="mb-4 text-5xl text-yellow-300"
              />
              <h3 className="mb-2 text-xl font-semibold text-white">
                Exclusive Merchandise
              </h3>
              <p className="text-gray-300">
                Selected participants will receive AI-themed goodies, including
                notebooks and creative kits.
              </p>
            </div>
            <div className="rounded-lg bg-gray-800 p-6 text-left shadow-lg">
              <FontAwesomeIcon
                icon={faBrain}
                className="mb-4 text-5xl text-yellow-400"
              />
              <h3 className="mb-2 text-xl font-semibold text-white">
                Generative AI in Art & Music
              </h3>
              <p className="text-gray-300">
                Gain hands-on experience in using Generative AI tools for
                creating art and music. Participants will leave with the skills
                to apply AI techniques in their own creative projects.
              </p>
            </div>

            {/* Card 5 */}
            <div className="rounded-lg bg-gray-800 p-6 text-left shadow-lg">
              <FontAwesomeIcon
                icon={faFolderOpen}
                className="mb-4 text-5xl text-yellow-300"
              />
              <h3 className="mb-2 text-xl font-semibold text-white">
                Post-Workshop Resources
              </h3>
              <p className="text-gray-300">
                Keep the momentum going with access to workshop recordings,
                templates, and extra learning materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="flex items-center justify-center">
          <a href="#registration-form">
            <button className="hover:animate-gradient-xy relative z-10 h-[3em] w-[9em] cursor-pointer rounded-[30px] bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] text-center text-[16px] font-bold text-white before:absolute before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:-top-[5px] before:-z-10 before:rounded-[35px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:transition-all before:duration-[1s] before:ease-in-out before:content-[''] hover:bg-[length:100%] before:hover:bg-[length:10%] before:hover:blur-xl focus:ring-violet-700 active:bg-violet-700">
              Register Now
            </button>
          </a>
        </div>
      </section>
      <Footer></Footer>
    </main>
  )
}

export default Page
