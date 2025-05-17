'use client';
import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { GrDocumentPerformance } from 'react-icons/gr';
import { FaBlog } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';
import { MdOutlineAssessment } from 'react-icons/md';

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
            Top 10 Startup and Small Business Ideas to Try in 2022 — Analytics and Data Science
          </h1>
          <p className="text-center text-gray-500 text-base">
            “I knew that if I failed I wouldn’t regret that, but I knew the one thing I might regret is not trying.”
          </p>

          <div className="flex justify-center mb-4">
            <Image
              src="/image-dm/blogpost6.jpg"
              alt="Startup Ideas"
              width={400}
              height={250}
              className="rounded-lg object-cover shadow transform transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            Starting a business in the real world is challenging, especially when planning for the long run. Before diving into the top business ideas in data science, let’s explore some insights regarding startup ideas and business case studies that could be beneficial in the future.
          </p>

          <h2 className="text-xl font-medium text-gray-800 mt-4">
            Identifying Business Ideas
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Consider the major challenges you face in daily life. If you identify a problem that technology can solve, you’ve found a potential business idea. The future hinges on how comfortable we are with technology and minimizing our workload. Todays society demands low latency solutions, as patience is increasingly rare.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Research indicates that the potential for youth engagement with mobile technology is far greater than traditional methods, such as reading books. We risk losing valuable knowledge by spending time on social media and entertainment instead of upskilling.
          </p>

          <h2 className="text-xl font-medium text-gray-800 mt-4">
            Interesting Ideas and Business Case Studies
          </h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
            <li><strong>AI-Controlled Healthcare Systems:</strong> AI systems in healthcare are booming, helping doctors diagnose patients and monitor conditions to prevent hospitalizations, ultimately improving life expectancy.</li>
            <li><strong>Industrial Monitoring:</strong> Use AI and machine learning to monitor production machinery in real-time, providing insights for predictive maintenance and improving operational efficiency.</li>
            <li><strong>AI in Marketing:</strong> AI can assess marketing performance and provide automation analytics, giving companies a competitive edge through accurate data utilization and market predictions.</li>
            <li><strong>Edtech Solutions:</strong> Create unique online platforms that facilitate learning through innovative teaching methods, including interactive video content and direct marketing to boost engagement.</li>
            <li><strong>AI-Based SaaS Platforms:</strong> Develop platforms that reskill workforces through real-time insights into skills and labor markets, promoting individual and company-level reskilling.</li>
            <li><strong>Adaptive Learning Platforms:</strong> Implement platforms that personalize learning experiences based on individual strengths and weaknesses, revolutionizing education.</li>
            <li><strong>Customer Dynamics Insights:</strong> Enhance customer relationships by leveraging data analytics to understand customer expectations and improve service delivery.</li>
            <li><strong>AI in Restaurants:</strong> Use chatbots and AI for online ordering systems to streamline takeout and delivery, improving customer experience.</li>
            <li><strong>Business Card Scanner:</strong> Create a business card scanner using OCR technology to automate data entry through image processing, text extraction, and classification.</li>
            <li><strong>Reinforcement Learning for Trading:</strong> Employ reinforcement learning to optimize trading strategies, allowing agents to adapt and improve based on simulated scenarios and outcomes.</li>
          </ul>

          <h2 className="text-xl font-medium text-gray-800 mt-4">
            Conclusion
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            That’s all folks! If you found these ideas interesting and helpful, please upvote and share your comments for more startup solutions and ideas for the new age.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}