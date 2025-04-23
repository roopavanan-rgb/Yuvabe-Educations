// src/lib/fetchFeaturedPosts.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  title: string;
  slug: string;
  datePublished: string;
  excerpt: string;
  featuredImage?: string;
  category?: string[];
  imagePosition?: string;
  isFeaturedPost?: boolean;
}

const BLOG_DIR = path.join(process.cwd(), "content/blogs");

export const fetchFeaturedPosts = (): BlogPost[] => {
  const files = fs.readdirSync(BLOG_DIR);
  const posts: BlogPost[] = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const filePath = path.join(BLOG_DIR, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      return {
        slug,
        title: data.title || "Untitled",
        datePublished: data.datePublished || "Unknown date",
        excerpt: data.excerpt || "",
        featuredImage: data.featuredImage,
        imagePosition: data.imagePosition || "center",
        category: data.category || [],
        isFeaturedPost: data.isFeaturedPost || false,
      };
    });

  return posts.filter((post) => post.isFeaturedPost);
};
