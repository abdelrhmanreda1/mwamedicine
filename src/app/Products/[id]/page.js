"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import {
  FaHandsWash,
  FaTint,
  FaHandHoldingWater,
  FaShower,
  FaRegClock,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { productsData } from "@/data/productsData";
const ProductPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const product = productsData.find((p) => p.id === Number(id));
  return (
    <section className="bg-gradient-to-b from-[#f7fbfd] via-[#e6f3fa] to-[#dff3fc] min-h-screen py-16 px-4 mt-12">
      <div className="w-[90%] mx-auto mt-6">
        <button
          onClick={() => router.back()}
          className="relative flex items-center gap-1 text-[#013E5D] font-semibold mb-5 group"
        >
          <FaArrowLeft
            size={20}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#013E5D] transition-all duration-300 group-hover:w-full"></span>
        </button>
      </div>

      <div className="w-[90%] mx-auto p-8 lg:p-12 bg-white rounded-3xl shadow-xl">
        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Product Image */}
          <motion.div
            className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-inner p-6 flex justify-center items-center group overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={450}
              height={450}
              className="object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>

          {/* Product Details */}
          <motion.div
            className="flex flex-col gap-12 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-[#013E5D] leading-snug tracking-wide mb-5">
                {product.name}
              </h1>

              <div className="space-y-5">
                <div className="flex items-center gap-2">
                  <h3 className="text-[18px] text-gray-500 font-semibold">
                    Type:
                  </h3>
                  <p className="text-[#013E5D] font-medium text-[18px]">
                    {product.type}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <h3 className="text-[18px] text-gray-500 font-semibold">
                    Brand:
                  </h3>
                  <p className="text-[#013E5D] font-medium text-[18px]">
                    {product.brand}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <h3 className="text-[18px] text-gray-500 font-semibold">
                    Rating:
                  </h3>
                  <div className="flex items-center text-yellow-400 text-lg">
                    {[...Array(5)].map((_, i) => (
                      <AiFillStar key={i} />
                    ))}
                    <span className="text-[13px] text-gray-500 ml-2">
                      (12 Reviews)
                    </span>
                  </div>
                </div>
              </div>

              <p className="mt-6 w-full lg:w-[90%] text-gray-600 leading-relaxed text-[17px] border-l-4 border-[#013E5D] pl-4">
                {product.shortDesc}
              </p>

              <div className="flex items-center gap-4 mt-3 mb-7 px-4 py-3 w-full lg:w-[250px]">
                <label className="text-lg text-gray-600 font-medium">
                  Quantity:
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    className="px-2 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(
                        Number(e.target.value) > 0 ? Number(e.target.value) : 1
                      )
                    }
                    className="w-[70px] text-center border-x border-gray-300 py-2 outline-none focus:ring-0 focus:outline-none no-spinner"
                  />

                  <button
                    type="button"
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className=" py-2 px-2 bg-gray-100 text-gray-700 hover:bg-gray-200 transition text-center "
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => {
                  const message = `Hello, I am interested in placing an order.

📌 *Product Details:*
- Name: *${product.name}*
- Type: *${product.type}*
- Brand: *${product.brand}*
- Quantity: *${quantity}*

Kindly confirm availability and provide me with the total price. Thank you!`;

                  const whatsappUrl = `https://wa.me/+905352522282?text=${encodeURIComponent(
                    message
                  )}`;
                  window.open(whatsappUrl, "_blank");
                }}
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white  px-2  py-4 rounded-xl font-semibold text-[15px] md:text-lg shadow-md transition-all duration-300 "
              >
                <FaWhatsapp size={24} /> Order Now on WhatsApp
              </button>
            </div>
          </motion.div>
        </div>

        {/* Product Description */}
        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          {/* About Product */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-bold text-[#013E5D] mb-4 ml-4">
              About Product
            </h2>
            <div className="space-y-4">
              {product.fullDesc.about.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3">
                  {item.icon}
                  <div>
                    <h4 className="font-semibold text-[#013E5D]">
                      {item.title}
                    </h4>
                    <p className="text-gray-700 text-[14px] mt-1 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Usage Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-xl font-bold text-[#013E5D] mb-8">
              Usage Instructions
            </h2>
            <div className="space-y-3">
              {product.fullDesc.usage.map((step, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 min-h-[50px] pb-2"
                >
                  <div className="flex-shrink-0 text-[#013E5D] mt-[2px]">
                    {i === 0 && <FaHandsWash size={20} />}
                    {i === 1 && <FaTint size={20} />}
                    {i === 2 && <FaHandHoldingWater size={20} />}
                    {i === 3 && <FaShower size={20} />}
                    {i === 4 && <FaRegClock size={20} />}
                  </div>
                  <p className="text-gray-700 text-[16px] leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
