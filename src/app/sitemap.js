
export default function sitemap(req, res) {
    res.setHeader('Content-Type', 'application/xml');

    const pages = [
      '/',
      '/about',
      '/contact',
      '/features',
      '/pricing',
      '/blog',
      '/testimonal',
    ];
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          return `
          <url>
            <loc>https://www.digicare4u.com${page}</loc>
            <changefreq>daily</changefreq>
            <priority>0.9</priority>
          </url>`;
        })
        .join('')}
    </urlset>`;

    res.status(200).send(sitemap);
  }
  