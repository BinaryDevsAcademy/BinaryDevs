import { Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../../ui/input-group";
import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

function AllCourses() {
  const { courses } = useSelector((state) => state.data);
  const [query, setQuery] = useState("");

  const filteredCourses = useMemo(() => {
    return courses.filter(
      (course) =>
        course.title.toLowerCase().includes(query.toLowerCase()) ||
        course.eligibility.some((e) =>
          e.toLowerCase().includes(query.toLowerCase())
        )
    );
  }, [query, courses]);

  return (
    <main className="w-full bg-[var(--bd-bg)] px-4 py-16">
      <title>BinaryDevs – All Courses</title>

      {/* ================= HEADER ================= */}
      <section className="max-w-7xl mx-auto mb-14 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--bd-text)]">
            All Courses
          </h1>
          <p className="mt-1 text-[var(--bd-text-muted)]">
            Industry-ready programs designed for real careers
          </p>
        </div>

        {/* Search */}
        <div className="w-full sm:w-[360px]">
          <InputGroup
            className="
              bg-[var(--bd-bg-secondary)]
              border border-[var(--bd-border)]
              rounded-xl overflow-hidden
              shadow-sm focus-within:ring-2
              focus-within:ring-[var(--bd-primary)]
            "
          >
            <InputGroupInput
              placeholder="Search courses, skills, eligibility…"
              onChange={(e) => setQuery(e.target.value)}
              className="text-[15px] px-4 py-3 bg-transparent focus:outline-none"
            />
            <InputGroupAddon className="px-3">
              <Search className="text-[var(--bd-text-muted)]" />
            </InputGroupAddon>
            <InputGroupAddon
              align="inline-end"
              className="text-xs text-[var(--bd-text-muted)] px-3"
            >
              {filteredCourses.length} results
            </InputGroupAddon>
          </InputGroup>
        </div>
      </section>

      {/* ================= COURSES GRID ================= */}
      <section
        className="
          max-w-7xl mx-auto
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-10
        "
      >
        {filteredCourses.map((course, index) => (
          <div
            key={index}
            className="
              group w-full max-w-[420px] mx-auto
              bg-[var(--bd-bg-secondary)]
              border border-[var(--bd-border)]
              rounded-2xl overflow-hidden
              shadow-sm
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-lg
            "
          >
            {/* Image */}
            <div className="relative w-full h-[200px] overflow-hidden">
              <img
                src={course.heroImageQueries}
                alt={course.title}
                className="
                  w-full h-full object-cover
                  transition-transform duration-500
                  group-hover:scale-110
                "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="px-5 py-6 flex flex-col gap-4">
              <h3 className="text-lg sm:text-xl font-bold text-center text-[var(--bd-text)]">
                {course.title}
              </h3>

              {/* Eligibility */}
              <div className="flex flex-wrap justify-center gap-2 text-sm">
                <span className="font-semibold text-[var(--bd-text-muted)]">
                  Eligibility:
                </span>
                {course.eligibility.map((eligible, idx) => (
                  <span
                    key={idx}
                    className="
                      px-3 py-1 rounded-full
                      bg-[var(--bd-gray-100)]
                      text-[var(--bd-text)]
                      border border-[var(--bd-border)]
                    "
                  >
                    {eligible}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Link
                to={`/course/${course.name}`}
                className="
                  mt-2 mx-auto
                  inline-flex items-center justify-center
                  px-5 py-2.5 rounded-xl
                  bg-[var(--bd-primary)]
                  text-[var(--bd-white)]
                  font-semibold
                  transition-all duration-300
                  hover:bg-[var(--bd-primary-dark)]
                  hover:shadow-md cursor-target
                "
              >
                Explore Course
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* ================= EMPTY STATE ================= */}
      {filteredCourses.length === 0 && (
        <div className="text-center mt-20">
          <p className="text-lg text-[var(--bd-text-muted)]">
            No courses match your search.
          </p>
        </div>
      )}
    </main>
  );
}

export default AllCourses;
