import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary";
import Analytics from "@/components/Analytics/Analytics";
import FloatingActions from "@/components/FloatingActions/FloatingActions";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bloomsberry – The Art of Coffee & Conversation | Premium Cafe in Dhaka",
  description: "Experience the finest coffee and Pan Asian fusion cuisine at Bloomsberry. A botanical sanctuary for meaningful connections in the heart of Dhanmondi, Dhaka. Book your table today!",
  keywords: ["Bloomsberry", "Coffee Shop Dhanmondi", "Cafe Dhaka", "Art of Coffee", "Chinese Fusion Dhaka", "Pan Asian Cuisine", "Best Coffee Dhaka", "Restaurant Dhanmondi"],
  authors: [{ name: "Bloomsberry" }],
  creator: "Bloomsberry",
  publisher: "Bloomsberry",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bloomsberry.com",
    siteName: "Bloomsberry",
    title: "Bloomsberry – The Art of Coffee & Conversation",
    description: "Experience the finest coffee and Pan Asian fusion cuisine at Bloomsberry. A botanical sanctuary for meaningful connections in the heart of Dhanmondi, Dhaka.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bloomsberry - The Art of Coffee & Conversation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloomsberry – The Art of Coffee & Conversation",
    description: "Experience the finest coffee and Pan Asian fusion cuisine at Bloomsberry. A botanical sanctuary in Dhanmondi, Dhaka.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://bloomsberry.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2D3A2F" />
      </head>
      <body suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[1001] focus:bg-white focus:text-[#2D3A2F] focus:px-6 focus:py-3 focus:rounded-lg focus:font-semibold focus:shadow-lg"
        >
          Skip to main content
        </a>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
        <Analytics />
        <FloatingActions />
      </body>
    </html>
  );
}

