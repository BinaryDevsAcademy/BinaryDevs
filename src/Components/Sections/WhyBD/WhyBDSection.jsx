import React from 'react'
import './WhyBDSection.css'
import TextType from '../../../ReactBits/TypeText/TextType'
import { AppWindow, BookOpen, ChartLine, Code, CodeXml, Goal, GraduationCap, Presentation, UserRoundCheck, UsersRound } from 'lucide-react';
import TargetCursor from '../../../ReactBits/TargetCursor/TargetCursor'

function WhyBDSection() {

    const whyChooseUs = [
        {
            title: "Premium, Hands-On Training",
            explanation:
            "We focus on practical, project-based learning that helps students build real-world skills through coding exercises and industry-level assignments.",
            logo: <CodeXml />
        },
        {
            title: "Expert Mentors & Industry Professionals",
            explanation:
            "Learn directly from experienced full stack developers, data experts, and software engineers who guide you with real insights and best practices.",
            logo: <UsersRound />
        },
        {
            title: "Career-Focused Curriculum",
            explanation:
            "Our training includes job-ready modules, interview preparation, resume building, GitHub portfolio setup, and mock interviews to boost career success.",
            logo: <Goal />
        },
        {
            title: "Real-World Projects",
            explanation:
            "Work on projects inspired by actual business challenges so you can showcase your experience confidently during job interviews.",
            logo: <AppWindow />
        },
        {
            title: "Flexible Online & Offline Learning",
            explanation:
            "Choose the mode of learning that fits your schedule. Our flexible model ensures accessibility without compromising quality.",
            logo: <BookOpen />
        },
        {
            title: "Personalized Mentorship",
            explanation:
            "Receive one-on-one guidance and support throughout your learning journey, ensuring you progress with confidence.",
            logo: <Presentation />
        },
        {
            title: "Wide Range of In-Demand Courses",
            explanation:
            "Master today’s most in-demand technologies like Java Full Stack, Python Full Stack, Data Science, Data Analytics, Frontend, and React.",
            logo: <GraduationCap />
        },
        {
            title: "Trusted by Students & Businesses",
            explanation:
            "With 100+ students trained and strong industry feedback, Binary Devs Academy stands as a reliable platform for learning and development.",
            logo: <UserRoundCheck />
        },
        {
            title: "Grow One Bit at a Time",
            explanation:
            "Our structured learning approach ensures steady, meaningful progress—helping you build strong foundations and advanced skills efficiently.",
            logo: <ChartLine />
        }
    ];

  return (
    <section className='flex flex-col items-center h-auto'>
        <div className="title-container flex flex-col items-center gap-[7px]">
            <div className="title text-[2rem] font-[700]">Why Choose Binary Devs Academy</div>
            <div className="sub-title text-[var(--bd-graphite) font-[400]">
                Achieve More With Training That Works, <span className='text-[var(--bd-primary)] font-[500]'>
                    <TextType
                        text={['One Bit at a Time']}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="_"
                    ></TextType>
                </span>
            </div>
        </div>
        <div className='p-4 grid lg:grid-cols-3 grid-cols-1 gap-7'>
            {
                whyChooseUs.map((reason, index) => {
                    return <div className='flex flex-col items-start gap-3 shadow-lg shadow-[var(--bd-primarySoft)]-900 p-4 rounded-2xl hover:shadow-[0px_0px_10px_var(--bd-primary)] duration-300 cursor-target' key={index}>
                        <div className="logo text-[var(--bd-white)] p-3 bg-[var(--bd-primary)] rounded">
                            {reason.logo}
                        </div>
                        <div className="title text-[1.1rem] font-[500]">
                            {reason.title}
                        </div>
                        <div className="explanation text-[.8rem] text-[var(--bd-graphite)]">
                            {reason.explanation}
                        </div>
                    </div>
                })
            }
        </div>
    </section>
  )
}

export default WhyBDSection