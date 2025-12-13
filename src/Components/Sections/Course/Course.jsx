import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { useSelector } from 'react-redux';
import certificateImage from '../../../assets/certificate/BinaryDevsCertificate.png'

import ZoomableImage from './ZoomableImage';
import { GET_ALL_POSTS } from '../../../data/Request.js';

function Course() {
    const location = useLocation()
    const requested_course_name = location.pathname.slice(8);
    const {courses} = useSelector(state => state.data)
    const selectedCourse = courses.filter((course) => course.name == requested_course_name)

    
    const [open, setOpen] = useState(false);

    console.log(selectedCourse)


  return (
    <>
    {selectedCourse.map((course, index) => {
        return (
        <main
            key={index}
            className="flex flex-col items-center w-full gap-12 pb-20 bg-gray-50"
        >
            <title>{course.title}</title>
            {/* ---------------- HERO IMAGE ---------------- */}
            <section className="w-full max-h-[350px] overflow-hidden shadow-md">
            <img
                src={course.heroImageQueries}
                alt=""
                className="w-full h-full object-cover"
            />
            </section>

            {/* ---------------- COURSE TITLE & INTRO ---------------- */}
            <section className="flex flex-col items-center w-[95%] lg:w-[80%] gap-6 text-center">
            <h1 className="text-4xl font-extrabold text-[var(--bd-primary-dark)]">
                {course.title}
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                {course.tagline}
            </p>

            {/* ABOUT + PRICE SECTION */}
            <div className="flex flex-col items-start lg:flex-row gap-10 mt-6 w-full">
                {/* Left Column */}
                <div className="flex-1 text-gray-800 text-xl text-justify">
                    <p>{course.about}</p>
                </div>

                {/* Right Column – CTA Buttons */}
                <div className="flex-1 flex flex-col items-center justify-center gap-4">
                    <div className="w-full bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex flex-col gap-4">
                        <div className="mt-6 bg-white p-5 rounded-xl shadow-md border border-gray-200">
                            <p className="font-semibold text-[var(--bd-primary)] text-xl">
                            High-value full stack training at a student-friendly price
                            </p>

                            <div className="flex flex-col gap-1 mt-3 text-gray-800">
                            <div className="text-xl font-semibold">
                                <span className="line-through text-gray-500">
                                ₹{course.price.original}
                                </span>
                                <span className="ml-3 text-green-600 font-bold">
                                {course.price.discountPercentage}% Off
                                </span>
                            </div>

                            <div className="text-3xl font-bold text-[var(--bd-primary)]">
                                <span>₹{course.price.discounted}</span>
                            </div>

                            <p className="text-sm text-orange-600">
                                {course.price.offerNote}
                            </p>

                            <p className="text-sm text-gray-600 mt-1">{course.price.emi}</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href='' className="px-5 py-3 min-w-[120px] text-center font-semibold bg-[var(--bd-accent)] rounded-xl shadow hover:shadow-[0px_0px_10px_var(--bd-accent)] duration-300 cursor-target">
                                {course.cta.message}
                            </a>

                            <a
                                target='_blank'
                                className="px-5 py-3 min-w-[120px] text-center text-white font-semibold bg-[var(--bd-secondary)] rounded-xl shadow hover:shadow-[0px_0px_10px_var(--bd-secondary)] duration-300 cursor-target"
                                href={`https://wa.me/+919154163817?text=Hi%20I%20am%20interested%20in%20${course.title}, %20need%20more%20details.`}
                            >
                                Whatsapp
                            </a>

                            <a
                                className="px-5 py-3 min-w-[120px] text-center text-white font-semibold bg-[var(--bd-primary)] rounded-xl shadow hover:shadow-[0px_0px_10px_var(--bd-primary-light)] duration-300 cursor-target"
                                href="#"
                            >
                                Email
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </section>

            {/* ---------------- HIGHLIGHTS ---------------- */}
            <section className="w-[95%] lg:w-[80%]">
            <h2 className="text-2xl font-bold mb-3">Highlights</h2>

            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
                {course.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
                ))}
            </ul>
            </section>

            {/* ---------------- MODULES ---------------- */}
            <section className="w-[95%] lg:w-[80%] mt-8">
            <h2 className="text-2xl font-bold mb-6">Modules</h2>

            <div className="grid lg:grid-cols-3 gap-6">
                {course.modules.map((module, index) => {
                return (
                    <div
                    key={index}
                    className="bg-white p-5 rounded-xl shadow-md border border-[var(--bd-primary)]/20"
                    >
                    <button
                        onClick={() => setOpen(!open)}
                        className="w-full text-left font-semibold text-lg text-[var(--bd-primary)]"
                    >
                        {module.name}
                    </button>

                    <div
                        className={`transition-all overflow-hidden ${
                        open ? "max-h-[800px] mt-4" : "max-h-0"
                        }`}
                    >
                        <div className="space-y-2">
                        {module?.topics?.map((topic, idx) => (
                            <div
                            key={idx}
                            className="text-sm border-l-2 pl-3 border-gray-300"
                            >
                            {topic}
                            </div>
                        ))}

                        {module?.submodules?.map((sub, idx) => (
                            <div key={idx} className="mt-4">
                            <div className="font-medium">{sub.name}</div>
                            <div className="pl-4 mt-2 space-y-1">
                                {sub.topics.map((t, i) => (
                                <div
                                    key={i}
                                    className="text-sm border-l-2 pl-2 border-gray-300"
                                >
                                    {t}
                                </div>
                                ))}
                            </div>
                            </div>
                        ))}
                        </div>
                    </div>
                    </div>
                );
                })}
            </div>
            </section>

            {/* ---------------- CAREER PATHS ---------------- */}
            <section className="w-[95%] lg:w-[80%] mt-8 text-center">
            <h2 className="text-2xl font-bold">Career Paths</h2>
            <p className="text-gray-600 text-sm">
                From fresher to job-ready developer: Here’s where your skills can
                take you
            </p>

            <ol className="list-decimal text-left mt-4 space-y-2 pl-6 text-gray-700">
                {course.careerPaths.map((career, idx) => (
                <li key={idx}>{career}</li>
                ))}
            </ol>
            </section>

            {/* ---------------- WHY THIS COURSE ---------------- */}
            <section className="w-[95%] lg:w-[80%]">
            <h2 className="text-2xl font-bold mb-3">Why This Course?</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {course.demandReasons.map((reason, idx) => (
                <li key={idx}>{reason}</li>
                ))}
            </ul>
            </section>

            {/* ---------------- CERTIFICATION SECTION ---------------- */}
            <section className="w-full bg-gray-100 py-16 mt-12">
            <div className="flex flex-col items-center gap-10 w-[90%] mx-auto">
                <h2 className="text-4xl font-extrabold">Certification</h2>

                <div className="flex flex-col lg:flex-row gap-10 items-center w-full">
                <div className="flex-1">
                    <h3 className="text-4xl font-semibold text-gray-900 leading-snug">
                    {course.certification}
                    </h3>

                    <p className="mt-4 text-lg text-gray-600">
                    Upon successful completion of the course, you will receive an
                    industry-recognized certificate from{" "}
                    <span className="font-semibold text-gray-900">
                        BinaryDevs Academy
                    </span>
                    .
                    </p>

                    <button className="mt-6 bg-[var(--bd-primary)] text-white px-6 py-3 rounded-xl shadow hover:bg-opacity-90">
                    Download Sample Certificate
                    </button>
                </div>

                <div className="flex-1 flex justify-center">
                    <div className="p-4 bg-white rounded-xl shadow-xl border w-full max-w-[480px]">
                    <ZoomableImage src={certificateImage} alt="certificate" />
                    </div>
                </div>
                </div>
            </div>
            </section>

            {/* ---------------- DEMAND REASONS CARDS ---------------- */}
            <section className="w-[95%] lg:w-[80%] mt-10">
            <h2 className="text-2xl font-bold text-center">Demand Reasons</h2>

            <div className="grid lg:grid-cols-2 gap-5 mt-6">
                {course.demandReasons.map((reason, idx) => (
                <div
                    key={idx}
                    className="p-5 bg-[var(--bd-primary)] text-white rounded-xl shadow hover:shadow-[0px_0px_15px_var(--bd-primarySoft)] transition"
                >
                    {reason}
                </div>
                ))}
            </div>
            </section>
        </main>
        );
    })}
    </>
  )
}

export default Course