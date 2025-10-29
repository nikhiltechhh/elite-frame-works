import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GameM from "./GameM";
import About from "@/pages/About";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-gaming">
      <Header />
      <Hero />
      <About />
      <GameM />
    </div>
  );
};

export default Index;
