'use client';
import { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { MdOutlineAssessment } from 'react-icons/md';
import { FcAbout } from 'react-icons/fc';
import { FaBlog } from 'react-icons/fa';
import { GrDocumentPerformance } from 'react-icons/gr';
import Image from 'next/image';
import Footer from '@/components/Footer';

// Interview questions data
const interviewQuestions = [
  {
    id: 1,
    question: "What are the key skills required for a data scientist role?",
    answer: "A data scientist needs proficiency in: 1) Programming languages like Python and R, 2) Statistical analysis and mathematics, 3) Machine learning algorithms, 4) Data visualization, 5) SQL and database management, 6) Big data technologies, 7) Problem-solving skills, and 8) Communication skills to present findings effectively."
  },
  {
    id: 2,
    question: "How do you handle missing data in a dataset?",
    answer: "There are several approaches to handle missing data: 1) Remove rows with missing values (if data loss is acceptable), 2) Impute with mean/median/mode, 3) Use advanced imputation techniques like KNN or regression, 4) Create a binary column indicating missing values, or 5) Use domain knowledge to fill missing values appropriately."
  },
  {
    id: 3,
    question: "Explain the difference between supervised and unsupervised learning.",
    answer: "Supervised learning uses labeled data where the target variable is known (e.g., classification, regression). The algorithm learns to predict outputs based on input features. Unsupervised learning works with unlabeled data to find hidden patterns or structures (e.g., clustering, dimensionality reduction)."
  },
  {
    id: 4,
    question: "What is overfitting and how can you prevent it?",
    answer: "Overfitting occurs when a model learns the training data too well, including noise, leading to poor generalization. Prevention methods include: 1) Cross-validation, 2) Regularization techniques, 3) Increasing training data, 4) Feature selection, 5) Early stopping, and 6) Reducing model complexity."
  },
  {
    id: 5,
    question: "Describe your approach to a data science project.",
    answer: "A structured approach includes: 1) Problem definition and understanding business objectives, 2) Data collection and cleaning, 3) Exploratory data analysis, 4) Feature engineering and selection, 5) Model selection and training, 6) Model evaluation and tuning, 7) Model deployment, and 8) Monitoring and maintenance."
  }
];

// AI Assistant Modal Component
const AskAI = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[80vh] overflow-y-auto m-4">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Interview Q&A Assistant</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6">
          <div className="mb-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Ask AI Assistant</h3>
            <div className="flex gap-2">
              <input 
                type="text"
                placeholder="Type your interview question here..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                Ask
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Sample Questions & Answers</h3>
            <div className="space-y-6">
              {interviewQuestions.map((item) => (
                <div key={item.id} className="fade-in bg-gray-50 rounded-lg p-6 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">{item.id}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.question}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Floating Button Component
const FloatingButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg transition-all duration-200 flex items-center space-x-2 z-40"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>Ask AI</span>
    </button>
  );
};

export default function InterviewGuide() {
  const [showAskAI, setShowAskAI] = useState(false);

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
      <Header navItems={[
        {
          link: '#courses',
          label: 'Marathons',
          icon: <GrDocumentPerformance style={{ fontSize: '24px' }} />
        },
        {
          link: 'blogs',
          label: 'Blogs', 
          icon: <FaBlog style={{ fontSize: '24px' }} />
        },
        {
          link: '/about',
          label: 'About',
          icon: <FcAbout style={{ fontSize: '24px', color: 'black' }} />
        },
        {
          link: '/registration',
          label: 'Webinars',
          icon: <MdOutlineAssessment style={{ fontSize: '24px' }} />
        }
      ]} />

      {/* Banner Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-in text-center">
            <h1 className="text-4xl font-bold text-white mb-6 mt-6">
              Your Ultimate Interview Preparation Guide
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Ace your next interview with our comprehensive preparation resources and AI-powered guidance
            </p>
            <div className="flex justify-center gap-4">
              <button 
              onClick={() => setShowAskAI(true)}
              className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-blue-50 transition duration-300">
                Try For Free
              </button>
              <button className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-blue-600 transition duration-300">
                Get Started Your Journey
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with AskAI */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-in text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-xl text-gray-600">Comprehensive interview preparation tools and resources</p>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ask Interview Questions</h3>
                <p className="text-gray-600">Get instant answers to your technical interview questions across various domains including Data Science, Web Development, Cloud Computing and more.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Technology Interview Guide</h3>
                <p className="text-gray-600">Access curated interview questions and detailed answers for specific technologies like React, Python, Java, Machine Learning and System Design.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* AI Interview Practice */}
            <div className="fade-in bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Interview Practice</h3>
              <p className="text-gray-600">Practice interviews with our AI-powered system that provides real-time feedback and suggestions</p>
            </div>

            {/* Mock Interviews */}
            <div className="fade-in bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mock Interviews</h3>
              <p className="text-gray-600">Schedule one-on-one mock interviews with industry experts and receive detailed feedback</p>
            </div>

            {/* Interview Resources */}
            <div className="fade-in bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Interview Resources</h3>
              <p className="text-gray-600">Access our extensive library of interview questions, tips, and best practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Interview Repository Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Comprehensive Interview Repository</h2>
            <p className="mt-4 text-xl text-gray-600">Access our extensive collection of interview questions across multiple technologies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Development */}
            <div className="fade-in bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Web Development</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• React.js & Next.js Interview Questions</li>
                <li>• JavaScript Advanced Concepts</li>
                <li>• HTML5 & CSS3 Best Practices</li>
                <li>• Node.js & Express.js Questions</li>
                <li>• Frontend System Design</li>
              </ul>
            </div>

            {/* Data Science & ML */}
            <div className="fade-in bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Science & ML</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Machine Learning Algorithms</li>
                <li>• Statistical Analysis Questions</li>
                <li>• Deep Learning Concepts</li>
                <li>• Python for Data Science</li>
                <li>• SQL & Database Design</li>
              </ul>
            </div>

            {/* Cloud & DevOps */}
            <div className="fade-in bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud & DevOps</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• AWS Services & Architecture</li>
                <li>• Docker & Kubernetes</li>
                <li>• CI/CD Pipeline Questions</li>
                <li>• Infrastructure as Code</li>
                <li>• Cloud Security Concepts</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300">
              Explore Full Repository
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Choose Us?</h2>
            <p className="mt-4 text-xl text-gray-600">We help you succeed in your tech career journey</p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="fade-in bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-8">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Expert-Led Learning</h3>
                <p className="mt-2 text-gray-600">Learn from industry professionals with years of experience in top tech companies. Get insights that textbooks cannot provide.</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>

            <div className="fade-in bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-8">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Personalized Approach</h3>
                <p className="mt-2 text-gray-600">Get customized learning paths and feedback tailored to your skill level and career goals. Progress at your own pace.</p>
                <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300">
                  Start Now
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600">Join thousands of successful developers who transformed their careers with us</p>
            <button className="mt-6 px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105">
              Begin Your Journey
            </button>
          </div>
        </div>
      </section>
      <AskAI isVisible={showAskAI} onClose={() => setShowAskAI(false)} />
      <FloatingButton onClick={() => setShowAskAI(true)} />
      <Footer />
    </div>
  );
}
