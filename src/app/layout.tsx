import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Amplied Technologies LLP - Technology as a Service",
  description: "We deliver secure, scalable, and innovative technology-as-a-service — from software development to cloud, DevOps, and cybersecurity — helping businesses worldwide accelerate their digital transformation.",
  keywords: ["technology as a service", "software development", "cloud services", "DevOps", "cybersecurity", "digital transformation"],
  authors: [{ name: "Amplied Technologies LLP" }],
  creator: "Amplied Technologies LLP",
  publisher: "Amplied Technologies LLP",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ampliedtech.com",
    siteName: "Amplied Technologies LLP",
    title: "Amplied Technologies LLP - Technology as a Service",
    description: "We deliver secure, scalable, and innovative technology-as-a-service — from software development to cloud, DevOps, and cybersecurity — helping businesses worldwide accelerate their digital transformation.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amplied Technologies LLP - Technology as a Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amplied Technologies LLP - Technology as a Service",
    description: "We deliver secure, scalable, and innovative technology-as-a-service — from software development to cloud, DevOps, and cybersecurity — helping businesses worldwide accelerate their digital transformation.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg?v=3" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg?v=3" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg?v=3" />
        <meta name="theme-color" content="#034078" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Amplied Technologies LLP",
              "url": "https://ampliedtech.com",
              "logo": "https://ampliedtech.com/logo.svg",
              "description": "We deliver secure, scalable, and innovative technology-as-a-service — from software development to cloud, DevOps, and cybersecurity — helping businesses worldwide accelerate their digital transformation.",
              "foundingDate": "2025",
              "founder": {
                "@type": "Person",
                "name": "Naveen Goswami"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "info@ampliedtech.com",
                "contactType": "customer service"
              }
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
