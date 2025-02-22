import { useRouter } from "next/router";
import Head from "next/head";  // Import Head component for SEO
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BlogDetails = () => {
  const router = useRouter();
  const { title, date, description, imageSrc, tag } = router.query;

  return (
    <>
      <Head>
        {/* Dynamic Page Title */}
        <title>{title} - DigiCare4u Blog</title>

        {/* Meta Description */}
        <meta
          name="description"
          content={`Read about ${title} in our DigiCare4u blog. Learn insights on live tracking, fleet management, and more. Published on ${date}.`}
        />
        
        {/* Keywords for SEO */}
        <meta
          name="keywords"
          content={`blog, DigiCare4u, ${title}, live tracking, fleet management, asset tracking, vehicle tracking, ${tag}`}
        />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content={`${title} - DigiCare4u Blog`} />
        <meta
          property="og:description"
          content={`Read about ${title} in our DigiCare4u blog. Learn insights on live tracking, fleet management, and more.`}
        />
        <meta property="og:image" content={imageSrc} />  {/* Use the imageSrc from the blog post */}
        <meta property="og:url" content={`https://www.digicare4u.com/blog/${title}`} />
        <meta property="og:type" content="article" />
        
        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} - DigiCare4u Blog`} />
        <meta
          name="twitter:description"
          content={`Read about ${title} in our DigiCare4u blog. Learn insights on live tracking, fleet management, and more.`}
        />
        <meta name="twitter:image" content={imageSrc} />  {/* Use the imageSrc from the blog post */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: title,
              image: imageSrc,
              datePublished: date,
              author: "DigiCare4u",
              description: description,
            }),
          }}
        />
      </Head>
        
        <Navbar/>
      <div className="max-w-4xl mx-auto p-5">
        <img className="w-full h-100 rounded-lg" src={imageSrc} alt={title} />
        <h1 className="text-3xl font-bold mt-5">{title}</h1>
        <p className="text-gray-500 text-sm">Published on: {date}</p>
        <p className="mt-5">{description}</p>
        <p className="mt-5 font-bold text-black">{tag}</p>
      </div>
      <Footer/>
    </>
  );
};

export default BlogDetails;
