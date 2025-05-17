import { motion } from 'framer-motion'
const people = [
  {
    name: 'Sankara Reddy Thamma',
    role: 'Startup Mentor',
    imageUrl: '/image-dm/Sankara_Reddy.png',
    linkedinUrl: 'https://www.linkedin.com/in/sankara-reddy-thamma-18a6a6ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    name: 'Sherif Diab',
    role: 'Founder',
    companyLogoUrl: '/image-dm/coursevox.jpg',
    imageUrl: '/image-dm/Sherif Diab.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/diabsherif/',
  },
  {
    name: 'Prashun Shetty',
    role: 'Founder & CEO',
    companyLogoUrl: '/image-dm/TagSkills.jpg',
    imageUrl: '/image-dm/Prashun Shetty.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/prashun-shetty-41903a39/',
  },
]

export default function Advisors() {
  return (
    <div className="m-2 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl items-center px-2 lg:px-2">
        <div className="mx-full text-center lg:mx-0">
          <div className="mx-auto max-w-full items-center px-2 lg:px-2">
            <div className="mx-full lg:mx-0">
              <motion.h2
                // initial={{ opacity: 1, translateX: '50%' }}
                whileInView={{ opacity: 1, translateX: '0' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="pl-7 text-center text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl"
              >
                Our Advisors
              </motion.h2>
              {/* <motion.p
                // initial={{ opacity: 1, translateX: '-50%' }}
                whileInView={{ opacity: 1, translateX: '0' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="mt-6 text-lg mx-full leading-8 text-gray-600"
              >
                Our advisors, with decades of success in education, technology,
                and business, are visionaries redefining the future of learning.
              </motion.p> */}
            </div>
          </div>

          <motion.ul
            whileInView={{ opacity: 1, translateY: '0', scale: 1 }}
            viewport={{ once: true }}
            role="list"
            className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-2 gap-y-8 text-center sm:grid-cols-2 md:grid-cols-3 md:gap-x-5 md:px-[10%] lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-3"
          >
            {people.map((person) => (
              <li
                key={person.name}
                className="flex flex-col items-center rounded-lg bg-white p-6 shadow-md"
              >
                <img
                  alt=""
                  src={person.imageUrl}
                  className="mb-4 h-36 w-36 rounded-full object-cover"
                />
                <h3 className="flex items-center gap-2 text-lg font-semibold leading-7 tracking-tight text-gray-900">
                  <a
                    href={person.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:underline"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.35c0-1.272-.025-2.908-1.772-2.908-1.774 0-2.046 1.385-2.046 2.815v5.443h-3v-10h2.884v1.367h.041c.402-.761 1.384-1.564 2.847-1.564 3.043 0 3.606 2.002 3.606 4.605v5.592z" />
                    </svg>
                  </a>
                  {person.name}
                </h3>
                <p className="text-sm leading-6 text-gray-600">{person.role}</p>
                <img
                  src={person.companyLogoUrl}
                  // alt={`${person.name}'s company logo`}
                  className="mt-4 h-12 w-auto"
                />
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  )
}
