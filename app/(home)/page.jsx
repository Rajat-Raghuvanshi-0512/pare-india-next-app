import {
  AboutSection,
  Hero,
  InfiniteScroll,
  NextProject,
  PareIndiaRotatingImg,
  Portfolio,
  ProductsRange,
  Projects,
  Qualities,
} from '@/components/home';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ProductsRange />
      <InfiniteScroll />
      <Portfolio />
      <Qualities />
      <div className="bg-[#151515] text-white">
        <Projects />
        <NextProject />
        <PareIndiaRotatingImg />
      </div>
    </main>
  );
}
