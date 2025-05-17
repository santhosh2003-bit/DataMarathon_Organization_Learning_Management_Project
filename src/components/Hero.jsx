'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { PrimaryFeatures } from './PrimaryFeatures'
import ChooseChoice from './ChooseChoice'
import Instructors from './instructor'
import Stats from './Stats'
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

export function Hero() {
  // Technology icons configuration
  const techIcons = [
    { icon: <FaReact className="h-6 w-6 md:h-12 md:w-12" />, color: 'text-blue-500' },
    { icon: <FaPython className="h-6 w-6 md:h-12 md:w-12" />, color: 'text-green-500' },
    { icon: <FaJava className="h-6 w-6 md:h-12 md:w-12" />, color: 'text-blue-500' },
    { icon: <FaFileExcel className="h-6 w-6 md:h-12 md:w-12" />, color: 'text-green-500' },
    { icon: <DiMysql className="h-6 w-6 md:h-12 md:w-12" />, color: 'text-yellow-500' },
    { icon: <FaAws className="h-6 w-6 md:h-12 md:w-12" />, color: 'text-orange-500' },
    { icon: <FaJs className="h-6 w-6 md:h-12 md:w-12" />, color: 'text-yellow-400' },
    { icon: <FaSalesforce className="h-6 w-6 md:h-12 md:w-12" />, color: 'text-blue-500' },
    { icon: <SiSpring className="h-6 w-6 md:h-12 md:w-12" />, color: 'text-green-500' },
    { icon: <FaGitAlt className="h-6 w-6 md:h-12 md:w-12" />, color: 'text-yellow-500' },
    { icon: <SiSpringboot className="h-6 w-6 md:h-12 md:w-12" />, color: 'text-orange-500' },
    { icon: <FaBootstrap className="h-6 w-6 md:h-12 md:w-12" />, color: 'text-yellow-400' },
    { icon: <Si365Datascience className="h-6 w-6 md:h-12 md:w-12" />, color: 'text-blue-500' },
    { icon: <FaDocker className="h-6 w-6 md:h-12 md:w-12" />, color: 'text-green-500' },
    { icon: <SiTerraform className="h-6 w-6 md:h-12 md:w-12" />, color: 'text-yellow-500' },
    { icon: <SiJunit5 className="h-6 w-6 md:h-12 md:w-12" />, color: 'text-orange-500' },
    { icon: <FcStatistics className="h-6 w-6 md:h-12 md:w-12" />, color: 'text-yellow-400' },
    { icon: <SiNumpy className="h-6 w-6 md:h-12 md:w-12" />, color: 'text-blue-500' },
  ]

  // Features configuration
  const features = [
    {
      title: 'Expert Instructors',
      description: 'Learn from industry experts with years of experience in their respective fields.',
      icon: '📘',
    },
    {
      title: 'Interactive Learning',
      description: 'Engage with quizzes, assignments, and hands-on projects to reinforce concepts.',
      icon: '🖊️',
    },
    {
      title: 'Career Support',
      description: 'Receive guidance on job placements, resume building, and interview preparation.',
      icon: '🎯',
    },
    {
      title: 'Flexible Learning',
      description: 'Access content anytime, anywhere, and learn at your own pace.',
      icon: '⏰',
    },
  ]

  // State management
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const [fadeInClass, setFadeInClass] = useState('')
  const [course, setCourse] = useState('')
  const [index, setIndex] = useState(0)

  const courses = [
    { course: 'Data Science' },
    { course: 'Salesforce' },
    { course: 'SAP' },
  ]

  // Animation effects
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeInClass('animate-slideUpfast')
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % courses.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [courses.length])

  return (
    <Container className="pb-16 pt-28 text-center lg:pt-28">
      <PrimaryFeatures />

      <section className="bg-white-100 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 mt-[-30px] text-3xl font-bold text-blue-900 md:text-4xl"
          >
            Why Choose Us?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 text-lg text-gray-700"
          >
            Empowering learners with quality education and practical skills for a brighter future.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex w-64 flex-col items-center rounded-lg bg-white p-6 text-center shadow-md transition-all duration-300 hover:scale-105 hover:rounded-2xl hover:bg-blue-50 hover:shadow-2xl"
              >
                <div className="mb-4 text-4xl text-indigo-600 transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold text-blue-900">
                  {feature.title}
                </h3>
                <p className="text-blue-900/80">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  )
}
