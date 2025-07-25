"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { productsData } from "@/data/productsData";

const ITEMS_PER_PAGE = 8;

const AllProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("Newest");
  const [filterOption, setFilterOption] = useState("All Products");
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...productsData];

    if (filterOption !== "All Products") {
      filtered = filtered.filter(
        (product) => product.department === filterOption
      );
    }

    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter((product) => {
        return (
          product.name.toLowerCase().includes(term) ||
          product.shortDesc.toLowerCase().includes(term) ||
          product.fullDesc?.about?.some((item) =>
            item.text.toLowerCase().includes(term)
          ) ||
          product.category.toLowerCase().includes(term)
        );
      });
    }

    switch (sortOption) {
      case "Newest":
        filtered.sort((a, b) => b.id - a.id);
        break;
      case "Oldest":
        filtered.sort((a, b) => a.id - b.id);
        break;
      case "A-Z":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [filterOption, sortOption, searchTerm]);

  const totalPages = Math.ceil(
    filteredAndSortedProducts.length / ITEMS_PER_PAGE
  );
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredAndSortedProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="bg-gradient-to-b from-[#f7fbfd] via-[#e6f3fa] to-[#dff3fc]">
      <div className="w-[90%] mx-auto py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 mt-[120px]">
          <h2 className="text-2xl md:text-3xl font-bold text-[#013E5D] mb-4 md:mb-0">
            {filterOption}
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-[78%] sm:w-auto">
            <input
              type="text"
              placeholder="Search products..."
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#013E5D] w-full sm:w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="flex gap-6">
              <select
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#013E5D]"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
                <option value="A-Z">A - Z</option>
                <option value="Z-A">Z - A</option>
              </select>
              <select
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#013E5D]"
                value={filterOption}
                onChange={(e) => setFilterOption(e.target.value)}
              >
                <option value="All Products">All Products</option>
                <option value="Internal Medicine">Internal Medicine</option>
                <option value="Orthopedic">Orthopedic</option>
                <option value="Gynecology">Gynecology</option>
                <option value="Neurology">Neurology</option>
              </select>
            </div>
          </div>
        </div>
        {currentItems.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {currentItems.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.03 }}
                  className="relative group bg-white/70 backdrop-blur-md border border-white/20 rounded-3xl cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_45px_rgba(0,0,0,0.15)] transition-all duration-500 overflow-hidden"
                >
                  <span className="absolute top-4 left-4 bg-[#013E5D]/90 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md z-10">
                    {product.category}
                  </span>
                  <div className="relative h-64 w-full flex justify-center items-center overflow-hidden mt-3">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="object-contain max-h-64 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:drop-shadow-[0_10px_15px_rgba(0,0,0,0.15)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-[#f0f4f8]/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  </div>
                  <div className="px-5 pb-5 text-center mt-[-15px]">
                    <h3 className="text-lg font-bold text-[#013E5D] mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-5">
                      {product.shortDesc}
                    </p>
                    <button
                      onClick={() => router.push(`/Products/${product.id}`)}
                      className="relative w-full py-3 rounded-xl bg-[#013E5D] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      View Details
                      <FiArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-2"
                      />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-1 md:gap-2 mt-12">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-full ${
                    currentPage === 1
                      ? "bg-gray-100 text-gray-400"
                      : "bg-white text-[#013E5D] border border-gray-300 hover:bg-[#013E5D] hover:text-white transition"
                  }`}
                >
                  <FaChevronLeft size={14} />
                </button>

                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                      currentPage === i + 1
                        ? "bg-[#013E5D] text-white shadow"
                        : "bg-white border border-gray-300 text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-full ${
                    currentPage === totalPages
                      ? "bg-gray-100 text-gray-400"
                      : "bg-white text-[#013E5D] border border-gray-300 hover:bg-[#013E5D] hover:text-white transition"
                  }`}
                >
                  <FaChevronRight size={14} />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center  text-center">
            <Image
              src="/no-product-removebg.png"
              alt="No products"
              width={200}
              height={200}
              className="opacity-80"
            />

            <p className="text-gray-600 text-xl">
              Try adjusting your search or filter to find what you need.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllProducts;
