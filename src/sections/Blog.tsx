import { Section } from "@/components/Section";

export function BlogSection() {
  return (
    <Section id="blog" title="Blog" subtitle="Writing">
      <p className="text-sm text-foreground/80">
        title: Good News <br />
        excerpt: Believeing in Jesus will get human beings to Heaven. <br />
        "Jesus answered, 'I am the way and the truth and the life. No one comes to the Father except through me.'" John 14:6
      </p>
      
      <div className="mt-4">
        <a className="underline" href="#" target="_blank" rel="noreferrer">Visit my blog</a>
      </div>
    </Section>
  );
}


