'use client'
import { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faClipboardList,
  faChartLine,
  faUserPlus,
  faUserGraduate,
} from '@fortawesome/free-solid-svg-icons'

const stats = [
  { id: 1, name: 'Packed Assessments', value: 2401, icon: faClipboardList },
  { id: 2, name: 'Skills Covered', value: 67, icon: faChartLine },
  { id: 3, name: 'Registered Users', value: 2699, icon: faUserPlus },
  { id: 4, name: 'Placed Students', value: 121, icon: faUserGraduate },
]

export default function Stats() {
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
    <div className="bg-white md:mt-[-26px] py-24 sm:py-10 mt-[-32px]" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            {/* <h2 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
              Proven Success Stats
            </h2> */}
          </div>
          <dl className="md:mt-16 mt-8 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className="flex flex-col items-center bg-gray-400/5 p-8"
              >
                <FontAwesomeIcon
                  icon={stat.icon}
                  className="mb-4 text-3xl text-blue-900"
                />
                <dd className="mb-2 text-3xl font-semibold tracking-tight text-gray-900">
                  {counts[index].toLocaleString()}+
                </dd>
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  {stat.name}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
