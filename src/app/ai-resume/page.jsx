'use client'
import { useState } from 'react'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { GrDocumentPerformance } from 'react-icons/gr'
import { FaBlog } from 'react-icons/fa'
import { FcAbout } from 'react-icons/fc'
import { MdOutlineAssessment } from 'react-icons/md'

const navItems = [
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
    link: '#blog',
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
]

export default function CreateResume() {
  return (
    <>
      <Header navItems={navItems} />
      <div className="flex min-h-screen flex-col">
        <main className="flex-grow">
          <section className="bg-gradient-to-r from-blue-500 to-purple-600 py-16">
            <Container className="flex flex-col items-center justify-between lg:flex-row">
              <div className="mb-8 text-white lg:mb-0 lg:w-1/2">
                <h5 className="mb-2 text-4xl font-bold md:text-4xl">
                  AI Resume Builder
                </h5>
                <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                  Craft your resume{' '}
                  <span className="text-yellow-300">with AI Precision</span>
                </h1>
                <p className="mb-8 text-lg">
                  Effortlessly design a <strong>standout</strong> resume with{' '}
                  <span className="text-yellow-300">
                    customized expert content
                  </span>{' '}
                  made just for you!
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <button
                    onClick={() => (window.location.href = '/create-resume')}
                    className="w-full rounded-lg bg-white from-blue-700 to-purple-700 px-6 py-3 font-semibold text-purple-600 transition hover:bg-gradient-to-r hover:text-white sm:w-auto"
                  >
                    Create My Resume
                  </button>
                  <button
                    onClick={() => (window.location.href = '/upload-resume')}
                    className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white bg-transparent px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-purple-600 sm:w-auto"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 38 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="1.25"
                        y="1.25"
                        width="35.5"
                        height="35.5"
                        rx="17.75"
                        fill="white"
                      />
                      <rect
                        x="1.25"
                        y="1.25"
                        width="35.5"
                        height="35.5"
                        rx="17.75"
                        stroke="url(#paint0_linear_1_4687)"
                      >
                        <animateTransform
                          attributeName="transform"
                          attributeType="XML"
                          type="rotate"
                          from="0 19 19"
                          to="360 19 19"
                          dur="4s"
                          repeatCount="indefinite"
                        />
                      </rect>
                      <path
                        className="star1"
                        d="M32.2374 18.4267C32.2436 18.6614 32.0859 18.8961 31.8833 18.9743L27.3154 21.2038L25.1384 25.6236C25.0207 25.8191 24.8191 25.9365 24.5734 25.9365C24.2869 25.9365 24.0791 25.8191 23.9512 25.6236L21.5428 21.2038L16.8582 18.9743C16.6514 18.8961 16.4815 18.6614 16.4754 18.4267C16.4692 18.192 16.6268 17.9574 16.8295 17.8791L21.3974 15.6497L23.5754 11.269C23.8098 10.8387 24.5057 10.8387 24.7626 11.269L27.17 15.6497L31.8546 17.8791C32.0614 17.9574 32.1903 18.192 32.2374 18.4267Z"
                        fill="#9253C2"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1_4687"
                          x1="37"
                          y1="6"
                          x2="6.5"
                          y2="39.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#00B0E0" />
                          <stop offset="0.26" stopColor="#A442F1" />
                          <stop offset="0.565" stopColor="#FF6D05" />
                          <stop offset="0.95" stopColor="#00A659" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Upload With AI
                  </button>
                </div>
              </div>
              <div className="mt-8 lg:mt-0 lg:w-1/2">
                <svg
                  width="553"
                  height="491"
                  viewBox="0 0 553 491"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto w-full max-w-lg"
                >
                  <rect
                    x="50"
                    y="20"
                    width="453"
                    height="451"
                    rx="8"
                    fill="white"
                    stroke="#E5E7EB"
                  />
                  <rect
                    x="80"
                    y="50"
                    width="150"
                    height="20"
                    rx="4"
                    fill="#4F46E5"
                  />
                  <text
                    x="85"
                    y="65"
                    fill="#FFFFFF"
                    fontSize="14"
                    fontFamily="sans-serif"
                  >
                    John Smith
                  </text>
                  <rect
                    x="80"
                    y="80"
                    width="393"
                    height="12"
                    rx="2"
                    fill="#E5E7EB"
                  />
                  <text x="85" y="90" fill="#4B5563" fontSize="10">
                    Software Engineer with 5+ years of experience
                  </text>
                  <rect
                    x="80"
                    y="100"
                    width="393"
                    height="12"
                    rx="2"
                    fill="#E5E7EB"
                  />
                  <text x="85" y="110" fill="#4B5563" fontSize="10">
                    john.smith@email.com | (555) 123-4567
                  </text>
                  <rect
                    x="80"
                    y="140"
                    width="120"
                    height="16"
                    rx="4"
                    fill="#4F46E5"
                  />
                  <text x="85" y="152" fill="#FFFFFF" fontSize="12">
                    Experience
                  </text>
                  <rect
                    x="80"
                    y="166"
                    width="393"
                    height="12"
                    rx="2"
                    fill="#E5E7EB"
                  />
                  <text x="85" y="176" fill="#4B5563" fontSize="10">
                    Senior Software Engineer - Tech Corp
                  </text>
                  <rect
                    x="80"
                    y="186"
                    width="393"
                    height="12"
                    rx="2"
                    fill="#E5E7EB"
                  />
                  <text x="85" y="196" fill="#4B5563" fontSize="10">
                    Led development of scalable web applications
                  </text>
                  <rect
                    x="80"
                    y="226"
                    width="120"
                    height="16"
                    rx="4"
                    fill="#4F46E5"
                  />
                  <text x="85" y="238" fill="#FFFFFF" fontSize="12">
                    Education
                  </text>
                  <rect
                    x="80"
                    y="252"
                    width="393"
                    height="12"
                    rx="2"
                    fill="#E5E7EB"
                  />
                  <text x="85" y="262" fill="#4B5563" fontSize="10">
                    BS Computer Science - University
                  </text>
                  <rect
                    x="80"
                    y="272"
                    width="393"
                    height="12"
                    rx="2"
                    fill="#E5E7EB"
                  />
                  <text x="85" y="282" fill="#4B5563" fontSize="10">
                    Graduated with Honors
                  </text>
                  <rect
                    x="80"
                    y="312"
                    width="120"
                    height="16"
                    rx="4"
                    fill="#4F46E5"
                  />
                  <text x="85" y="324" fill="#FFFFFF" fontSize="12">
                    Skills
                  </text>
                  <rect
                    x="80"
                    y="338"
                    width="393"
                    height="12"
                    rx="2"
                    fill="#E5E7EB"
                  />
                  <text x="85" y="348" fill="#4B5563" fontSize="10">
                    JavaScript, React, Node.js, Python
                  </text>
                  <rect
                    x="80"
                    y="358"
                    width="393"
                    height="12"
                    rx="2"
                    fill="#E5E7EB"
                  />
                  <text x="85" y="368" fill="#4B5563" fontSize="10">
                    AWS, Docker, Git, Agile Development
                  </text>
                  <filter
                    id="shadow"
                    x="0"
                    y="0"
                    width="553"
                    height="491"
                    filterUnits="userSpaceOnUse"
                  >
                    <feDropShadow
                      dx="0"
                      dy="4"
                      stdDeviation="8"
                      flood-opacity="0.1"
                    />
                  </filter>
                </svg>
              </div>
            </Container>
          </section>

          <section className="bg-white py-16">
            <Container className="text-center">
              <h3 className="mb-2 font-semibold text-indigo-900 md:text-4xl">
                How it works
              </h3>
              <h2 className="mb-12 text-3xl font-bold md:text-3xl">
                Create a resume in minutes
              </h2>
              <div className="grid gap-8 md:grid-cols-3">
                {[
                  {
                    icon: '🚀',
                    title: 'Input',
                    description:
                      'Input Your Details: Fill in your personal information, skills, and career preferences in a few easy steps.',
                  },
                  {
                    icon: '🌍',
                    title: 'Customize',
                    description:
                      'AI-Powered Customization: Let our intelligent system create a polished, professional resume tailored to your industry and role',
                  },
                  {
                    icon: '⚡',
                    title: 'Edit',
                    description:
                      'Download & Apply: Review, tweak if needed, and download your resume in minutes—ready to impress recruiters!.',
                  },
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-white p-8 shadow-xl transition-shadow duration-300 hover:shadow-2xl"
                  >
                    <div className="mb-4 text-4xl">{feature.icon}</div>
                    <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          <section className="bg-gray-50 py-12">
            <Container className="flex flex-col items-center justify-between gap-8 lg:flex-row">
              <div className="space-y-6 lg:w-1/2">
                <h2 className="text-3xl font-bold">
                  End the hassle of resume writing.
                </h2>
                <p className="text-lg text-gray-600">
                  Build your resume faster with{' '}
                  <strong>expert-crafted examples</strong> designed for hundreds
                  of roles—just pick and customize!
                </p>
                <button
                  onClick={() => (window.location.href = '/create-resume')} // Add your handler here
                  className="rounded-lg bg-purple-600 px-6 py-2.5 font-semibold text-white transition-colors duration-200 hover:bg-purple-700"
                >
                  Get Started
                </button>
              </div>
              <div className="space-y-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-8 lg:w-1/2">
                <div className="relative">
                  {/* Front Resume SVG */}
                  <svg
                    viewBox="0 0 400 300"
                    className="mx-auto w-full max-w-md -rotate-6 transform"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="300"
                      height="400"
                      rx="8"
                      fill="#f5f3ff"
                      stroke="#c4b5fd"
                      strokeWidth="2"
                    />
                    <rect
                      x="20"
                      y="20"
                      width="260"
                      height="40"
                      rx="4"
                      fill="#ddd6fe"
                    />
                    <rect
                      x="20"
                      y="80"
                      width="260"
                      height="100"
                      rx="4"
                      fill="#ddd6fe"
                    />
                    <rect
                      x="20"
                      y="200"
                      width="120"
                      height="20"
                      rx="4"
                      fill="#8b5cf6"
                    />
                    <rect
                      x="20"
                      y="240"
                      width="260"
                      height="60"
                      rx="4"
                      fill="#ddd6fe"
                    />
                    <text x="40" y="45" fill="#4c1d95" fontSize="14">
                      Professional Experience
                    </text>
                    <text x="40" y="110" fill="#4c1d95" fontSize="12">
                      Skills &amp; Expertise
                    </text>
                    <text x="40" y="215" fill="#ffffff" fontSize="12">
                      Education
                    </text>
                  </svg>

                  {/* Back Resume SVG */}
                  <svg
                    viewBox="0 0 400 300"
                    className="absolute left-4 top-4 -z-10 mx-auto w-full max-w-md"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="300"
                      height="400"
                      rx="8"
                      fill="#ede9fe"
                      stroke="#c4b5fd"
                      strokeWidth="2"
                    />
                    <rect
                      x="20"
                      y="20"
                      width="260"
                      height="40"
                      rx="4"
                      fill="#c4b5fd"
                    />
                    <rect
                      x="20"
                      y="80"
                      width="260"
                      height="100"
                      rx="4"
                      fill="#c4b5fd"
                    />
                    <rect
                      x="20"
                      y="200"
                      width="120"
                      height="20"
                      rx="4"
                      fill="#7c3aed"
                    />
                    <rect
                      x="20"
                      y="240"
                      width="260"
                      height="60"
                      rx="4"
                      fill="#c4b5fd"
                    />
                    <text x="40" y="45" fill="#4c1d95" fontSize="14">
                      Work History
                    </text>
                    <text x="40" y="110" fill="#4c1d95" fontSize="12">
                      Core Competencies
                    </text>
                    <text x="40" y="215" fill="#ffffff" fontSize="12">
                      Certifications
                    </text>
                  </svg>
                </div>

                {/* Decorative Elements */}
                <div className="space-y-4 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-purple-600"></span>
                    <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-600 delay-75"></span>
                    <span className="h-2 w-2 animate-pulse rounded-full bg-violet-600 delay-150"></span>
                  </div>
                  <p className="text-sm font-medium italic text-purple-900">
                    &ldquo;Your professional story, beautifully crafted&rdquo;
                  </p>
                </div>
              </div>
            </Container>
          </section>
        </main>
        <footer className="mt-auto">
          <Footer />
        </footer>
      </div>
    </>
  )
}

// Update the navigation items in the Footer component by adding this to the existing items:
const additionalNavItem = {
  link: '/ai-resume',
  label: 'AI Resume',
  icon: null, // Add appropriate icon if needed
}
