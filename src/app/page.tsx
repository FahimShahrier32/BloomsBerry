import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Menu from "@/components/Menu/Menu";
import Gallery from "@/components/Gallery/Gallery";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Bloomsberry",
    "image": "https://bloomsberry.com/og-image.jpg",
    "@id": "https://bloomsberry.com",
    "url": "https://bloomsberry.com",
    "telephone": "+8801934-472047",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "House-04, Road-10, Dhanmondi",
      "addressLocality": "Dhaka",
      "addressRegion": "Dhaka",
      "postalCode": "1205",
      "addressCountry": "BD"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "23.7505",
      "longitude": "90.3759"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "10:00",
        "closes": "22:00"
      }
    ],
    "servesCuisine": ["Coffee", "Pan Asian", "Chinese Fusion", "Desserts"],
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    },
    "description": "A botanical sanctuary where culinary heritage meets contemporary organic innovation. Experience the art of modern dining with Pan Asian and Chinese Fusion cuisine."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Menu compact />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}


