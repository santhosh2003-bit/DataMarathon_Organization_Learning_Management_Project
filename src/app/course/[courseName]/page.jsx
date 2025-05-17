'use client'
import React, { useState } from 'react'
import { BsCalendarEvent } from 'react-icons/bs'
import { BsBriefcaseFill } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { BsGraphUp } from 'react-icons/bs'
import { FaBloggerB } from 'react-icons/fa'
import { BsInfoCircleFill } from 'react-icons/bs'
import { BsClipboardCheck } from 'react-icons/bs'
import { BsPersonLinesFill } from 'react-icons/bs'
import { BsCameraVideoFill } from 'react-icons/bs'
import { BsSpeedometer2 } from 'react-icons/bs'
import { BsBriefcase } from 'react-icons/bs'
import { BsClockHistory } from 'react-icons/bs'
import { BsBarChartLineFill } from 'react-icons/bs'
import { BsLightbulbFill } from 'react-icons/bs'
import { BsGearFill } from 'react-icons/bs'
import { BsRocketTakeoff } from 'react-icons/bs'
import { BsBookHalf } from 'react-icons/bs'
import { BsPersonWorkspace } from 'react-icons/bs'
import { BsAward } from 'react-icons/bs'
import { BsSearch } from 'react-icons/bs'
import { BsHeadset } from 'react-icons/bs'
import { BsTrophy } from 'react-icons/bs'
import { BsCloudDownload } from 'react-icons/bs'
import { BsGraphUpArrow } from 'react-icons/bs'
import { BsCheckCircleFill } from 'react-icons/bs'
import Footer from '@/components/Footer'
import { useParams } from 'next/navigation'
import Curriculum from '@/components/Curriculum'

const courseData = {
  data_marathon: {
    title: 'Data Marathon',
    description:
      'Master data science fundamentals through hands-on projects. Learn Python, SQL, machine learning, and data visualization with real-world applications and industry expert guidance.',
    duration: '12 weeks',
    image: '/image-dm/dm-cover.jpg',
    certificateImage2: '/image-dm',
    certificateImage: '/curriculums/Course_Certificate.png',
    skillLevel: 'Beginner to Intermediate',
    effort: '10hrs/Week',
    projects: '6+ Projects',
    skills: [
      'Python Programming',
      'Data Analysis',
      'Machine Learning',
      'SQL & Databases',
      'Data Visualization',
      'Statistical Analysis',
    ],
  },
  salesforce_marathon: {
    title: 'Salesforce Marathon',
    description:
      'Comprehensive Salesforce development training covering admin to advanced development. Master Apex, Lightning, and integration with hands-on experience and certification guidance.',
    duration: '16 weeks',
    image: '/image-dm/salesforce-cover.jpg',
    certificateImage: '/curriculums/Course_Certificate.png',
    skillLevel: 'Intermediate',
    effort: '12hrs/Week',
    projects: '8+ Projects',
    skills: [
      'Apex Development',
      'Lightning Components',
      'Salesforce Admin',
      'Integration',
      'Security',
      'App Development',
    ],
  },
  java_marathon: {
    title: 'Java Marathon',
    description:
      'End-to-end Java development bootcamp covering core Java to modern frameworks. Build enterprise applications with Spring Boot, React, and cloud deployment expertise.',
    duration: '20 weeks',
    image: '/image-dm/java-course.jpeg',
    certificateImage: '/curriculums/Course_Certificate.png',
    skillLevel: 'Intermediate to Advanced',
    effort: '15hrs/Week',
    projects: '10+ Projects',
    skills: [
      'Core Java',
      'Spring Framework',
      'React.js',
      'Microservices',
      'Cloud Deployment',
      'Database Design',
    ],
  },
}

const Page = () => {
  const params = useParams()
  const { courseName } = params
  const [curriculum, setCurriculum] = useState(false)

  const course = courseData[courseName]

  if (!course) {
    return <div>Course not found</div>
  }

  const navItems = [
    {
      link: '#courses',
      label: 'Marathons',
      icon: <BsGraphUp style={{ fontSize: '20px' }} />,
    },
    {
      link: '#blog',
      label: 'Blogs',
      icon: <FaBloggerB style={{ fontSize: '20px' }} />,
    },
    {
      link: '/about',
      label: 'About',
      icon: <BsInfoCircleFill style={{ fontSize: '20px' }} />,
    },
    {
      link: '/registration',
      label: 'Webinars',
      icon: <BsClipboardCheck style={{ fontSize: '20px' }} />,
    },
    {
      link: '/contactPage',
      label: 'Contact',
      icon: <BsPersonLinesFill style={{ fontSize: '20px' }} />,
    },
  ]

  return (
    <>
      <Header navItems={navItems} />
      <div className="flex flex-col gap-4 bg-gradient-to-br from-indigo-50 to-blue-100 p-4 md:gap-6">
        {/* Course Header Section */}
        <section>
          <div className="mt-4 flex flex-col-reverse items-center gap-4 bg-white/90 p-3 shadow-lg sm:mt-6 md:mt-16 md:flex-row md:p-6 lg:mt-24">
            <div className="flex w-full flex-col gap-3 sm:gap-4 md:w-1/2">
              <h1 className="text-lg font-bold text-indigo-900 sm:text-xl md:text-2xl lg:text-3xl">
                {course.title}
              </h1>
              <div className="flex flex-wrap items-center gap-2 sm:gap-x-4">
                <div className="flex items-center gap-x-2 rounded-md bg-gradient-to-r from-blue-50 to-indigo-50 px-2 py-1.5 text-indigo-900 shadow-md sm:px-3">
                  <BsCalendarEvent className="text-base text-indigo-600 sm:text-lg md:text-xl" />
                  <span className="text-xs sm:text-sm md:text-base">
                    {course.duration}
                  </span>
                </div>
                <div className="flex items-center gap-x-2 rounded-md bg-gradient-to-r from-blue-50 to-indigo-50 px-2 py-1.5 text-indigo-900 shadow-md sm:px-3">
                  <BsBriefcaseFill className="text-base text-indigo-600 sm:text-lg md:text-xl" />
                  <span className="text-xs sm:text-sm md:text-base">
                    Placement Support
                  </span>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-700 sm:text-sm md:text-base">
                  {course.description}
                </p>
              </div>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4 md:gap-6">
                <button className="h-10 w-full rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-3 text-xs text-white shadow-md transition duration-300 ease-in-out hover:from-indigo-600 hover:to-blue-600 hover:opacity-90 hover:shadow-lg sm:h-12 sm:w-auto sm:px-4 sm:text-sm md:text-base">
                  Enroll Now
                </button>
                <button
                  className="flex h-10 w-full items-center justify-center gap-2 rounded-md border-2 border-indigo-600 px-3 text-xs text-indigo-600 shadow-md transition duration-300 ease-in-out hover:bg-indigo-100 hover:opacity-90 hover:shadow-lg sm:h-12 sm:w-auto sm:px-4 sm:text-sm md:text-base"
                  onClick={() => setCurriculum(true)}
                >
                  <HiDownload className="text-base transition-colors duration-300 sm:text-lg md:text-xl" />
                  <span>Download Curriculum</span>
                </button>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4 md:gap-12">
                  <div className="flex w-full items-center gap-2 rounded-md bg-blue-300 bg-opacity-35 p-3 px-2 shadow-lg sm:gap-3 sm:px-4 md:w-[40%]">
                    <BsCameraVideoFill className="text-lg text-indigo-600 sm:text-xl md:text-2xl" />
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-600 sm:text-sm">
                        Mode
                      </span>
                      <span className="text-sm font-semibold text-indigo-900 sm:text-base">
                        Live Classes
                      </span>
                    </div>
                  </div>

                  <div className="flex w-full items-center gap-2 rounded-md bg-blue-300 bg-opacity-35 p-3 px-2 shadow-lg sm:gap-3 sm:px-4 md:w-[40%]">
                    <BsSpeedometer2 className="text-lg text-indigo-600 sm:text-xl md:text-2xl" />
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-600 sm:text-sm">
                        Level
                      </span>
                      <span className="text-sm font-semibold text-indigo-900 sm:text-base">
                        {course.skillLevel}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4 md:gap-12">
                  <div className="flex w-full items-center gap-2 rounded-md bg-blue-300 bg-opacity-35 p-3 px-2 shadow-lg sm:gap-3 sm:px-4 md:w-[40%]">
                    <BsClockHistory className="text-lg text-indigo-600 sm:text-xl md:text-2xl" />
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-600 sm:text-sm">
                        Time
                      </span>
                      <span className="text-sm font-semibold text-indigo-900 sm:text-base">
                        {course.effort}
                      </span>
                    </div>
                  </div>

                  <div className="flex w-full items-center gap-2 rounded-md bg-blue-300 bg-opacity-35 p-3 px-2 shadow-lg sm:gap-3 sm:px-4 md:w-[40%]">
                    <BsBriefcase className="text-lg text-indigo-600 sm:text-xl md:text-2xl" />
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-600 sm:text-sm">
                        Projects
                      </span>
                      <span className="text-sm font-semibold text-indigo-900 sm:text-base">
                        {course.projects}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-48 w-full overflow-hidden rounded-lg shadow-xl sm:h-56 md:h-[350px] md:w-1/2 lg:h-[450px]">
              <img
                src={course.image}
                className="h-full w-full"
                alt={courseName}
              />
            </div>
          </div>
        </section>

        {/* Learning Path Section */}
        <section className="rounded-lg bg-white/90 p-3 shadow-lg sm:p-4 md:p-6">
          <h2 className="mb-4 text-center text-xl font-bold text-indigo-900 sm:mb-6 sm:text-2xl md:text-3xl">
            Transform Your Career Through Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Learning
            </span>{' '}
            Roadmap
          </h2>
          <div className="xs:grid-cols-2 grid grid-cols-1 gap-3 sm:gap-4 md:gap-6 lg:grid-cols-5">
            <div className="rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 p-3 shadow-md transition hover:from-blue-100 hover:to-indigo-100 sm:p-4">
              <div className="flex flex-col items-center gap-2 sm:gap-3">
                <BsPersonWorkspace className="text-4xl text-indigo-600 sm:text-5xl md:text-6xl" />
                <p className="text-center text-xs font-medium text-indigo-900 sm:text-sm">
                  Learn from Senior Industry Experts & Tech Leaders
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 p-3 shadow-md transition hover:from-blue-100 hover:to-indigo-100 sm:p-4">
              <div className="flex flex-col items-center gap-2 sm:gap-3">
                <BsLightbulbFill className="text-4xl text-indigo-600 sm:text-5xl md:text-6xl" />
                <p className="text-center text-xs font-medium text-indigo-900 sm:text-sm">
                  Hands-on Assignments & Professional Assessments
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 p-3 shadow-md transition hover:from-blue-100 hover:to-indigo-100 sm:p-4">
              <div className="flex flex-col items-center gap-2 sm:gap-3">
                <BsBarChartLineFill className="text-4xl text-indigo-600 sm:text-5xl md:text-6xl" />
                <p className="text-center text-xs font-medium text-indigo-900 sm:text-sm">
                  Industry-Standard Projects for Your Portfolio
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 p-3 shadow-md transition hover:from-blue-100 hover:to-indigo-100 sm:p-4">
              <div className="flex flex-col items-center gap-2 sm:gap-3">
                <BsHeadset className="text-4xl text-indigo-600 sm:text-5xl md:text-6xl" />
                <p className="text-center text-xs font-medium text-indigo-900 sm:text-sm">
                  Personalized Career Coaching & Interview Mastery
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 p-3 shadow-md transition hover:from-blue-100 hover:to-indigo-100 sm:p-4">
              <div className="flex flex-col items-center gap-2 sm:gap-3">
                <BsTrophy className="text-4xl text-indigo-600 sm:text-5xl md:text-6xl" />
                <p className="text-center text-xs font-medium text-indigo-900 sm:text-sm">
                  Assured Career Advancement & Growth
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="rounded-lg bg-white/90 p-3 shadow-lg sm:p-4 md:p-6">
          <h2 className="mb-4 text-center text-xl font-bold text-indigo-900 sm:mb-5 sm:text-2xl md:mb-6 md:text-3xl">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Skills
            </span>{' '}
            You will Master
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-6">
            {course.skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 rounded-md bg-gradient-to-br from-blue-50 to-indigo-50 px-3 py-2 shadow-md transition hover:from-blue-100 hover:to-indigo-100 sm:gap-3 sm:px-4 sm:py-3"
              >
                <BsBookHalf className="text-lg text-indigo-600 sm:text-xl" />
                <p className="text-xs font-medium text-indigo-900 sm:text-sm md:text-base">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Course Outcomes Section */}
        <section className="rounded-lg bg-white/90 p-3 shadow-lg sm:p-4 md:p-6">
          <h2 className="mb-4 text-center text-xl font-bold text-indigo-900 sm:mb-5 sm:text-2xl md:mb-6 md:text-3xl">
            Course{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Outcomes
            </span>
          </h2>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:gap-6">
            <div className="flex items-start gap-2 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 p-3 shadow-md transition hover:from-blue-100 hover:to-indigo-100 sm:gap-3 sm:p-4 md:gap-4">
              <BsBriefcase className="h-8 w-8 text-indigo-600 sm:h-10 sm:w-10 md:h-12 md:w-12" />
              <div>
                <h3 className="mb-1 text-sm font-semibold text-indigo-900 sm:mb-2 sm:text-base">
                  Transform into an Industry-Ready Professional
                </h3>
                <p className="text-xs text-gray-700 sm:text-sm">
                  Master industry-standard practices and tools in our immersive
                  learning environment, preparing you for real-world challenges
                  and opportunities.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 p-3 shadow-md transition hover:from-blue-100 hover:to-indigo-100 sm:gap-3 sm:p-4 md:gap-4">
              <BsAward className="h-8 w-8 text-indigo-600 sm:h-10 sm:w-10 md:h-12 md:w-12" />
              <div>
                <h3 className="mb-1 text-sm font-semibold text-indigo-900 sm:mb-2 sm:text-base">
                  Earn Industry-Recognized Certification
                </h3>
                <p className="text-xs text-gray-700 sm:text-sm">
                  Receive a prestigious certification upon completion that
                  validates your expertise and significantly enhances your
                  professional credentials.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 p-3 shadow-md transition hover:from-blue-100 hover:to-indigo-100 sm:gap-3 sm:p-4 md:gap-4">
              <BsRocketTakeoff className="h-8 w-8 text-indigo-600 sm:h-10 sm:w-10 md:h-12 md:w-12" />
              <div>
                <h3 className="mb-1 text-sm font-semibold text-indigo-900 sm:mb-2 sm:text-base">
                  Accelerate Your Career Growth
                </h3>
                <p className="text-xs text-gray-700 sm:text-sm">
                  Fast-track your professional journey with skills and knowledge
                  that put you ahead of the competition in todays dynamic job
                  market.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 p-3 shadow-md transition hover:from-blue-100 hover:to-indigo-100 sm:gap-3 sm:p-4 md:gap-4">
              <BsGearFill className="h-8 w-8 text-indigo-600 sm:h-10 sm:w-10 md:h-12 md:w-12" />
              <div>
                <h3 className="mb-1 text-sm font-semibold text-indigo-900 sm:mb-2 sm:text-base">
                  Comprehensive Career Development Support
                </h3>
                <p className="text-xs text-gray-700 sm:text-sm">
                  Benefit from expert guidance in crafting a compelling CV and
                  portfolio that highlights your skills and makes you stand out
                  to potential employers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certification Benefits Section */}
        <section className="rounded-lg bg-white/90 p-3 shadow-lg sm:p-4 md:p-6">
          <h2 className="mb-4 text-center text-xl font-bold text-indigo-900 sm:mb-5 sm:text-2xl md:mb-6 md:text-3xl">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Benefits
            </span>{' '}
            of Getting Certified
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
              <div className="flex items-start gap-3 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 p-3 shadow-md transition hover:from-blue-100 hover:to-indigo-100 sm:gap-4 sm:p-4">
                <BsTrophy className="h-8 w-8 text-indigo-600 sm:h-10 sm:w-10 md:h-12 md:w-12" />
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-indigo-900 sm:mb-2 sm:text-base">
                    Industry-recognized certification
                  </h3>
                  <p className="text-xs text-gray-700 sm:text-sm">
                    Our industry-recognized certifications are more than just
                    badges they are the keys to unlocking new opportunities
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 p-3 shadow-md transition hover:from-blue-100 hover:to-indigo-100 sm:gap-4 sm:p-4">
                <BsCloudDownload className="h-8 w-8 text-indigo-600 sm:h-10 sm:w-10 md:h-12 md:w-12" />
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-indigo-900 sm:mb-2 sm:text-base">
                    Share your certificate easily
                  </h3>
                  <p className="text-xs text-gray-700 sm:text-sm">
                    Easily share your certificate and showcase your
                    accomplishments to the world.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 p-3 shadow-md transition hover:from-blue-100 hover:to-indigo-100 sm:gap-4 sm:p-4">
                <BsGraphUpArrow className="h-8 w-8 text-indigo-600 sm:h-10 sm:w-10 md:h-12 md:w-12" />
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-indigo-900 sm:mb-2 sm:text-base">
                    Boost productivity
                  </h3>
                  <p className="text-xs text-gray-700 sm:text-sm">
                    Chance to increase your productivity
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center sm:mt-6 lg:mt-0">
              <div className="relative h-[200px] w-full max-w-[400px] sm:h-[250px] md:h-[300px]">
                <Image
                  src={course.certificateImage}
                  alt={`${course.title} Certificate Preview`}
                  fill
                  className="rounded-lg object-contain shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Start Your Journey Section */}
        <section className="relative rounded-lg bg-white/90 p-3 shadow-lg sm:p-4 md:p-6 lg:p-8">
          <h2 className="mb-4 text-center text-xl font-bold text-indigo-900 sm:mb-6 sm:text-2xl md:mb-8 md:text-3xl lg:mb-10 lg:text-4xl">
            Start your journey <span className="text-[#FF7262]">today!</span>
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
            {/* Left Section - Benefits */}
            <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
              <div className="flex items-center gap-3 sm:gap-4">
                <BsCameraVideoFill className="h-8 w-8 text-indigo-600 sm:h-10 sm:w-10" />
                <p className="text-sm text-gray-700 sm:text-base md:text-lg">
                  100% Live sessions
                </p>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <BsRocketTakeoff className="h-8 w-8 text-indigo-600 sm:h-10 sm:w-10" />
                <p className="text-sm text-gray-700 sm:text-base md:text-lg">
                  Engaging & Immersive Learning Experiences
                </p>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <BsPersonWorkspace className="h-8 w-8 text-indigo-600 sm:h-10 sm:w-10" />
                <p className="text-sm text-gray-700 sm:text-base md:text-lg">
                  Community to up to date with trends
                </p>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <BsClipboardCheck className="h-8 w-8 text-indigo-600 sm:h-10 sm:w-10" />
                <p className="text-sm text-gray-700 sm:text-base md:text-lg">
                  Industry Simulation Projects & Case Studies
                </p>
              </div>
            </div>

            {/* Right Section - Course Card */}
            <div className="rounded-lg bg-gradient-to-br from-indigo-50 to-blue-50 p-4 shadow-lg sm:p-6 md:p-8">
              <div className="mb-4 flex flex-col items-start justify-between gap-4 sm:mb-6 sm:flex-row sm:items-center sm:gap-0">
                <h3 className="text-lg font-bold text-indigo-900 sm:text-xl md:text-2xl">
                  {course.title}
                </h3>
                <div className="flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1.5 shadow-sm sm:px-4 sm:py-2">
                  <BsClockHistory className="h-4 w-4 text-indigo-600 sm:h-5 sm:w-5" />
                  <span className="text-xs font-medium text-indigo-700 sm:text-sm md:text-base">
                    100+ hours
                  </span>
                </div>
              </div>

              <div className="mb-4 space-y-3 sm:mb-6 sm:space-y-4">
                <div className="flex items-start gap-3">
                  <BsCheckCircleFill className="mt-1 h-4 w-4 text-green-500 sm:h-5 sm:w-5" />
                  <p className="text-sm text-gray-700 sm:text-base">
                    5+ guided projects under a mentorship.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <BsCheckCircleFill className="mt-1 h-4 w-4 text-green-500 sm:h-5 sm:w-5" />
                  <p className="text-sm text-gray-700 sm:text-base">
                    Get a customized career roadmap.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <BsCheckCircleFill className="mt-1 h-4 w-4 text-green-500 sm:h-5 sm:w-5" />
                  <p className="text-sm text-gray-700 sm:text-base">
                    Get a free personal counseling session.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 sm:gap-4">
                <p className="text-lg font-bold text-indigo-900 sm:text-xl md:text-2xl">
                  <span className="mr-2 text-gray-500 line-through">
                    ₹75000
                  </span>
                  ₹----/-
                </p>
                <button className="w-full rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-sm text-white transition duration-300 ease-in-out hover:from-indigo-600 hover:to-blue-600 hover:shadow-lg sm:px-6 sm:py-3 sm:text-base">
                  Start Application
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      {curriculum && <Curriculum setCurriculum={setCurriculum} />}
      <Footer />
    </>
  )
}

export default Page
