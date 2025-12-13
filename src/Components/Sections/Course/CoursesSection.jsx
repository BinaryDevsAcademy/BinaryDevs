import { Link } from 'react-router'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../../ui/carousel'
import React from 'react'
import { useSelector } from 'react-redux'
import TrueFocus from '../../../ReactBits/TrueFocus/TrueFocus'

function CoursesSection() {
    const {courses} = useSelector(state => state.data)
    console.log(courses)
  return (
    <section className='flex flex-col items-center gap-7  p-6'>
        <div className='flex flex-col items-center gap-5'>
            <div className='flex flex-col items-center'>
                <div className='text-[1.6rem] font-bold'>Our Courses</div>
                <div>
                    <TrueFocus
                        sentence='Learn the Skills, That Build Real Careers'
                        separator=','
                        manualMode={false}
                        blurAmount={5}
                        borderColor="var(--bd-primary)"
                        animationDuration={1}
                        pauseBetweenAnimations={1}
                    ></TrueFocus>
                </div>
            </div>
            <div className='w-[90%]'>
                Our courses are designed to take you from fundamentals to job-ready expertise with hands-on projects, real-world assignments, and mentor-driven support. Whether you're starting fresh or leveling up your tech career, we give you everything you need to succeed.
            </div>
        </div>
        <div className="w-full">
            <Carousel className="w-full">
                <CarouselContent className="-ml-1">
                    {courses.map((course, index) => (
                        <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card className="h-[380px] flex flex-col gap-1 items-center shadow-2xl">
                                    <CardHeader>
                                        <img src={course.heroImageQueries} alt="" />
                                    </CardHeader>
                                    <CardContent className="flex flex-col  gap-4 items-start justify-start w-full p-6 h-full">
                                        <CardTitle className='text-center text-[1rem]'>
                                            {course.title}
                                        </CardTitle>
                                        <div>
                                            {course.about.substring(0,150)}... <Link to={`/course/${course.name}`} className='text-[var(--bd-primary)]'>read more</Link>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Link className='bg-[var(--bd-primary)] cursor-target px-2 py-1 rounded text-[var(--bd-white)]' to={`/course/${course.name}`}>View Course</Link>
                                    </CardFooter>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    </section>
  )
}

export default CoursesSection