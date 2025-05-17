'use client';
import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { MdOutlineAssessment } from 'react-icons/md';
import { FcAbout } from 'react-icons/fc';
import { FaBlog } from 'react-icons/fa';
import { GrDocumentPerformance } from 'react-icons/gr';

export default function DashboardBlog() {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
          entry.target.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    sections.forEach(section => {
      section.style.opacity = 0;
      section.style.transform = 'translateY(20px)';
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white-50 min-h-screen">
      {/* Header */}
      <Header navItems={[{
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
      },]} />

      
      <main className="max-w-5xl md:mt-16 mx-auto p-6">
       
        <div className="fade-in bg-white rounded-lg shadow p-6 space-y-6">
          
          <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">
            What Kind of Projects Should I Put on My Resume for Data Science?
          </h1>

     
          <p className="text-center text-gray-500 text-base italic">
            “Choose a job you love, and you will never have to work a day in your life.”
          </p>

        
          <div className="flex justify-center mb-4">
            <Image
              src="/image-dm/blogpost4.jpg"
              alt="Resume Preparation"
              width={400}
              height={250}
              className="rounded-lg object-cover shadow transform transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>

        
          <p className="text-gray-600 text-sm leading-relaxed">
            We all make mistakes and learn from them to find the right path. However, proper guidance is essential when preparing your resume. Here are important steps to ensure you impress recruiters and land an interview.
          </p>

          <h2 className="text-xl font-medium text-gray-800 mt-4">
            Preparing for the Long Run
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Prepare yourself for the long haul when applying for jobs. Focus on opportunities that allow you to excel and demonstrate leadership. Understanding trending technologies and business ideas in data science and machine learning, along with regular reading of research papers, is an effective approach.
          </p>

          <h2 className="text-xl font-medium text-gray-800 mt-4">
            Key Features for Your Resume
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Here are some key features to create an impression on recruiters:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li className="text-gray-600 text-sm">Include short notes about yourself and a clear objective statement.</li>
            <li className="text-gray-600 text-sm">Highlight your domain and technology interests, such as text analytics and NLP if applying for an e-commerce data scientist role.</li>
            <li className="text-gray-600 text-sm">Showcase proof of concept (PoC) projects to add value to your resume.</li>
            <li className="text-gray-600 text-sm">List relevant skills and extracurricular activities to demonstrate your active learning.</li>
            <li className="text-gray-600 text-sm">Publish blogs on platforms like Quora or Medium to showcase your work and knowledge.</li>
            <li className="text-gray-600 text-sm">Engage with interviewers by asking insightful questions about business needs.</li>
          </ul>

          <h2 className="text-xl font-medium text-gray-800 mt-4">
            Best Projects to Showcase
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Here are some of the best projects to consider including in your resume:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li className="text-gray-600 text-sm">Sentiment Analysis</li>
            <li className="text-gray-600 text-sm">Time Series Forecasting</li>
            <li className="text-gray-600 text-sm">Face and Voice Recognition</li>
            <li className="text-gray-600 text-sm">Predictive Analytics</li>
            <li className="text-gray-600 text-sm">Fraud Detection</li>
            <li className="text-gray-600 text-sm">Chatbots</li>
            <li className="text-gray-600 text-sm">Price or Trading Analysis Predictions</li>
            <li className="text-gray-600 text-sm">Image Captioning</li>
            <li className="text-gray-600 text-sm">Pose Detection</li>
          </ul>

          <h2 className="text-xl font-medium text-gray-800 mt-4">
            How to Write Projects on Your Resume
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            When it’s time to include projects on your resume, consider the following tips:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li className="text-gray-600 text-sm">Create a section titled “Key Projects” at the end of your resume.</li>
            <li className="text-gray-600 text-sm">Provide a brief sentence highlighting an impressive project.</li>
            <li className="text-gray-600 text-sm">Use the PAR (Problem, Action, Result) formula, action verbs, and accomplishment statements.</li>
            <li className="text-gray-600 text-sm">Mention your job title and employer during the project timeframe.</li>
            <li className="text-gray-600 text-sm">Avoid including irrelevant experiences; focus on quality over quantity.</li>
          </ul>

          <h2 className="text-xl font-medium text-gray-800 mt-4">Conclusion</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            I hope you find these tips helpful for creating a strong resume. Thank you for reading!
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}