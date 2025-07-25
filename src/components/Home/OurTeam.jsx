"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const teamMembers = [
  {
    name: "KübrAnur Çevik",
    title: "Food Engineer",
    description:
      "With 3 years of experience at MWA Medical, KübrAnur plays a key role in quality control, formulation development, and production processes. Her expertise and meticulous approach ensure that our products meet the highest standards of safety and quality.",
    image: "/team1.jpeg",
  },
  {
    name: "Mustafa Mohsen",
    title: "Head of Research & Development",
    description:
      "With a background in Computer Engineering and a Master’s degree in Business Administration, I am committed to combining science and strategic leadership to create supplements that genuinely improve people’s health and lives.",
    image: "/team2.jpeg",
  },
  {
    name: "Dr. Muhannad Waleed",
    title: "Founder and Director of Sales",
    description:
      "Ph.D. in Physiology with extensive expertise in infertility treatment and human embryo cryopreservation, holding multiple patents in the field.",
    image: "/team3.jpeg",
  },
];

const MAX_CHARS = 80;

const OurTeam = () => {
  const [expanded, setExpanded] = useState({});

  const toggleDescription = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="relative bg-gradient-to-b from-[#f7fbfd] via-[#e6f3fa] to-[#dff3fc] py-8 md:py-16 px-6">
      <div className="w-[90%] mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#035182] mb-2">
          Our Team
        </h2>
        <span className="block w-28 h-1 bg-gradient-to-r from-[#5ecbff] to-[#0389d2] mx-auto mb-10 rounded-full"></span>

        {/* Team Members */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-16">
          {teamMembers.map((member, i) => {
            const isExpanded = expanded[i];
            const shouldTruncate = member.description.length > MAX_CHARS;
            const displayedText = isExpanded
              ? member.description
              : member.description.slice(0, MAX_CHARS) +
                (shouldTruncate ? "..." : "");

            return (
              <motion.div
                key={i}
                className="relative flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {/* Subtle Floating Circle Behind Image */}
                <div className="relative mb-6">
                  <div className="absolute -top-1 -left-1 w-36 h-36 rounded-full bg-gradient-to-br from-[#5ecbff] to-[#0389d2] opacity-30 blur-md translate-x-2 translate-y-2"></div>

                  {/* Image */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    className="relative w-36 h-36 rounded-full overflow-hidden shadow-[0_8px_25px_rgba(0,0,0,0.15)] transition-all duration-500"
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>

                {/* Text */}
                <h3 className="text-xl font-[900] text-[#035182]">
                  {member.name}
                </h3>
                <p className="text-[#0389d2] font-medium text-sm md:text-base w-[66%]">
                  {member.title}
                </p>

                <p className="text-gray-600 text-sm mt-3 leading-6 max-w-[340px] min-h-[72px] ">
                  {displayedText}
                  {shouldTruncate && (
                    <button
                      onClick={() => toggleDescription(i)}
                      className="text-[#0389d2] font-semibold hover:underline cursor-pointer"
                    >
                      {isExpanded ? "See less" : "See more"}
                    </button>
                  )}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
