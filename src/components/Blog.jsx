'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/Button'
import Link from 'next/link'

const posts = [
  {
    id: 1,
    title:
      'What’s Student Strategy To Crack any Interview for Data Science roles',
    href: '/dataScienceblog',
    description:
      'If you come from “undergrad” you must know basic foundational and fundamental skills that you will have in data science such as statistics and probability...',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1661930645394-9d46a620a4e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: 'What are the different skills to become a data scientist?',
    href: '/skillsfordatascientist',
    description:
      'There are eight different major types of skills that you should follow and try to possible when we encounter a lot of the skills that we want to enter into...',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    title:
      'Curated List of Top 10 Resources and Learning Notes for Data Scientists & Machine Learning Engineers',
    href: '/mlresources',
    description:
      'When it comes to natural language processing, beginning with the right datasets is key. Quantumstat is the best resource for the field continuously grows...',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg',
  },
]

export default function Blog() {
  return (
    <section id="blog">
      <div className="bg-white py-24 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight mt-[-60px] text-blue-900 sm:text-4xl">
              Explore Our blogs
            </h2>
            
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <motion.article
                key={post.id}
                className="relative flex flex-col overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-blue-100 hover:rounded-2xl"
              >
                <div className="relative w-full">
                  <img
                    alt={post.title}
                    src={post.imageUrl}
                    className="aspect-[16/9] w-full rounded-t-lg bg-gray-100 object-cover"
                  />
                  <div className="absolute inset-0 rounded-t-lg ring-1 ring-inset ring-gray-900/10" />
                </div>

                <div className="flex flex-col justify-between p-6">
                  <div>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {post.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-gray-600">
                      {post.description}
                      <Link href={post.href}>
                        <span className="text-blue-600 font-medium hover:underline cursor-pointer">
                          Read More
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/blogs" type="button" className="button-71">
              Explore All
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
