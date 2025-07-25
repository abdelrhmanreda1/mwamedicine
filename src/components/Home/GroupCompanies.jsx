"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const companies = [
  { name: "logo1", logo: "/logo1.png" },
  { name: "logo2", logo: "/logo2.png" },
  { name: "logo3", logo: "/logo3.png" },
  { name: "logo4", logo: "/logo4.png" },
  { name: "logo5", logo: "/logo5.png" },
];

const GroupCompanies = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#f7fbfd] via-[#e6f3fa] to-[#dff3fc] py-16">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#035182]">
          MWA Medicine Group Companies
        </h2>
        <span className="block w-28 h-1 bg-gradient-to-r from-[#5ecbff] to-[#0389d2] mx-auto mt-3 rounded-full"></span>
        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mt-6 leading-8">
          Introducing our esteemed partners, a distinguished group of companies
          whose exceptional products we proudly import. Together, we strive to
          deliver cutting-edge solutions for better healthcare outcomes.
        </p>
      </div>

      {/* ✅ Infinite Marquee */}
      <div className="mt-14 w-[90%] mx-auto">
        <Marquee speed={50} pauseOnHover={true} gradient={false}>
          {[...companies, ...companies].map((company, i) => (
            <div
              key={i}
              className=" flex items-center justify-center w-[140px] md:w-[260px] h-[80px] md:h-[180px] mx-0 md:mx-5 cursor-pointer"
            >
              <div className="relative w-full h-full flex items-center justify-center  p-0 md:p-2">
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={260}
                  height={180}
                  className="object-cover max-h-full"
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default GroupCompanies;
