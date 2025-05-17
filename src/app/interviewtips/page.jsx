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
            How to Crack 5 Data Science Interviews in a Month — Tips for ML and Data Science Aspirants
          </h1>

        
          <p className="text-center text-gray-500 text-base italic">
            “All you need in this life is ignorance and confidence, and then success is sure.”
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src="/image-dm/blogpost5.jpg"
              alt="Interview Preparation"
              width={400}
              height={250}
              className="rounded-lg object-cover shadow transform transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            With 2.5 years of experience in the IT industry, a passion for coding in Python, and extensive reading on product design solutions, I’ve had the chance to try out various interview strategies. Here’s a breakdown of how I approached five data science interviews in one month and came away with multiple offers.
          </p>

          <h2 className="text-xl font-medium text-gray-800 mt-4">
            How to Get Interview Calls
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Consistently updating your profile on platforms like Naukri with detailed keywords and project-specific tags is essential. Refresh your profile regularly — mornings, afternoons, and evenings. This strategy can significantly increase visibility and the number of interview calls.
          </p>

          <h2 className="text-xl font-medium text-gray-800 mt-4">
            Breakdown of Interview Rounds
          </h2>

        
          <div className="fade-in space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">1st Round: Foundational Skills & Coding</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              The first round usually tests coding abilities and foundational knowledge in machine learning. Here are some common questions:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li className="text-gray-600 text-sm">Explain the bias-variance tradeoff and its impact on decision trees.</li>
              <li className="text-gray-600 text-sm">Write a Python program to find common letters between two strings.</li>
              <li className="text-gray-600 text-sm">Describe how to handle missing values in a DataFrame.</li>
              <li className="text-gray-600 text-sm">What are the advantages of Leaky ReLU over other activation functions?</li>
            </ul>
          </div>

          <div className="fade-in space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">2nd Round: Industry Projects & Scenario-based Questions</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              This round focuses on real-world projects and scenario-based questions. Some examples:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li className="text-gray-600 text-sm">How would you preprocess a column with a large set of categorical values?</li>
              <li className="text-gray-600 text-sm">Implement logistic regression from scratch.</li>
              <li className="text-gray-600 text-sm">Describe your approach to deploying and scaling a machine learning model.</li>
              <li className="text-gray-600 text-sm">Explain the tools you use for data visualization, such as Power BI and Tableau.</li>
            </ul>
          </div>

          <div className="fade-in space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">3rd Round: Technical Deep Dive</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              This round typically involves in-depth technical questions on machine learning tools, AWS SageMaker, and handling model overfitting:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li className="text-gray-600 text-sm">How does SageMaker aid in machine learning workflows?</li>
              <li className="text-gray-600 text-sm">What techniques do you use to handle model overfitting?</li>
              <li className="text-gray-600 text-sm">When would you use mean, median, or mode imputation for missing values?</li>
              <li className="text-gray-600 text-sm">Describe different weight initialization methods in deep learning.</li>
            </ul>
          </div>

          <div className="fade-in space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">4th Round: HR and Final Discussion</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              The final round often focuses on HR questions related to compensation, relocation, and company benefits. This is an opportunity to discuss any additional expectations you may have.
            </p>
          </div>

          <h2 className="text-xl font-medium text-gray-800 mt-4">Conclusion</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Success in interviews comes down to preparation, confidence, and adaptability. Review your concepts thoroughly, practice problems, and remember: if you don’t know an answer, show your willingness to learn rather than simply saying “I don’t know.” Good luck!
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}