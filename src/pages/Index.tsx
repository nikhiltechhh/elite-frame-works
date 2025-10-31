import Header from "@/pages/Header";
import Hero from "@/pages/Hero";
import GameM from "./GameM";
import About from "@/pages/About";
import Footer from "./Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-gaming">
      <Header />
      <Hero />
      <About />
      <GameM />
      <Footer />

    </div>
  );
};

export default Index;
