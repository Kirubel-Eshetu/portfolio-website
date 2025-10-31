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
    "👨🏾‍💻 A young programmer based in Addis Ababa, Ethiopia, specializing in MERN stack. \n 🖥️ Currently, trying to build projects from real-world experiences I encounter.\n\n📖 &ldquo;ለተቀበሉት ሁሉ ግን በስሙ ለሚያምኑት ለእነርሱ የእግዚአብሔር ልጆች ይሆኑ ዘንድ ሥልጣንን ሰጣቸው።&rdquo; ዮሐንስ ወንጌል 1:12 ✝️\n📖 &ldquo;Yet to all who did receive him, to those who believed in his name, he gave the right to become children of God.&rdquo; John 1:12 ✝️",
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
    "JavaScript",
    "XML",
    "Bootstrap",
    "PHP",
    "jQuery",
    "Node.js",
    "Express.js",
    "EJS",
    "Git",
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
        "🗄 Developed for Final Year Poject Defense, Jimma Zone Prisoner Information System (JZPIS) securely stores prisoner information through a database system.",
      technologies: ["HTML", "CSS", "Bootstrap", "JS", "PHP", "MySQL", "Python"],
      href: "https://jzpis.vercel.app/",
      repo: "https://github.com/Kirubel-Eshetu/JZPIS"
    },
    {
      title: "CV Kirubel",
      description:
        "👤 Made my CV as a webpage and made it accessible on the internet for recruiters. I had my first website deployment experience. First the webpage was made using HTML & CSS, after learning React, I have changed the stack to it.",
      technologies: ["HTML", "CSS", "React"],
      href: "https://cv-kirubel-eshetu.vercel.app",
      repo: "https://github.com/Kirubel-Eshetu/Cv-Kirubel-Eshetu"
    },
    {
      title: "Classic Stopwatch",
      description: "⌛ A stopwatch web application made with HTML, CSS and JavaScript. It helps to track time in HH:MM:SS:CC format implying Hours:Minutes:Seconds:Centiseconds. You can also take breakpoint laps.",
      technologies: ["HTML", "CSS", "JavaScript"],
      href: "https://classic-stopwatch.vercel.app/",
      repo: "https://github.com/Kirubel-Eshetu/practice-codes/tree/main/prodigy-infotech/internship-2.0/web-dev-internship/task-2-stopwatch-web-application"
    },
    {
      title: "Weather App",
      description:
      "🌤 This weather app informs the weather condition of a city you want or based on your current location.",
      technologies: ["HTML", "CSS", "JavaScript"],
      href: "https://weather-app-krypthon.vercel.app/",
      repo: "https://github.com/Kirubel-Eshetu/practice-codes/tree/main/prodigy-infotech-internship/Task-5-Weather-App"
    },
    {
      title: "Mihiret Bonda",
      description: "👖🌐 Developed a website for my Mihiret Bonda store. Used HTML,CSS & JS for start and turned it to React later.",
      technologies: ["HTML", "CSS", "JS", "React"],
      href: "https://mihiret-bonda.vercel.app",
      repo: "https://github.com/Kirubel-Eshetu/mihiret-bonda"
    },
    {
      title: "QuoLand",
      description:
      "📖 Land of Bible Verses and Inspirational Quotes 💬",
      technologies: ["HTML", "CSS", "JavaScript", "JSON"],
      href: "https://quoland.vercel.app/",
      repo: "https://github.com/Kirubel-Eshetu/QuoLand"
    }
  ],

  experience: <Experience[]>[
    {
      company: "INSA",
      role: "Software Developer",
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
      degree: "Diploma in Natural Science",
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
  baseUrl: "https://kirubel-eshetu-portfolio.vercel.app/",
} as const;

export type SiteConfig = typeof siteConfig;


