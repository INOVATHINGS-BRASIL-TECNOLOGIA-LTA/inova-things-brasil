import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { getDictionary } from "@/utils/getDictionary";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'pt-BR' | 'en-US');

  return {
    title: dict.seo.title,
    description: dict.seo.description,
    openGraph: {
      title: dict.seo.title,
      description: dict.seo.description,
      url: 'https://inovathingsbrasil.com.br',
      siteName: 'InovaThings Brasil',
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.seo.title,
      description: dict.seo.description,
    },
  };
}

export async function generateStaticParams() {
  return [{ locale: 'pt-BR' }, { locale: 'en-US' }];
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'pt-BR' | 'en-US');

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "InovaThings Brasil Tecnologia Ltda",
    "url": "https://inovathingsbrasil.com.br",
    "logo": "https://inovathingsbrasil.com.br/logo/inovathings-primary.webp",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+55-61-8183-1244",
        "contactType": "customer service",
        "email": "contato@nat.ia.br"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Brasília",
      "addressRegion": "DF",
      "addressCountry": "BR"
    },
    "taxID": "65.301.520/0001-80"
  };

  return (
    <html lang={locale} className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-950 dark:text-zinc-50 selection:bg-zinc-800 selection:text-white transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar dict={dict.navbar} currentLocale={locale} />
          <main className="flex-1 w-full flex flex-col">
            {children}
          </main>
          <Footer dict={dict.footer} />
        </ThemeProvider>
      </body>
    </html>
  );
}
