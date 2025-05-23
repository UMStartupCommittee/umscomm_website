import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { EventsProvider } from "@/lib/context/EventsContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const poppins = localFont({
  src: [
    {
      path: './fonts/Poppins/Poppins-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/Poppins/Poppins-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/Poppins/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Poppins/Poppins-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Poppins/Poppins-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Poppins/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Poppins/Poppins-Light.ttf',
      weight: '300',
      style: 'normal',
    }
  ],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "UMSCOM - Universiti Malaya Startup Community",
  description: "Universiti Malaya Startup Community (UMSCOM) is a community of students and alumni of Universiti Malaya who are interested in entrepreneurship and startups.",
  keywords: ['startup', 'entrepreneurship', 'universiti malaya', 'student entrepreneurs', 'innovation', 'business', 'malaysia startups'],
  authors: [{ name: 'UMSCOM' }],
  creator: 'UMSCOM Team',
  publisher: 'Universiti Malaya Startup Community',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_MY',
    url: 'https://umscomm.vercel.app',
    siteName: 'UMSCOM',
    title: 'UMSCOM - Igniting the Entrepreneurial Spirit',
    description: 'Join the largest startup community in Universiti Malaya and transform your innovative ideas into impactful ventures.',
    images: [
      {
        url: '/images/og-image.jpg', // Create this image in your public folder
        width: 1200,
        height: 630,
        alt: 'UMSCOM - Universiti Malaya Startup Community',
      },
    ],
  },
  icons: {
    icon: [
      {
        url: '/favicon.jpg',
        type: 'image/jpeg',
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="umscom" content="UMSCOM" />
      </head>
      <body
        className={` ${poppins.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <EventsProvider>

          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />

        </EventsProvider>
      </body>
    </html>
  );
}
