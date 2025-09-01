import fs from "node:fs"; //filesystem
import path from "node:path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const dynamicParams = true;

const CONTENT_DIR = path.join(process.cwd(), "src", "content", "blog");

export async function generateStaticParams() {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx")); 
  return files.map((file) => ({ slug: file.replace(/\.mdx$/, "") }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return {};
  const source = fs.readFileSync(filePath, "utf8");
  const { data } = matter(source);
  return {
    title: data.title ?? slug,
    description: data.excerpt ?? undefined,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return notFound();
  const { default: MDXContent } = await import(`@/content/blog/${slug}.mdx`);
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 prose dark:prose-invert">
      <MDXContent />
    </main>
  );
}


