import Link from "next/link";

type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt?: string;
};

const posts: BlogPostMeta[] = [
  { slug: "hello-world", title: "Hello World", excerpt: "First MDX post in the portfolio." },
];

export default function BlogIndexPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16"> 
      <h1 className="text-3xl md:text-4xl font-bold">Blog</h1>
      <p className="mt-2 text-foreground/80">Technical notes, learnings, and tutorials.</p>
      <ul className="mt-8 space-y-4">
        {posts.length === 0 && (
          <li className="text-sm text-foreground/70">No posts yet. Add MDX files later.</li>
        )}
        {posts.map((p) => (
          <li key={p.slug} className="border-b border-black/10 dark:border-white/10 pb-4">
            <Link href={`/blog/${p.slug}`} className="text-lg underline">
              {p.title}
            </Link>
            <p className="text-sm text-foreground/80">{p.excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}


