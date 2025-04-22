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
  imagePosition?: string;
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

export default async function BlogsPage(props: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
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
        imagePosition: data.imagePosition || "center", // Default if not provided
        category: data.category || [],
      };
    });

  const filteredPosts =
    category && category !== "all-posts"
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
  const categories = ["all-posts", ...uniqueSortedCategories];

  const formatCategory = (cat: string) =>
    cat.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <>
      <div className="bg-color py-32">
        <div className="max-w-[1240px] flex flex-col m-auto  px-5 xl:px-0">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 mb-8 md:mb-16 lg:mb-32 z-10 mx-auto">
            {categories.map((cat) => {
              const isActive = (category || "all-posts") === cat;
              return (
                <Link
                  key={cat}
                  href={`/stories/blogs?category=${cat}`}
                  className={`px-4 py-2 rounded-[30px] text-[16px] font-medium capitalize font-primary ${
                    isActive
                      ? "bg-[#592AC7] text-white"
                      : "bg-[#F1F1F1] text-black"
                  }`}
                >
                  {formatCategory(cat)}
                </Link>
              );
            })}
          </div>

          {/* Blog Cards */}
          <div className="max-w-[1028px] m-auto flex flex-wrap justify-start gap-x-6 gap-y-16 blog-list-block relative">
            {currentPosts.map((post) => {
              const displayCategory = Array.isArray(post.category)
                ? category && category !== "all-posts"
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
                        unoptimized
                        className="border-radius-1240 blog-list-image w-full mb-[22.5px] h-64 max-h-64 object-cover xl:w-[247.7px] xl:h-[163.02px]"
                        style={{
                          objectPosition: post.imagePosition || "center",
                        }}
                      />
                    )}
                    <div className="flex flex-col gap-y-[7.19px]">
                      {displayCategory && (
                        <div className="px-[15.06px] py-[7.53px] rounded-[28.24px] text-[15.06px] font-semibold bg-[#592AC7] text-white group-hover:text-[#592AC7] group-hover:bg-white w-fit mb-5 capitalize">
                          {formatCategory(displayCategory)}
                        </div>
                      )}
                      <h2 className="font-primary font-semibold leading-[24.45px] text-[18.83px] group-hover:text-white line-clamp-3">
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

            {Array.from({ length: POSTS_PER_PAGE - currentPosts.length }).map(
              (_, i) => (
                <div
                  key={`placeholder-${i}`}
                  className="invisible flex flex-col items-start p-10 gap-[22.59px] w-full sm:w-[48%] xl:[flex-basis:calc(33.333%-16px)] min-h-[450px]"
                ></div>
              )
            )}

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
                className="absolute lg:bottom-[-2%] xl:bottom-0 bottom-0 left-[-2%] scale-50 lg:scale-100"
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
            <div className="flex justify-center items-center gap-6 md:gap-12 lg:gap-24 mt-2 md:mt-12 xl:mt-4">
              {/* Previous Page */}
              <Link
                href={
                  page > 1
                    ? `/stories/blogs?page=${page - 1}${
                        category && category !== "all-categories"
                          ? `&category=${category}`
                          : ""
                      }`
                    : "#"
                }
                className={page === 1 ? "pointer-events-none opacity-50" : ""}
                aria-disabled={page === 1}
              >
                <svg
                  width="63"
                  height="63"
                  viewBox="0 0 63 63"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="scale-50 md:scale-75 lg:scale-100"
                >
                  <circle
                    cx="31"
                    cy="31"
                    r="31"
                    transform="matrix(-1 0 0 1 62.3203 0.0644531)"
                    fill={page === 1 ? "#D9D9D9" : "#592AC7"}
                  />
                  <path
                    d="M37.9062 19.1055L24.7251 31.1701L37.9062 43.0267"
                    stroke={page === 1 ? "black" : "white"}
                    strokeWidth="3.5942"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              {/* Next Page */}
              <Link
                href={
                  page < totalPages
                    ? `/stories/blogs?page=${page + 1}${
                        category && category !== "all-categories"
                          ? `&category=${category}`
                          : ""
                      }`
                    : "#"
                }
                className={
                  page === totalPages ? "pointer-events-none opacity-50" : ""
                }
                aria-disabled={page === totalPages}
              >
                <svg
                  width="63"
                  height="63"
                  viewBox="0 0 63 63"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="scale-50 md:scale-75 lg:scale-100"
                >
                  <circle
                    cx="31.9766"
                    cy="31.0645"
                    r="31"
                    fill={page === totalPages ? "#D9D9D9" : "#592AC7"}
                  />
                  <path
                    d="M25.3906 19.1055L38.5717 31.1701L25.3906 43.0267"
                    stroke={page === totalPages ? "black" : "white"}
                    strokeWidth="3.5942"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>
      {/* Form */}

      {/* <div className="bg-white py-[128px]">
        <div className="max-w-[1240px] flex flex-row m-auto justify-between gap-10 flex-wrap xl:flex-nowrap px-5">
          Left Form

          <div className="flex flex-col gap-10 xl:w-[44%] w-full">
            <h2 className="font-primary text-3xl md:text-4xl lg:text-[40px] font-normal">
              For more inspiring stories, subscribe to{" "}
              <strong>
                YUVABEAT,
                <br />
              </strong>
              Yuvabe's monthly newsletter
            </h2>

            <form
              action=""
              className="flex flex-row gap-x-[18.58px] flex-wrap md:flex-nowrap gap-y-4"
            >
              <input
                type="text"
                name="email"
                id=""
                placeholder="Enter Your Email"
                className="rounded-[25.92px] bg-[#F1F1F1] py-[15.48px] px-[34.05px] font-primary text-[13.93px] font-normal leading-[150%] placeholder-black w-full xl:w-[67%]"
              />

              <button
                type="submit"
                value=""
                className="rounded-[25.92px] py-[15.48px] px-10  font-primary text-[13.93px] font-semibold leading-[150%] bg-[#592AC7] text-white w-full xl:w-1/3"
              >
                Subscribe
              </button>
            </form>
          </div>

          Right Image

          <div className="xl:w-[54%] flex xl:justify-end w-full justify-center">
            <img
              src="\images\blogs\Lady-typing.png"
              alt=""
              width={644.39}
              height={382.01}
              className="scale-100 xl:scale-75"
            />
          </div>
        </div>
      </div> */}
    </>
  );
}
