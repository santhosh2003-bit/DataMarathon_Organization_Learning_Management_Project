import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const data = [
  {
    title: "Data Marathon",
    description:
      "Master data science with practical projects and industry use cases.",
    mode: "Online",
    duration: "3 months",
    link: "https://courses.skillsmarathon.com/courses/DataMarathon-674c44128305d533407cc168",
    banner: "popular",
  },
  {
    title: "Salesforce Marathon",
    description:
      "Get hands-on with Salesforce development and administration.",
    mode: "Online",
    duration: "5 weeks",
    link: "https://courses.skillsmarathon.com/courses/Salesforce-Marathon-6783bd654d9cbc1739e0a89b",
    banner: "recently launched",
  },
  {
    title: "Java Marathon",
    description: "Deep dive into Java for web and enterprise applications.",
    mode: "Online",
    duration: "8 months",
    link: "https://courses.skillsmarathon.com/courses/Java-Marathon-6783b9d6bb296c76d68020eb",
    banner: "recently launched",
  },
  {
    title: "SAP Marathon",
    description: "Learn SAP tools and gain enterprise-level expertise.",
    mode: "Online",
    duration: "8 weeks",
    link: "#",
    banner: "coming soon",
  },
];

const CoursePop = ({ setActivatedCourse, setCoursePopup }) => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

 
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    setTimeout(() => setIsVisible(true), 1); 
    return () => {
      document.body.classList.remove("overflow-hidden");
      setIsVisible(false); // Reset state on unmount
    };
  }, []);

  return (
    <div
      className="z-200 fixed inset-0 hidden justify-center bg-black bg-opacity-50 md:flex"
      onClick={() => {
        setCoursePopup(false);
        setActivatedCourse(false);
      }}
    >
      <div
        className={`transition-transform transform ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } duration-5 ease-in-out ml-4 mt-[70px] grid grid-cols-3 gap-x-3 gap-y-3 rounded-lg border border-blue-900 bg-white p-4 shadow-md overflow-y-auto`}
        style={{ maxHeight: "400px" }}
        onClick={(e) => e.stopPropagation()}
        
      >

        {data.map((course, index) => (
          <div
            key={index}
            className="relative flex flex-col w-[250px] h-[150px] rounded-md border bg-gray-50 p-3 shadow-sm cursor-pointer"
          >
            {course.mode && (
              <div className="absolute top-1 left-1 px-2 py-0.5 rounded-full bg-gray-200  text-[10px] font-semibold shadow">
                {course.mode}
              </div>
            )}
            {course.duration && (
              <div className="absolute top-1 left-16 px-2 py-0.5 rounded-full bg-gray-200  text-[10px] font-semibold shadow">
                {course.duration}
              </div>
            )}
            {course.banner === "popular" && (
              <div className="absolute top-1 right-1 px-4 py-0.5 rounded-full bg-green-500 text-white text-[10px] font-semibold shadow animate-blink">
                {course.banner}
              </div>
            )}
            {course.banner === "coming soon" && (
              <div className="absolute top-1 right-1 px-2 py-0.5 rounded-full text-[10px] text-white font-semibold shadow animate-highlight">
                {course.banner}
              </div>
            )}
            {course.banner === "recently launched" && (
              <div className="absolute top-1 right-1 px-2 py-0.5 rounded-full bg-blue-500 text-white text-[10px] font-semibold shadow ">
                {course.banner}
              </div>
            )}

            <h2 className="text-lg mt-6 font-extrabold text-blue-900 font-sans">{course.title}</h2>
            <p className="text-xs text-gray-700 mt-2 line-clamp-2">
              {course.description}
            </p>
            {course.link && (
              <button
                onClick={() => router.push(course.link)}
                className="mt-auto w-full text-left px-1 text-blue-900 py-1 text-xs font-bold"
              >
                Explore More
                <span className="ml-2 text-xs">&#x2192;</span>
              </button>
              
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursePop;
