import React from 'react'

export const ContactSection = () => {
  return (
    <section className="flex flex-col items-center gap-10 py-16 bg-gradient-to-t from-[var(--bd-primary-light)] to-gray-50">
      
      {/* Heading */}
      <div className="text-4xl font-extrabold tracking-tight text-[var(--bd-black)] text-center">
        Contact Us
      </div>

      <div className="flex items-start justify-center w-[90%] max-w-6xl flex-wrap gap-14">
        
        {/* LEFT CONTENT */}
        <div className="flex-1 min-w-[270px] space-y-4">
          <div className='flex flex-col gap-6 items-start'>
            <div className="text-4xl font-bold leading-snug text-[var(--bd-primary)]">
              We’re Here to Help You Build <br /> Your Career
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">
              Have questions about a course? Need guidance on choosing the right learning path?
              Or want to know how BinaryDevs Academy can help you grow?
            </p>

            <div className="text-gray-700 font-medium text-lg">
              Our team is ready to support you at every step.
            </div>
          </div>
          <div className='flex items-center justify-evenly gap-5 flex-wrap'>
            <a href='#' target='_blank' className="flex-1 min-w-[220px] flex items-center gap-4 p-4 rounded-xl cursor-target
                            bg-[var(--bd-bg-secondary)] 
                            border border-[var(--bd-border)] 
                            shadow-sm 
                            hover:shadow-md 
                            transition-all duration-300">

              <div className="text-[var(--bd-primary)] font-medium whitespace-nowrap">
                Email
              </div>

              <div className="text-[var(--bd-text-light)] truncate">
                example@gmail.com
              </div>
            </a>

            <a href='https://wa.me/9154163817?text=Hi%20I%20am%20interested%20in%20your%20courses' target='_blank' className="flex-1 min-w-[220px] flex items-center gap-4 p-4 rounded-xl cursor-target 
                            bg-[var(--bd-bg-secondary)] 
                            border border-[var(--bd-border)] 
                            shadow-sm 
                            hover:shadow-md 
                            transition-all duration-300">

              <div className="text-[var(--bd-secondary)] font-medium whitespace-nowrap">
                WhatsApp
              </div>

              <div className="text-[var(--bd-text-light)]">
                +91 9154163817
              </div>
            </a>

          </div>
        </div>

        {/* FORM */}
        <form className="flex-1 min-w-[300px] flex flex-col gap-5 bg-white p-8 rounded-xl shadow-lg border border-gray-100">

          {/* Input - Floating Label */}
          <div className="relative">
            <input
              type="text"
              id="fullname"
              placeholder=" "
              className="peer w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 
                         focus:outline-none focus:border-[var(--bd-primary)] bg-white transition"
            />
            <label
              htmlFor="fullname"
              className="absolute left-4 top-3 bg-white px-1 text-gray-500 transition-all 
                         pointer-events-none
                         peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                         peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[var(--bd-primary)]"
            >
              Full Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              placeholder=" "
              className="peer w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 
                         focus:outline-none focus:border-[var(--bd-primary)] bg-white transition"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-3 bg-white px-1 text-gray-500 transition-all pointer-events-none
                         peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                         peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[var(--bd-primary)]"
            >
              Email Address
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              id="subject"
              placeholder=" "
              className="peer w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 
                         focus:outline-none focus:border-[var(--bd-primary)] bg-white transition"
            />
            <label
              htmlFor="subject"
              className="absolute left-4 top-3 bg-white px-1 text-gray-500 transition-all pointer-events-none
                         peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                         peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[var(--bd-primary)]"
            >
              Subject
            </label>
          </div>

          {/* Textarea */}
          <div className="relative">
            <textarea
              id="comments"
              rows="4"
              placeholder=" "
              className="peer w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 resize-none 
                         focus:outline-none focus:border-[var(--bd-primary)] bg-white transition"
            ></textarea>
            <label
              htmlFor="comments"
              className="absolute left-4 top-3 bg-white px-1 text-gray-500 transition-all pointer-events-none
                         peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                         peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[var(--bd-primary)]"
            >
              Comments
            </label>
          </div>

          {/* Submit Button */}
          <button type="submit">
            <span className='p-3 rounded-lg font-semibold text-lg
                       shadow-md hover:shadow-lg hover:bg-[var(--bd-primary-dark)]
                       transition-all text-white duration-200 bg-[var(--bd-primary)] cursor-target'>Contact Us</span>
          </button>

        </form>
      </div>
    </section>
  )
}

function ContactUs() {
  return (
    <main>
      <ContactSection />
    </main>
  )
}

export default ContactUs
