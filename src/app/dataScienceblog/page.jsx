'use client'
import { useEffect, useState } from 'react'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { MdOutlineAssessment } from 'react-icons/md'
import { FcAbout } from 'react-icons/fc'
import { FaBlog } from 'react-icons/fa'
import { GrDocumentPerformance } from 'react-icons/gr'

export default function DashboardBlog() {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1
            entry.target.style.transform = 'translateY(0)'
            entry.target.style.transition =
              'opacity 0.6s ease-out, transform 0.6s ease-out'
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
      },
    )

    sections.forEach((section) => {
      section.style.opacity = 0
      section.style.transform = 'translateY(20px)'
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-white-50 min-h-screen">
      {/* Header */}
      <Header
        navItems={[
          {
            link: '#courses',
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
            link: 'blogs',
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
          {
            link: '/registration',
            label: 'Webinars',
            icon: (
              <MdOutlineAssessment
                style={{
                  fontSize: '24px',
                }}
              />
            ),
          },
        ]}
      />

      <main className="mx-auto max-w-5xl p-6 md:mt-16">
        <div className="fade-in space-y-6 rounded-lg bg-white p-6 shadow">
          <h1 className="mb-4 text-center text-2xl font-semibold text-gray-800">
            What’s Student Strategy To Crack any Interview for Data Science
            roles?
          </h1>
          <p className="text-center text-base italic text-gray-500">
            “Success is liking yourself, liking what you do, and liking how you
            do it.”
          </p>

          <div className="mb-4 flex justify-center">
            <Image
              src="/image-dm/blogpost1.jpg"
              alt="Student Learning"
              width={400}
              height={250}
              className="transform rounded-lg object-cover shadow transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>

          <p className="text-sm leading-relaxed text-gray-600">
            Entering data science requires unique approaches for students from
            undergraduate, graduate, and doctoral backgrounds. Here’s a concise
            guide to interview preparation strategies for each level.
          </p>

          <div className="fade-in space-y-3">
            <h2 className="border-b border-gray-200 pb-1 text-xl font-medium text-gray-800">
              Undergrad Students
            </h2>
            <p className="text-sm leading-relaxed text-gray-600">
              For undergraduates, building a strong foundation in statistics,
              probability, and coding is key. While students come from diverse
              backgrounds, an emphasis on practical problem-solving skills is
              critical.
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li className="text-sm text-gray-600">
                Work on Kaggle and GitHub projects for hands-on experience.
              </li>
              <li className="text-sm text-gray-600">
                Follow structured courses for a clear learning path.
              </li>
              <li className="text-sm text-gray-600">
                Practice with interview prep resources.
              </li>
            </ul>
          </div>
          <div className="fade-in space-y-3">
            <h2 className="border-b border-gray-200 pb-1 text-xl font-medium text-gray-800">
              Graduate Students
            </h2>
            <p className="text-sm leading-relaxed text-gray-600">
              Graduate students bring specialized knowledge that can be highly
              valuable in interviews. They should emphasize this expertise while
              tailoring their preparation for data science roles.
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li className="text-sm text-gray-600">
                Start data science prep early in the program.
              </li>
              <li className="text-sm text-gray-600">
                Refine Python skills for technical interviews.
              </li>
              <li className="text-sm text-gray-600">
                Consider PhD options if interested in research.
              </li>
            </ul>
          </div>

          <div className="fade-in space-y-3">
            <h2 className="border-b border-gray-200 pb-1 text-xl font-medium text-gray-800">
              PhD Students
            </h2>
            <p className="text-sm leading-relaxed text-gray-600">
              PhD students often excel in research, bringing a unique approach
              to problem-solving. Practical industry exposure through
              internships can further develop their skills.
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li className="text-sm text-gray-600">
                Gain hands-on experience with industry internships.
              </li>
              <li className="text-sm text-gray-600">
                Leverage thesis work for real-world applications.
              </li>
              <li className="text-sm text-gray-600">
                Align research with industry challenges for added impact.
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
