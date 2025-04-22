// app/stories/blogs/[slug]/page.tsx

import path from "path";
import { promises as fs } from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";

const contentPath = path.join(process.cwd(), "content/blogs");

interface BlogPostFrontmatter {
  title: string;
  datePublished: string;
  readingTime?: string;
}

// 👇 Now we define `params` as a Promise type
type BlogPageParams = Promise<{ slug: string }>;

interface BlogPostPageProps {
  params: BlogPageParams;
}

async function getPostBySlug(slug: string): Promise<{
  frontmatter: BlogPostFrontmatter;
  content: string;
} | null> {
  try {
    const filePath = path.join(contentPath, `${slug}.md`);
    const fileContent = await fs.readFile(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    if (!data.title || !data.datePublished) {
      console.warn(`Missing required frontmatter in ${slug}.md`);
      return null;
    }

    return {
      frontmatter: data as BlogPostFrontmatter,
      content,
    };
  } catch (error) {
    console.error(`Error loading blog post "${slug}":`, error);
    return null;
  }
}

export async function generateStaticParams() {
  try {
    const files = await fs.readdir(contentPath);
    return files
      .filter((file) => file.endsWith(".md"))
      .map((file) => ({
        slug: file.replace(".md", ""),
      }));
  } catch (error) {
    console.error("Error reading blog content directory:", error);
    return [];
  }
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.frontmatter.title,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, content } = post;

  return (
    <div className="bg-color py-32 blog-single">
      <div className="max-w-[1240px] flex flex-col m-auto gap-y-4  px-5 md:px-8 xl:px-0">
        {/* Date & Reading Time */}
        <div className="flex flex-row gap-x-2 justify-center">
          <p className="font-secondary text-[18px]">
            {new Date(frontmatter.datePublished).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </p>
          <p>.</p>
          <p className="font-secondary text-[18px]">
            {frontmatter.readingTime || "3 mins"}
          </p>
        </div>

        {/* Title */}
        <h1 className="text-[#592AC7] text-3xl md:text-4xl lg:text-5xl leading-[120%] font-semibold text-center font-primary">
          {frontmatter.title}
        </h1>

        {/* Markdown Content */}
        <article className="prose lg:prose-lg max-w-none mt-10 mx-auto blog">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
