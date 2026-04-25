import type { Metadata } from 'next';
import Script from 'next/script';
import { Cormorant_Garamond, Karla } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import MobileCTA from '@/components/MobileCTA';
import ScrollObserver from '@/components/ScrollObserver';
import { SITE } from '@/lib/site';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-serif',
});

const karla = Karla({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Therapy & Coaching in Brighton, MI`,
    template: `%s | ${SITE.shortName}`,
  },
  description:
    'Compassionate, evidence-based therapy and coaching for adults, teens, children, and couples in Brighton, MI. $82 flat-fee sessions, HSA qualified, in-person and teletherapy available.',
  keywords: [
    'therapist Brighton MI',
    'couples counseling Brighton',
    'family therapy Livingston County',
    'teen therapy Michigan',
    'anxiety therapy Brighton',
    'depression treatment Brighton',
    'teletherapy Michigan',
    'HSA therapy',
  ],
  openGraph: {
    title: `${SITE.name} | Therapy in Brighton, MI`,
    description:
      'Hope and healing for every family. Compassionate therapy and coaching in Brighton, MI.',
    url: SITE.url,
    siteName: SITE.shortName,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.shortName} | Brighton, MI Therapy`,
    description:
      'Compassionate, evidence-based therapy for individuals, couples, and families.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE.url,
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['MedicalBusiness', 'LocalBusiness'],
  name: SITE.name,
  alternateName: SITE.shortName,
  url: SITE.url,
  telephone: SITE.phoneRaw,
  priceRange: '$$',
  foundingDate: String(SITE.foundingYear),
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: SITE.google.rating,
    reviewCount: SITE.google.reviewCount,
    bestRating: 5,
  },
  description:
    'Compassionate, evidence-based mental health care for individuals, couples, and families in Brighton, Michigan and surrounding communities.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.zip,
    addressCountry: SITE.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: SITE.geo.latitude,
    longitude: SITE.geo.longitude,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '19:00',
    },
  ],
  areaServed: SITE.serviceAreas.map((area) => ({
    '@type': 'City',
    name: area,
  })),
  medicalSpecialty: [
    'Psychiatric',
    'CounselingPsychology',
    'FamilyTherapy',
    'CouplesTherapy',
  ],
  availableService: [
    'Individual Therapy',
    'Couples Counseling',
    'Family Therapy',
    'Teen Therapy',
    'Children\'s Therapy',
    'Anxiety Treatment',
    'Depression Treatment',
    'Trauma Therapy',
    'ADD/ADHD Therapy',
    'Autism Spectrum Support',
    'Coaching & Mentoring',
    'Teletherapy',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${karla.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1e4d8c" />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
        <Sidebar />
        <MobileCTA />
        <ScrollObserver />
        <Script
          id="ld-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
