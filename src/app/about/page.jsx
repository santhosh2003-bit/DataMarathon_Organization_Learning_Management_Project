'use client'
import Footer from '@/components/Footer'
import Team from '@/components/Team'
import { Header } from '@/components/Header'
import Image from 'next/image'
import OurSideImg from '../../images/OurSideImg.jpg'
import { useEffect, useRef, useState } from 'react'
import { RiCustomerService2Fill } from 'react-icons/ri'
import { FaBookReader } from 'react-icons/fa'
import { BsPersonVideo3 } from 'react-icons/bs'
import { GrUserExpert } from 'react-icons/gr'
import { BiVideoRecording } from 'react-icons/bi'
import { GrResources } from 'react-icons/gr'
import { FaBlog } from 'react-icons/fa'
import { MdOutlineAssessment } from 'react-icons/md'
import { GrDocumentPerformance } from 'react-icons/gr'
import { IoMdContact } from 'react-icons/io'
import Advisors from '@/components/Advisors'
import Whatsapp from '@/components/whatsapp'
import React from 'react'

const stats = [
  { label: 'Students Placed', value: '121' },
  { label: 'Courses', value: '48' },
  { label: 'Active Learners', value: '15345' },
]
const values = [
  {
    name: 'Innovation ',
    description:
      'We embrace the future of learning by constantly evolving to provide cutting-edge education that prepares learners for tomorrow’s challenges.',
  },
  {
    name: 'Excellence',
    description:
      'We are dedicated to maintaining the highest standards in our courses, ensuring learners gain comprehensive knowledge and practical skills for real-world success.',
  },
  {
    name: 'Accessibility',
    description:
      'We believe in making education available to everyone, offering flexible and inclusive learning opportunities for all backgrounds',
  },
  {
    name: 'Community',
    description:
      'We foster a collaborative learning environment where learners and educators can grow together, share insights, and support one another.',
  },
  {
    name: 'Empowerment',
    description:
      'Our goal is to inspire learners with the confidence and skills to lead, innovate, and make a meaningful impact in their careers and communities.',
  },
  {
    name: 'Lifelong Learning',
    description:
      'We value continuous personal and professional growth, encouraging our learners to stay curious and committed to expanding their knowledge',
  },
]

const navItems = [
  {
    link:
      typeof window !== 'undefined' &&
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      )
        ? '/#courses'
        : '',

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
      <GrDocumentPerformance
        style={{
          fontSize: '24px',
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

export default function Example() {
  const [counts, setCounts] = useState(stats.map(() => 0))
  const [startCount, setStartCount] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCount(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.5 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (startCount) {
      const duration = 3000
      const frameRate = 60
      const totalFrames = Math.round((duration / 1000) * frameRate)
      let frame = 0

      const timer = setInterval(() => {
        frame++
        if (frame >= totalFrames) {
          clearInterval(timer)
        }

        setCounts(
          stats.map((stat) =>
            Math.min(
              Math.round((stat.value / totalFrames) * frame),
              stat.value,
            ),
          ),
        )
      }, duration / totalFrames)

      return () => clearInterval(timer)
    }
  }, [startCount])
  return (
    <div className="bg-white">
      {/* Header */}
      <Header navItems={navItems}></Header>
      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <div className="overflow-hidden">
            <div className="sm:pt-30 mt-20 md:pt-10 lg:pt-12">
              <div className="relative flex flex-col justify-between md:flex-row lg:mx-0 lg:items-center">
                <div className="w-full max-w-xl px-4 text-justify md:pl-40 lg:shrink-0 xl:max-w-2xl">
                  <h3 className="text-2xl font-bold tracking-tight text-blue-900 md:text-4xl">
                    We are transforming the way people learn and apply
                    technology.
                  </h3>{' '}
                  <br></br>
                  <p className="relative mt-6 leading-8 text-gray-600 sm:max-w-md md:text-lg lg:max-w-none">
                    Our expertly designed curriculum equips learners with
                    practical skills and industry-relevant knowledge.
                  </p>
                </div>
                <div className="ml-3 mt-6 flex w-[364px] items-end justify-center md:h-full md:w-full">
                  <Image
                    src="/image-dm/about-1.jpeg"
                    width={500}
                    height={600}
                    className="h-[400px]"
                    alt="te"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center px-6 sm:mt-0 md:-mt-12 md:flex-row lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-center text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
              Our mission
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-justify text-lg leading-8 text-gray-900">
                  Our mission is to transform the future of education by making
                  advanced technology skills accessible to everyone. As we
                  believe, Education is the most powerful weapon you can use to
                  change the world—we empower individuals to not just learn, but
                  to lead with confidence in a fast-evolving digital world.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image src={OurSideImg} className="w-[450px] md:mb-6 md:mt-24" />
          </div>
        </div>
        <div className="relative top-4 md:px-[10%]">
          <div
            className="flex flex-col items-center gap-x-48 text-black md:flex-row md:pb-16"
            ref={sectionRef}
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="flex w-full flex-col-reverse gap-y-4 bg-blue-900 px-3 py-8 text-center md:rounded-md"
              >
                <dt className="text-base leading-7 text-white">{stat.label}</dt>
                <dd className="text-5xl font-semibold tracking-tight text-white">
                  {counts[index]}{' '}
                  <span className="bg-gradient-to-tr from-yellow-400 to-red-400 bg-clip-text text-transparent">
                    +
                  </span>
                </dd>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-x-[10%] p-4 md:flex-row">
          <div>
            <Image
              src="/image-dm/about-2.jpeg"
              width={500}
              height={600}
              className="h-[500px] w-[500px]"
            />
          </div>
          <div className="grid w-full grid-cols-1 gap-10 rounded-md bg-gray-200 p-7 md:w-[50%] md:grid-cols-2">
            <div className="flex flex-col gap-y-4 rounded-2xl bg-white p-7">
              <FaBookReader
                style={{
                  fontSize: '40px',
                  color: '#1E3A8A',
                }}
              />
              <h1 className="font-sans font-bold">Learn More AnyWhere</h1>
            </div>
            <div className="flex flex-col gap-y-4 rounded-2xl bg-white p-7">
              <BsPersonVideo3
                style={{
                  fontSize: '40px',
                  color: '#1E3A8A',
                }}
              />
              <h1 className="font-sans font-bold">Video Training</h1>
            </div>
            <div className="flex flex-col gap-y-4 rounded-2xl bg-white p-7">
              <GrUserExpert
                style={{
                  fontSize: '40px',
                  color: '#1E3A8A',
                }}
              />
              <h1 className="font-sans font-bold">Expert Teachers</h1>
            </div>
            <div className="flex flex-col gap-y-4 rounded-2xl bg-white p-7">
              <BiVideoRecording
                style={{
                  fontSize: '40px',
                  color: '#1E3A8A',
                }}
              />
              <h1 className="font-sans font-bold">Recorded Sessions</h1>
            </div>
            <div className="flex flex-col gap-y-4 rounded-2xl bg-white p-7">
              <RiCustomerService2Fill
                style={{
                  fontSize: '40px',
                  color: '#1E3A8A',
                }}
              />
              <h1 className="font-sans font-bold">24/7 Strong Support</h1>
            </div>
            <div className="flex flex-col gap-y-4 rounded-2xl bg-white p-7">
              <GrResources
                style={{
                  fontSize: '40px',
                  color: '#1E3A8A',
                }}
              />
              <h1 className="font-sans font-bold">Resource Access</h1>
            </div>
          </div>
        </div>
        {/* Values section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto lg:mx-0">
            <h2 className="text-center text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
              Values That Drive Us Forward
            </h2>
          </div>
          <dl className="relative mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={value.name}
                // className={`${index % 2 == 0 ? 'even_background_animation' : 'odd_background_animation'}`}
              >
                <dt className="font-semibold text-gray-900">{value.name}</dt>
                <dd className="mt-1 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </main>
      <Team></Team>
      <Advisors></Advisors>

      <Footer />
      <Whatsapp />
    </div>
  )
}
