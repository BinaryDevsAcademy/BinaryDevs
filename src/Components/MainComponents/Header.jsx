import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
import { forwardRef, useEffect, useState } from "react";
import DarkLogo from '../../assets/logos/DarkVersion.png';
import { Atom, Braces, BrainCircuit, ChartColumnBig, Database, Factory, FileChartPie, FileVideoCamera, GraduationCap, Laptop, Menu, Server, SquareTerminal, UserRound, Video } from "lucide-react";


/* ----------------- Scroll Hook ----------------- */
const useScrollDirection = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        // Scrolling up
        setShow(true);
      } else if (window.scrollY > lastScrollY + 10) {
        // Scrolling down
        setShow(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return show;
};

export const MobileHeader = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <div className="flex md:hidden items-center justify-between p-4 bg-white shadow-md sticky top-0 z-50">
      
      {/* Logo */}
      <Link to={'/'}><img src={DarkLogo} alt="logo" className="w-10 h-10 object-contain" /></Link>

      {/* Hamburger */}
      <button
        onClick={toggleMenu}
        className="text-3xl focus:outline-none text-gray-800"
        aria-label="Toggle menu"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg rounded-b-lg p-6 flex flex-col gap-4 animate-slide-down">
          
          {/* Menu Links */}
          <NavLink
            to="/"
            className="text-lg font-semibold hover:text-[var(--bd-primary)] transition-colors"
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/all_courses"
            className="text-lg font-semibold hover:text-[var(--bd-primary)] transition-colors"
            onClick={() => setOpen(false)}
          >
            Courses
          </NavLink>

          <NavLink
            to="/blog"
            className="text-lg font-semibold hover:text-[var(--bd-primary)] transition-colors"
            onClick={() => setOpen(false)}
          >
            Blog
          </NavLink>

          <NavLink
            to="/about-us"
            className="text-lg font-semibold hover:text-[var(--bd-primary)] transition-colors"
            onClick={() => setOpen(false)}
          >
            About Us
          </NavLink>

          <NavLink
            to="/contact-us"
            className="text-lg font-semibold hover:text-[var(--bd-primary)] transition-colors"
            onClick={() => setOpen(false)}
          >
            Contact Us
          </NavLink>

          {/* Join Now Button */}
          <NavLink
            to="/join-now"
            className="mt-4 px-4 py-2 bg-[var(--bd-primary)] text-white rounded-lg text-center font-semibold hover:bg-[var(--bd-primarySoft)] transition-all"
            onClick={() => setOpen(false)}
          >
            Join Now
          </NavLink>
        </div>
      )}
    </div>
  );
};


const NavigationMenuDemo = () => {
  const showHeader = useScrollDirection()

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}>
      <NavigationMenu.Root className={`hidden lg:flex NavigationMenuRoot header items-center justify-center p-2 bg-white`}>
      
        {/* Logo + Text */}
        <NavigationMenu.Item>
          <Link to={'/'} className="flex logo-container no-underline items-center company-details cursor-none no-underline">
            <div className="image-container">
              <img
                src={DarkLogo}
                alt="Dark Logo"
                className="logo"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="primary-text">Binary Devs</span>
              <span className="secondary-text">Academy</span>
            </div>
          </Link>
        </NavigationMenu.Item>

        {/* Menu Items */}
        <NavigationMenu.List className="NavigationMenuList ml-auto flex items-center gap-6">
          <NavigationMenu.Item>
            <NavLink to={'/'} className="NavigationMenuLink cursor-target">Home</NavLink>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="NavigationMenuTrigger cursor-target cursor-none">
              Courses
            </NavigationMenu.Trigger>

            <NavigationMenu.Content
              className="NavigationMenuContent w-full p-6 bg-white shadow-lg rounded-lg"
            >
              <ul className="w-dvw List grid grid-cols-1 lg:grid-cols-3 gap-4">
                <ListItem>
                  <Link to={'/course/java_full_stack'} className="flex items-center justify-center gap-3 hover:text-[var(--bd-primary)] font-bold shadow hover:bg-[var(--bd-primarySoft)] duration-350 p-4 rounded w-[70%] cursor-target cursor-none">
                    <SquareTerminal /> Java Full Stack Development
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to={'/course/python_full_stack'} className="flex items-center justify-center gap-3 hover:text-[var(--bd-primary)] font-bold shadow hover:bg-[var(--bd-primarySoft)] duration-350 p-4 rounded w-[70%] cursor-target cursor-none">
                    <SquareTerminal /> Python Full Stack Development
                  </Link>
                </ListItem>
                <ListItem>
                  <Link  to={'/course/frontend_development'} className="flex items-center justify-center gap-3 hover:text-[var(--bd-primary)] font-bold shadow hover:bg-[var(--bd-primarySoft)] duration-350 p-4 rounded w-[70%] cursor-target cursor-none">
                    <Laptop /> Frontend Development
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to={'/course/backend_development_java'} className="flex items-center justify-center gap-3 hover:text-[var(--bd-primary)] font-bold shadow hover:bg-[var(--bd-primarySoft)] duration-350 p-4 rounded w-[70%] cursor-target cursor-none">
                    <Server /> Backend Development (java)
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to={'/course/backend_development_python'} className="flex items-center justify-center gap-3 hover:text-[var(--bd-primary)] font-bold shadow hover:bg-[var(--bd-primarySoft)] duration-350 p-4 rounded w-[70%] cursor-target cursor-none">
                    <Server /> Backend Development (Python)
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to={'/course/data_analyst'} className="flex items-center justify-center gap-3 hover:text-[var(--bd-primary)] font-bold shadow hover:bg-[var(--bd-primarySoft)] duration-350 p-4 rounded w-[70%] cursor-target cursor-none">
                    <FileChartPie /> Data Analyst
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to={'/course/data_science'} className="flex items-center justify-center gap-3 hover:text-[var(--bd-primary)] font-bold shadow hover:bg-[var(--bd-primarySoft)] duration-350 p-4 rounded w-[70%] cursor-target cursor-none">
                    <BrainCircuit /> Data Science
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to={'/course/database_development'} className="flex items-center justify-center gap-3 hover:text-[var(--bd-primary)] font-bold shadow hover:bg-[var(--bd-primarySoft)] duration-350 p-4 rounded w-[70%] cursor-target cursor-none">
                    <Database /> Database Development
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to={'/course/frontend_react'} className="flex items-center justify-center gap-3 hover:text-[var(--bd-primary)] font-bold shadow hover:bg-[var(--bd-primarySoft)] duration-350 p-4 rounded w-[70%] cursor-target cursor-none">
                    <Atom /> Frontend (React)
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to={'/all_courses'} className="flex items-center justify-center gap-3 hover:text-[var(--bd-primary)] font-bold shadow hover:bg-[var(--bd-primarySoft)] duration-350 p-4 rounded w-[70%] cursor-target cursor-none">More Courses</Link>
                </ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="NavigationMenuTrigger cursor-target cursor-none">
              Blog
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="NavigationMenuContent">
              <ul className="w-dvw List grid grid-cols-3 gap-4">
                <ListItem>
                  <Link to={'/tech-tutorials'} className="flex items-center justify-center gap-3 hover:text-[var(--bd-primary)] font-bold shadow hover:bg-[var(--bd-primarySoft)] duration-350 p-4 rounded w-[70%] cursor-target cursor-none">
                    <FileVideoCamera /> Tech tutorials
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to={'/industry-updates'} className="flex items-center justify-center gap-3 hover:text-[var(--bd-primary)] font-bold shadow hover:bg-[var(--bd-primarySoft)] duration-350 p-4 rounded w-[70%] cursor-target cursor-none">
                    <Factory /> industry updates
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to={'/coding-tips'} className="flex items-center justify-center gap-3 hover:text-[var(--bd-primary)] font-bold shadow hover:bg-[var(--bd-primarySoft)] duration-350 p-4 rounded w-[70%] cursor-target cursor-none">
                    <Braces /> coding tips
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to={'/career-insights'} className="flex items-center justify-center gap-3 hover:text-[var(--bd-primary)] font-bold shadow hover:bg-[var(--bd-primarySoft)] duration-350 p-4 rounded cursor-none w-[70%] cursor-target">
                    <ChartColumnBig /> career insights
                  </Link>
                </ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Link className="NavigationMenuLink cursor-target">
              <NavLink to={'/about-us'}>About Us</NavLink>
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Link className="NavigationMenuLink cursor-target">
              <NavLink to={'/contact-us'}>Contact Us</NavLink>
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator className="NavigationMenuIndicator">
            <div className="Arrow" />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>

          <NavigationMenu.Item className="list-none">
              <Link to={'/contact-us'} className="join-now cursor-target">
                  Join Now
              </Link>
          </NavigationMenu.Item>
          

        <div className="ViewportPosition">
          <NavigationMenu.Viewport className="NavigationMenuViewport" />
        </div>
      </NavigationMenu.Root>
    </header>
  );
};

const ListItem = forwardRef(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames("ListItemLink", className)}
          {...props}
          ref={forwardedRef}
        >
          <div className="ListItemHeading">{title}</div>
          <p className="ListItemText">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

export default NavigationMenuDemo;
