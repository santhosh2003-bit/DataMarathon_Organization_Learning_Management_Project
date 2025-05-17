import { FaLinkedin } from 'react-icons/fa'
//team details
const people = [
  {
    name: 'Priyadarshi Mishra',
    role: 'Co-Founder',
    company: 'Skills Marathon',
    imageUrl: '/image-dm/priyadarshi.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/priyadarshi-mishra-ab3aa55/'
  },
  {
    name: 'Debasis jena',
    role: 'Co-Founder',
    company: 'Skills Marathon', 
    imageUrl: '/image-dm/5.png',
    linkedinUrl:
      'https://www.linkedin.com/in/debasisjenasalesforce/?originalSubdomain=ae',
  },
]

export default function Team() {
  return (
    <div className="px-4 md:px-[10%]">
      <div className="mx-auto text-center lg:mx-0">
        <h2 className="text-center text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl md:mt-10">
          Our team
        </h2>
        <p className="mt-6 text-center text-lg leading-8 text-gray-600">
          We are a dynamic group of individuals who are passionate about what we
          do and dedicated to delivering the best results for our Students.
        </p>
      </div>
      <ul className="mx-auto mt-14 grid grid-cols-1 gap-y-8 place-items-center md:grid-cols-2 md:gap-x-4">
        {people.map((person) => (
          <li
            key={person.name}
            className="flex flex-col items-center justify-center rounded-md border-2 border-blue-900"
          >
            <img
              alt="Team Members"
              src={person.imageUrl}
              className="h-[300px] w-[300px] rounded-md"
            />
            <div className="flex flex-col items-center px-4 py-4 md:px-20">
              <a
                href={person.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3"
              >
                <span className="flex items-center gap-2">
                  <FaLinkedin className="text-blue-600" size={20} />
                  <span className="break-words text-center">{person.name}</span>
                </span>
              </a>
              <p className="text-sm leading-6 text-gray-600">{person.role}</p>
              <p className="text-sm leading-6 text-gray-600">{person.company}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
