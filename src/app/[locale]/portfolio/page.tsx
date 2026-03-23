import Portfolio from "@/components/sections/Portfolio";
import { getDictionary } from "@/utils/getDictionary";

export default async function PortfolioPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'pt-BR' | 'en-US');

  return (
    <main className="min-h-screen pt-20">
      <Portfolio dict={dict.portfolio} />
    </main>
  );
}
