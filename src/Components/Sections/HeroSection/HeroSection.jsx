import React from 'react'
import './HeroSection.css'
import { Link } from 'react-router-dom'
import HeroImage from '../../../assets/hero-section.png'
import { CircleCheckBig } from 'lucide-react'
import CountUp from '../../../ReactBits/CountUp/CountUp'
import TextType from '../../../ReactBits/TypeText/TextType'
import Shuffle from '../../../ReactBits/Shuffle/Shuffle'

function HeroSection() {
  return (
    <section className='flex items-center justify-eve hero-section xl:p-10 flex-wrap gap-[10px] h-auto'>
        <div className='flex-1 flex flex-col p-2 gap-[15px] min-w-[250px]'>
            <div className="title">
              <div className='text-[var(--bd-primary)]'>
                <TextType
                    text={['One Bit at a Time']}
                    typingSpeed={75}
                    pauseDuration={5500}
                    showCursor={true}
                    cursorCharacter="_"
                ></TextType>
                {/* <Shuffle
                  text="Hello World"
                  shuffleDirection="right"
                  duration={0.35}
                  animationMode="evenodd"
                  shuffleTimes={1}
                  ease="power3.out"
                  stagger={0.03}
                  threshold={0.1}
                  triggerOnce={true}
                  triggerOnHover={true}
                  respectReducedMotion={true}
                /> */}
              </div>
              <div>
                Build Your Career in Full Stack, Data, and Modern Development
              </div>
            </div>
            <div className="description text-justify text-[.9em] text-[var(--bd-graphite)]">
              At Binary Devs Academy, we provide high-quality software development training, immersive hands-on courses, and expert mentoring—empowering students, developers, and professionals to gain real-world skills and excel in today’s competitive tech landscape.
            </div>
            <div className="value-description text-[var(--bd-charcoal)]">
              Learn with experts. Practice with real projects. Grow into a confident, industry-ready developer.
            </div>
            <div className="cta-action flex items-center gap-6 flex-wrap">
              <Link to={'/contact-us'} className='bg-[var(--bd-primary)] text-[var(--bd-white)] border-2 border-[var(--bd-primary)] p-3 rounded-xl flex-1 max-w-[150px] min-w-[100px] text-center cursor-target'>Get Started</Link>
              <Link to={'/all_courses'} className='bg-transparent text-[var(--bd-primary)] border-2 border-[var(--bd-primary)] p-3 rounded-xl flex-1 max-w-[150px] min-w-[100px] text-center transition-all duration-300 transition-discrete hover:bg-[var(--bd-primary)] hover:text-[var(--bd-white)] cursor-target'>View Courses</Link>
            </div>
            <div className="flex justify-around items-center gap-[15px] flex-wrap">
              <div className="flex flex-col items-center min-w-[50px]  p-3 max-w-[100px] rounded-[10px]">
                <div className='text-[1.6rem] text-[var(--bd-primary)] font-bold'>
                  <CountUp
                    from={0}
                    to={1000}
                    separator=","
                    direction="up"
                    duration={0.5}
                    className="count-up-text"
                  ></CountUp> 
                  <span>
                    +
                  </span>
                </div>
                <div className='text-center text-[var(--bd-charcoal)]'>
                  students trained
                </div>
              </div>
              <div className="flex flex-col items-center min-w-[50px]  p-3 max-w-[100px] rounded-[10px]">
                <div className='text-[1.6rem] text-[var(--bd-primary)] font-bold'>
                  <CountUp
                    from={0}
                    to={98}
                    separator=","
                    direction="up"
                    duration={0.5}
                    className="count-up-text"
                  ></CountUp> 
                  <span>
                    %
                  </span>
                </div>
                <div className='text-center text-[var(--bd-charcoal)]'>
                  Success Rate
                </div>
              </div>
              <div className="flex flex-col items-center min-w-[50px]  p-3 max-w-[100px] rounded-[10px]">
                <div className='text-[1.6rem] text-[var(--bd-primary)] font-bold'>
                  <CountUp
                    from={0}
                    to={3}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  ></CountUp> 
                  <span>
                    +
                  </span>
                </div>
                <div className='text-center text-[var(--bd-charcoal)]'>
                  Years Of Experience
                </div>
              </div>
              <div className="flex flex-col items-center min-w-[50px]p-3 max-w-[100px] rounded-[10px]">
                <div className='text-[1.6rem] text-[var(--bd-primary)] font-bold'>
                  <CountUp
                    from={0}
                    to={100}
                    separator=","
                    direction="up"
                    duration={0.5}
                    className="count-up-text"
                  ></CountUp> 
                  <span>
                    %
                  </span>
                </div>
                <div className='text-center text-[var(--bd-charcoal)]'>
                  Job Assistance
                </div>
              </div>
            </div>
        </div>
        <div className='flex-1 min-w-[220px] position-relative'>
            <img src={HeroImage} alt="hero-image" />

            <div 
              className="bg-white w-[200px] flex items-center justify-center gap-[20px] p-4 rounded-2xl position-absolute bottom-3.5 left-0 shadow-[0px_0px_10px_var(--bd-gray-800)] md:translate-x-[-10%] md:translate-y-[-50%] translate-x-[10%] translate-y-[-50%]"
            >
              <div className='text-green-600'>
                <CircleCheckBig />
              </div>
              <div>
                <div className="font-bold">
                  100% Partical
                </div>
                <div className='text-[.8rem]'>
                  Real-time Projects
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection