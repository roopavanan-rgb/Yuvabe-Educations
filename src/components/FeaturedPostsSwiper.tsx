"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";

interface BlogPostFrontmatter {
  title: string;
  isfeaturedpost?: boolean;
  featuredImage?: string;
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

interface FeaturedPostsSwiperProps {
  posts: BlogPost[];
}

const FeaturedPostsSwiper: React.FC<FeaturedPostsSwiperProps> = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <p>No featured posts found.</p>;
  }
  const formatCategory = (cat: string) =>
    cat.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div className="bg-color xl:pt-32 pt-16 md:pt-24 px-5 xl:px-0 overflow-hidden">
      <div className="max-w-[1028px] flex flex-col m-auto">
        {/* Blogs */}
        <h1 className="text-[#592AC7] text-3xl md:text-5xl lg:text-[64px] leading-[120%] font-semibold text-center ">
          Blogs
        </h1>
        <div className=" flex flex-col gap-x-16 relative">
          <Swiper
            modules={[EffectFade, Autoplay]}
            effect="fade"
            loop={posts.length > 1}
            autoplay={
              posts.length > 1
                ? {
                    delay: 7500,
                    disableOnInteraction: false,
                  }
                : false
            }
            className="flex flex-row gap-16 relative max-w-full w-[1028px]"
          >
            {posts.map((post) => (
              <SwiperSlide
                key={post.slug}
                className="relative overflow-hidden max-w-full w-[1028px]"
              >
                <Link
                  href={`/stories/blogs/${post.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="flex flex-row gap-16 justify-between flex-wrap px-5 py-[52px] bg-white my-8 md:my-12 rounded-3xl xl:gap-16 xl:max-w-5xl xl:px-16 xl:py-[52px] xl:my-16 xl:flex-nowrap md:px-16 md:py-[52px] z-10">
                    {/* Left Image */}
                    <div className="flex flex-col justify-center w-[100%] xl:w-[35%] lg:w-[35%] md:[100%] sm:w-[100%]">
                      {post.featuredImage && (
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          width={306}
                          height={371}
                          unoptimized
                          className="border-radius-1240 h-full object-cover w-full max-h-[371px]"
                          style={{
                            objectPosition: post.imagePosition || "center",
                          }}
                        />
                      )}
                    </div>
                    {/* Right Content */}
                    <div className="flex flex-col gap-y-6 w-[100%] xl:w-[55%] lg:w-[55%] md:w-[100%] sm:w-[100%]">
                      {/* Date & Time to Read */}
                      <div className="flex flex-row gap-x-1">
                        <p className="font-secondary font-normal leading-[30px] text-[18px]">
                          {new Date(post.datePublished).toLocaleDateString(
                            "en-US",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            }
                          )}
                        </p>
                        <p className="font-secondary font-normal leading-[30px] text-[18px]">
                          .
                        </p>
                        <p className="font-secondary font-normal leading-[30px] text-[18px]">
                          {post.readingTime || "3 mins"}
                        </p>
                      </div>
                      {/* Category */}
                      <div className="bg-[#592AC7] px-4 py-2 w-fit rounded-[30px]">
                        <h3 className="font-primary font-semibold leading-[150%] text-base text-white text-center capitalize">
                          {formatCategory(post.category[0])}
                        </h3>
                      </div>
                      {/* Title */}
                      <h2 className="font-primary font-semibold leading-[120%] text-3xl md:text-4xl lg:text-[40px]">
                        {post.title}
                      </h2>
                      {/* Content */}
                      <p className="font-secondary font-normal leading-[30px] text-[18px] line-clamp-4">
                        {post.excerpt}.
                      </p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPostsSwiper;
