import { useNavigate } from "react-router-dom";
import { Shield, Swords, Zap, Trophy, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const GameM = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Compact Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="p-4 bg-destructive/10 rounded-full animate-glow-pulse">
              <Swords className="w-10 h-10 text-destructive" />
            </div>
            <div className="text-5xl font-bold bg-gradient-to-r from-destructive via-primary to-success bg-clip-text text-transparent">
              VS
            </div>
            <div className="p-4 bg-success/10 rounded-full animate-glow-pulse" style={{ animationDelay: "1s" }}>
              <Shield className="w-10 h-10 text-success" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-destructive via-primary to-success bg-clip-text text-transparent">
            Red Team vs Blue Team
          </h1>
          <p className="text-lg text-primary font-semibold mb-2">
            The Ultimate Cybersecurity Battle Arena
          </p>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Join the epic showdown. Place your bid, choose your side, and compete for victory.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Main CTA Card */}
          <Card className="glass-card p-8 border-primary/40 hover:border-primary transition-all hover:scale-[1.02] lg:col-span-2 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative text-center">
              <div className="inline-flex p-5 bg-primary/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-12 h-12 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-3 text-primary">
                Join the Battle
              </h2>
              <p className="text-muted-foreground mb-6 text-sm">
                Place your bid, choose Red or Blue team, and compete for the prize pool. Winners take all in this high-stakes cyber warfare game.
              </p>
              <Button
                size="lg"
                onClick={() => navigate("/game")}
                className="w-full max-w-xs font-bold gap-3"
              >
                <Trophy className="w-5 h-5" />
                Enter Arena
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>

          {/* Side Features */}
          <div className="flex flex-col gap-4">
            <Card className="glass-card p-5 border-destructive/20 hover:border-destructive/40 transition-all group">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-destructive/10 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Swords className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-1 text-destructive">
                    Red Team
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Offensive hackers breach defenses using advanced attack techniques.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-5 border-success/20 hover:border-success/40 transition-all group">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-success/10 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Shield className="w-5 h-5 text-success" />
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-1 text-success">
                    Blue Team
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Defensive experts deploy security measures to counter threats.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-5 border-primary/20 hover:border-primary/40 transition-all group">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Trophy className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-1 text-primary">
                    Win Prizes
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Winners split the prize pool based on their contribution.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameM;
