/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://mwamedicine.vercel.app", // غيرها للرابط الحقيقي لموقعك
  generateRobotsTxt: true, // عشان يولد ملف robots.txt أوتوماتيكياً
  sitemapSize: 7000, // حجم ملف sitemap (لو عندك آلاف الصفحات)
  changefreq: "daily", // سرعة تحديث الصفحات لمحركات البحث
  priority: 0.7, // أولوية الصفحات في الـ sitemap
  exclude: ["/secret-page", "/admin/**"], // استثناء صفحات (لو في)
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" }, // السماح لكل الروبوتات بفهرسة كل الصفحات
    ],
  },
};
