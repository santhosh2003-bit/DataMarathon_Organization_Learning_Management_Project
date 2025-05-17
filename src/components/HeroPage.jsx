import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { Button } from '@/components/Button'
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaFileExcel,
  FaDocker,
  FaGitAlt,
  FaAws,
  FaSalesforce,
  FaJs,
  FaBootstrap,
} from 'react-icons/fa'
import {
  SiSpring,
  SiJunit5,
  SiSimpleanalytics,
  SiNumpy,
  SiTerraform,
  SiSpringboot,
  Si365Datascience,
} from 'react-icons/si'
import { DiMysql } from 'react-icons/di'
import { FcStatistics } from 'react-icons/fc'
const HeroPage = () => {
  const [fadeInClass, setFadeInClass] = useState('')
  const [index, setIndex] = useState(0)
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const c = [
    { course: 'Data Science' },
    { course: 'Salesforce' },
    { course: 'Spring Boot' },
    { course: 'SAP' },
    { course: 'Development' },
  ]
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeInClass('animate-slideUpfast')
    }, 100) // Delay before starting the animation
    return () => clearTimeout(timer)
  }, [])
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % c.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [c.length])
  const techIcons = [
    {
      icon: <FaReact className="h-6 w-6 md:h-12 md:w-12" />,
      color: 'text-blue-500',
    },
    {
      icon: <FaPython className="h-6 w-6 md:h-12 md:w-12" />,
      color: 'text-green-500',
    },
    {
      icon: <FaJava className="h-6 w-6 md:h-12 md:w-12" />,
      color: 'text-blue-500',
    },
    {
      icon: <FaFileExcel className="h-6 w-6 md:h-12 md:w-12" />,
      color: 'text-green-500',
    },
    {
      icon: <DiMysql className="h-6 w-6 md:h-12 md:w-12" />,
      color: 'text-yellow-500',
    },
    {
      icon: <FaAws className="h-6 w-6 md:h-12 md:w-12" />,
      color: 'text-orange-500',
    },
    {
      icon: <FaJs className="h-6 w-6 md:h-12 md:w-12" />,
      color: 'text-yellow-400',
    },
    {
      icon: <FaSalesforce className="h-6 w-6 md:h-12 md:w-12" />,
      color: 'text-blue-500',
    },
    {
      icon: <SiSpring className="h-6 w-6 md:h-12 md:w-12" />,
      color: 'text-green-500',
    },
    {
      icon: <FaGitAlt className="h-6 w-6 md:h-12 md:w-12" />,
      color: 'text-yellow-500',
    },
    {
      icon: <SiSpringboot className="h-6 w-6 md:h-12 md:w-12" />,
      color: 'text-orange-500',
    },
    {
      icon: <FaBootstrap className="h-6 w-6 md:h-12 md:w-12" />,
      color: 'text-yellow-400',
    },
    {
      icon: <Si365Datascience className="h-6 w-6 md:h-12 md:w-12" />,
      color: 'text-blue-500',
    },
    {
      icon: <FaDocker className="h-6 w-6 md:h-12 md:w-12" />,
      color: 'text-green-500',
    },
    {
      icon: <SiTerraform className="h-6 w-6 md:h-12 md:w-12" />,
      color: 'text-yellow-500',
    },
    {
      icon: <SiJunit5 className="h-6 w-6 md:h-12 md:w-12" />,
      color: 'text-orange-500',
    },
    {
      icon: <FcStatistics className="h-6 w-6 md:h-12 md:w-12" />,
      color: 'text-yellow-400',
    },
    {
      icon: <SiNumpy className="h-6 w-6 md:h-12 md:w-12" />,
      color: 'text-blue-500',
    },
  ]
  const divideIcons = (icons) => {
    const rows = []
    let start = 0
    let toggle = true // Toggle between 4 and 5 icons per row

    while (start < icons.length) {
      const count = toggle ? 4 : 5
      rows.push(icons.slice(start, start + count))
      start += count
      toggle = !toggle
    }

    return rows
  }
  const rows = divideIcons(techIcons)
  const [highlightedIndex, setHighlightedIndex] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex(Math.floor(Math.random() * rows.length))
    }, 1000)

    return () => clearInterval(interval)
  }, [rows.length])

  return (
    <div className="mx-auto mb-[-40px] flex max-w-7xl flex-col items-center justify-between gap-8 px-4 py-16 sm:px-6 md:flex-row lg:px-8">
      {/* Left Side: Text Content */}
      <div className="w-full text-center md:w-2/3 md:text-left">
        <h1 className="mt-[-50px] max-w-4xl text-start font-display text-3xl font-medium tracking-tight text-blue-900 sm:text-4xl md:mt-20 md:text-6xl">
          Run Your Passion Driven Marathon
          <p className="pt-4 font-display text-xl font-medium tracking-tight text-black md:text-2xl">
            Learn Today, Lead Tomorrow!
          </p>
          <p className="pt-4 font-Poppins text-xl font-bold text-black md:text-4xl">
            Build Your Future in{' '}
            <span className="relative whitespace-nowrap font-bold text-blue-900">
              <span className="relative inline-block max-w-xs text-2xl sm:text-2xl md:text-3xl lg:text-5xl">
                <motion.div className="inline-block max-w-xs text-2xl sm:text-2xl md:text-3xl lg:text-5xl">
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className="absolute left-0 top-0 w-full text-blue-900"
                  >
                    {c[index].course}
                  </motion.span>
                </motion.div>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="block h-[0.58em] w-fit fill-blue-300/70"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                </svg>
              </span>
            </span>{' '}
          </p>
        </h1>
        <p className="max-w-2xl text-start text-sm font-bold tracking-tight text-black md:text-lg">
          Transform your passion for technology into a rewarding career today
        </p>
        <div className="mt-10 flex justify-start gap-x-6">
          <Button
            href={isLoggedIn ? '#courses' : '#courses'}
            className="rounded border bg-blue-600 px-8 py-4 transition-colors duration-300 hover:rounded-2xl hover:bg-blue-900"
          >
            {isLoggedIn ? 'Explore courses' : 'Explore courses'}
          </Button>
        </div>
        .
      </div>

      {/* Right Side: Image */}
      <div className="w-full md:w-1/2">
        <div className="relative mt-10 flex flex-col gap-8">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="z-20 flex justify-center gap-8">
              {row.map((tech, index) => (
                <motion.div
                  key={index}
                  className={`flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-md md:h-20 md:w-20 ${tech.color}`}
                  animate={{
                    scale: highlightedIndex === index ? [1, 1.3, 1] : [1, 1, 1],
                  }}
                  transition={{
                    scale: {
                      duration: 0.5,
                      repeat: highlightedIndex === rowIndex ? Infinity : 0,
                    },
                  }}
                >
                  {tech.icon}
                </motion.div>
              ))}
            </div>
          ))}
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col md:flex-row">

            {/* <div className="rounded-full bg-[#B993D6] opacity-40 blur-2xl md:h-[300px] md:w-[300px]"></div>
            <div className="h-[400px] w-[400px] rounded-full bg-[#96fbc4] opacity-30 blur-3xl"></div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroPage
