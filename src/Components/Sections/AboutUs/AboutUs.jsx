import React from "react";
import LearningImage from "../../../assets/LearningImage.jpg";
import CountUp from "../../../ReactBits/CountUp/CountUp";
import { CircleCheckBig, Group, Handshake, Timer, User, Users } from "lucide-react";

const Value = ({ letter, title, desc }) => (
  <div className="flex gap-4 items-start">
    <div className="flex items-center justify-center w-10 h-10 rounded-full 
                    bg-[var(--bd-primary)] text-white font-bold">
      {letter}
    </div>
    <div>
      <p className="font-semibold text-[var(--bd-black)]">
        {title}
      </p>
      <p className="text-sm text-[var(--bd-text-muted)] leading-relaxed">
        {desc}
      </p>
    </div>
  </div>
);


function AboutUs() {
  return (
    <main className="w-full flex flex-col gap-4 bg-gradient-to-b from-[var(--bd-primary-dark)] to-gray-50">

      {/* ================= HERO SECTION ================= */}
      <section className="w-full text-[var(--bd-white)] py-24 px-4">
        <div className="max-w-5xl mx-auto text-center flex flex-col gap-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide animate-fade-in">
            About Us
          </h1>
          <p className="mt-2 text-lg sm:text-xl opacity-95 animate-fade-in">
            Shaping Careers. Building Developers. Transforming Futures.
          </p>
        </div>
      </section>

      {/* ================= ABOUT INFO ================= */}
      <section className="w-full mx-auto p-4 flex flex-col gap-10 bg-[var(--bd-white)]">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          
          <div className="flex-1 text-2xl text-[var(--bd-dark)] min-w-[250px] leading-relaxed flex flex-col items-start gap-4">
            <div className="text-[3.5rem] font-bold">Who Are We</div>
            <div>
              <span className="text-[var(--bd-primary-dark)] font-bold">BinaryDevs Academy</span>{" "}
              is a modern tech-training platform created with one clear mission — 
              to empower students with real skills that lead to real jobs.
            </div>
             <div className="bg-[var(--bd-light)] p-6 rounded-xl border border-[var(--bd-primary)] shadow-sm">
              <p className="font-semibold text-[var(--bd-dark)] text-[1.2rem]">
                Everyone can learn tech — with the right guidance.
              </p>

              <div className="mt-4 text-[1rem]">
                <p className="mb-3 font-semibold text-[var(--bd-dark)]">
                  We built an environment where students get:
                </p>
                <ul className="list-disc ml-6 space-y-2 text-[var(--bd-gray)]">
                  <li>Practical, industry-level skill training</li>
                  <li>One-on-one mentor support whenever needed</li>
                  <li>Structured learning paths suited to their goals</li>
                  <li>Real-world projects that employers value</li>
                  <li>Career support & interview preparation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-[250px]">
            <img
              src={LearningImage}
              alt="learning"
              className="w-full rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            />
          </div>
        </div>

        <p className="text-[var(--bd-gray)] text-lg leading-relaxed max-w-4xl animate-fade-in">
          We don’t believe in outdated theory or generic teaching. We believe in
          hands-on practice, strong fundamentals, real-world projects, and
          personalized mentorship that turns beginners into confident, job-ready
          developers.
        </p>
      </section>

      <section className="w-full bg-[var(--bd-gradient-subtle)] py-24 px-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-16">

          {/* ===== Header ===== */}
          <div className="text-center max-w-3xl space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--bd-black)]">
              What BinaryDevs Means
            </h2>

            <p className="text-lg text-white">
              <span className="font-semibold text-[var(--bd-white)]">
                More than a name —
              </span>{" "}
              it’s our philosophy.
            </p>

            <p className="text-base">
              BinaryDevs represents how we train, mentor, and build future developers.
              Every letter reflects the values that shape our teaching and your growth.
            </p>
          </div>

          {/* ===== Content Grid ===== */}
          <div className="grid md:grid-cols-2 gap-10 w-full">

            {/* ===== BINARY ===== */}
            <div className="bg-[var(--bd-bg-secondary)] border border-[var(--bd-border)] 
                            rounded-2xl p-8 shadow-sm space-y-6">
              <h3 className="text-2xl font-bold tracking-wide text-[var(--bd-primary)]">
                BINARY
              </h3>

              <Value
                title="Build"
                letter="B"
                desc="Strong foundations, clean code, real-world projects."
              />
              <Value
                title="Innovate"
                letter="I"
                desc="Modern tools, creative thinking, and future-ready skills."
              />
              <Value
                title="Nurture"
                letter="N"
                desc="Mentorship-driven learning with continuous support."
              />
              <Value
                title="Adapt"
                letter="A"
                desc="Training that evolves with technology and industry needs."
              />
              <Value
                title="Real-World Skills"
                letter="R"
                desc="Hands-on experience that prepares you for real jobs."
              />
              <Value
                title="Your Career"
                letter="Y"
                desc="Your success is always our top priority."
              />
            </div>

            {/* ===== DEVS ===== */}
            <div className="bg-[var(--bd-bg-secondary)] border border-[var(--bd-border)] 
                            rounded-2xl p-8 shadow-sm space-y-6">
              <h3 className="text-2xl font-bold tracking-wide text-[var(--bd-primary)]">
                DEVS
              </h3>

              <Value
                title="Develop"
                letter="D"
                desc="Skills, mindset, and professional confidence."
              />
              <Value
                title="Empower"
                letter="E"
                desc="Knowledge that enables independent problem-solving."
              />
              <Value
                title="Value"
                letter="V"
                desc="High-impact learning at a student-friendly cost."
              />
              <Value
                title="Success"
                letter="S"
                desc="From learning to career growth — we stay with you."
              />
            </div>
          </div>

          {/* ===== Footer Line ===== */}
          <div className="text-center max-w-2xl">
            <p className="text-[1.3rem] font-medium text-[var(--bd-gray-700)]">
              Where developers are built, guided, and empowered to succeed.
            </p>
          </div>

        </div>
      </section>


      {/* ================= WHO WE ARE ================= */}
      {/* <section className="max-w-7xl mx-auto px-4 flex flex-col gap-8">
        <h2 className="text-3xl font-bold text-[var(--bd-primary-dark)]">
          Who We Are
        </h2>

        <div className="space-y-6 text-[var(--bd-gray)] leading-relaxed">
          <p>
            BinaryDevs was founded by industry professionals with years of experience
            in full-stack engineering, training, and mentoring. After helping 100+ 
            students build careers, we realized one thing:
          </p>

          <div className="bg-[var(--bd-light)] p-6 rounded-xl border border-[var(--bd-primary)] shadow-sm">
            <p className="font-semibold text-[var(--bd-dark)] text-xl">
              Everyone can learn tech — with the right guidance.
            </p>

            <div className="mt-4">
              <p className="mb-3 font-semibold text-[var(--bd-dark)]">
                We built an environment where students get:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-[var(--bd-gray)]">
                <li>Practical, industry-level skill training</li>
                <li>One-on-one mentor support whenever needed</li>
                <li>Structured learning paths suited to their goals</li>
                <li>Real-world projects that employers value</li>
                <li>Career support & interview preparation</li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* Divider */}
      <div className="w-full h-[1px] bg-[var(--bd-light)]"></div>

      {/* ================= WHAT WE DO ================= */}
      <section className="w-full bg-[var(--bd-primary-dark)] mx-auto p-4 flex flex-col items-center gap-8 text-[var(--bd-white)]">
        <h2 className="text-3xl font-bold text-[var(--bd-white)]">What We Do</h2>

        <p className="text-[var(--bd-white)] leading-relaxed">
          We offer industry-demand courses that prepare students for real-time development roles:
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 list-none ml-6 text-[var(--bd-gray)]">
          <li className="bg-[var(--bd-gray-100)] p-5 rounded-2xl text-[var(--bd-primary-dark)] font-bold flex items-center justify-center hover:shadow-[0px_0px_15px_var(--bd-primary-light)] duration-300 hover:text-shadow-2xs">Full Stack Development</li>
          <li className="bg-[var(--bd-gray-100)] p-5 rounded-2xl text-[var(--bd-primary-dark)] font-bold flex items-center justify-center hover:shadow-[0px_0px_15px_var(--bd-primary-light)] duration-300 hover:text-shadow-2xs">Backend Engineering</li>
          <li className="bg-[var(--bd-gray-100)] p-5 rounded-2xl text-[var(--bd-primary-dark)] font-bold flex items-center justify-center hover:shadow-[0px_0px_15px_var(--bd-primary-light)] duration-300 hover:text-shadow-2xs">Frontend Engineering</li>
          <li className="bg-[var(--bd-gray-100)] p-5 rounded-2xl text-[var(--bd-primary-dark)] font-bold flex items-center justify-center hover:shadow-[0px_0px_15px_var(--bd-primary-light)] duration-300 hover:text-shadow-2xs">Java, Python, SQL</li>
          <li className="bg-[var(--bd-gray-100)] p-5 rounded-2xl text-[var(--bd-primary-dark)] font-bold flex items-center justify-center hover:shadow-[0px_0px_15px_var(--bd-primary-light)] duration-300 hover:text-shadow-2xs">Data Science & Analysis</li>
          <li className="bg-[var(--bd-gray-100)] p-5 rounded-2xl text-[var(--bd-primary-dark)] font-bold flex items-center justify-center hover:shadow-[0px_0px_15px_var(--bd-primary-light)] duration-300 hover:text-shadow-2xs">Power BI, Databases</li>
          <li className="bg-[var(--bd-gray-100)] p-5 rounded-2xl text-[var(--bd-primary-dark)] font-bold flex items-center justify-center hover:shadow-[0px_0px_15px_var(--bd-primary-light)] duration-300 hover:text-shadow-2xs">Generative AI & ML</li>
        </ul>

        <p className="text-[var(--bd-gray)] leading-relaxed">
          Every course focuses on clarity and practical learning so students can 
          confidently build real-world applications.
        </p>
      </section>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[var(--bd-light)]"></div>

      {/* ================= WHY CHOOSE US (NEW SECTION) ================= */}
      <section className="max-w-5xl mx-auto px-4 flex flex-col gap-10 items-center">
        <h2 className="text-3xl font-bold text-[var(--bd-primary)]">
          Why Choose BinaryDevs?
        </h2>

        <div className="flex justify-around items-center gap-[15px] flex-wrap">
          <div className="flex flex-col items-center min-w-[50px]   p-4 max-w-[120px] h-[120px] rounded-[10px] shadow-[0px_0px_10px_var(--bd-charcoal)] h-[100px]">
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
            <div className='flex  items-center gap-2 text-center text-[var(--bd-charcoal)] font-[600]'>
              <div>
                <Users />
              </div>
              <div>
                students trained
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center min-w-[50px]   p-4 max-w-[120px] h-[120px] rounded-[10px] shadow-[0px_0px_10px_var(--bd-charcoal)] h-[100px]">
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
            <div className='flex  items-center gap-2 text-center text-[var(--bd-charcoal)]'>
              <div>
                <CircleCheckBig />
              </div>
              <div>
                Success Rate
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center min-w-[50px]   p-4 max-w-[120px] h-[120px] rounded-[10px] shadow-[0px_0px_10px_var(--bd-charcoal)] h-[100px]">
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
            <div className='flex  items-center gap-2 text-center text-[var(--bd-charcoal)]'>
              <div>
                <Timer />
              </div>
              <div>
                Years Of Experience
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center min-w-[50px] p-4 max-w-[120px] h-[120px] rounded-[10px] shadow-[0px_0px_10px_var(--bd-charcoal)] h-[100px]">
            <div className='flex  items-center gap-2 text-[1.6rem] text-[var(--bd-primary)] font-bold'>
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
            <div className='flex items-center gap-2 text-center text-[var(--bd-charcoal)]'>
              <div><Handshake /></div>
              <div>
                Job Assistance
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[var(--bd-light)]"></div>

      {/* ================= OUR VISION ================= */}
      <section className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-4">
        <h2 className="text-3xl font-bold text-[var(--bd-primary)]">Our Vision</h2>

        <p className="text-[var(--bd-gray)] leading-relaxed">
          To provide accessible, affordable, and impactful tech education for every 
          student — regardless of background or experience.
        </p>
      </section>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[var(--bd-light)]"></div>

      {/* ================= OUR PROMISE ================= */}
      <section className="max-w-5xl mx-auto px-4 pb-28 flex flex-col gap-8">
        <h2 className="text-3xl font-bold text-[var(--bd-primary)]">
          Our Promise
        </h2>

        <div className="bg-[var(--bd-light)] p-6 rounded-xl border border-[var(--bd-primary)] shadow-sm space-y-2">
          <p className="font-semibold text-xl text-[var(--bd-dark)]">We don’t just teach. We mentor.</p>
          <p className="font-semibold text-xl text-[var(--bd-dark)]">We don’t just give lessons. We build careers.</p>
        </div>

        <p className="text-[var(--bd-gray)] leading-relaxed">
          BinaryDevs is where your learning becomes your strongest asset — and where 
          your career truly begins.
        </p>
      </section>
    </main>
  );
}

export default AboutUs;
