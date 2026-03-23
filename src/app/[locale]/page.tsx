import Hero from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import Contact from "@/components/sections/Contact";
import { getDictionary } from "@/utils/getDictionary";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'pt-BR' | 'en-US');

  return (
    <>
      <Hero dict={dict.hero} />
      <Partners dictionary={dict} />
      <Contact dict={dict.contact} />
    </>
  );
}
