"use client";
import Image from "next/image";

export function ContactUs() {
  return (
    <section className="relative w-full py-12 bg-[#140F20] text-white text-center overflow-hidden">
      {/* Gradient Effect */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-[#964B00] via-[#FF0] to-transparent opacity-60 blur-5xl"></div>
      {/* Heading */}
      <h2 className="text-3xl font-raleway font-bold text-[#E8AC35] mt-12">Contact Us</h2>

      {/* Contact Info */}
      <p className="text-[#FFFFFF] font-sans font-regular mt-4">
        For any questions, reach out to our team directly at{" "}
        <a href="mailto:bridge@yuvabe.com" className="text-[#FFFFFF]">
          <strong>bridge@yuvabe.com</strong>
        </a>{" "}
        / +91 9677604467
      </p>

      {/* Social Media Icons */}
      <h3 className="mt-16 text-lg font-sans font-bold text-[#FFFFFF]">Follow us on Social Media</h3>
      <div className="mt-6 flex justify-center space-x-6">
        <Image
          src="/dm/icons/tx.png"
          alt="X"
          width={40} height={40}
        />
        <Image src="/dm/icons/insta.png" alt="Instagram" width={40} height={10} />
        <Image src="/dm/icons/linkedin.png" alt="LinkedIn" width={40} height={10} />
      </div>

      {/* Logos */}
      <div className="mt-16 flex justify-center space-x-8">
        <Image
          src="/dm/icons/yuvabelogo.png"
          alt="Yuvabe Logo"
          width={200} height={10}
        />
        <Image
          src="/dm/icons/steamlogo.png"
          alt="Steam Logo"
         width={250} height={10}
        />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-5/4 -translate-y-3/4 text-3xl opacity-10 border-none blur-3xl w-[500px] h-[500px] bg-[linear-gradient(90deg,_rgba(151,99,70,1)_50%,_rgba(151,99,70,0.8487044475993523)_100%)]"></div>
      <div className="absolute text-2xl -bottom-20 right-40 opacity-5 blur-2xl border-none w-[400px] h-[300px] border rounded-full bg-[linear-gradient(90deg,_rgba(105,176,189,0.823)_20%,_rgba(105,176,189,1)_100%)]"></div>

    </section>
  );
}
