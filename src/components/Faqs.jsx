"use client"
import Image from 'next/image';
import { useState } from 'react';
import { Container } from '@/components/Container';
import backgroundImage from '@/images/background-faqs.jpg';

const faqs = [
  [
    {
      question: 'Do I need prior experience to enroll in these courses?',
      answer: 'No prior experience is required for most of our beginner-level courses. However, some advanced courses may have prerequisites that are specified in the course details.',
    },
    {
      question: 'Are the courses self-paced?',
      answer: 'Yes, our courses are self-paced, allowing you to learn at your convenience. Each course has a suggested timeline, but you are free to move at your own pace.',
    },
    {
      question: 'Is there an enrollment fee?',
      answer: 'Yes, each course has an enrollment fee. You can view the specific cost on each course’s page.',
    },
  ],
  [
    {
      question: 'Do I get a certificate after completing a course?',
      answer: 'Yes, upon successfully completing a course, you will receive a certificate that can be shared on LinkedIn and other social media platforms.',
    },
    {
      question: 'What topics are covered in the Data Science courses?',
      answer: 'Our Data Science courses cover a range of topics, including Python programming, data visualization, machine learning, data wrangling, and deep learning, among others with hands-on projects',
    },
    {
      question: 'What support do I receive if I have questions about the course material?',
      answer: 'Our platform provides various support options, including discussion forums, a dedicated course mentor, and access to a support team for resolving any course-related questions',
    },
  ],
  [
    {
      question: ' How do I access my course materials?',
      answer: 'Once you enroll, you can access your course materials through your dashboard. Simply log in and navigate to the "Marathons" section.',
    },
  ]
];

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-10 sm:py-32"
    >
      {/* <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      /> */}
      <Container className="relative">
      <div className="mx-auto mt-[-10px] max-w-2xl text-center">
  <h2
    id="faq-title"
    className="font-display text-3xl tracking-tight text-blue-800 sm:text-4xl"
  >
    Frequently Asked Questions
  </h2>
  <p className="mt-4 text-lg font-bold tracking-tight text-slate-700">
    Got questions about our data science courses or how to get started? Check
    out our FAQs or reach out to us for personalized support—your success is
    our priority!
  </p>
</div>
        <ul
          role="list"
          className="mx-auto mt-16 max-w-2xl lg:max-w-none"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex} className="mb-8">
              <ul role="list" className="flex flex-col gap-y-4">
                {column.map((faq, faqIndex) => (
                  <DropdownItem key={faqIndex} question={faq.question} answer={faq.answer} />
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function DropdownItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow hover:shadow-lg transition-shadow">
      <button
        onClick={toggleDropdown}
        className="flex justify-between w-full text-left font-display text-lg leading-7 text-slate-900 hover:text-blue-600 focus:outline-none"
      >
        {question}
        <span className={`${isOpen ? 'rotate-180' : ''} transition-transform`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <p className="mt-2 text-sm text-slate-700">{answer}</p>
      )}
    </div>
  );
}
