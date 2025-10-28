"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function DonationForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
      (function(w,d,s,n,a){
        if(!w[n]){
          var l='call,catch,on,once,set,then,track'.split(','),i,
          o=function(n){return'function'==typeof n?o.l.push([arguments])&&o
          :function(){return o.l.push([n,arguments])&&o}},
          t=d.getElementsByTagName(s)[0],j=d.createElement(s);
          j.async=!0;j.src='https://cdn.fundraiseup.com/widget/'+a;
          t.parentNode.insertBefore(j,t);o.s=Date.now();o.v=4;o.h=w.location.href;o.l=[];
          for(i=0;i<7;i++)o[l[i]]=o(l[i]);w[n]=o
        }
      })(window,document,'script','FundraiseUp','AZFTEEUK');
    `;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      id="donation-form"
      className="flex flex-col md:flex-row justify-center  bg-[#fdf6ec] px-4 py-24 gap-8 scroll-mt-12 lg:scroll-mt-18"
    >
      {/* Donate from India */}
      <motion.div
        className="bg-white p-6 lg:p-8 rounded-[30px] lg:rounded-[50px] shadow-lg w-full max-w-[584px] md:max-w-[400px] lg:max-w-[584px]  border border-gray-200 flex flex-col justify-center h-fit"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h2 className="text-[28px] lg:text-[40px] font-semibold font-primary text-[#592Ac7] text-center">
            Donate from India
          </h2>
          <p className="text-gray-600 text-center mt-3 text-[15px] lg:text-[17px] leading-relaxed font-secondary">
            Donations made from this channel are processed through the Auroville
            Unity Fund account.
          </p>

          <div className="mt-6 mx-6">
            <h3 className="text-[16px] lg:text-[18px] font-semibold font-secondary text-[#592Ac7] text-center lg:text-start">
              On the donation page, kindly follow these steps:
            </h3>
            <ul className="text-gray-700 mt-2 list-disc pl-5 text-[15px] lg:text-[16px] leading-relaxed text-center lg:text-start font-secondary">
              <li>
                Select <strong>'For Indian Donors'</strong> tab in Donation
                Page.
              </li>
              <li>Fill up your details.</li>
              <li>
                Select <strong>'Yuvabe'</strong> under projects.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 mt-6">
          <a
            href="https://donate.auroville.org/"
            className="bg-[#592AC7] text-white font-primary font-semibold py-3 px-6 w-2/3 lg:w-1/2 text-center rounded-lg shadow-md transition-all hover:bg-[#4a22a5]"
          >
            Donate to Yuvabe
          </a>
          <p className="text-gray-500 text-[18px] text-center px-2 font-secondary">
            Kindly contact{" "}
            <a
              href="mailto:donations@auroville.org.in"
              className="text-[#592Ac7] underline font-medium"
            >
              donations@auroville.org.in
            </a>{" "}
            for tax-exempt receipt or compliance info.
          </p>
        </div>
      </motion.div>

      {/* Donate from Anywhere */}
      <motion.div
        className="bg-white p-6 lg:p-8 rounded-[30px] lg:rounded-[50px] shadow-lg border border-gray-200 w-full max-w-[584px] md:max-w-[400px] lg:max-w-[550px]  flex flex-col justify-start"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-[24px] lg:text-[40px] font-semibold font-primary text-[#592Ac7] text-center mb-4">
          Donate from Anywhere
        </h2>

        <div className="flex-1 flex items-center justify-center">
          {/* Replace this placeholder with actual widget if needed */}
          <a
            href="#XJLHERLT"
            className="w-full h-full border border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 text-sm"
          >
            FundraiseUp Widget Placeholder
          </a>
        </div>
      </motion.div>
    </div>
  );
}
