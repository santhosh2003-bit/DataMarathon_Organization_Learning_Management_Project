'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { RxCross2 } from 'react-icons/rx'
import { useRouter } from 'next/navigation'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import React, { useRef } from 'react'
import { GrNext, GrPrevious } from 'react-icons/gr'
const courses = {

  //course details
  DataScience: [
    {
      title: 'Python Programming',
      description: 'Master Python programming from basics to advanced',
      image: '/image-dm/python.jpeg',
      mode: 'Online',
      duration: '4 months',
      instructor: 'Akhil Vydyula',
      // price: '999',
      tools: ['Python', 'SQL', 'Tableau'],
      learnings: 'Data manipulation, visualization, machine learning basics.',
      link: 'https://courses.skillsmarathon.com/courses/Python-674c127555f77749bf403ce4',
    },
    {
      title: 'Statistics',
      description:
        'Grasp core statistical concepts for data-driven decision-making.',
      image: '/image-dm/statistics.jpeg',
      mode: 'Online',
      duration: '4 months',
      instructor: 'Akhil Vydyula',
      // price: '$599',
      tools: ['TensorFlow', 'Keras'],
      learnings: 'Deep learning, neural networks, AI ethics.',
      link: 'https://courses.skillsmarathon.com/courses/Statistics-674c4122ae8aa9132c3fd540',
    },
    {
      title: 'SQL',
      description: 'Learn to query, manipulate, and analyze data with SQL.',
      image: '/image-dm/sql.jpeg',
      mode: 'Online',
      duration: '4 months',
      instructor: 'Akhil Vydyula',
      // price: '$549',
      tools: ['Scikit-learn', 'Pandas'],
      learnings: 'Supervised and unsupervised learning.',
      link: 'https://courses.skillsmarathon.com/courses/SQL-674c30515de44a3659561d27',
    },
    {
      title: 'Machine Learning',
      description:
        'Dive into the world of Machine Learning with hands-on projects.',
      image: '/image-dm/ML.jpeg',
      mode: 'Online',
      duration: '4 months',
      instructor: 'Akhil Vydyula',
      // price: '$549',
      tools: ['Scikit-learn', 'Pandas'],
      learnings: 'Supervised and unsupervised learning.',
      link: 'https://courses.skillsmarathon.com/courses/Machine-Learning-674c26205d26745eebebfc66',
    },
    {
      title: 'Deep Learning',
      description:
        'Dive into neural networks and AI with practical deep learning applications.',
      image: '/image-dm/deep-learning.jpeg',
      mode: 'Online',
      duration: '4 months',
      instructor: 'Akhil Vydyula',
      // price: '$549',
      tools: ['Scikit-learn', 'Pandas'],
      learnings: 'Supervised and unsupervised learning.',
      link: 'https://courses.skillsmarathon.com/courses/Deep-Learning-674c299350210d35c6bd3f46',
    },
    {
      title: 'PowerBI',
      description:
        'Transform data into interactive dashboards and visualizations.',
      image: '/image-dm/powerbi.jpeg',
      mode: 'Online',
      duration: '4 months',
      instructor: 'Akhil Vydyula',
      // price: '$549',
      tools: ['Scikit-learn', 'Pandas'],
      learnings: 'Supervised and unsupervised learning.',
      link: 'https://courses.skillsmarathon.com/courses/Power-BI-674c1fb1b24b8d059f87452a',
    },
    {
      title: 'Excel',
      description:
        'Unlock powerful data analysis tools and automation techniques in Excel.',
      image: '/image-dm/excel.jpeg',
      mode: 'Online',
      duration: '4 months',
      instructor: 'Akhil Vydyula',
      // price: '$549',
      tools: ['Scikit-learn', 'Pandas'],
      learnings: 'Supervised and unsupervised learning.',
      link: 'https://courses.skillsmarathon.com/courses/Excel-674c23efef7f004019668942',
    },
    {
      title: 'Time series Analysis',
      description:
        'Analyze trends and make predictions using time-series data.',
      image: '/image-dm/time-series.jpeg',
      mode: 'Online',
      duration: '4 months',
      instructor: 'Akhil Vydyula',
      // price: '$549',
      tools: ['Scikit-learn', 'Pandas'],
      learnings: 'Supervised and unsupervised learning.',
      link: 'https://courses.skillsmarathon.com/courses/Time-Series-Analysis-674c2e1a520bc35452ac99fd',
    },
  ],
  Salesforce: [
    {
      title: 'Salesforce Baisc to Advanced',
      description: 'Master Salesforce fundamentals and advance to complex features from administration to automation.',
      image: '/image-dm/salesforce.jpeg',
      mode: 'Online',
      duration: '4 months',
      instructor: 'Ankita',
      // price: '$349',
      tools: ['Salesforce Platform', 'Process Builder', 'Lightning App Builder'],
      learnings: 'Data management, security, workflows, reports & dashboards, user administration.',
      link: 'https://courses.skillsmarathon.com/s/store/package/6783bd654d9cbc1739e0a89b/courses/Salesforce-for-Beginners-From-Novice-to-Ninja-1734852415334',
    },
    {
      title: 'Salesforce CPQ',
      description: 'Learn to streamline complex quoting processes and automate pricing calculations with Salesforce CPQ.',
      image: '/image-dm/cpq.jpeg',
      mode: 'Online',
      duration: '4 months',
      instructor: 'Abhishek',
      // price: '$399',
      tools: ['Salesforce CPQ', 'Price Rules', 'Quote Templates'],
      learnings: 'Quote configuration, pricing rules, product bundles, approval workflows.',
      link: 'https://courses.skillsmarathon.com/s/store/package/6783bd654d9cbc1739e0a89b/courses/Master-the-Art-of-Sales-Automation-with-Salesforce-CPQ',
    },
    {
      title: 'Salesforce CRM Analytics',
      description: 'Master data visualization and analytics using Salesforce CRM Analytics (formerly Tableau CRM).',
      image: '/image-dm/crm.jpeg',
      mode: 'Online',
      duration: '4 months',
      instructor: 'Debasis Jena',
      // price: '$499',
      tools: ['CRM Analytics Studio', 'Data Manager', 'Dashboard Designer'],
      learnings: 'Data preparation, dashboard creation, predictive analytics, Einstein Discovery.',
      link: 'https://courses.skillsmarathon.com/s/store/package/6783bd654d9cbc1739e0a89b/courses/Salesforce-CRM-Analytics-Tableau-CRMEinstein-Analytics',
    },
    {
      title: 'Lightning Web Components',
      description: 'Build modern, responsive web components for Salesforce Lightning Experience using LWC framework.',
      image: '/image-dm/lightningweb.jpeg',
      mode: 'Online',
      duration: '4 months',
      instructor: 'Debasis Jena',
      // price: '$349',
      tools: ['JavaScript', 'HTML', 'CSS', 'Lightning Design System'],
      learnings: 'Component development, event handling, data binding, custom styling.',
      link: 'https://courses.skillsmarathon.com/s/store/package/6783bd654d9cbc1739e0a89b/courses/Be-Master-in-Salesforce-Lightning-web-component',
    },
    {
      title: 'Salesforce Integration',
      description: 'Learn to integrate Salesforce with external systems using various integration patterns and tools.',
      image: '/image-dm/integration.jpeg',
      mode: 'Online',
      duration: '4 months',
      instructor: 'Debasis Jena',
      // price: '$349',
      tools: ['REST API', 'SOAP API', 'Mulesoft', 'Integration Patterns'],
      learnings: 'API development, middleware integration, data synchronization, error handling.',
      link: 'https://courses.skillsmarathon.com/s/store/package/6783bd654d9cbc1739e0a89b/courses/Be-Master-in-Salesforce-Integration-',
    },
  ],
  Java: [
    {
      title: 'Basic Java for beginners',
      description: 'Learn core Java concepts including OOP, data types, control flow, and basic programming fundamentals.',
      image: '/image-dm/java-basic.jpeg', 
      mode: 'Online',
      duration: '4 months',
      instructor: 'Ranjan Pandey',
      // price: '$399',
      tools: ['Eclipse IDE', 'JDK'],
      learnings: 'Java syntax, OOPS concepts, exception handling, collections.',
      link: 'https://courses.skillsmarathon.com/s/store/package/6783b9d6bb296c76d68020eb/courses/Zero-to-Hero-Java-Course-for-Beginners-with-Capstone-Project',
    },
    {
      title: 'Springboot with Spring Framework',
      description: 'Build enterprise applications using Spring Boot and Spring Framework.',
      image: '/image-dm/springboot-advance.jpeg',
      mode: 'Online', 
      duration: '4 months',
      instructor: 'gauttam sonkamble',
      // price: '$499',
      tools: ['Spring Boot', 'Spring Framework', 'Maven'],
      learnings: 'Spring Core, Spring MVC, Spring Data JPA, REST APIs.',
      link: 'https://courses.skillsmarathon.com/s/store/package/6783b9d6bb296c76d68020eb/courses/Spring-Boot-with-Spring-Framework',
    },
    {
      title: 'Master Advanced Java',
      description: 'Deep dive into advanced Java concepts and enterprise application development.',
      image: '/image-dm/java-advance.jpeg',
      mode: 'Online',
      duration: '4 months', 
      instructor: 'Ranjan Pandey',
      // price: '$499',
      tools: ['Java EE', 'Hibernate', 'Spring'],
      learnings: 'Multithreading, networking, design patterns, enterprise patterns.',
      link: 'https://courses.skillsmarathon.com/s/store/package/6783b9d6bb296c76d68020eb/courses/Practical-Java-8-Mastery-Course',
    },
    {
      title: 'JUnit with spring boot',
      description: 'Learn automated testing for Spring Boot applications using JUnit framework.',
      image: '/image-dm/springboot-intermediate.jpeg',
      mode: 'Online',
      duration: '4 months',
      instructor: 'Naga Sreenu',
      // price: '$349',
      tools: ['JUnit 5', 'Mockito', 'Spring Test'],
      learnings: 'Unit testing, integration testing, mocking, test-driven development.',
      link: 'https://courses.skillsmarathon.com/s/store/package/6783b9d6bb296c76d68020eb/courses/Master-Java-unit-testing-with-Spring-boot-and-Mockito',
    },
    {
      title: 'Microservices Fundamentals',
      description: 'Learn to build scalable and resilient microservices architectures using Spring Cloud and related technologies.',
      image: '/image-dm/java-basic.jpeg',
      mode: 'Online',
      duration: '4 months',
      instructor: 'Naga Sreenu',
      // price: '$349',
      tools: ['Spring Cloud', 'Docker', 'Kubernetes', 'API Gateway'],
      learnings: 'Unit testing, integration testing, mocking, test-driven development.',
      link: 'https://courses.skillsmarathon.com/s/store/package/6783b9d6bb296c76d68020eb/courses/Begin-with-Microservices',
    },
    {
      title: 'GenAi for dynamic Java',
      description: 'Implement AI and machine learning capabilities in Java applications with ChatGPT.',
      image: '/image-dm/java-intermediate.jpeg',
      mode: 'Online',
      duration: '4 months',
      instructor: 'Hari',
      // price: '$499',
      tools: ['DL4J', 'TensorFlow Java', 'Weka'],
      learnings: 'AI algorithms, neural networks, machine learning integration.',
      link: 'https://courses.skillsmarathon.com/s/store/package/6783b9d6bb296c76d68020eb/courses/Generative-AI-for-Dynamic-Java-Web-Applications-with-ChatGPT',
    },
    {
      title: 'Master Java SpringBoot',
      description: 'Advanced Spring Boot development with enterprise-grade features' +
        ' and microservices architecture.',
      image: '/image-dm/springboot-intermediate.jpeg',
      mode: 'Online',
      duration: '4 months',
      instructor: 'Ranjan Pandey',
      // price: '$499',
      tools: ['Spring Boot', 'Docker', 'Kubernetes'],
      learnings: 'Microservices, cloud deployment, security, monitoring.',
      link: 'https://courses.skillsmarathon.com/s/store/package/6783b9d6bb296c76d68020eb/courses/Zero-to-Hero-Java-SpringBoot--JPA-Mastery-with-Real-Project',
    },
    {
      title: 'Practical Junit and Mockito testing',
      description: 'Comprehensive software testing using JUnit and Mockito frameworks.',
      image: '/image-dm/springboot-basic.jpeg',
      mode: 'Online',
      duration: '4 months',
      instructor: 'Ranjan Pandey',
      // price: '$499',
      tools: ['JUnit', 'Mockito', 'AssertJ'],
      learnings: 'Test automation, mocking, test coverage, CI/CD integration.',
      link: 'https://courses.skillsmarathon.com/s/store/package/6783b9d6bb296c76d68020eb/courses/Practical-Junit--Mockito-Test-with-Java-SpringBoot--JPA-1735286040156',
    },
  ],

  SAP: [
    {
      title: 'SAP FICO',
      description:
        'Understand SAP Financial Accounting and Controlling (FICO) modules.',
      image: '/image-dm/sap-card.webp',
      mode: 'Online',
      duration: '4 months',
      instructor: 'Prashun Shetty',
      // price: '$599',
      tools: ['SAP FICO Module'],
      learnings: 'Financial reporting, cost control.',
    },
    {
      title: 'SAP HANA',
      description: 'Learn about the SAP HANA platform.',
      image: '/image-dm/sap.webp',
      mode: 'Online',
      duration: '4 months',
      instructor: 'Prashun Shetty',
      // price: '$649',
      tools: ['SAP HANA Studio'],
      learnings: 'Data modeling, real-time analytics.',
    },
    {
      title: 'SAP SCM',
      description: 'Master the SAP Supply Chain Management module.',
      image: '/image-dm/sap_3.jpg',
      mode: 'Online',
      duration: '4 months',
      instructor: 'Prashun Shetty',
      // price: '$579',
      tools: ['SAP SCM Module'],
      learnings: 'Logistics, planning, and execution.',
    },
  ],
}

export function PrimaryFeatures() {
  const [selectedCourse, setSelectedCourse] = useState('DataScience')
  const [modalData, setModalData] = useState(null)
  const route = useRouter()
  const openModal = (course) => {
    setModalData(course)
  }

  const closeModal = () => {
    setModalData(null)
  }
  const carouselRef = useRef(null)

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -350,
        behavior: 'smooth',
      })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 350,
        behavior: 'smooth',
      })
    }
  }
  return (
    <section
      id="courses"
      aria-label="Features for running your books"
      className="bg-white-700 sm:py-22 relative overflow-hidden pb-10 md:pt-[-30px]"
    >
      <div className="relative">
        <div className="mt-2 max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="text-left font-Poppins text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-4xl">
            Get started with{' '}
            <span className="text-blue-900">Skills Marathon</span>
          </h2>
        </div>
        <div className="mt-12 flex flex-wrap justify-start gap-4 border-b-2">
          {Object.keys(courses).map((course) => (
            <div key={course} className="relative">
              {/* "Coming Soon" image for SAP course */}
              {(course === 'SAP') && (
                <div
                  className={`absolute right-0 top-[-20px] flex h-[20px] w-full animate-blink items-center justify-center rounded-full bg-transparent md:h-[30px]`}
                >
                  <img
                    src="/image-dm/coming-soon.png"
                    alt="Coming Soon"
                    className={`h-full w-fit object-contain ${course === 'Salesforce' ? 'absolute left-0' : ''}`}
                  />
                </div>
              )}

              <button
                key={course}
                className={clsx(
                  'px-3 py-1 text-sm font-bold transition-colors md:px-4 md:py-2 md:text-lg',
                  selectedCourse === course
                    ? 'border-b-4 border-blue-900 text-blue-900'
                    : 'text-blue-900 hover:bg-gray-200',
                )}
                onClick={() => setSelectedCourse(course)}
              >
                {course === 'DataScience' ? 'Data Science' : course}
              </button>
            </div>
          ))}
        </div>

        <div className="relative mt-16 w-full md:px-12">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 transform px-4 py-3 text-center text-2xl text-blue-900"
          >
            <GrPrevious />
          </button>
          <div
            ref={carouselRef}
            className="hide-scrollbar flex max-h-max w-full flex-row flex-nowrap gap-x-9 overflow-x-auto overflow-y-hidden px-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {courses[selectedCourse].map((course, index) => (
              <div
                key={index}
                className={`flex max-h-max min-w-[350px] max-w-[500px] flex-col items-start justify-between rounded-xl border-blue-900 bg-gray-50 px-6 pt-6 text-start shadow-lg transition-all hover:scale-105 hover:rounded-2xl hover:bg-blue-100 hover:shadow-2xl ${selectedCourse != 'DataScience' && selectedCourse != 'Salesforce' && selectedCourse != 'Java' ? 'cursor-not-allowed opacity-30' : ''}`}
              >
                <div className={`flex-grow`}>
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-40 w-full rounded-t-lg object-cover"
                  />
                  <div className="mt-4 w-full">
                    <h3 className="font-display text-xl font-bold text-blue-900">
                      {course.title}
                    </h3>
                    <p className="mt-2 text-base text-gray-700">
                      {course.description}
                    </p>
                    <ul className="mt-4 space-y-1 text-sm text-gray-600">
                      <li className="flex justify-between">
                        <p className="font-bold">
                          Mode:{' '}
                          <span className="font-normal text-green-600">
                            {course.mode}
                          </span>
                        </p>
                        <p className="font-bold">
                          Duration:{' '}
                          <span className="font-normal">{course.duration}</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Button Section */}
                <div className="mt-auto flex w-full items-center justify-between py-5">
                  <button
                    className={`rounded-md border bg-white px-2 py-3 font-bold ${selectedCourse != 'DataScience' && selectedCourse != 'Salesforce' && selectedCourse != 'Java'? 'cursor-not-allowed' : ''}`}
                    onClick={
                      selectedCourse == 'DataScience' || selectedCourse == 'Salesforce' || selectedCourse == 'Java'
                        ? () => {
                            openModal(course)
                          }
                        : undefined
                    }
                  >
                    View Program
                  </button>
                  <button
                    className={`rounded-md bg-blue-900 px-2 py-3 font-bold text-white ${selectedCourse != 'DataScience' && selectedCourse != 'Salesforce' && selectedCourse != 'Java' ?'cursor-not-allowed opacity-85' : ''}`}
                    onClick={
                     selectedCourse == 'DataScience' || selectedCourse == 'Salesforce' || selectedCourse == 'Java'
                        ? () => {
                            route.push(course.link)
                          }
                        : undefined
                    }
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 transform px-4 py-3 text-center text-2xl text-blue-900"
          >
            <GrNext />
          </button>
        </div>

        <div className="flex items-start justify-center">
          <button
            className="mt-12 flex items-center rounded-md bg-blue-900 px-2 py-3 font-bold text-white"
            onClick={() => {
              route.push('https://courses.skillsmarathon.com/s/store')
            }}
          >
            <span>Explore More </span>

            <MdKeyboardDoubleArrowRight
              style={{
                fontSize: '25px',
              }}
            />
          </button>
        </div>
        {modalData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-6">
            <div className="relative flex h-[600px] w-full flex-col items-start overflow-y-scroll rounded-lg bg-white px-3 py-10 shadow-lg md:h-[500px] md:w-[70%] md:flex-row md:overflow-hidden md:py-4">
              <div className="h-full md:w-[50%] md:border-r-2 md:pr-3">
              <h1 className="relative z-10 mb-4 text-2xl font-bold text-blue-900 md:mb-[-50px] md:text-4xl">
                    {modalData.title}
               </h1>
                <img
                  src={modalData.image}
                  alt={modalData.title}
                  className="h-full w-full rounded-lg object-contain"
                />
              </div>

              <div className="relative grid grid-cols-1 gap-4 px-3 text-start md:w-1/2 md:overflow-y-auto">
                <div>
                  {/* <h1 className="text-2xl font-bold text-blue-900 md:text-4xl">
                    {modalData.title}
                  </h1> */}
                  <div>
                    <p className="font-bold text-gray-700">Description</p>
                    <span className="mt-2 text-gray-700">
                      {modalData.description}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-1 text-sm text-gray-600">
                    <li>
                      <p className="font-bold">
                        Mode:{' '}
                        <span className="font-normal text-green-700">
                          {modalData.mode}
                        </span>
                      </p>
                    </li>
                    <li>
                      <strong>Duration:</strong> {modalData.duration}
                    </li>
                    <li>
                      <strong>Instructor:</strong> {modalData.instructor}
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-blue-900">
                    What You Will Learn
                  </h4>
                  <p className="mt-2 text-gray-700">{modalData.learnings}</p>
                  <h4 className="mt-4 text-lg font-bold text-blue-900">
                    Tools Covered
                  </h4>
                  <ul className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-600">
                    {modalData.tools.map((tool, index) => (
                      <li
                        className="rounded-md bg-blue-100 px-2 py-1 text-blue-900"
                        key={index}
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <button
                    className="mt-6 w-full rounded-lg bg-blue-900 p-2 text-white md:w-fit"
                    onClick={() => {
                      route.push(modalData.link)
                    }}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
              <RxCross2
                style={{
                  fontSize: '24px',
                  color: '#1E3A8A',
                  cursor: 'pointer',
                }}
                className="absolute right-2 top-2"
                onClick={closeModal}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
