import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import FeaturedPostsSwiper from "./FeaturedPostsSwiper";

const BLOG_DIR = path.join(process.cwd(), "content/blogs");

interface BlogPostFrontmatter {
  title: string;
  isfeaturedpost?: boolean;
  featuredImage: string;
  imagePosition?: string;
  excerpt: string;
  datePublished: string;
  readingTime: string;
  category: string[];
}

export interface BlogPost extends BlogPostFrontmatter {
  slug: string;
  content: string;
}

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const filenames = await fs.readdir(BLOG_DIR);
    const posts: BlogPost[] = await Promise.all(
      filenames.map(async (filename) => {
        const filePath = path.join(BLOG_DIR, filename);
        const fileContent = await fs.readFile(filePath, "utf-8");
        const { data, content } = matter(fileContent);
        return {
          slug: filename.replace(".md", ""),
          content,
          ...(data as BlogPostFrontmatter),
          excerpt:
            (data as BlogPostFrontmatter).excerpt ||
            content.substring(0, 150) + "...",
        };
      })
    );
    return posts;
  } catch (error) {
    console.error("Error reading blog posts:", error);
    return [];
  }
}

export default async function FeaturedPosts() {
  const allPosts = await getBlogPosts();
  const featuredPosts = allPosts.filter((post) => post.isfeaturedpost === true);

  const latestPosts = [...allPosts].sort(
    (a, b) =>
      new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );

  const postsToDisplay =
    featuredPosts.length > 0 ? featuredPosts : latestPosts.slice(0, 5);

  if (postsToDisplay.length === 0) {
    return <p>No featured posts found.</p>;
  }

  return <FeaturedPostsSwiper posts={postsToDisplay} />;
}
