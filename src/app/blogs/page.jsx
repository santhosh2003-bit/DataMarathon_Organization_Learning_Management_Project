'use client';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';
import { GrDocumentPerformance } from 'react-icons/gr';
import { FaBlog } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';
import { MdOutlineAssessment } from 'react-icons/md';
import Link from 'next/link'
import React from 'react';
import { IoMdContact } from 'react-icons/io';

const posts = [
  {
    id: 1,
    title: 'What’s Student Strategy To Crack any Interview for Data Science roles',
    href: "/dataScienceblog",
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
      'https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3',   
    
  },
  {
    id: 3,
    title: 'Curated List of Top 10 Resources and Learning Notes for Data Scientists & Machine Learning Engineers',
    href: '/mlresources',
    description:
      'Wondering! how we can get resources from online for data science. Most of the people are searching for free resources and content and quality of content...',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg',   
  },
  {
      id: 4,
      title: 'What kind of projects should I put on resume for Data Science?',
      href: '/projectsdatascience',
      description:
        'We are human beings who make “mistakes” and learn from them to seek the right path and understand other processes. In this process you need proper guidance or support to help you prepare for your resume, here are the important steps involved in this blog...',
      imageUrl:
        '/image-dm/blogsfour.jpg',
    },
    {
      id: 5,
      title: 'How do I crack 5 Data Science Interviews in a month — Tips for ML and Data Science Aspirants',
      href: '/interviewtips',
      description:
        'I had a total of 2.5 years of experience in the IT industry. I love to read books and coding, especially python language. I had learned so many blogs on medium for end to end solutions and approaches for each one shared differently that gives me good intuition behind the architecture of product design and solutions...',
      imageUrl:
        '/image-dm/blogfive.jpg',      
    },
    {
      id: 6,
      title: 'Top 10 Startup and Small Business Ideas to Try in 2022 — Analytics and Data Science',
      href: '/businessideas',
      description:
        'The formation of starting a business in the real world is not easy. Moreover when you are planning for the long run it’s more complex and powerful. Before we go head on with top business ideas in data science. ',
      imageUrl:
        '/image-dm/blogsix.jpg',      
    },
]

const navItems =[
  
  {
      link: typeof window !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? '/#courses' : '',
      label: 'Marathons',
      icon: (
        <GrDocumentPerformance
          style={{
            fontSize: '24px',
          }}
        />
      ),
      onClick: typeof window !== 'undefined' && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? () => setShowModal(true) : undefined
    },
  {
    link: '/#blog',
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
  // {
  //   link: '/registration',
  //   label: 'Webinars',
  //   icon: (
  //     <MdOutlineAssessment
  //       style={{
  //         fontSize: '24px',
  //       }}
  //     />
  //   ),
  // },
  {
    link: '/contactPage',
    label: 'Contact',
    icon: (
      <IoMdContact
        style={{
          fontSize: '24px',
        }}
      />
    ),
  },
]


export default function Blog() {
  const router = useRouter();

  const handlePostClick = (href) => {
    if (href && href !== '#') {
      router.push(href);
    }
  };

  return (
    <section id="blog">
      <Header navItems={navItems} />
      <div className="bg-white py-16 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl md:mt-14 font-bold tracking-tight text-indigo-600 sm:text-4xl">From the blog</h2>
          
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <motion.article
                key={post.id}
                className="relative flex flex-col items-start justify-between rounded-lg shadow-lg overflow-hidden bg-white shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-blue-100 hover:rounded-2xl transition-transform transform"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                onClick={() => handlePostClick(post.href)}
              >
                <div className="relative w-full">
                  <img
                    alt={post.title}
                    src={post.imageUrl}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
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
        </div>
      </div>
      <Footer />
    </section>
  );
}