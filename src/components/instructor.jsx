'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import GoogleIcon from '@/images/logos/google-icon.svg'
import MicrosoftIcon from '@/images/logos/microsoft-icon.svg'
import NetflixIcon from '@/images/logos/netflix-icon.svg'
import AppleIcon from '@/images/logos/apple-icon.svg'
import SwiggyIcon from '@/images/logos/swiggy-icon.svg'
import AdpIcon from '@/images/logos/Adp-icon.svg'
import AmazonIcon from '@/images/logos/amazon-icon.svg'
import DeloitteIcon from '@/images/logos/deloitte-icon.svg'
import AccentureIcon from '@/images/logos/accenture-icon.svg'
import IbmIcon from '@/images/logos/ibm-icon.svg'
import WiproIcon from '@/images/logos/wipro-icon.svg'
import CognizantIcon from '@/images/logos/cognizant-icon.svg'
import ZomatoIcon from '@/images/logos/zomato-icon.svg'
import PwcIcon from '@/images/logos/pwc-icon.svg'
import CapgeminiIcon from '@/images/logos/capgemini-icon.svg'
import HclIcon from '@/images/logos/hcl-icon.svg'
import TechMahindraIcon from '@/images/logos/techmahindra-icon.svg'
import NttDataIcon from '@/images/logos/nttdata-icon.svg'
import DxcIcon from '@/images/logos/dxc-icon.svg'
import LtIcon from '@/images/logos/lt-icon.svg'
import BirlasoftIcon from '@/images/logos/birlasoft-icon.svg'
import ExlIcon from '@/images/logos/exl-icon.svg'
import MusigmaIcon from '@/images/logos/musigma-icon.svg'
import Stats from './Stats'

const logos = [
  { name: 'Adp', logo: AdpIcon },
  { name: 'Amazon', logo: AmazonIcon },
  { name: 'Deloitte', logo: DeloitteIcon },
  { name: 'Accenture', logo: AccentureIcon },
  { name: 'IBM', logo: IbmIcon },
  { name: 'Wipro', logo: WiproIcon },
  { name: 'Cognizant', logo: CognizantIcon },
  { name: 'Zomato', logo: ZomatoIcon },
  { name: 'Pwc', logo: PwcIcon },
  { name: 'Capgemini', logo: CapgeminiIcon },
  { name: 'Hcl', logo: HclIcon },
  { name: 'TechMahindra', logo: TechMahindraIcon },
  { name: 'NttData', logo: NttDataIcon },
  { name: 'Dxc', logo: DxcIcon },
  { name: 'L & T', logo: LtIcon },
  { name: 'Birlasoft', logo: BirlasoftIcon },
  { name: 'EXL', logo: ExlIcon },
  { name: 'Musigma', logo: MusigmaIcon },
]

const duplicatedLogos = [...logos, ...logos, ...logos] 

const instructors = [
  { name: 'Instructor 1', image: '/image-dm/img-1.jpeg' },
  { name: 'Instructor 1', image: '/image-dm/img-6.jpeg' },
  { name: 'Instructor 1', image: '/image-dm/img-3.jpeg' },
  { name: 'Instructor 1', image: '/image-dm/img-4.jpeg' },
  { name: 'Instructor 1', image: '/image-dm/img-7.jpeg' },
  { name: 'Instructor 1', image: '/image-dm/img-5.jpeg' },
  
]


export default function Instructors() {
  return (
    <section id="instructors">
     <div className="max-w-7xl mx-auto py-8 sm:py-16 px-6 lg:px-8"> 
     <h3 className="md:text-4xl text-3xl font-bold mt-[-60px] text-center md:mt-[-80px] text-blue-900 mb-6">Our Featured Instructors</h3>
              
            <div className="max-w-7xl mx-auto mt-6 px-6 lg:px-8 md:mb-[-40px]">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {instructors.map((instructor, index) => (
              <div key={index} className="relative md:w-full ml-2 w-28 md:h-60 h-24">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
            </div>
      </div>
      <Stats/>
            <div className="mt-2 md:mt-20">
            <h3 className="md:text-4xl text-3xl font-bold text-center mt-[-20px] text-blue-900 mb-6">Our Students Placed In</h3>
        <div className="mt-8 w-full overflow-hidden shadow-md sm:rounded-lg">
          <motion.div
            className="flex gap-x-5 sm:gap-x-12 xl:gap-x-16"
            animate={{ x: ['0%', '-200%'] }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            }}
          >
            {duplicatedLogos.map((company, index) => (
              <li key={index} className="flex-shrink-0 list-none">
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={100}
                  height={100}
                  unoptimized
                />
              </li>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
