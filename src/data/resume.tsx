import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Chirag Sonar",
  initials: "CS",
  url: "https://dillion.io",
  location: "India, IN",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "Combining technical expertise and design thinking, I build seamless, user-focused solutions and contribute to team success as a Frontend Developer",
  // "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary:
    "Frontend Developer with 1+ year of experience in building high-performance, scalable web applications using React.js, Next.js, and TypeScript. Skilled in crafting intuitive UI/UX experiences, optimizing component performance, and implementing state management with Redux and Zustand.",
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
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
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
      href: "",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/cspan.svg",
      start: "June 2023",
      end: "Present",
      description: [
        "Led frontend development of a Contract Lifecycle Management (CLM) platform, collaborating with CTO and team to ensure smooth feature implementation.",
        "Designed and built a drag, drop, and resize feature from scratch, improving document editing efficiency.",
        "Developed a signature customization module allowing users to create, upload, or draw signatures, enhancing contract flexibility.",
        "Implemented advanced UI/UX enhancements, reducing friction and improving usability for different organization roles.",
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
      href: "https://buildspace.so",
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
