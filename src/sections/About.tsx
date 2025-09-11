import { Section } from "@/components/Section";

export function AboutSection() {
  return (
    <Section id="about" title="About" subtitle="Introduction">
      <div className="prose dark:prose-invert">
        <p>
          ⌨️ Without noticing a thing, I have had my exposure to coding while I was in HighSchool through my ICT Teacher. We were instructed
          to use HTML & CSS on Notepad++ to create websites, but were confused about it and end up hating the lectures. <br />
          🎒 While in University, I got a chance to introduce myself with C++, mySQL, Java, Embedded C, JavaScript & PHP.  <br />
          💻 After University, I have worked with Node.js, Express, EJS, git & React. Currently I am focusing on MongoDB and trying my very best to improve myself as a programmer.
        </p>
      </div>
    </Section>
  );
}


