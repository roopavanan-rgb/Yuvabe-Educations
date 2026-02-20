"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";

interface MottoBlockProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  buttonLink: string;
}

export default function MottoBlock({
  title,
  description,
  image,
  reverse,
  buttonLink,
}: MottoBlockProps) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-16`}
    >
      <div className="md:w-1/2 space-y-4 text-left z-10">
        <h3 className="text-[36px] font-semibold font-primary">{title}</h3>
        <p className="text-[#000] font-secondary text-[18px]">{description}</p>
        <Button href={buttonLink}>Read more</Button>
      </div>

      <div className="md:w-1/2 flex justify-center relative z-10">
        <Image
          src={image}
          alt={title}
          width={700}
          height={700}
          priority
          className="w-full max-w-md h-auto object-contain"
        />
      </div>
    </div>
  );
}
