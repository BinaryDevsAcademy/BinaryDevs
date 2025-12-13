import { createSlice } from "@reduxjs/toolkit";
import JavaFullStack from '../assets/Banner/JavaFullStackImage.png'
import DataScience from '../assets/Banner/DataScienceImage.png'
import PythonFullStack from '../assets/Banner/PythonFullStackImage.png'
import PythonProgramming from '../assets/Banner/PythonProgrammingImage.png'
import SqlPowerBI from '../assets/Banner/SQLPowerBIImage.png'
import DataAnalyst from '../assets/Banner/DataAnalystImage.png'
import DatabaseDevelopment from '../assets/Banner/DatabaseDevelopmentImage.png'
import FrontendDevelopmentReact from '../assets/Banner/FrontendDevelopmentReactImage.png'
import GenerativeAI from '../assets/Banner/GenerativeAIImage.png'
import BackendDevelopmentJava from '../assets/Banner/BackendDevelopmentJavaImage.png'
import BackendDevelopmentPython from '../assets/Banner/BackendDevelopmentPythonImage.png'

const databaseDevelopmentCourse = {
  name: "database_development",
  title: "Database Development & SQL Mastery",
  tagline: "Master SQL, Database Design, and Real-World Data Handling",
  heroImageQueries: DatabaseDevelopment,

  price: {
    original: 25000,
    discountPercentage: 40,
    discounted: 25000 - (25000 * 0.40),
    emi: "Starts at ₹1,200/month",
    offerNote: "Offer valid for early registrations"
  },

  about:
    "This course is designed to make you an expert in SQL, database design, data modeling, performance optimization, and backend data handling. You will work on real datasets and learn how databases power modern applications.",

  highlights: [
    "Learn SQL from basics to advanced",
    "Master MySQL & PostgreSQL",
    "Database Schema & ER Diagram Design",
    "Real-World Data Querying Projects",
    "Stored Procedures, Views, Triggers",
    "Performance Optimization & Indexing",
    "Resume & Interview Preparation"
  ],

  modules: [
    {
      name: "Module 1 — Introduction to Databases",
      topics: [
        "What is a Database?",
        "DBMS vs RDBMS",
        "Types of Databases",
        "Understanding Tables & Relationships"
      ]
    },
    {
      name: "Module 2 — SQL (Beginner to Advanced)",
      topics: [
        "DDL, DML, DCL, TCL",
        "Joins, Subqueries",
        "Indexes, Views",
        "Stored Procedures & Functions",
        "Triggers, Cursors",
        "Optimization Techniques"
      ]
    },
    {
      name: "Module 3 — Database Design",
      topics: [
        "Normalization",
        "Entity Relationship Diagrams",
        "Schema Design",
        "Primary Key, Foreign Key Strategy"
      ]
    },
    {
      name: "Module 4 — Working with MySQL & PostgreSQL",
      topics: [
        "Setting up DB Servers",
        "Writing Efficient Queries",
        "Backup & Restore",
        "Real-World Query Scenarios"
      ]
    },
    {
      name: "Module 5 — Tools",
      topics: [
        "MySQL Workbench",
        "DBeaver",
        "pgAdmin",
        "DataGrip"
      ]
    },
    {
      name: "Module 6 — Capstone Project",
      description:
        "Design and build a complete database system for an ecommerce or job portal platform."
    }
  ],

  careerPaths: [
    "Database Developer",
    "SQL Developer",
    "Data Engineer (Entry Level)",
    "Backend Support Engineer",
    "Business Intelligence Analyst"
  ],

  eligibility: [
    "Beginners",
    "College Students",
    "Working Professionals",
    "Career Switchers",
    "Anyone interested in data"
  ],

  certification:
    "You will receive a Binary Devs Academy Database Development Certificate recognized by industry recruiters.",

  demandReasons: [
    "Every application uses a database.",
    "High demand for SQL developers.",
    "Required in finance, health, SaaS, ecommerce, IT companies.",
    "Strong foundation for Data Engineering & Backend Development."
  ],

  cta: {
    message: "Start Learning Databases Today",
    contact: {
      phone: "+91 XXXXX XXXXX",
      email: "support@binarydevs.com"
    },
    actions: ["Get Free Demo", "Talk to Counselor"]
  }
};

const frontendReactCourse = {
  name: "frontend_react",
  title: "Frontend Development with React.js",
  tagline: "Master Modern UI Development with React, Tailwind, APIs, and Real Projects",
  heroImageQueries: FrontendDevelopmentReact,

  price: {
    original: 30000,
    discountPercentage: 35,
    discounted: 30000 - (30000 * 0.35),
    emi: "Starts at ₹1,500/month",
    offerNote: "Early bird discount"
  },

  about:
    "This course teaches modern frontend development using HTML, CSS, JavaScript, and React.js. You’ll build production-level UI, dashboards, real-time apps, and integrate APIs with professional workflows.",

  highlights: [
    "Complete HTML, CSS, JS Foundation",
    "Advanced React Concepts",
    "React Hooks, Routing, Context API",
    "Tailwind CSS UI Framework",
    "API Integration with Axios & Fetch",
    "Responsive & Optimized UI",
    "Build Real-World Projects + Portfolio"
  ],

  modules: [
    {
      name: "Module 1 — HTML, CSS",
      topics: [
        "Semantic HTML",
        "Flexbox, Grid",
        "Responsive Design",
        "Forms, Accessibility"
      ]
    },
    {
      name: "Module 2 — JavaScript",
      topics: [
        "ES6+",
        "DOM Manipulation",
        "Async & Promises",
        "API Calls",
        "Classes, Objects"
      ]
    },
    {
      name: "Module 3 — React.js (Beginner to Advanced)",
      topics: [
        "Components & Props",
        "State & Lifecycle",
        "React Hooks",
        "Router v6",
        "Context API",
        "Custom Hooks"
      ]
    },
    {
      name: "Module 4 — Styling",
      topics: [
        "Tailwind CSS",
        "Shadcn UI",
        "Material UI",
        "CSS Animations"
      ]
    },
    {
      name: "Module 5 — Tools",
      topics: [
        "GitHub",
        "Vite",
        "NPM Tools",
        "Browser DevTools"
      ]
    },
    {
      name: "Module 6 — Projects",
      description:
        "Build 4 major projects: Ecommerce UI, Admin Dashboard, TODO App, Weather App with API."
    }
  ],

  careerPaths: [
    "Frontend Developer",
    "React.js Developer",
    "UI Developer",
    "Web Developer"
  ],

  eligibility: [
    "Beginners",
    "Students",
    "Anyone learning programming",
    "Career Switchers"
  ],

  certification:
    "You will receive Binary Devs Academy React Developer Certificate.",

  demandReasons: [
    "React powers most modern web apps.",
    "Used by Meta, Uber, Shopify, Netflix.",
    "High salaries for frontend developers."
  ],

  cta: {
    message: "Become a React Developer",
    contact: {
      phone: "+91 XXXXX XXXXX",
      email: "support@binarydevs.com"
    },
    actions: ["Get Free Demo", "Talk to Expert"]
  }
};

const generativeAICourse = {
  name: "generative_ai",
  title: "Generative AI & Prompt Engineering",
  tagline: "Master AI Tools, GPT Models, Prompt Engineering & Automation",
  heroImageQueries: GenerativeAI,

  price: {
    original: 35000,
    discountPercentage: 30,
    discounted: 35000 - (35000 * 0.30),
    emi: "Starts at ₹1,800/month",
    offerNote: "AI starter offer"
  },

  about:
    "This course covers the fundamentals of artificial intelligence with a focus on Generative AI, LLMs, GPT models, automation, AI workflows, and building AI-powered applications.",

  highlights: [
    "Complete Generative AI Concepts",
    "Prompt Engineering Techniques",
    "Build AI-powered Apps",
    "API Integration with GPT Models",
    "Automation & AI Workflows",
    "Portfolio Project"
  ],

  modules: [
    {
      name: "Module 1 — AI Basics",
      topics: [
        "What is AI?",
        "ML vs DL vs GenAI",
        "Neural Networks Basics"
      ]
    },
    {
      name: "Module 2 — Prompt Engineering",
      topics: [
        "Prompt Patterns",
        "Role + Context + Constraints",
        "Structured Prompting",
        "Chain of Thought",
        "Multi-Agent Prompting"
      ]
    },
    {
      name: "Module 3 — Large Language Models",
      topics: [
        "GPT Models",
        "Tokenization & Embeddings",
        "Vector Database Basics"
      ]
    },
    {
      name: "Module 4 — Building AI Apps",
      topics: [
        "OpenAI API",
        "Image Generation",
        "Chatbot Building",
        "AI Automation Tools"
      ]
    },
    {
      name: "Module 5 — Capstone",
      description:
        "Build an AI assistant or content automation system."
    }
  ],

  careerPaths: [
    "AI Engineer (Entry Level)",
    "Prompt Engineer",
    "Automation Specialist",
    "AI Product Builder"
  ],

  eligibility: [
    "Beginners",
    "Students",
    "Working Professionals",
    "Content Creators"
  ],

  certification:
    "You will receive Binary Devs Academy Generative AI Certificate.",

  demandReasons: [
    "AI is transforming every industry.",
    "Massive demand for AI-savvy professionals.",
    "High-growth career opportunities."
  ],

  cta: {
    message: "Start Your AI Journey",
    contact: {
      phone: "+91 XXXXX XXXXX",
      email: "support@binarydevs.com"
    },
    actions: ["Join Free Demo", "WhatsApp Support"]
  }
};

const backendJavaCourse = {
  name: "backend_java_development",
  title: "Backend Development with Java & Spring Boot",
  tagline: "Become a Backend Developer with Spring Boot, REST APIs, and Microservices",
  heroImageQueries: BackendDevelopmentJava,

  price: {
    original: 40000,
    discountPercentage: 40,
    discounted: 40000 - (40000 * 0.40),
    emi: "Starts at ₹2,000/month",
    offerNote: "Limited seats"
  },

  about:
    "Learn everything required to become a backend developer using Java, Spring Boot, JPA, Hibernate, and SQL. You’ll build real APIs and deploy them on the cloud.",

  highlights: [
    "Java Core + Advanced",
    "Spring Boot REST APIs",
    "JPA, Hibernate & MySQL",
    "JWT Authentication",
    "Microservices Introduction",
    "Deployment on Cloud"
  ],

  modules: [
    {
      name: "Module 1 — Java Core",
      topics: [
        "OOP Concepts",
        "Collections",
        "Exception Handling",
        "Java 8 Features"
      ]
    },
    {
      name: "Module 2 — Advanced Java",
      topics: ["JDBC", "Servlets", "JSP", "MVC Architecture"]
    },
    {
      name: "Module 3 — Spring Boot",
      topics: [
        "Spring Core",
        "Dependency Injection",
        "REST API Development",
        "Spring Data JPA",
        "Validation & Exception Handling"
      ]
    },
    {
      name: "Module 4 — Security & Tools",
      topics: ["JWT Auth", "Postman", "Git & GitHub"]
    },
    {
      name: "Module 5 — Deployment",
      topics: ["Docker Basics", "Cloud Deployment"]
    },
    {
      name: "Capstone Project",
      description:
        "Build a production-ready backend with user authentication and admin panel."
    }
  ],

  careerPaths: [
    "Backend Developer",
    "Java Developer",
    "API Developer"
  ],

  eligibility: ["Beginners", "Students", "Working Professionals"],

  certification:
    "You will receive Binary Devs Academy Backend Developer Certificate.",

  demandReasons: [
    "Java backend developers are highly paid.",
    "Used across banking, healthcare, IT, and enterprise systems."
  ],

  cta: {
    message: "Become a Backend Developer",
    contact: {
      phone: "+91 XXXXX XXXXX",
      email: "support@binarydevs.com"
    },
    actions: ["Free Demo", "Call Now"]
  }
};

const backendPythonCourse = {
  name: "backend_python_development",
  title: "Backend Development with Python & Django",
  tagline: "Master Django, REST APIs, Authentication & Scalable Backend Systems",
  heroImageQueries: BackendDevelopmentPython,

  price: {
    original: 35000,
    discountPercentage: 35,
    discounted: 35000 - (35000 * 0.35),
    emi: "Starts at ₹1,900/month",
    offerNote: "Special Python Week Offer"
  },

  about:
    "Learn backend development with Python and Django. Build secure and scalable applications with REST APIs, authentication, and database integration.",

  highlights: [
    "Python Programming",
    "Django Framework",
    "Django ORM",
    "REST API Development",
    "Authentication & Authorization",
    "Deployment on Cloud"
  ],

  modules: [
    {
      name: "Module 1 — Python Core",
      topics: ["Variables", "Loops", "OOP", "Modules", "Error Handling"]
    },
    {
      name: "Module 2 — Django Framework",
      topics: [
        "Django Project Structure",
        "URLs, Views, Templates",
        "Models & ORM",
        "User Authentication"
      ]
    },
    {
      name: "Module 3 — Django REST Framework",
      topics: ["API Views", "Serializers", "Pagination", "Filtering", "JWT Auth"]
    },
    {
      name: "Module 4 — Database Integration",
      topics: ["SQLite", "PostgreSQL", "Django ORM Queries"]
    },
    {
      name: "Module 5 — Deployment",
      topics: ["Render", "AWS", "Docker Basics"]
    },
    {
      name: "Capstone Project",
      description: "Build a production-level REST API backend."
    }
  ],

  careerPaths: ["Backend Developer", "Python Developer", "Django Developer"],
  eligibility: ["Beginners", "Students", "Career Switchers"],

  certification:
    "You will receive Binary Devs Academy Python Backend Certificate.",

  demandReasons: [
    "Python is beginner-friendly and highly in-demand.",
    "Django is used by Instagram, Pinterest, and global SaaS companies."
  ],

  cta: {
    message: "Start Python Backend Development",
    contact: {
      phone: "+91 XXXXX XXXXX",
      email: "support@binarydevs.com"
    },
    actions: ["Call Us", "Free Demo"]
  }
};


const javaFullStackCourse = {
  name : "java_full_stack",
  title: "Java Full Stack Development",
  tagline: "Become a Job-Ready Full Stack Developer with Hands-On Training & Real Projects",
  heroImageQueries: JavaFullStack,

  price: {
    original: 45000,
    discountPercentage: 40,
    discounted: 45000 - (45000 * 0.40), // auto calculated → 27000
    emi: "Starts at ₹2,500/month",
    offerNote: "Limited-time offer for first 20 enrollments"
  },

  about:
    "At Binary Devs Academy, our Java Full Stack Development Course is designed to transform beginners into professional full-stack developers. Through practical training, real-world projects, and expert mentorship, you’ll master Java, Spring Boot, Hibernate, SQL, HTML, CSS, JavaScript, and React.js.",

  highlights: [
    "Complete Beginner-to-Advanced Training covering frontend, backend, database, and deployment.",
    "Industry-Ready Curriculum aligned with product-based companies.",
    "Hands-on Projects including 5+ real-world applications.",
    "1:1 Mentorship & Doubt Support by expert developers.",
    "Interview & Resume Preparation.",
    "Certificate of Completion."
  ],

  modules: [
    {
      name: "Module 1 — Core Java (Beginner to Advanced)",
      topics: [
        "Introduction to Java & OOP Concepts",
        "Data Types, Loops, Conditions",
        "Classes, Objects & Constructors",
        "OOP Pillars: Inheritance, Polymorphism, Encapsulation, Abstraction",
        "Collections Framework",
        "Exception Handling",
        "File Handling",
        "Java 8 Features (Streams, Lambdas)"
      ]
    },
    {
      name: "Module 2 — Advanced Java",
      topics: [
        "JDBC (Java Database Connectivity)",
        "Servlets & JSP",
        "MVC Architecture",
        "Building Mini Backend Apps"
      ]
    },
    {
      name: "Module 3 — SQL & Database",
      topics: [
        "SQL Basics (DDL, DML, DCL)",
        "Joins, Subqueries, Indexing",
        "Database Design Concepts",
        "MySQL / PostgreSQL",
        "Writing Real-World Queries"
      ]
    },
    {
      name: "Module 4 — Spring & Spring Boot",
      topics: [
        "Spring Core",
        "Dependency Injection & IoC",
        "Spring MVC",
        "Spring Boot Application Setup",
        "Building REST APIs",
        "Spring Data JPA & Hibernate",
        "Database Connectivity",
        "JWT Authentication & Authorization"
      ]
    },
    {
      name: "Module 5 — Frontend Development",
      submodules: [
        {
          name: "HTML & CSS",
          topics: [
            "HTML Structure, Forms",
            "Responsive Design",
            "Flexbox & Grid"
          ]
        },
        {
          name: "JavaScript",
          topics: [
            "DOM Manipulation",
            "Async Programming",
            "ES6+ Concepts"
          ]
        },
        {
          name: "React.js",
          topics: [
            "Components & Props",
            "State Management",
            "React Hooks",
            "API Integration",
            "Building Modern UI"
          ]
        }
      ]
    },
    {
      name: "Module 6 — Tools & Deployment",
      topics: [
        "Git & GitHub",
        "Postman",
        "VS Code & IntelliJ",
        "Deployment on Cloud (AWS / Vercel / Render)"
      ]
    },
    {
      name: "Module 7 — Capstone Project",
      description:
        "A complete full-stack application built using React.js, Spring Boot, and MySQL with authentication, CRUD operations, admin panel, and deployment."
    }
  ],

  careerPaths: [
    "Java Full Stack Developer",
    "Backend Developer (Java + Spring Boot)",
    "Frontend Developer (React.js)",
    "Software Developer",
    "API Developer",
    "Database Engineer / SQL Developer"
  ],

  eligibility: [
    "Freshers",
    "Students (B.Tech, BCA, MCA, B.Sc)",
    "Working Professionals",
    "Career Switchers",
    "No prior coding experience required"
  ],

  certification:
    "You will receive a Binary Devs Academy Full Stack Developer Certificate recognized by industry recruiters.",

  demandReasons: [
    "Java is used for large-scale enterprise applications.",
    "Highly stable & scalable technology stack.",
    "Used by companies like Amazon, Netflix, Google, Flipkart, Paytm.",
    "High salary package and excellent career growth."
  ],

  cta: {
    message: "Enroll Today",
    contact: {
      phone: "+91 XXXXX XXXXX",
      email: "support@binarydevs.com"
    },
    actions: ["Call / WhatsApp", "Request Free Demo"]
  }
};

const dataScienceCourse = {
  name: "data_science",
  title: "Data Science Mastery Program",
  tagline: "Become a Data Scientist with Python, Machine Learning, SQL, Statistics & AI Projects.",
  heroImageQueries: DataScience,

  price: {
    original: 55000,
    discountPercentage: 45,
    discounted: 55000 - (55000 * 0.45),
    emi: "Starts at ₹3,000/month",
    offerNote: "Best seller discount"
  },

  about:
    "This Data Science Mastery Program takes you from basics to advanced ML with real datasets. Learn Python for data, statistics, SQL, Machine Learning, Deep Learning, and AI with hands-on projects.",

  highlights: [
    "Zero to advanced Data Science training",
    "Machine Learning + AI + Deep Learning",
    "Industry-level case studies",
    "Python, SQL, Statistics & Visualization",
    "5+ ML projects + 1 Capstone",
    "Interview preparation"
  ],

  modules: [
    {
      name: "Module 1 — Python for Data Science",
      topics: [
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "EDA practices"
      ]
    },
    {
      name: "Module 2 — Statistics & Math",
      topics: [
        "Descriptive & Inferential Statistics",
        "Probability",
        "Hypothesis Testing",
        "Regression Math"
      ]
    },
    {
      name: "Module 3 — SQL",
      topics: ["Joins", "Aggregations", "CTEs", "Analytical Queries"]
    },
    {
      name: "Module 4 — Machine Learning",
      topics: [
        "Regression",
        "Classification",
        "SVM",
        "Decision Trees",
        "Random Forest",
        "Model Tuning"
      ]
    },
    {
      name: "Module 5 — Deep Learning",
      topics: ["Neural Networks", "TensorFlow", "Keras", "Image Models"]
    },
    {
      name: "Module 6 — Tools",
      topics: ["Jupyter", "VS Code", "GitHub", "Data Pipelines"]
    },
    {
      name: "Module 7 — Capstone Project",
      description:
        "An end-to-end ML model trained, evaluated, and deployed on cloud."
    }
  ],

  careerPaths: [
    "Data Scientist",
    "ML Engineer",
    "AI Engineer",
    "Data Analyst",
    "Business Analyst"
  ],

  eligibility: ["Students", "Professionals", "Career Switchers"],

  certification: "Binary Devs Academy Data Science Certification.",

  demandReasons: [
    "Data Science is the #1 most demanded IT role.",
    "Top salaries in the industry.",
    "Used across all industries."
  ],

  cta: {
    message: "Enroll Today",
    contact: { phone: "+91 XXXXX XXXXX", email: "support@binarydevs.com" },
    actions: ["Call / WhatsApp", "Request Free Demo"]
  }
};

const dataAnalystCourse = {
  name: "data_analyst",
  title: "Data Analyst Professional Course",
  tagline: "Master Excel, SQL, Power BI, Statistics & Dashboards.",
  heroImageQueries: DataAnalyst,

  price: {
    original: 35000,
    discountPercentage: 40,
    discounted: 35000 - (35000 * 0.40),
    emi: "Starts at ₹2,000/month",
    offerNote: "Early bird discount"
  },

  about:
    "This Data Analyst course helps you master Excel, SQL, Power BI, statistics, and dashboard building. Perfect for beginners and career switchers.",

  highlights: [
    "Complete beginner-friendly course",
    "Excel + SQL + Power BI",
    "Case studies & dashboards",
    "Industry-ready curriculum",
    "Certificate + Interview prep"
  ],

  modules: [
    {
      name: "Module 1 — Excel for Analysis",
      topics: ["Functions", "Pivot Tables", "Dashboards", "Cleaning"]
    },
    {
      name: "Module 2 — SQL",
      topics: [
        "Joins",
        "Aggregations",
        "Window Functions",
        "Practice Projects"
      ]
    },
    {
      name: "Module 3 — Statistics",
      topics: ["Basic Stats", "Variance", "Correlation", "Probability"]
    },
    {
      name: "Module 4 — Power BI",
      topics: ["Modeling", "Power Query", "DAX", "Dashboard Creation"]
    },
    {
      name: "Module 5 — Analytics Projects",
      description:
        "Build interactive dashboards & real datasets analysis."
    }
  ],

  careerPaths: [
    "Data Analyst",
    "Business Analyst",
    "BI Developer",
    "MIS Analyst"
  ],

  eligibility: ["Beginners", "Students", "Working Professionals"],

  certification:
    "Binary Devs Academy Data Analyst Certificate.",

  demandReasons: [
    "Data Analysis jobs are growing fast.",
    "Entry-level friendly with good salaries."
  ],

  cta: {
    message: "Enroll Today",
    contact: { phone: "+91 XXXXX XXXXX", email: "support@binarydevs.com" },
    actions: ["Call / WhatsApp", "Request Free Demo"]
  }
};

const pythonProgrammingCourse = {
  name: "python_programming",
  title: "Python Programming – Beginner to Advanced",
  tagline: "Start your programming journey with the most beginner-friendly language.",
  heroImageQueries: PythonProgramming,

  price: {
    original: 18000,
    discountPercentage: 30,
    discounted: 18000 - (18000 * 0.30),
    emi: "Starts at ₹999/month",
    offerNote: "Beginner special offer"
  },

  about:
    "A complete Python training covering basics to advanced concepts including OOP, Modules, File Handling, and real exercises.",

  highlights: [
    "Perfect for absolute beginners",
    "Covers all fundamentals + OOP",
    "Hands-on coding exercises",
    "Small projects included",
    "Certificate of Completion"
  ],

  modules: [
    {
      name: "Module 1 — Basics",
      topics: ["Variables", "Loops", "Conditions"]
    },
    {
      name: "Module 2 — Intermediate",
      topics: ["Functions", "Modules", "Error Handling"]
    },
    {
      name: "Module 3 — Advanced",
      topics: ["OOP", "Decorators", "Generators"]
    }
  ],

  careerPaths: ["Python Developer", "Data Analyst (Python)", "Automation Engineer"],

  eligibility: ["Beginners", "Students"],

  certification: "Binary Devs Academy Python Programming Certificate.",

  demandReasons: ["Python is used everywhere — AI, Web, Data."],

  cta: {
    message: "Enroll Today",
    contact: { phone: "+91 XXXXX XXXXX", email: "support@binarydevs.com" },
    actions: ["Call / WhatsApp", "Request Free Demo"]
  }
};


const sqlPowerBiCourse = {
  name: "sql_powerbi",
  title: "SQL & Power BI Professional Course",
  tagline: "Master data cleaning, modeling, and dashboards.",
  heroImageQueries: SqlPowerBI,

  price: {
    original: 20000,
    discountPercentage: 30,
    discounted: 20000 - (20000 * 0.30),
    emi: "Starts at ₹1200/month",
    offerNote: "Analytics special"
  },

  about:
    "Learn SQL for data analysis and Power BI for dashboard building. Perfect for data careers.",

  highlights: [
    "SQL + BI essentials",
    "Real business dashboards",
    "Industry case studies",
    "Certificate included"
  ],

  modules: [
    {
      name: "Module 1 — SQL",
      topics: ["Joins", "Window Functions", "Queries"]
    },
    {
      name: "Module 2 — Power BI",
      topics: ["Modeling", "DAX", "Visuals"]
    }
  ],

  careerPaths: ["Data Analyst", "BI Analyst", "SQL Developer"],

  eligibility: ["Beginners", "Students", "Professionals"],

  certification:
    "Binary Devs Academy SQL & Power BI Certificate.",

  demandReasons: ["Every company requires analysts."],

  cta: {
    message: "Enroll Today",
    contact: { phone: "+91 XXXXX XXXXX", email: "support@binarydevs.com" },
    actions: ["Call / WhatsApp", "Request Free Demo"]
  }
};

const pythonFullStackCourse = {
  name: "python_full_stack",
  title: "Python Full Stack Development Course",
  tagline: "Master Python, Django, REST APIs, SQL & React to become a job-ready full stack developer.",
  heroImageQueries: PythonFullStack,

  price: {
    original: 42000,
    discountPercentage: 35,
    discounted: 42000 - (42000 * 0.35),
    emi: "Starts at ₹2,300/month",
    offerNote: "Special launch offer"
  },

  about:
    "This Python Full Stack Course trains you in Python, Django, REST APIs, MySQL, HTML, CSS, JavaScript, and React.js. You will build real-time applications with authentication, CRUD operations, and deployment, making you fully industry-ready.",

  highlights: [
    "Beginner-friendly full-stack curriculum",
    "Master Python + Django + REST API development",
    "Frontend using HTML, CSS, JavaScript & React",
    "5+ real-world full stack projects",
    "Interview preparation & resume building",
    "Certificate of Completion"
  ],

  modules: [
    {
      name: "Module 1 — Python Basics to Advanced",
      topics: [
        "Variables, Data Types, Loops",
        "Functions, Modules, Packages",
        "OOP in Python",
        "Exception Handling",
        "File Handling",
        "Generators & Decorators"
      ]
    },
    {
      name: "Module 2 — Database & SQL",
      topics: [
        "MySQL Basics",
        "Joins, Subqueries, Indexing",
        "Database Design",
        "Writing Real-World Queries"
      ]
    },
    {
      name: "Module 3 — Django Framework",
      topics: [
        "Django Architecture",
        "Models, Views, Templates",
        "ORM",
        "Authentication System",
        "Session & Cookies",
        "Django Admin Customization"
      ]
    },
    {
      name: "Module 4 — REST APIs",
      topics: [
        "Django REST Framework",
        "Serializers",
        "Permissions & Authentication",
        "Building Real API Systems"
      ]
    },
    {
      name: "Module 5 — Frontend Development",
      submodules: [
        { name: "HTML & CSS", topics: ["Structure", "Forms", "Responsive Design"] },
        { name: "JavaScript", topics: ["ES6+", "Fetch API", "DOM Manipulation"] },
        { name: "React.js", topics: ["Hooks", "State", "Routing", "API Integration"] }
      ]
    },
    {
      name: "Module 6 — Tools & Deployment",
      topics: ["Git & GitHub", "Postman", "VS Code", "Cloud Deployment"]
    },
    {
      name: "Module 7 — Capstone Project",
      description:
        "A real-time full-stack application built with Django REST API, React.js, and MySQL."
    }
  ],

  careerPaths: [
    "Python Full Stack Developer",
    "Backend Developer (Python)",
    "Django Developer",
    "API Developer",
    "Software Engineer"
  ],

  eligibility: ["Freshers", "Students", "Working Professionals", "Career Switchers"],

  certification:
    "You will receive a Binary Devs Academy Python Full Stack Developer Certificate.",

  demandReasons: [
    "Python powers modern backend systems.",
    "Used by companies like Google, Instagram, Spotify.",
    "Huge demand for Django and REST API developers.",
    "Easy to learn, high salary."
  ],

  cta: {
    message: "Enroll Today",
    contact: { phone: "+91 XXXXX XXXXX", email: "support@binarydevs.com" },
    actions: ["Call / WhatsApp", "Request Free Demo"]
  }
};



const courses = [
  javaFullStackCourse,
  pythonFullStackCourse,
  dataScienceCourse,
  dataAnalystCourse,
  pythonProgrammingCourse,
  sqlPowerBiCourse,
  databaseDevelopmentCourse,
  frontendReactCourse,
  generativeAICourse,
  backendJavaCourse,
  backendPythonCourse,
];


const DataSlice = createSlice({
    name : 'course_slice',
    initialState : {
        courses : courses
    },
})

export default DataSlice.reducer