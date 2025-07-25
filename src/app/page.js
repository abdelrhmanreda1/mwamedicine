import AboutUs from "@/components/Home/AboutUs";
import ContactSection from "@/components/Home/ContactSection";
import GroupCompanies from "@/components/Home/GroupCompanies";
import OurTeam from "@/components/Home/OurTeam";
import Slider from "@/components/Home/Slider";
import React from "react";

function page() {
  return (
    <>
      <Slider />
      <AboutUs />
      <OurTeam />
      <GroupCompanies />
      <ContactSection />
    </>
  );
}

export default page;
