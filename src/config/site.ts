export type SocialLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  href?: string;
  repo?: string;
  image?: string;
};

export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  summary: string;
  highlights?: string[];
};

export type Education = {
  school: string;
  degree: string;
  start: string;
  end: string;
};

export const siteConfig = {
  name: "Kirubel Eshetu",
  role: "Computer Programmer",
  location: "Addis Ababa, Ethiopia",
  email: "kirubelwinner@gmail.com",
  avatar: "/anime-hacker.jpg",
  description:
    "👨🏾‍💻 A young programmer from Ethiopia focusing on the MERN Stack. I try to build projects from real-world experiences I encounter.\n\n📖 &ldquo;ለተቀበሉት ሁሉ ግን በስሙ ለሚያምኑት ለእነርሱ የእግዚአብሔር ልጆች ይሆኑ ዘንድ ሥልጣንን ሰጣቸው።&rdquo; ዮሐንስ ወንጌል 1:12 ✝️\n📖 &ldquo;Yet to all who did receive him, to those who believed in his name, he gave the right to become children of God.&rdquo; John 1:12 ✝️",
  keywords: [
    "Computer Programmer",
    "Web Developer",
    "Frontend",
    "Backend",
    "Node.js",
    "Express",
    "React",
    "Next.js",
  ],

  socials: <SocialLink[]>[
    { label: "Email", href: "mailto:kirubelwinner@gmail.com" },
    { label: "GitHub", href: "https://github.com/Kirubel-Eshetu" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kirubel-eshetu-tefera" },
    { label: "Telegram", href: "https://t.me/KiraFix_tech" },
    { label: "X/Twitter", href: "https://x.com/@KirubelEshetuTe" },
    { label: "Youtube", href: "https://www.youtube.com/@KirubelEshetuTefera" },
  ],

  skills: [
    "HTML",
    "CSS",
    "C++",
    "Java",
    "MySQL",
    "XML",
    "JavaScript",
    "Bootstrap",
    "PHP",
    "jQuery",
    "Node.js",
    "Express.js",
    "EJS",
    "git",
    "Postman",
    "React",
    "MongoDB",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
  ],

  projects: <Project[]>[
    {
      title: "JZPIS",
      description:
        "Developed for Final Year Poject Defense, Jimma Zone Prisoner Information System (JZPIS) securely stores prisoner information through a database system.",
      technologies: ["HTML", "CSS", "Bootstrap", "JS", "PHP", "mySQL", "Python"],
      href: "https://github.com/Kirubel-Eshetu/JZPIS",
      repo: "https://github.com/Kirubel-Eshetu/JZPIS"
    },
    {
      title: "GitHub Profile",
      description:
      "Interactive GitHub profile showcasing my projects, skills, and contributions with an attractive README design.",
      technologies: ["markdown", "HTML", "CSS", "GitHub"],
      href: "https://github.com/Kirubel-Eshetu",
      repo: "https://github.com/Kirubel-Eshetu/Kirubel-Eshetu"
    },
    {
      title: "CV Kirubel",
      description:
        "Made my CV as a webpage and made it accessible on the internet for recruiters. I had my first website deployment Experience. First the webpage was made using HTML & CSS, after learning React I have changed the stack to React.",
      technologies: ["HTML", "CSS", "REACT"],
      href: "https://cv-kirubel-eshetu.vercel.app",
      repo: "https://github.com/Kirubel-Eshetu/Cv-Kirubel-Eshetu"
    },
    {
      title: "Mihiret Bonda",
      description: "Developed a website for my Mihiret Bonda store. Used HTML,CSS & JS for start and turned it to React later.",
      technologies: ["HTML", "CSS", "JS", "REACT"],
      href: "https://mihiret-bonda.vercel.app",
      repo: "https://github.com/Kirubel-Eshetu/mihiret-bonda"
    }
  ],

  experience: <Experience[]>[
    {
      company: "INSA",
      role: "System Developer",
      start: "Mar 2025",
      end: "Present",
      summary:
        "Worked on bill aggregation platforms for understanding the Derash Bill Aggregator System.",
      highlights: [
        "Code update from legacy Angular 5 to Angular 18.",
        "Project on Derash biller and agent Systems."
      ],
    },
    {
      company: "iSON Xperiences ",
      role: "Customer Service Representative",
      start: "Aug 2024",
      end: "Dec 2024",
      summary: "Provided technical support and assistance for Safaricom Ethiopia customers.",
      highlights: [
        "Addressed customers inquiries related to network usage and M-Pesa.",
        "Provided information on new Safaricom services."
      ]
    },
    {
      company: "Addis Media Network",
      role: "IT technician and Network Administrator Intern",
      start: "Jul 2023",
      end: "Aug 2023",
      summary: " Worked on maintenance of major Hardware parts and introduced myself to major networking apparatus.",
      highlights: [
        "Network installation project",
        "Hardware maintenance and troubleshooting" 
      ]
    }
  ],

  education: <Education[]>[
    {
      school: "Jimma University / Computer Science",
      degree: "BSc in Computer Science",
      start: "2021",
      end: "2024",
    },
    {
      school: "Cisterican Monastery Mariam Tsion / Natural Science",
      degree: "Deploma in Natural Science",
      start: "2016",
      end: "2020"

    },
    {
      school: "Cisterican Monastery Mariam Tsion / Elementry Education",
      degree: "Elementery Education",
      start: "2013",
      end: "2016"
    },
    {
      school: "Alemaya Primary School / Primary Education",
      degree: "5th Grade",
      start: "2012",
      end: "2013"
    },
    {
      school: "Eyosias Primary School / Primary Education",
      degree: "Kg - 4th Grade",
      start: "2004",
      end: "2012"
    }

  ],
  ogImage: "/next.svg",
  baseUrl: "https://kirubel-portfolio-website.vercel.app",
} as const;

export type SiteConfig = typeof siteConfig;


