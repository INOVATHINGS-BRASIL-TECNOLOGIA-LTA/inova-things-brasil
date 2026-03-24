import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import { getDictionary } from "@/utils/getDictionary";

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'pt-BR' | 'en-US');

  return (
    <main className="min-h-screen pt-10">
      <Services dict={dict.services} />
      <Portfolio dict={dict.portfolio} locale={locale} />
    </main>
  );
}
