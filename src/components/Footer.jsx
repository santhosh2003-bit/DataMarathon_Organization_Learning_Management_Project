'use client'
import { useState } from 'react'

const navigation = {
  courses: [
    {
      name: 'Data Marathon',
      href: 'https://courses.skillsmarathon.com/courses/DataMarathon-674c44128305d533407cc168',
    },
    {
      name: 'Salesforce Marathon',
      href: 'https://courses.skillsmarathon.com/courses/Salesforce-Marathon-6783bd654d9cbc1739e0a89b',
    },
    {
      name: 'Java Marathon',
      href: 'https://courses.skillsmarathon.com/courses/Java-Marathon-6783b9d6bb296c76d68020eb',
    },
    { name: 'SAP Marathon', href: '#' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blogs' },
    { name: 'Hall of Fame', href: '/hall-of-fame' },
    { name: 'Scholarship Test', href: '/scholarship-test' },
    {
      name: 'Join us',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=support@skillsmarathon.com',
    },
  ],
  legal: [
    { name: 'Privacy', href: '#', key: 'privacy' },
    { name: 'Terms', href: '#', key: 'terms' },
  ],
  aitools: [
    { name: 'Resume Builder', href: '/ai-resume' },
    { name: 'Interview preparation', href: '/interview-guide' },
  ],
  social: [
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/company/datamarathon/?viewAsMember=true',
      icon: (props) => (
        <span class="[&>svg]:h-6 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 448 512"
          >
            <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
          </svg>
        </span>
      ),
    },
    {
      name: 'X',
      href: 'https://x.com/datamarathon01',
      icon: (props) => (
        <span class="[&>svg]:h-6 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 512 512"
          >
            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
          </svg>
        </span>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/skillsmarathonofficial/',
      icon: (props) => (
        <span class="[&>svg]:h-6 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 448 512"
          >
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
        </span>
      ),
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@datamarathon-z4t',
      icon: (props) => (
        <span class="[&>svg]:h-6 [&>svg]:w-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 576 512"
          >
            <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
          </svg>
        </span>
      ),
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61564908346271',
      icon: (props) => (
        <span class="[&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 320 512"
          >
            <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
          </svg>
        </span>
      ),
    },
  ],
}

function Modal({ isOpen, onClose, title, content }) {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="max-w-lg rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-lg font-semibold">{title}</h2>
        <p className="text-gray-700">{content}</p>
        <button
          onClick={onClose}
          className="mt-6 rounded bg-gray-800 px-4 py-2 text-white hover:bg-gray-700"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState({ title: '', content: '' })

  const handleLegalClick = (key) => {
    let content = ''
    if (key === 'privacy') {
      content = `
        Privacy Policy
    
        1. Information Collection:
        - Personal Information: We collect data like your name, email address, phone number, and payment details during sign-up or course purchase.
    
        2. Use of Information:
        - Provide, maintain, and improve our platform services.
        - Process transactions and manage user accounts.
    
        3. Sharing of Information:
        - We do not sell user data.
        - Data may be shared with service providers (e.g., payment processing) and legal authorities if required by law.
    
        4. Data Security:
        - We implement industry-standard encryption and security measures to protect user data.
        - Users are encouraged to maintain the confidentiality of their login credentials.
    
        Contact Us: For any questions or concerns, email us at support@skillsmarathon.com.
      `
    } else if (key === 'terms') {
      content = `
        Terms of Service
        1. Acceptance of Terms:
        By using our platform, you agree to these terms. If you do not agree, please discontinue use.
        
        2. User Accounts:
        - Users must provide accurate and truthful information during registration.
        - Account sharing or transfer is strictly prohibited.
    
        3. Course Access and Usage:
        - Purchased courses are accessible as per the agreed terms (e.g., limited or lifetime access).
        - Unauthorized sharing, downloading, or redistribution of course content is not allowed.
    
        4. Payments and Refunds:
        - Payments must be completed using authorized methods on the platform.
        - Refunds are processed according to the platform's refund policy.

        6. Prohibited Activities:
        - Unauthorized access, hacking, or reverse engineering of the platform is prohibited.
        - Posting harmful, defamatory, or offensive content is not allowed.
        Contact Us: For any queries or concerns, email us at support@skillsmarathon.com.
      `
    }

    setModalContent({
      title: key === 'privacy' ? 'Privacy Policy' : 'Terms and Conditions',
      content,
    })
    setModalOpen(true)
  }

  return (
    <footer aria-labelledby="footer-heading" className="bg-gray-900">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-6 sm:pt-24 lg:px-8 lg:pt-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-12">
          <div className="space-y-8">
            <img
              alt="Data-Marathon"
              src="/image-dm/Footer-logo-skills.png"
              className="h-auto w-40"
            />
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-gray-400"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="ml-10 mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Courses
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.courses.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">
                    Legal
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <button
                          onClick={() => handleLegalClick(item.key)}
                          className="text-sm leading-6 text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </button>
                      </li>
                    ))}
                  </ul>

                  <ul role="list" className="mt-6 space-y-4">
                    <h3 className="text-sm font-semibold leading-6 text-white">
                      AI-tools
                    </h3>
                    {navigation.aitools.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; 2024 SkillsMarathon, Inc. All rights reserved.
          </p>
        </div>
      </div>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalContent.title}
        content={modalContent.content}
      />
    </footer>
  )
}
