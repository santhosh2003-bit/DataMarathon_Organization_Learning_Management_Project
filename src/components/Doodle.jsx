import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
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

const Doodle = () => {
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
    {
      icon: <SiSimpleanalytics className="h-6 w-6 md:h-12 md:w-12" />,
      color: 'text-orange-500',
    },
  ]

  const [highlightedIndex, setHighlightedIndex] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex(Math.floor(Math.random() * techIcons.length))
    }, 1000)

    return () => clearInterval(interval)
  }, [techIcons.length])

  return (
    <div className="text-center text-3xl font-bold text-blue-900 md:mb-6 md:mt-14 md:text-4xl">
      <h2>Tools and Technologies</h2>
      <div className="relative my-2 flex items-center justify-center md:h-[36vh] md:w-full">
        <div className="mt-10 flex flex-wrap justify-center gap-8 md:gap-8">
          {techIcons.map((tech, index) => (
            <motion.div
              key={index}
              className={`flex h-8 w-8 items-center justify-center rounded-lg shadow-md md:h-20 md:w-20 ${tech.color}`}
              animate={{
                y: [0, -20, 0],
                scale: highlightedIndex === index ? [1, 1.3, 1] : [1, 1, 1],
              }}
              transition={{
                y: {
                  duration: 1.5,
                  repeat: Infinity,
                },
                scale: {
                  duration: 0.5,
                  repeat: highlightedIndex === index ? Infinity : 0,
                },
              }}
            >
              {tech.icon}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Doodle
