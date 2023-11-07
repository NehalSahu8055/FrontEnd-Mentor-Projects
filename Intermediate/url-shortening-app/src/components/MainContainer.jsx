import Hero from "./subcomponents/Hero";
import MainContent from "./subcomponents/MainContent";

export default function MainContainer() {
  return (
    <main id="main" className="text-center overflow-auto">
      <Hero />
      <MainContent />
    </main>
    
  );
}
