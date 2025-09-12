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
    url: "https://amplied.tech",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Amplied Technologies LLP",
              "url": "https://amplied.tech",
              "logo": "https://amplied.tech/logo.png",
              "description": "We deliver secure, scalable, and innovative technology-as-a-service — from software development to cloud, DevOps, and cybersecurity — helping businesses worldwide accelerate their digital transformation.",
              "foundingDate": "2024",
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
