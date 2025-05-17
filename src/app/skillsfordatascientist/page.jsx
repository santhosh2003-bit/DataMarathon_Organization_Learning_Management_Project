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
            What are the different skills to become a data scientist?
          </h1>
          <p className="text-center text-gray-500 text-base">
            “A dream does not become reality through magic; it takes sweat,determination, and hard work.”
          </p>

          <div className="flex justify-center mb-4">
            <Image
              src="/image-dm/blogpost2.jpg"
              alt="Student Learning"
              width={400}
              height={250}
              className="rounded-lg object-cover shadow transform transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            Developing data science expertise involves mastering a diverse set of tools and skills. Here, we explore eight essential skills that form the foundation for visualizing, analyzing, and deriving valuable insights from data. This guide covers popular tools like Excel, Power BI, Tableau, and programming languages such as Python, R, and more.
          </p>
          
          <div className="fade-in space-y-3">
            <h2 className="text-lg font-medium text-gray-800 border-b border-gray-200 pb-1">
              Excel
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Excel is essential for statistical analysis and data manipulation, allowing users to create charts, pivot tables, and perform data calculations. It’s widely used for business data visualization due to its accessibility and ease of use.
            </p>
          </div>

          <div className="fade-in space-y-3">
            <h2 className="text-lg font-medium text-gray-800 border-b border-gray-200 pb-1">
              Power BI
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Power BI is a data visualization tool that allows users to connect to multiple data sources, perform data modeling, and create interactive dashboards. It offers tools for managing missing values and supports various visualization types, making it ideal for data-driven decision-making.
            </p>
          </div>

          <div className="fade-in space-y-3">
            <h2 className="text-lg font-medium text-gray-800 border-b border-gray-200 pb-1">
              Tableau
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Tableau shares similar functionality with Power BI and is known for its powerful visualization capabilities. However, it is less commonly used by some businesses due to cost considerations. Tableau is widely appreciated for its intuitive interface and in-depth data storytelling capabilities.
            </p>
          </div>

         
          <div className="fade-in space-y-3">
            <h2 className="text-lg font-medium text-gray-800 border-b border-gray-200 pb-1">
              Python
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Python is the most popular programming language for data science due to its flexibility, vast library ecosystem, and simplicity. It supports complex data modeling, data manipulation, and includes extensive libraries like Pandas, NumPy, and Scikit-Learn, ideal for statistical analysis and machine learning.
            </p>
          </div>

         
          <div className="fade-in space-y-3">
            <h2 className="text-lg font-medium text-gray-800 border-b border-gray-200 pb-1">
              Machine Learning
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Machine learning enables systems to learn from data and improve predictions or classifications over time. This involves feature engineering, data cleaning, and model selection, helping organizations leverage data to make informed decisions and predictions.
            </p>
          </div>

         
          <div className="fade-in space-y-3">
            <h2 className="text-lg font-medium text-gray-800 border-b border-gray-200 pb-1">
              Deep Learning
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Deep learning, a subset of machine learning, utilizes neural networks to perform complex tasks, including image recognition and natural language processing. It imitates human learning processes, making it effective for advanced predictive modeling.
            </p>
          </div>

         
          <div className="fade-in space-y-3">
            <h2 className="text-lg font-medium text-gray-800 border-b border-gray-200 pb-1">
              R Language
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              R is a statistical programming language widely used for data analysis and visualization. It offers extensive statistical packages and is especially useful in academic research and industries where statistical modeling is required.
            </p>
          </div>

          <div className="fade-in space-y-3">
            <h2 className="text-lg font-medium text-gray-800 border-b border-gray-200 pb-1">
              Cloud Environment
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Cloud services like AWS, Google Cloud, and Azure provide scalable solutions for deploying machine learning and deep learning models. They allow data scientists to train complex models with high computational demands efficiently.
            </p>
          </div>
        </div>
      </main>

     
      <Footer />
    </div>
  );
}