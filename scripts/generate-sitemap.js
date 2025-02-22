const fs = require("fs");
const path = require( "../public/sitemap.xml");

const domain = "https://www.digicare4u.com";

const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Pricing", path: "/pricing" },
  { name: "Features", path: "/features" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" }
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    ({ path }) => `  <url>
    <loc>${domain}${path}</loc>
  </url>`
  )
  .join("\n")}
</urlset>`;

fs.writeFileSync(path.join(__dirname, "../public/sitemap.xml"), sitemap);
console.log("✅ Sitemap updated successfully!");
