import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
// import heroImage from "@/assets/hero-gaming.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card">
        {/* Particle Effects */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-glow-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-block">
              <div className="clip-angle bg-primary/20 border-2 border-primary px-6 py-2 backdrop-blur-sm">
                <span className="text-primary font-bold text-sm tracking-widest uppercase">
                  Online Learning
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none">
                <span className="block text-glow">UNLOCK YOUR</span>
                <span className="block text-foreground/90 text-4xl md:text-5xl lg:text-6xl mt-2">
                  POTENTIAL WITH ONLINE LEARNING
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Join our community of learners and gain access to top-notch courses designed to elevate your skills.
Start your journey towards success today! </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button variant="gaming" size="lg" className="gap-2 text-base">
                CONTACT US
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="gaming-outline" size="lg" className="gap-2 text-base">
                <Play className="w-5 h-5" />
                WATCH LIVE
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="space-y-1">
                <div className="text-3xl md:text-4xl font-bold text-primary text-glow">10K+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Active Learners</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl md:text-4xl font-bold text-primary text-glow">50+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Courses</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl md:text-4xl font-bold text-primary text-glow">100+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Expert Mentors</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <div className="relative z-10">
              {/* Glow Effect Behind Image */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-glow-pulse" />
              
              {/* Main Image */}
              <div className="relative">
                <img
                  src="https://skillcoders.com/wp-content/uploads/2025/03/a-scaled.jpg.webp"
                  alt="Gaming Hero"
                  className="w-full h-auto object-contain drop-shadow-2xl animate-float"
                />
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-primary clip-angle opacity-50" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-secondary clip-angle-reverse opacity-50" />
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 animate-float" style={{ animationDelay: "1s" }}>
              <div className="clip-angle bg-card border-2 border-primary p-4 backdrop-blur-sm neon-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary text-glow">LIVE</div>
                  <div className="text-xs text-muted-foreground uppercase">Now Streaming</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
