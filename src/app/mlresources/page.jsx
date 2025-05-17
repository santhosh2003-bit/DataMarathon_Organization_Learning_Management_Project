'use client';
import { useEffect } from 'react';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { MdOutlineAssessment } from 'react-icons/md';
import { FcAbout } from 'react-icons/fc';
import { FaBlog } from 'react-icons/fa';
import { GrDocumentPerformance } from 'react-icons/gr';

export default function DashboardBlog() {
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
            Curated List of Top 10 Resources and Learning Notes for Data Scientists & Machine Learning Engineers?
          </h1>

         
          <p className="text-center text-gray-500 text-base">
            “Reading is the key that opens doors to many good things in life. Reading shaped my dreams, and more reading helped me make my dreams come true.”
          </p>

          <div className="flex justify-center mb-4">
            <Image
              src="/image-dm/blogpost3.jpg"
              alt="Student Learning"
              width={400}
              height={250}
              className="rounded-lg object-cover shadow transform transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>

          <p className="text-gray-800 text-sm leading-relaxed">
            Exploring online resources is essential for anyone diving into data science and artificial intelligence. Here’s a curated list of valuable resources, from specialized tools to comprehensive learning platforms, designed for students, engineers, and scholars. Discover these top picks to support your journey in data science and AI.
          </p>

          
          <div className="fade-in space-y-3">
            <h2 className="font-bold text-lg text-gray-800">1. John Snow Labs</h2>
            <p>John Snow Labs, an AI and NLP company for healthcare, provides advanced software, models, and datasets for healthcare and life sciences. Their open-source Spark NLP library supports Python, Java, and Scala.</p>
          </div>

          <div className="fade-in space-y-3">
            <h2 className="font-bold text-lg text-gray-800">2. Quantumstat</h2>
            <p>Quantumstat is perfect for building NLP datasets. They offer resources to support ML training by providing high-quality, proprietary datasets.</p>
          </div>

          <div className="fade-in space-y-3">
            <h2 className="font-bold text-lg text-gray-800">3. NYC Data Science</h2>
            <p>NYC Data Science Academy provides projects, forums, and community learning in data science, offering bootcamps and hackathons for hands-on learning.</p>
          </div>

          <div className="fade-in space-y-3">
            <h2 className="font-bold text-lg text-gray-800">4. AIStartUp</h2>
            <p>AIStartUp assists businesses with AI-driven automation, data insights, and customer engagement through deep learning and decision management solutions.</p>
          </div>

          <div className="fade-in space-y-3">
            <h2 className="font-bold text-lg text-gray-800">5. CommonLounge</h2>
            <p>CommonLounge offers interactive courses with real-world projects, videos, and quizzes, making it ideal for flexible, on-the-go learning.</p>
          </div>

          <div className="fade-in space-y-3">
            <h2 className="font-bold text-lg text-gray-800">6. Metis</h2>
            <p>Metis provides self-paced and bootcamp courses to brush up on linear algebra, calculus, probability, and Python. It is ideal for career training in data science.</p>
          </div>

          <div className="fade-in space-y-3">
            <h2 className="font-bold text-lg text-gray-800">7. WiDS Datathon</h2>
            <p>Organized by Stanford University, WiDS Datathon is a data-focused hackathon aimed at solving healthcare data challenges, providing a platform for women in data science.</p>
          </div>

          <div className="fade-in space-y-3">
            <h2 className="font-bold text-lg text-gray-800">8. Dayanand’s Data Science Blog</h2>
            <p>This blog covers data science concepts and resources, making it a great start for beginners.</p>
          </div>

          <div className="fade-in space-y-3">
            <h2 className="font-bold text-lg text-gray-800">9. Made With ML - MLOps</h2>
            <p>Made With ML provides MLOps courses covering CI/CD and continuous training methodologies, streamlining ML model deployment.</p>
          </div>

          <div className="fade-in space-y-3">
            <h2 className="font-bold text-lg text-gray-800">10. Quick Data Science</h2>
            <p>The Quick Data Science blog offers diverse insights on data science topics, perfect for a quick understanding of various data concepts.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}