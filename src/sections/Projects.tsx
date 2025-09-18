"use client";
import { Section } from "@/components/Section";
import { siteConfig } from "@/config/site";
import { useMemo, useState } from "react";
import { TiltCard } from "@/components/TiltCard";
import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";

const allTags = Array.from(
  new Set(siteConfig.projects.flatMap((p) => p.technologies))
).sort();

export function ProjectsSection() {
  const [active, setActive] = useState<string | "all">("all");
  const filtered = useMemo(() => {
    if (active === "all") return siteConfig.projects;
    return siteConfig.projects.filter((p) => p.technologies.includes(active));
  }, [active]);

  return (
    <Section id="projects" title="Projects" subtitle="Selected Work">
      <div className="mb-6 flex flex-wrap items-center gap-2 text-sm">
        <button onClick={() => setActive("all")} className={`rounded-md border px-3 py-1.5 ${active === "all" ? "bg-accent text-background" : "border-black/10 dark:border-white/20"}`}>All</button>
        {allTags.map((t) => (
          <button key={t} onClick={() => setActive(t)} className={`rounded-md border px-3 py-1.5 ${active === t ? "bg-accent text-background" : "border-black/10 dark:border-white/20"}`}>
            {t}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((p) => (
          <TiltCard
            key={p.title}
            className="group relative overflow-hidden rounded-xl border border-black/10 dark:border-white/20 transition-transform hover:-translate-y-1 hover:shadow-md card-surface h-64 md:h-72"
          >
            {p.href && !p.image && p.title !== "GitHub Profile" && (
              <iframe
                src={p.href}
                title={`${p.title} preview`}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                sandbox="allow-forms allow-scripts allow-same-origin allow-popups"
              />
            )}
            {p.title === "GitHub Profile" && (
              <div className="absolute inset-0 h-full w-full">
                {/* Try GitHub profile viewer iframe */}
                <iframe
                  src="https://github-readme-stats.vercel.app/api?username=Kirubel-Eshetu&show_icons=true&theme=dark&hide_border=true&count_private=true&include_all_commits=true&line_height=30&card_width=100%&hide_title=true"
                  title="GitHub Profile Stats"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                  onLoad={() => {
                    // Try alternative iframe source if first one fails
                    const iframe = document.querySelector('iframe[title="GitHub Profile Stats"]') as HTMLIFrameElement;
                    if (iframe && iframe.contentDocument?.body?.textContent?.includes('Not Found')) {
                      iframe.src = `https://github-readme-stats.vercel.app/api?username=Kirubel-Eshetu&show_icons=true&theme=dark&hide_border=true&count_private=true&include_all_commits=true&line_height=30&card_width=100%&hide_title=true&show_owner=true`;
                    }
                  }}
                />
                
                {/* Fallback overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">@Kirubel-Eshetu</h3>
                    <p className="text-sm text-gray-300 mb-4">GitHub Profile</p>
                    <a
                      href="https://github.com/Kirubel-Eshetu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            )}
            {p.image && p.title !== "GitHub Profile" && (
              <img
                src={p.image}
                alt={`${p.title} preview`}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            )}
            {!p.href && !p.image && p.title !== "GitHub Profile" && (
              <div className="absolute inset-0 flex items-center justify-center text-sm text-foreground/70">No live preview</div>
            )}

            {/* Bottom info panel: separated from the preview, reveals on hover */}
            <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <div className="glass border-t border-black/10 dark:border-white/10 bg-background/80 backdrop-blur px-4 py-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold truncate" title={p.title}>{p.title}</h3>
                    <p className="mt-0.5 text-xs text-foreground/80 line-clamp-2">{p.description}</p>
                  </div>
                  <div className="flex items-center gap-3 text-base shrink-0">
                    {p.href && (
                      <a
                        className="no-underline hover:underline underline-offset-4 decoration-accent hover:text-accent"
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Open live site"
                        title="Open live site"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                    {p.repo && (
                      <a
                        className="no-underline hover:underline underline-offset-4 decoration-accent hover:text-accent"
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Open source code on GitHub"
                        title="Open source code on GitHub"
                      >
                        <FiGithub />
                      </a>
                    )}
                  </div>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.technologies.map((t) => (
                    <span key={t} className="text-[10px] rounded dark:bg-white/10 px-2 py-0.5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </Section>
  );
}


