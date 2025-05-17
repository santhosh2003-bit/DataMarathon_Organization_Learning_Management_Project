'use client'
import { useEffect, useRef, useState } from 'react'

const featuredTestimonial = {
  body: 'The Entire course was awesome and Akhil sir have covered all the topics with full of ease and understanding from the basic to advance with lots of examples. All the topics from Python, list, tuple to lambda, recursion to descriptive analysis through all the topics of ML & DL and then the projects. Everything was really smooth and fine',
  author: {
    name: 'Aman Verma',
    imageUrl: '/image-dm/linkedin.png',
    logoUrl: 'https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg',
    profileUrl: 'https://www.linkedin.com/in/amanv10/',
  },
}

const testimonials = [
  [
    [
      {
        body: 'Absolutely fantastic! The course was easy to follow, and the practical examples really helped solidify my understanding. The instructor was very responsive to questions and provided valuable feedback. Worth every penny!',
        author: {
          name: 'Kuda',
          imageUrl: '/image-dm/linkedin.png',
          profileUrl: 'https://www.linkedin.com/in/kuda-chibanda/',
        },
      },
      {
        body: 'Excellent teaching skill, knowledgeable Fundamentals.Should learn everyone to this course.',
        author: {
          name: 'Deepak Kumar Prajapati',
          imageUrl: '/image-dm/linkedin.png',
          profileUrl: 'https://www.linkedin.com/in/deepakprajapati07/',
        },
      },
    ],
    [
      {
        body: 'I am really enjoying this course. Its interesting, informative yet simple and understandable in explanation.',
        author: {
          name: 'Garnet Hackett',
          imageUrl: '/image-dm/linkedin.png',
          profileUrl: 'https://www.linkedin.com/in/garnett-hackett-51058186/',
        },
      },
    ],
  ],
  [
    [
      {
        body: 'Fantastic course. Excellent breakdown of the process used by the algorithms rather than just showing how to use them. It really helps to not just watch the coding lectures, but to write it out and see how it can be changed and used. Highly recommend.',
        author: {
          name: 'Pratik Patil',
          imageUrl: '/image-dm/linkedin.png',
          profileUrl: 'https://www.linkedin.com/in/pratik-patil1808/',
        },
      },
    ],
    [
      {
        body: 'This was the most greatest online course! It was really thorough, tidy, and instructive.',
        author: {
          name: 'Chaitanya Singh',
          imageUrl: '/image-dm/linkedin.png',
          profileUrl: 'https://www.linkedin.com/in/chaitanya-singh-9176aa10a/',
        },
      },
      {
        body: 'Well-paced manner. Thorough explaining, sometimes diving deeper for a better understanding, good examples, not-to difficult but educational hands-on, and clear summarizing, thats how you expect a good course to be. And thats what this course will give you!',
        author: {
          name: 'Madison Sanders',
          imageUrl: '/image-dm/linkedin.png',
          profileUrl: 'https://www.linkedin.com/in/madisoncsanders/',
        },
      },
    ],
  ],
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="testimonials" ref={sectionRef}>
      <div className="relative isolate bg-white pb-20 pt-24 sm:pt-10">
        <div className="mx-auto max-w-xl text-center">
          <p className="mt-1 text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
            Hear from Our Learners
          </p>
        </div>
        <div
          className={classNames(
            'mx-auto max-w-7xl px-6 lg:px-8',
            isVisible ? 'animate-slide-up' : '',
          )}
        >
          <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
            {/* Testimonial cards */}
            <figure className="transform rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 transition-transform duration-300 ease-in-out hover:scale-105 sm:col-span-2 xl:col-start-2 xl:row-end-1">
              <blockquote className="p-6 text-lg leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
                <p>{`“${featuredTestimonial.body}”`}</p>
              </blockquote>
              <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
                <a
                  href={featuredTestimonial.author.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt={featuredTestimonial.author.name}
                    src={featuredTestimonial.author.imageUrl}
                    className="h-10 w-10 flex-none rounded-full bg-gray-50"
                  />
                </a>
                <div className="flex-auto">
                  <div className="font-semibold">
                    {featuredTestimonial.author.name}
                  </div>
                </div>
                <img
                  alt=""
                  src={featuredTestimonial.author.logoUrl}
                  className="h-10 w-auto flex-none"
                />
              </figcaption>
            </figure>

            {testimonials.map((columnGroup, columnGroupIdx) => (
              <div
                key={columnGroupIdx}
                className="space-y-8 xl:contents xl:space-y-0"
              >
                {columnGroup.map((column, columnIdx) => (
                  <div
                    key={columnIdx}
                    className={classNames(
                      (columnGroupIdx === 0 && columnIdx === 0) ||
                        (columnGroupIdx === testimonials.length - 1 &&
                          columnIdx === columnGroup.length - 1)
                        ? 'xl:row-span-2'
                        : 'xl:row-start-1',
                      'space-y-8',
                    )}
                  >
                    {column.map((testimonial, testimonialIdx) => (
                      <figure
                        key={testimonialIdx}
                        className="transform rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5 transition-transform duration-300 ease-in-out hover:scale-105"
                      >
                        <blockquote className="text-gray-900">
                          <p>{`“${testimonial.body}”`}</p>
                        </blockquote>
                        <figcaption className="mt-6 flex items-center gap-x-4">
                          <a
                            href={testimonial.author.profileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              alt={testimonial.author.name}
                              src={testimonial.author.imageUrl}
                              className="h-10 w-10 rounded-full bg-gray-50"
                            />
                          </a>
                          <div>
                            <div className="font-semibold">
                              {testimonial.author.name}
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
