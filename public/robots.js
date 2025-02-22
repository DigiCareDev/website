
export default function robots(req, res) {
    res.setHeader('Content-Type', 'text/plain');

    const robotsContent = `
  User-agent: *
  Disallow: /api/
  Allow: "*"
  Sitemap: https://www.digicare4u.com/sitemap.xml
    `;

    res.status(200).send(robotsContent);
  }
  