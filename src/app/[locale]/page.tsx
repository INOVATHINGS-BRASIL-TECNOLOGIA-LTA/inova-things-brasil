import Hero from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import { getDictionary } from "@/utils/getDictionary";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'pt-BR' | 'en-US');

  return (
    <>
      <Hero dict={dict.hero} />
      <Services dict={dict.services} />
      <Portfolio dict={dict.portfolio} />
      <About dict={dict.about} />
      <Contact dict={dict.contact} />
      <Partners dictionary={dict} />
    </>
  );
}
