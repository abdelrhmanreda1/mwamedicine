"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaIndustry, FaGlobe, FaMedkit } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-[#f7fbfd] via-[#dff3fc] to-[#e6f3fa] py-8 md:py-8 px-6"
    >
      <div className="relative w-[98%] md:w-[90%] mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#035182]">
            About Us
          </h2>
          <span className="block w-28 h-1 bg-gradient-to-r from-[#5ecbff] to-[#0389d2] mx-auto mt-3 rounded-full"></span>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* ✅ Image Section with Animation */}
          <motion.div
            className="relative rounded-2xl shadow-xl overflow-hidden order-1 md:order-2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src="/about.jpeg"
              alt="About Us"
              width={700}
              height={480}
              sizes="(max-width: 768px) 100vw, 700px"
              className="rounded-2xl object-cover w-full h-[480px]"
              priority
            />
          </motion.div>

          {/* ✅ Text Section (زي ما هو) */}
          <motion.div
            className="space-y-6 order-2 md:order-1"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-xl md:text-2xl text-gray-800 leading-9">
              At <span className="font-bold text-[#035182]">MWA Medicine</span>,
              we are proud to be a pharmaceutical manufacturer committed to
              producing safe, effective, and internationally certified
              medications and dietary supplements. From formulation to final
              packaging, every step of our production process meets the highest
              quality standards.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <FaIndustry className="text-[#0389d2] w-12 h-6 mt-1" />
                <p className="text-lg text-gray-700 leading-8">
                  Based in Turkey, we serve multiple international markets with
                  reliable, science-backed pharmaceutical solutions.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <FaGlobe className="text-[#0389d2] w-17 h-7 mt-1" />
                <p className="text-lg text-gray-700 leading-8">
                  With a strong focus on quality control, innovation, and
                  regulatory compliance, we deliver trusted products that
                  healthcare providers and patients can rely on.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <FaMedkit className="text-[#0389d2] w-11 h-7 " />
                <p className="text-lg text-gray-700 leading-8">
                  <span className="font-semibold text-[#035182]">
                    MWA Medicine
                  </span>{" "}
                  – manufacturing with purpose, exporting with integrity.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
