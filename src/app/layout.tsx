import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: "400",
});

const siteUrl = "https://drachuthnayak.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Dr. Achuth S. Nayak, Radiation Oncologist, Mangaluru | Yenepoya Medical College Hospital",
  description:
    "Dr. Achuth S. Nayak, Radiation Oncologist in Mangaluru. MBBS (KMC Mangalore), MD Radiation Oncology (Tata Memorial Hospital, Mumbai), DNB. Associate Professor, Department of Radiation Oncology, Yenepoya Medical College Hospital, Deralakatte. Brachytherapy, SRS/SBRT, gynaecological & head and neck cancers.",
  keywords: [
    "radiation oncologist Mangalore",
    "radiation oncologist Mangaluru",
    "cancer specialist Mangalore",
    "brachytherapy Mangalore",
    "SRS SBRT Karnataka",
    "head and neck cancer treatment",
    "gynaecological cancer treatment",
    "Tata Memorial Hospital",
    "Dr Achuth Nayak",
    "Yenepoya Medical College Hospital radiation oncology",
  ],
  authors: [{ name: "Dr. Achuth S. Nayak" }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    siteName: "Dr. Achuth S. Nayak",
    locale: "en_IN",
    url: siteUrl,
    title: "Dr. Achuth S. Nayak, Radiation Oncologist, Mangaluru",
    description:
      "Tata Memorial Hospital–trained radiation oncologist. Associate Professor at Yenepoya Medical College Hospital, Mangaluru. Brachytherapy, SRS/SBRT, gynaecological & head and neck cancers.",
    images: [{ url: "/android-chrome-512.png", width: 512, height: 512 }],
  },
  twitter: {
    card: "summary",
    title: "Dr. Achuth S. Nayak, Radiation Oncologist, Mangaluru",
    description: "Tata Memorial Hospital–trained radiation oncologist. Associate Professor at Yenepoya Medical College Hospital, Mangaluru.",
    images: ["/android-chrome-512.png"],
  },
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Mangaluru",
  },
  formatDetection: { telephone: false },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
  themeColor: "#fafcfb",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Achuth S. Nayak",
  honorificPrefix: "Dr.",
  url: siteUrl,
  image: `${siteUrl}/android-chrome-512.png`,
  description:
    "Radiation oncologist in Mangaluru specialising in brachytherapy, SRS/SBRT, gynaecological and head & neck cancers. Associate Professor at Yenepoya Medical College Hospital.",
  medicalSpecialty: "Oncologic",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mangaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  worksFor: {
    "@type": "Hospital",
    name: "Yenepoya Medical College Hospital, Deralakatte, Mangaluru",
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Kasturba Medical College, Mangalore" },
    { "@type": "CollegeOrUniversity", name: "Homi Bhabha National University, Tata Memorial Hospital, Mumbai" },
  ],
  memberOf: [
    { "@type": "Organization", name: "American Society for Radiation Oncology (ASTRO)" },
    { "@type": "Organization", name: "Association of Radiation Oncologists of India (AROI)" },
    { "@type": "Organization", name: "Maharashtra Association of Radiation Oncology (MH-AROI)" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${instrumentSerif.variable} scroll-smooth h-full antialiased`}
    >
      <body className="font-body min-h-full bg-navy-900 text-ink">
        {/* Structured data: JSON.stringify output rendered as a text child,
            not dangerouslySetInnerHTML — the object above is fully static
            and hardcoded, never user input. */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        {children}
      </body>
    </html>
  );
}
