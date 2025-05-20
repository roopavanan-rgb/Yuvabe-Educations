"use client";
import Image from "next/image";

export function ContactUs() {
  return (
    <section className="relative w-full py-12 px-4 sm:px-6 bg-[#140F20] text-white text-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-radial from-[#964B00] via-[#FF0] to-transparent opacity-50 blur-3xl z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 blur-3xl w-[400px] h-[400px] bg-[linear-gradient(90deg,_rgba(151,99,70,1)_50%,_rgba(151,99,70,0.85)_100%)] z-0"></div>
      <div className="absolute -bottom-10 right-10 opacity-5 blur-2xl w-[300px] h-[300px] rounded-full bg-[linear-gradient(90deg,_rgba(105,176,189,0.823)_20%,_rgba(105,176,189,1)_100%)] z-0"></div>

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-raleway font-bold text-[#E8AC35] mt-12 relative z-10">Contact Us</h2>

      {/* Contact Info */}
      <p className="text-sm sm:text-base text-[#FFFFFF] font-sans mt-4 relative z-10">
        For any questions, reach out to our team directly at{" "}
        <a href="mailto:bridge@yuvabe.com" className="text-white underline">
          bridge@yuvabe.com
        </a>{" "}
        / +91 9677604467
      </p>

      {/* Social Media Icons */}
      <h3 className="mt-14 text-base sm:text-lg font-bold text-white relative z-10">
        Follow us on Social Media
      </h3>
      <div className="mt-4 flex justify-center flex-wrap gap-6 relative z-10">
        <Image src="/dm/icons/tx.png" alt="X" width={36} height={36} />
        <Image src="/dm/icons/insta.png" alt="Instagram" width={36} height={36} />
        <Image src="/dm/icons/linkedin.png" alt="LinkedIn" width={36} height={36} />
      </div>

      {/* Logos */}
      <div className="mt-14 flex justify-center items-center flex-wrap gap-10 relative z-10">
        <Image src="/dm/icons/yuvabelogo.png" alt="Yuvabe Logo" width={160} height={60} />
        <Image src="/dm/icons/steamlogo.png" alt="Steam Logo" width={200} height={60} />
      </div>
    </section>
  );
}
