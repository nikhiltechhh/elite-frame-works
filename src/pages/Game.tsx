import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  Swords,
  Coins,
  Plus,
  Minus,
  ShoppingCart,
  ArrowLeft,
  Zap,
  Users,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

type TeamType = "red" | "blue" | null;

const Game = () => {
  const navigate = useNavigate();
  const [selectedTeam, setSelectedTeam] = useState<TeamType>(null);
  const [bidAmount, setBidAmount] = useState(100);
  const [balance] = useState(1000);

  const minBid = 50;
  const maxBid = 500;

  const handleBidChange = (delta: number) => {
    const newAmount = bidAmount + delta;
    if (newAmount >= minBid && newAmount <= maxBid && newAmount <= balance) {
      setBidAmount(newAmount);
    }
  };

  const handleJoinGame = () => {
    if (!selectedTeam) {
      toast.error("Please select a team first!");
      return;
    }

    if (bidAmount > balance) {
      toast.error("Insufficient balance!");
      return;
    }

    toast.success(
      `Successfully joined ${selectedTeam === "red" ? "Red" : "Blue"} Team with ${bidAmount} coins!`
    );

    setTimeout(() => {
      navigate("/war");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground mt-20">
      <div className="container mx-auto px-4 py-4 max-w-7xl h-screen flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <Button variant="ghost" size="sm" onClick={() => navigate("/")} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold">247</span>
            </div>
            <div className="flex items-center gap-2">
              <Coins className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold">Prize: 50K</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold">5:30</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 glass-card rounded-lg border border-primary/30">
              <Coins className="w-4 h-4 text-primary" />
              <span className="font-bold text-primary">{balance}</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-destructive via-primary to-success bg-clip-text text-transparent">
            Join the Battle
          </h1>
          <p className="text-sm text-muted-foreground">Choose your team and place your bid</p>
        </div>

        {/* Main Content - Side by Side */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-0">
          {/* Team Selection */}
          <div className="flex flex-col gap-3">
            {/* Red Team */}
            <Card
              className={`glass-card p-4 cursor-pointer transition-all hover:scale-[1.01] border-2 ${
                selectedTeam === "red"
                  ? "border-destructive shadow-[0_0_20px_hsl(var(--destructive)/0.3)]"
                  : "border-destructive/30 hover:border-destructive/60"
              }`}
              onClick={() => setSelectedTeam("red")}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-destructive/10 rounded-full">
                  <Swords className="w-8 h-8 text-destructive" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-destructive mb-1">RED TEAM</h3>
                  <p className="text-xs text-muted-foreground mb-2">Offensive Operations</p>
                  <div className="flex gap-3 text-xs">
                    <span className="text-muted-foreground">Players: <strong className="text-destructive">128</strong></span>
                    <span className="text-muted-foreground">Win: <strong className="text-destructive">52%</strong></span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Blue Team */}
            <Card
              className={`glass-card p-4 cursor-pointer transition-all hover:scale-[1.01] border-2 ${
                selectedTeam === "blue"
                  ? "border-success shadow-[0_0_20px_hsl(var(--success)/0.3)]"
                  : "border-success/30 hover:border-success/60"
              }`}
              onClick={() => setSelectedTeam("blue")}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-success/10 rounded-full">
                  <Shield className="w-8 h-8 text-success" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-success mb-1">BLUE TEAM</h3>
                  <p className="text-xs text-muted-foreground mb-2">Defensive Operations</p>
                  <div className="flex gap-3 text-xs">
                    <span className="text-muted-foreground">Players: <strong className="text-success">119</strong></span>
                    <span className="text-muted-foreground">Win: <strong className="text-success">48%</strong></span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Bidding Section */}
          <Card className="glass-card p-3 border-primary/30 flex flex-col self-start mb-[5px]">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <ShoppingCart className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-lg font-bold">Place Your Bid</h2>
            </div>

            {/* Bid Amount Display */}
            <div className="text-center mb-4">
              <p className="text-xs text-muted-foreground mb-2">Bid Amount</p>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Coins className="w-6 h-6 text-primary" />
                <span className="text-4xl font-bold text-primary">{bidAmount}</span>
              </div>
              <p className="text-xs text-muted-foreground">Min: {minBid} • Max: {maxBid}</p>
            </div>

            {/* Bid Controls */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleBidChange(-10)}
                disabled={bidAmount <= minBid}
                className="h-10 w-10 p-0"
              >
                <Minus className="w-4 h-4" />
              </Button>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setBidAmount(minBid)}
                >
                  Min
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setBidAmount(Math.min(maxBid, balance))}
                >
                  Max
                </Button>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => handleBidChange(10)}
                disabled={bidAmount >= maxBid || bidAmount >= balance}
                className="h-10 w-10 p-0"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>

            {/* Summary */}
            <div className="glass-card rounded-lg p-3 mb-4 space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Team:</span>
                <span className="font-bold text-xs">
                  {selectedTeam ? (
                    <span className={selectedTeam === "red" ? "text-destructive" : "text-success"}>
                      {selectedTeam.toUpperCase()}
                    </span>
                  ) : (
                    "None"
                  )}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Bid:</span>
                <span className="font-bold text-xs text-primary">{bidAmount}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Potential Win:</span>
                <span className="font-bold text-xs text-success">{bidAmount * 2}</span>
              </div>
              <div className="pt-2 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Remaining:</span>
                  <span className="font-bold text-xs">{balance - bidAmount}</span>
                </div>
              </div>
            </div>

            {/* Join Button */}
            <Button
              size="lg"
              onClick={handleJoinGame}
              disabled={!selectedTeam}
              className="w-full font-bold gap-2"
            >
              <Zap className="w-5 h-5" />
              Join Battle
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Game;
