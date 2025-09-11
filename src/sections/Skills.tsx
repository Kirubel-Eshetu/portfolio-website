import { Section } from "@/components/Section";
import { siteConfig } from "@/config/site";
import { Magnetic } from "@/components/Magnetic";

export function SkillsSection() {
  const skillLinks: Record<string, string> = {
    html: "https://www.w3schools.com/html/",
    css: "https://www.w3schools.com/css/",
    cplus: "https://www.w3schools.com/cpp/",
    java: "https://www.java.com/en/",
    mysql: "https://www.mysql.com/",
    xml:"https://www.w3schools.com/xml/",
    javascript: "https://www.w3schools.com/js/",
    bootstrap: "https://getbootstrap.com/",
    php: "https://www.php.net/",
    jquery:"https://jquery.com/",
    nodejs: "https://nodejs.org/",
    expressjs: "https://expressjs.com/",
    ejs: "https://www.npmjs.com/package/ejs",
    git: "https://git-scm.com/",
    postman: "https://www.postman.com/",
    react: "https://react.dev/",
    mongodb: "https://www.mongodb.com/",
    TypeScript:"https://www.typescriptlang.org/",
    next: "https://nextjs.org/",
    tailwind: "https://tailwindcss.com/"
  };

  return (
    <Section id="skills" title="Skills" subtitle="What I Use">
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {siteConfig.skills.map((s) => {
          const key = s.toLowerCase();
          const href = skillLinks[key];
          return (
            <Magnetic
              key={s}
              className="group chip rounded-md border border-black/10 dark:border-white/20 px-0 py-0 text-sm transition-transform hover:-translate-y-0.5 hover:shadow-sm card-surface cursor-pointer">
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full h-full px-3 py-2 text-current"
                  aria-label={`${s} official website`}
                >
                  {s}
                </a>
              ) : (
                <span className="block w-full h-full px-3 py-2 text-current">{s}</span>
              )}
            </Magnetic>
          );
        })}
      </ul>
    </Section>
  );
}


