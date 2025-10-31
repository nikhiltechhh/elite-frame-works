import { useEffect, useRef, useState } from "react";
import LOGO from "@/assets/about.mp4";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 md:py-32 overflow-hidden bg-background"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content - Slides in from left */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="inline-block">
              <span className="text-primary text-sm font-bold tracking-wider uppercase neon-border px-4 py-2 rounded-full">
                About Us
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Welcome to{" "}
              <span className="text-glow bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
                Skill Coders
              </span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We are a passionate community of gamers, developers, and content creators
              dedicated to bringing you the best gaming experience. Our platform offers
              cutting-edge courses, tutorials, and resources to help you level up your
              gaming and coding skills.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              From beginner-friendly guides to advanced programming techniques, we've
              built a comprehensive learning ecosystem where gaming meets technology.
              Join thousands of learners who are transforming their passion into
              expertise.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="space-y-1">
                <div className="text-3xl md:text-4xl font-bold text-glow">10K+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  Active Learners
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl md:text-4xl font-bold text-glow">50+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  Courses
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl md:text-4xl font-bold text-glow">100+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  Expert Mentors
                </div>
              </div>
            </div>
          </div>

          {/* Video Placeholder - Slides in from right */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden neon-border group">
              {/* Video Element - Replace src with your video URL */}
              <video
  autoPlay
  muted
  loop
  playsInline
  className="w-full h-full object-cover"
  poster="/placeholder.svg"
>
  <source src={LOGO} type="video/mp4" />
  Your browser does not support the video tag.
</video>

              {/* Video Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />

              {/* Overlay Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
                <p className="text-sm md:text-base font-semibold text-foreground">
                  Watch Our Story
                </p>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Discover how we're revolutionizing gaming education
                </p>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-primary/50 pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-primary/50 pointer-events-none" />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
