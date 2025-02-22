import "./globals.css";

export const metadata = {
  title: "DigiCare4u - Live Tracking Software for Seamless Monitoring",
  description: "DigiCare4u offers real-time live tracking solutions, providing accurate, reliable, and secure monitoring for businesses. Track assets, vehicles, and people with ease.",
  keywords: "live tracking, task schedule, analysis insights, app/web access, instant alerts, timeline, DigiCare4u, asset tracking, vehicle tracking, real-time monitoring, fleet management, GPS tracking, security software",
  author: "DigiCare4u",
  robots: "index, follow", 
  viewport: "width=device-width, initial-scale=1.0",
  og: {
    title: "DigiCare4u - Live Tracking Software for Seamless Monitoring",
    description: "Get real-time, secure, and accurate tracking with DigiCare4u's live tracking software. Perfect for businesses in need of asset and fleet management.",
    url: "https://www.digicare4u.com",
    image: "https://www.digicare4u.com/logo.jpg", 
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiCare4u - Live Tracking Software for Seamless Monitoring",
    description: "Discover DigiCare4u's cutting-edge live tracking software for businesses needing secure and real-time tracking solutions.",
    image: "https://www.digicare4u.com/logo.jpg",  
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className="antialiased" >
        {children}
      </body>
    </html>
  );
}
