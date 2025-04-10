import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, CodeXmlIcon } from "lucide-react";

export const DATA = {
  name: "Chirag Sonar",
  initials: "CS",
  url: "https://chiragsonar.vercel.app/",
  location: "India, IN",
  locationLink: "https://www.google.com/maps/place/india",
  description: "Combining technical expertise and design thinking, I build seamless, user-focused solutions and contribute to team success as a Frontend Developer",
  summary:
  "Frontend Developer with over 2 years of experience building scalable web applications using React.js, Next.js, and TypeScript. Proficient in web development trifecta, with expertise in modern frameworks and libraries. Skilled in creating responsive, mobile-first designs, optimizing web applications for speed and performance, and collaborating with cross-functional teams to deliver end-to-end solutions. Seeking to leverage my expertise in a dynamic role to deliver user centric, high-performance web solutions.",
  avatarUrl: "/me.jpeg",
  skills: [
    "JavaScript",
    "TypeScript",
    "ReactJS",
    "NextJS",
    "Redux",
    "Zustand",
    "Framer Motion",
    "Tailwind CSS",
    "ExpressJS",
    "REST API",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Firebase",
    "Git",
    "GitHub",
    "Jira",
    "Agile",
    "Scrum",
    "HTML",
    "CSS",
    "SCSS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/lab", icon: CodeXmlIcon, label: "Lab" },
  ],
  contact: {
    email: "chirag17.dev@gmail.com",
    tel: "+917974879669",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/chirag1718",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/chiragsonar/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ChiragdotDev",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:chirag.work.dev@gmail.com?subject=Excited%20to%20Connect%20via%20Your%20Portfolio!&body=Hi%20Chirag,%0A%0AI%20came%20across%20your%20portfolio%20website%20and%20wanted%20to%20reach%20out.%20Your%20work%20is%20impressive%20and%20I%27d%20love%20to%20connect!%0A%0ARegards,%0A[Your%20Name]",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "ContractSPAN",
      href: "https://contractspan.com/",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/cspan.svg",
      start: "June 2023",
      end: "Present",
      description: [
        "Led frontend development of a Contract Lifecycle Management (CLM) and business intelligence platform, building the web app from scratch. Collaborated closely with the CTO and backend developers to ensure seamless feature implementation and frontend integration.",
        "Developed a custom field placement system for document editing, enabling precise signature mapping to PDF coordinates and enhancing accuracy without external libraries",
        "Built a dynamic & secure e-signature customization module with tailored modals, offering users three signature methods to attach to documents including typed, uploaded, or hand-drawn directly on the site. This robust feature set provided users with full control over their signatures and initials, enhancing contract flexibility and accuracy.",
        "Implemented advanced UI/UX enhancements, for a multi-role management system, enabling org admins to onboard users, assign department-level access, and delegate permissions. Streamlined cross-department navigation for admins, enhancing data visibility and operational efficiency",
        "Optimized performance by reducing page load times and implementing efficient state management using Zustand.",
        "Integrated error handling mechanisms, improving application stability and debugging efficiency."
      ],
    },
    {
      company: "Digital Projekt",
      badges: [],
      href: "",
      location: "Indore, India",
      title: "Frontend Developer",
      logoUrl: "/digital-projekt.jpeg",
      start: "January 2022",
      end: "July 2022",
      description: [
        "Developed responsive web pages and enhanced UI components using React.js, Next.js, TailwindCSS.",
        "Implemented SEO strategies and optimized site performance, improving page rankings and load speeds."
      ],
    },
  ],
  education: [
    {
      school: "Shri Vaishnav Vidyapeeth Vishwavidyalaya",
      href: "#",
      degree: "Bachelor of Science, Computer Science",
      logoUrl: "/college.png",
      start: "2018",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Admin Dashboard",
      href: "https://admin-dashboard-chirag.vercel.app/",
      dates: "",
      active: true,
      description:
        "Developed a comprehensive admin dashboard to monitor wallet balances, revenue, and user assets, enhancing financial tracking.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Framer Motion",
        "ChartJs"
      ],
      links: [
        {
          type: "Website",
          href: "https://admin-dashboard-chirag.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/admin-dashboard.png",
      video: "",
    },
    {
      title: "Slack Clone",
      href: "https://slack-clone-sooty.vercel.app/",
      dates: "",
      active: true,
      description:
        "Built a real-time chat application inspired by Slack, featuring chat rooms and Google OAuth authentication.",
      technologies: [
        "React.js",
        "Material UI",
        "Styled Components",
        "Redux",
        "Firebase"
      ],
      links: [
        {
          type: "Website",
          href: "https://slack-clone-sooty.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/slack-clone.png",
      video: "",
    },
  ],
} as const;
