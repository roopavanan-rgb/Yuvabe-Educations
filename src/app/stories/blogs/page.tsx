import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// Define types for blog post metadata
interface BlogPost {
  title: string;
  slug: string;
  datePublished: string;
  excerpt: string;
  featuredImage?: string;
  category?: string[];
}

const POSTS_PER_PAGE = 9;
const BLOG_DIR = path.join(process.cwd(), "content/blogs");

const predefinedCategories = [
  "our-youth",
  "we-work",
  "we-serve",
  "we-evolve",
  "sustainability-initiatives",
  "partnerships",
];

export default async function BlogsPage(
  props: {
    searchParams: Promise<{ [key: string]: string | undefined }>;
  }
) {
  const searchParams = await props.searchParams;
  const page = parseInt(searchParams.page || "1", 10);
  const category = searchParams.category;

  const files = fs.readdirSync(BLOG_DIR);
  const allPosts: BlogPost[] = files
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
        category: data.category || [],
      };
    });

  const filteredPosts =
    category && category !== "all-categories"
      ? allPosts.filter(
          (post) =>
            Array.isArray(post.category) && post.category.includes(category)
        )
      : allPosts;

  const sortedPosts = filteredPosts.sort((a, b) => {
    const dateA = new Date(a.datePublished).getTime();
    const dateB = new Date(b.datePublished).getTime();
    return dateB - dateA;
  });

  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);
  if (page > totalPages && totalPages !== 0) notFound();

  const currentPosts = sortedPosts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  const categoriesSet = new Set<string>();
  allPosts.forEach((post) =>
    post.category?.forEach((cat: string) => categoriesSet.add(cat))
  );

  const uniqueSortedCategories = predefinedCategories.filter((cat) =>
    categoriesSet.has(cat)
  );
  const categories = ["all-categories", ...uniqueSortedCategories];

  const formatCategory = (cat: string) =>
    cat.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <main>
      <div className="bg-color py-32">
        <div className="max-w-[1028px] flex flex-col m-auto  px-5 xl:px-0">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-10 z-10">
            {categories.map((cat) => {
              const isActive = (category || "all-categories") === cat;
              return (
                <Link
                  key={cat}
                  href={`/stories/blogs?category=${cat}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium border capitalize ${
                    isActive
                      ? "bg-[#592AC7] text-white"
                      : "bg-white text-[#592AC7] border-[#592AC7]"
                  }`}
                >
                  {formatCategory(cat)}
                </Link>
              );
            })}
          </div>

          {/* Blog Cards */}
          <div className="flex flex-wrap justify-start gap-x-6 gap-y-16 blog-list-block relative">
            {currentPosts.map((post) => {
              const displayCategory = Array.isArray(post.category)
                ? category && category !== "all-categories"
                  ? post.category.find((c) => c === category) ??
                    post.category[0]
                  : predefinedCategories.find((c) =>
                      post.category?.includes(c)
                    ) ?? post.category?.[0]
                : null;

              return (
                <div
                  key={post.slug}
                  className="flex flex-col items-start p-10 bg-white gap-[22.59px] border-radius-18  w-full sm:w-[48%] xl:[flex-basis:calc(33.333%-16px)] min-h-[450px] box-shadow-default blog-list-box hover:bg-[#592AC7] group z-10"
                >
                  <Link
                    href={`/stories/blogs/${post.slug}`}
                    style={{ textDecoration: "none" }}
                  >
                    {post.featuredImage && (
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        width={247.7}
                        height={163.02}
                        className="border-radius-1240 blog-list-image w-full mb-[22.5px] h-64 max-h-64 object-cover"
                      />
                    )}
                    <div className="flex flex-col gap-y-[7.19px]">
                      {displayCategory && (
                        <div className="px-3 py-1 rounded-full text-xs font-semibold bg-[#EEEFFB] text-[#592AC7] w-fit mb-2 capitalize">
                          {formatCategory(displayCategory)}
                        </div>
                      )}
                      <h2 className="font-primary font-semibold leading-[24.45px] text-[18.83px] group-hover:text-white">
                        {post.title}
                      </h2>
                      <p
                        className="font-secondary font-normal leading-[24.45px] text-[13.18px] group-hover:text-white line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: post.excerpt }}
                      ></p>
                    </div>
                  </Link>
                </div>
              );
            })}

            {/* SVG Background Shapes */}
            <div className="svgs">
              <svg
                width="305"
                height="305"
                viewBox="0 0 305 305"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[10%] top-[-5%] scale-50 xl:scale-100"
              >
                <circle cx="152.368" cy="152.163" r="151.97" fill="#F9A91E" />
              </svg>
              <svg
                width="387"
                height="286"
                viewBox="0 0 387 286"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[-7%] top-[32%] scale-50 xl:scale-100"
              >
                <path
                  d="M386.623 166.788C340.587 268.35 220.934 313.361 119.373 267.324C17.8107 221.287 -27.2013 101.635 18.8354 0.0734748C255.678 107.43 101.168 37.3927 202.73 83.4297C304.292 129.467 192.48 78.7885 386.623 166.788Z"
                  fill="#91C644"
                />
              </svg>
              <svg
                width="101"
                height="101"
                viewBox="0 0 101 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-[-5%] top-[5%] scale-50 xl:scale-100"
              >
                <circle cx="50.4913" cy="50.4406" r="50.3429" fill="#33BED4" />
              </svg>
              <svg
                width="234"
                height="262"
                viewBox="0 0 234 262"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute lg:bottom-[-10%] bottom-[-5%] left-[-2%] scale-50 xl:scale-100"
              >
                <path
                  d="M233.362 0.140296L221.129 261.443L0.950294 120.197L233.362 0.140296Z"
                  fill="#33BED4"
                />
              </svg>
              <svg
                width="305"
                height="304"
                viewBox="0 0 305 304"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-[20%] right-[-5%] scale-50 xl:scale-100"
              >
                <circle cx="152.306" cy="151.97" r="151.97" fill="#FFCA2D" />
              </svg>
            </div>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-16">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <Link
                  key={p}
                  href={`/stories/blogs?page=${p}${
                    category && category !== "all-categories"
                      ? `&category=${category}`
                      : ""
                  }`}
                  className={`px-4 py-2 rounded-md border text-sm ${
                    p === page
                      ? "bg-[#592AC7] text-white"
                      : "bg-white text-[#592AC7] border-[#592AC7]"
                  }`}
                >
                  {p}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
