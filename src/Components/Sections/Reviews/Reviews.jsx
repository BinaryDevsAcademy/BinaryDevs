import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel"

import './Reviews.css'
import { Quote } from 'lucide-react';
import RotatingText from '../../../ReactBits/RotatingText/RotatingText'

function Reviews() {
    const studentReviews = [
        {
            name: "Aarav Sharma",
            course: "Java Full Stack Development",
            review:
            "Binary Devs Academy helped me transform from a beginner into a confident full stack developer. The hands-on projects and personal mentorship were the best part of the learning experience.",
            rating: 5,
            photo: "student_1.png"
        },
        {
            name: "Neha Reddy",
            course: "Python Full Stack",
            review:
            "The training is very practical and industry-focused. I was able to build real applications and understand core concepts clearly. Highly recommend for anyone serious about their career.",
            rating: 4.8,
            photo: "student_2.png"
        },
        {
            name: "Rahul Verma",
            course: "Data Science",
            review:
            "Amazing mentors who explain complex topics in a very simple way. The projects on machine learning and data analytics helped me get interview-ready.",
            rating: 4.9,
            photo: "student_3.png"
        },
        {
            name: "Saanvi Rao",
            course: "Frontend Development (React)",
            review:
            "The React projects and coding tasks were very hands-on. I built a strong portfolio that helped me land multiple interview calls.",
            rating: 5,
            photo: "student_4.png"
        },
        {
            name: "Karthik Jay",
            course: "Data Analyst",
            review:
            "From Excel to SQL to real dashboards, everything was covered in detail. The instructors genuinely care about students’ progress.",
            rating: 4.7,
            photo: "student_5.png"
        },
        {
            name: "Megha Patel",
            course: "Java Full Stack",
            review:
            "Binary Devs Academy has the best balance of theory and practice. The live sessions, recordings, and doubts support helped me learn at my own pace.",
            rating: 4.9,
            photo: "student_6.png"
        }
    ];

  return (
    <section className='flex flex-col items-center p-8 bg-gradient-to-b from-[var(--bd-light)] to-[var(--bd-primarySoft)]'>
        <div className="title-container flex flex-col items-center gap-[7px]">
            <div className="title text-[2rem] font-[700] text-[var(--bd-primary)] text-shadow-2xs flex items-center gap-2">
                Real 
                <RotatingText
                    texts={['Voices', 'Skills', 'Transformation']}
                    mainClassName="text-[var(--bd-secondary)]"
                    staggerFrom={"random"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 40, stiffness: 400 }}
                    rotationInterval={2000}
                />.
            </div>
            <div className="sub-title text-[var(--bd-graphite) font-[400] text-center max-w-6xl">
                At <span className='text-[var(--bd-primary)] font-bold'>Binary Devs Academy</span>, we believe in progress that happens one step at a time — or as we say, one bit at a time. Our students achieve remarkable growth through dedicated training, hands-on projects, and continuous mentor guidance.
            </div>
        </div>
        <div className='w-[90svw]'>
           <Carousel className="w-full relative">
                <div className='absolute top-1/2 left-[-20px] z-10 bg-[var(--bd-charcoal)] text-[var(--bd-white)] w-[40px] h-[40px] rounded-[50%] flex items-center justify-center cursor-pointer opacity-65'>
                    <CarouselPrevious/>
                </div>
                <div className='absolute top-1/2 z-10 right-[0] bg-[var(--bd-charcoal)] text-[var(--bd-white)] w-[40px] h-[40px] rounded-[50%] flex items-center justify-center cursor-pointer opacity-65'>
                    <CarouselNext/>
                </div>
                <CarouselContent className="-ml-1 flex items-center gap-5 py-4">
                    {studentReviews.map((review, index) => (
                    <CarouselItem
                        key={index}
                        className="pl-1 md:basis-1/2 lg:basis-1/3 min-h-[250px] flex flex-col items-start gap-3.5 cursor-pointer relative"
                    >   
                        <div className='absolute right-[-10px] px-5 py-2 top-[-10px] bg-[var(--bd-warning)] rounded shadow-2xs font-[500]'>
                            {review.rating}/5
                        </div>
                        <div className="bg-white dark:bg-neutral-900 border border-gray-200 
                        dark:border-neutral-700 p-6 rounded-2xl shadow-sm hover:shadow-md 
                        transition-shadow h-full flex flex-col gap-4">

                        {/* Top */}
                        <div className="flex items-center gap-4">
                            <img
                            src={review.photo}
                            alt={review.name}
                            className="w-14 h-14 rounded-full object-cover border border-gray-300 
                            dark:border-neutral-600 shadow-sm"
                            />
                            <div>
                            <div className="text-lg font-semibold">{review.name}</div>
                            <div className="text-sm text-gray-500">{review.course}</div>
                            </div>
                        </div>

                        {/* review */}
                        <p className="text-sm text-gray-600 line-clamp-5 text-justify">
                            <Quote className='text-[var(--bd-warning)]' />
                            {review.review}
                        </p>

                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    </section>
  )
}

export default Reviews