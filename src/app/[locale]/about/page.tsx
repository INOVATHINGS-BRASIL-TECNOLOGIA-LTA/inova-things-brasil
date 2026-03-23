import About from "@/components/sections/About";
import { getDictionary } from "@/utils/getDictionary";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'pt-BR' | 'en-US');

  return (
    <main className="min-h-screen pt-20">
      <About dict={dict.about} />
    </main>
  );
}
