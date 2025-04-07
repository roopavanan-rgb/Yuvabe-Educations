"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";

const images = [
  { src: '/images/ness/image5.png', width: 415, height: 299, x: 480, y: 350 },
  { src: '/images/ness/image1.png', width: 315, height: 315, x: 900, y: 150 },
  { src: '/images/ness/image4.png', width: 200, height: 200, x: 250, y: 350 }, 
  { src: '/images/ness/image6.png', width: 200, height: 200, x: 680, y: 140 },
  { src: '/images/ness/image2.png', width: 232, height: 232, x: 0, y: 250 },
  { src: '/images/ness/image3.png', width: 415, height: 299, x: 250, y: 40 },
];
// Lazy load Lottie Player
const LottiePlayer = dynamic(() => import("@lottiefiles/react-lottie-player").then(mod => mod.Player), { ssr: false });

const FullYearProgram = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Prevents hydration mismatch

  return (
    <>
     <section className="py-12 px-6 md:px-16 lg:px-24 text-center">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.3 } }}
               className="mb-8"
             >
               <h2 className="text-3xl md:text-6xl font-semibold font-primary text-[#592AC7] pt-18">
                 NESS School
               </h2>
               <h3 className="text-xl md:text-3xl font-semibold font-primary mt-4">
                 Full Year Program
               </h3>
               <p className="text-[#000000] mt-4 max-w-6xl mx-auto text-start text-[18px] font-secondary leading-[30px]">
               We believe learning should be a thrilling journey, not just a task. Our STEAM calendar brings science, technology, engineering, arts, and math to life in fun, hands-on ways that encourage curiosity and creativity. From building cool gadgets to exploring new forms of art, every day is a chance to think, create, and discover something exciting.<br/>
               With Yuvabe’s youth volunteers joining in, students get fresh perspectives, mentorship, and interactive experiences that spark curiosity and confidence. If you love sharing knowledge, exploring new ideas, or just being part of something inspiring, come collaborate with us!    <br/> <span className="font-bold font-secondary">Let’s create, learn, and grow together!    </span>         </p>
             </motion.div>
     
             <div className="relative w-[1320px] h-[700px] mx-auto hidden lg:block overflow-hidden">
           {images.map((img, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: index * 0.1 }}
               viewport={{ once: true }}
               className="absolute rounded-xl overflow-hidden"
               style={{
                 width: `${img.width}px`,
                 height: `${img.height}px`,
                 left: `${img.x}px`,
                 top: `${img.y}px`,
               }}
             >
               <Image
                 src={img.src}
                 alt={`grid-img-${index}`}
                 width={img.width}
                 height={img.height}
                 className="w-full h-full object-cover"
               />
             </motion.div>
           ))}
         </div>
     
         <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:hidden mt-10 px-4">
       {images.map((img, index) => (
         <motion.div
           key={index}
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: index * 0.1 }}
           viewport={{ once: true }}
           className="rounded-xl overflow-hidden w-full"
         >
           <Image
             src={img.src}
             alt={`grid-img-${index}`}
             width={img.width}
             height={img.height}
             className="w-full h-auto object-cover"
           />
         </motion.div>
       ))}
     </div>
           </section>

      <section className="py-16 text-center bg-[#fef9f3]">
        <h2 className="text-3xl md:text-6xl font-semibold font-primary text-black mb-8">
          Students Testimonial
        </h2>

        {/* Prevents pre-rendering issues with Lottie */}
        {isMounted && (
          <div className="relative justify-center items-center">
            <LottiePlayer autoplay loop={false} keepLastFrame src="/images/ness/testimonial2.json" className="relative w-full" />
          </div>
        )}
      </section>
    </>
  );
};

export default FullYearProgram;
