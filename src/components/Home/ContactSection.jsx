"use client";

import { FiMail, FiMapPin, FiPhone, FiClock } from "react-icons/fi";
import Image from "next/image";
import FormSection from "./FormSection";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="w-full py-8 md:py-16 px-6 bg-gradient-to-br from-[#f7fbfd] via-white to-[#e6f3fa] text-gray-800"
    >
      <div className="w-[88%] mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#035182] mb-2">
            Contact Us
          </h2>
          <span className="block w-28 h-1 bg-gradient-to-r from-[#5ecbff] to-[#0389d2] mx-auto mb-10 rounded-full"></span>
          <p className="mt-4 text-[#475569] text-lg max-w-xl mx-auto">
            Get in touch with us for any inquiries or partnership opportunities.
            We’re here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0  md:gap-10">
          {/* Contact Info */}
          <div className="col-span-1">
            <div className="space-y-6 bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 shadow-md">
              <div className="flex items-start gap-3">
                <FiMapPin className="text-[#013E5D] w-12 h-6" />
                <div>
                  <h3 className="font-semibold text-[#1e293b]">Address</h3>
                  <p className="text-[#475569]">
                    Yeni Baglica Neighborhood, Zirve Street, 35 Sites, No: 73A,
                    Etimesgut / Ankara
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiPhone className="text-[#013E5D] w-6 h-6" />
                <div>
                  <h3 className="font-semibold text-[#1e293b]">Phone</h3>
                  <p className="text-[#475569]">+90 535 252 2282</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiMail className="text-[#013E5D] w-6 h-6" />
                <div>
                  <h3 className="font-semibold text-[#1e293b]">Email</h3>
                  <p className="text-[#475569]">info@mwamedical.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiClock className="text-[#013E5D] w-6 h-6" />
                <div>
                  <h3 className="font-semibold text-[#1e293b]">
                    Business Hours
                  </h3>
                  <p className="text-[#475569]">
                    Monday - Friday: 8,30AM - 6PM
                  </p>
                  <p className="text-[#475569]">Saturday & Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-r from-[#013E5D] to-[#035182] hover:from-[#035182] hover:to-[#013E5D] transition text-white p-6 rounded-2xl mt-6">
              <h3 className="text-2xl font-bold mb-2">Ready to Talk?</h3>
              <p className="mb-4 text-lg">Contact us now on WhatsApp!</p>
              <a
                href="https://wa.me/905352522282"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-2xl shadow transition inline-flex items-center gap-2 justify-center w-full"
              >
                <Image
                  src="/WhatsApp.svg"
                  alt="WhatsApp"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <FormSection />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
