import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  Swords,
  Database,
  Lock,
  AlertTriangle,
  Activity,
  Zap,
  Eye,
  Bug,
  Server,
  Wifi,
  Code,
  Play,
  RotateCcw,
  Trophy,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type AttackType = {
  id: string;
  name: string;
  icon: typeof Bug;
  severity: "low" | "medium" | "high";
};

type DefenseType = {
  id: string;
  name: string;
  icon: typeof Shield;
  strength: number;
};

type BattleLog = {
  id: string;
  type: "attack" | "defense" | "system";
  message: string;
  timestamp: Date;
  success: boolean;
};

type GamePhase = "select-attack" | "select-defense" | "battle" | "game-over";

const attackTypes: AttackType[] = [
  { id: "sql", name: "SQL Injection", icon: Database, severity: "high" },
  { id: "xss", name: "XSS Attack", icon: Code, severity: "medium" },
  { id: "ddos", name: "DDoS Attack", icon: Wifi, severity: "high" },
  { id: "malware", name: "Malware", icon: Bug, severity: "high" },
  { id: "phishing", name: "Phishing", icon: Eye, severity: "medium" },
  { id: "brute", name: "Brute Force", icon: Lock, severity: "low" },
];

const defenseTypes: DefenseType[] = [
  { id: "firewall", name: "Firewall", icon: Shield, strength: 80 },
  { id: "ids", name: "IDS/IPS", icon: Activity, strength: 70 },
  { id: "encryption", name: "Encryption", icon: Lock, strength: 90 },
  { id: "waf", name: "WAF", icon: Server, strength: 85 },
];

const War = () => {
  const navigate = useNavigate();
  const [redTeamHealth, setRedTeamHealth] = useState(100);
  const [blueTeamHealth, setBlueTeamHealth] = useState(100);
  const [battleLogs, setBattleLogs] = useState<BattleLog[]>([]);
  const [gamePhase, setGamePhase] = useState<GamePhase>("select-attack");
  const [selectedAttack, setSelectedAttack] = useState<AttackType | null>(null);
  const [selectedDefense, setSelectedDefense] = useState<DefenseType | null>(null);
  const [isBattling, setIsBattling] = useState(false);
  const [round, setRound] = useState(1);

  const addLog = (type: "attack" | "defense" | "system", message: string, success: boolean) => {
    setBattleLogs((prev) => [
      {
        id: Date.now().toString() + Math.random(),
        type,
        message,
        timestamp: new Date(),
        success,
      },
      ...prev.slice(0, 9),
    ]);
  };

  const handleAttackSelect = (attack: AttackType) => {
    setSelectedAttack(attack);
    addLog("system", `Red Team selected ${attack.name}`, true);
    setGamePhase("select-defense");
  };

  const handleDefenseSelect = (defense: DefenseType) => {
    setSelectedDefense(defense);
    addLog("system", `Blue Team activated ${defense.name}`, true);
    setGamePhase("battle");
    executeBattle(selectedAttack!, defense);
  };

  const executeBattle = (attack: AttackType, defense: DefenseType) => {
    setIsBattling(true);

    setTimeout(() => {
      const attackPower =
        attack.severity === "high" ? 30 : attack.severity === "medium" ? 20 : 10;
      const defenseBlock = defense.strength;

      const successChance = Math.random() * 100;
      const isBlocked = successChance < defenseBlock;

      if (isBlocked) {
        const damage = Math.floor(attackPower * 0.2);
        setBlueTeamHealth((prev) => Math.max(0, prev - damage));
        addLog(
          "defense",
          `${defense.name} successfully blocked ${attack.name}! Only ${damage} damage taken.`,
          true
        );
      } else {
        setBlueTeamHealth((prev) => Math.max(0, prev - attackPower));
        addLog(
          "attack",
          `${attack.name} breached ${defense.name}! ${attackPower} damage dealt!`,
          true
        );
      }

      setTimeout(() => {
        const counterDamage = Math.floor(Math.random() * 15) + 5;
        setRedTeamHealth((prev) => Math.max(0, prev - counterDamage));
        addLog("defense", `Blue Team counter-attack! ${counterDamage} damage to Red Team.`, true);

        setTimeout(() => {
          setIsBattling(false);
          setSelectedAttack(null);
          setSelectedDefense(null);

          if (blueTeamHealth - attackPower <= 0) {
            setGamePhase("game-over");
            addLog("system", "🏆 Red Team Wins! All systems compromised!", true);
          } else if (redTeamHealth - counterDamage <= 0) {
            setGamePhase("game-over");
            addLog("system", "🏆 Blue Team Wins! All threats neutralized!", true);
          } else {
            setRound((prev) => prev + 1);
            setGamePhase("select-attack");
            addLog("system", `Round ${round + 1} starting...`, true);
          }
        }, 1000);
      }, 800);
    }, 1500);
  };

  const resetGame = () => {
    setRedTeamHealth(100);
    setBlueTeamHealth(100);
    setBattleLogs([]);
    setGamePhase("select-attack");
    setSelectedAttack(null);
    setSelectedDefense(null);
    setIsBattling(false);
    setRound(1);
    addLog("system", "New game started! Red Team, select your attack!", true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden mt-10">
      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(hsl(280 80% 60% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(280 80% 60% / 0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-6 lg:py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        </div>

        {/* Title Section */}
        <div className="text-center mb-6 lg:mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 lg:mb-3 bg-gradient-to-r from-[hsl(0,85%,60%)] via-[hsl(280,80%,60%)] to-[hsl(188,90%,50%)] bg-clip-text text-transparent">
            Red Team vs Blue Team
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-2">
            Interactive Website Security Battle
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <div className="flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 glass-card rounded-lg">
              <Activity className="w-4 h-4 text-primary" />
              <span>Round {round}</span>
            </div>
            {gamePhase === "select-attack" && (
              <div className="px-3 py-1.5 lg:px-4 lg:py-2 bg-[hsl(0,85%,60%)]/20 text-[hsl(0,85%,60%)] rounded-lg border border-[hsl(0,85%,60%)]/30 animate-glow-pulse">
                Red Team's Turn
              </div>
            )}
            {gamePhase === "select-defense" && (
              <div className="px-3 py-1.5 lg:px-4 lg:py-2 bg-[hsl(188,90%,50%)]/20 text-[hsl(188,90%,50%)] rounded-lg border border-[hsl(188,90%,50%)]/30 animate-glow-pulse">
                Blue Team's Turn
              </div>
            )}
            {gamePhase === "battle" && (
              <div className="px-3 py-1.5 lg:px-4 lg:py-2 bg-[hsl(38,92%,50%)]/20 text-[hsl(38,92%,50%)] rounded-lg border border-[hsl(38,92%,50%)]/30 animate-glow-pulse">
                Battle in Progress!
              </div>
            )}
            {gamePhase === "game-over" && (
              <div className="flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-[hsl(142,76%,36%)]/20 text-[hsl(142,76%,36%)] rounded-lg border border-[hsl(142,76%,36%)]/30">
                <Trophy className="w-4 h-4" />
                <span>Game Over</span>
              </div>
            )}
          </div>
        </div>

        {/* Battle Arena */}
        <div className="max-w-7xl mx-auto mb-6 lg:mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 items-start">
            {/* Red Team */}
            <div className="glass-card border-[hsl(0,85%,60%)]/30 rounded-xl p-4 lg:p-6 shadow-[0_0_40px_rgba(239,68,68,0.2)] animate-slide-in hover:shadow-[0_0_50px_rgba(239,68,68,0.3)] transition-all">
              {/* Team Logo */}
              <div className="mb-4 lg:mb-6">
                <div className="aspect-square w-full max-w-[200px] mx-auto rounded-xl overflow-hidden border-2 border-[hsl(0,85%,60%)]/40 bg-gradient-to-br from-[hsl(0,85%,60%)]/20 to-[hsl(0,85%,60%)]/5 hover:border-[hsl(0,85%,60%)]/70 transition-all flex items-center justify-center group">
                  <div className="p-6 lg:p-8 bg-[hsl(0,85%,60%)]/20 rounded-full group-hover:scale-110 transition-transform">
                    <Swords className="w-12 h-12 lg:w-16 lg:h-16 text-[hsl(0,85%,60%)]" />
                  </div>
                </div>
              </div>

              {/* Team Info */}
              <div className="text-center mb-4 lg:mb-6">
                <h2 className="text-2xl lg:text-3xl font-bold text-[hsl(0,85%,60%)] mb-1 lg:mb-2 tracking-wide">
                  RED TEAM
                </h2>
                <p className="text-xs lg:text-sm text-muted-foreground uppercase tracking-widest">
                  Offensive Operations
                </p>
              </div>

              {/* Health Bar */}
              <div className="mb-4 lg:mb-6">
                <div className="flex items-center justify-between mb-2 lg:mb-3">
                  <span className="text-xs lg:text-sm font-medium uppercase tracking-wider">Health</span>
                  <span className="text-lg lg:text-xl font-bold text-[hsl(0,85%,60%)]">
                    {redTeamHealth}%
                  </span>
                </div>
                <div className="w-full h-4 lg:h-5 bg-card/50 rounded-full overflow-hidden border-2 border-[hsl(0,85%,60%)]/30 shadow-inner">
                  <div
                    className="h-full bg-gradient-to-r from-[hsl(0,85%,60%)] via-[hsl(0,100%,50%)] to-[hsl(0,85%,60%)] transition-all duration-500 shadow-[0_0_15px_rgba(239,68,68,0.6)] relative overflow-hidden"
                    style={{ width: `${redTeamHealth}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-slide-in-right" />
                  </div>
                </div>
              </div>

              {/* Actions */}
              {gamePhase === "select-attack" && !isBattling && (
                <div className="space-y-2">
                  <p className="text-xs lg:text-sm text-muted-foreground mb-2 lg:mb-3 flex items-center gap-2 uppercase tracking-wider">
                    <Zap className="w-4 h-4 text-[hsl(0,85%,60%)]" />
                    Select Attack:
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    {attackTypes.map((attack) => {
                      const Icon = attack.icon;
                      const damage =
                        attack.severity === "high" ? 30 : attack.severity === "medium" ? 20 : 10;
                      return (
                        <Button
                          key={attack.id}
                          onClick={() => handleAttackSelect(attack)}
                          variant="outline"
                          className="w-full justify-start gap-2 lg:gap-3 h-auto py-3 lg:py-4 bg-card/30 hover:bg-[hsl(0,85%,60%)]/20 hover:border-[hsl(0,85%,60%)]/60 border-[hsl(0,85%,60%)]/20 transition-all group hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]"
                        >
                          <div className="p-1.5 lg:p-2 bg-[hsl(0,85%,60%)]/10 rounded-lg group-hover:bg-[hsl(0,85%,60%)]/20 transition-colors">
                            <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-[hsl(0,85%,60%)]" />
                          </div>
                          <div className="flex-1 text-left">
                            <div className="text-sm lg:text-base font-semibold">{attack.name}</div>
                            <div className="text-xs text-muted-foreground">
                              DMG: {damage} | {attack.severity.toUpperCase()}
                            </div>
                          </div>
                          <Play className="w-4 h-4 lg:w-5 lg:h-5 opacity-0 group-hover:opacity-100 transition-opacity text-[hsl(0,85%,60%)]" />
                        </Button>
                      );
                    })}
                  </div>
                </div>
              )}
              {selectedAttack && (
                <div className="p-3 lg:p-4 bg-[hsl(0,85%,60%)]/10 border-2 border-[hsl(0,85%,60%)]/40 rounded-lg animate-glow-pulse shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                  <p className="text-xs lg:text-sm font-bold flex items-center gap-2 uppercase tracking-wider">
                    <Zap className="w-4 h-4 lg:w-5 lg:h-5 text-[hsl(0,85%,60%)]" />
                    Selected: {selectedAttack.name}
                  </p>
                </div>
              )}
            </div>

            {/* Battle Arena Center */}
            <div className="flex items-center justify-center py-6 lg:py-0">
              {isBattling ? (
                <div className="glass-card rounded-xl p-6 lg:p-8 w-full">
                  <div className="flex items-center justify-center gap-4 lg:gap-6">
                    <div className="text-center">
                      <div className="inline-flex p-4 lg:p-6 rounded-full bg-[hsl(0,85%,60%)]/20 shadow-[0_0_40px_rgba(239,68,68,0.6)] animate-glow-pulse">
                        {selectedAttack && (
                          <selectedAttack.icon className="w-12 h-12 lg:w-16 lg:h-16 text-[hsl(0,85%,60%)]" />
                        )}
                      </div>
                    </div>

                    <div className="flex-1 relative">
                      <div className="h-2 bg-muted/30 rounded-full overflow-hidden relative">
                        <div className="absolute left-0 w-4 h-4 lg:w-6 lg:h-6 -mt-1 lg:-mt-2 bg-[hsl(0,85%,60%)] rounded-full shadow-[0_0_20px_rgba(239,68,68,0.9)] animate-attack-move" />
                        <div
                          className="absolute right-0 w-4 h-4 lg:w-6 lg:h-6 -mt-1 lg:-mt-2 bg-[hsl(188,90%,50%)] rounded-full shadow-[0_0_20px_rgba(6,182,212,0.9)] animate-defend-move"
                          style={{ animationDelay: "0.5s" }}
                        />
                      </div>
                      <div className="absolute top-6 lg:top-8 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-widest text-[hsl(38,92%,50%)] whitespace-nowrap animate-glow-pulse">
                        Engaging...
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="inline-flex p-4 lg:p-6 rounded-full bg-[hsl(188,90%,50%)]/20 shadow-[0_0_40px_rgba(6,182,212,0.6)] animate-glow-pulse">
                        {selectedDefense && (
                          <selectedDefense.icon className="w-12 h-12 lg:w-16 lg:h-16 text-[hsl(188,90%,50%)]" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="glass-card rounded-xl p-6 lg:p-8 text-center">
                  <AlertTriangle className="w-10 h-10 lg:w-12 lg:h-12 mx-auto mb-3 text-[hsl(38,92%,50%)] animate-float" />
                  <p className="text-xs lg:text-sm text-muted-foreground uppercase tracking-wider">
                    {gamePhase === "select-attack" && "Red Team: Choose Attack"}
                    {gamePhase === "select-defense" && "Blue Team: Deploy Defense"}
                    {gamePhase === "game-over" && "Battle Complete"}
                  </p>
                </div>
              )}
            </div>

            {/* Blue Team */}
            <div className="glass-card border-[hsl(188,90%,50%)]/30 rounded-xl p-4 lg:p-6 shadow-[0_0_40px_rgba(6,182,212,0.2)] animate-slide-in-right hover:shadow-[0_0_50px_rgba(6,182,212,0.3)] transition-all">
              {/* Team Logo */}
              <div className="mb-4 lg:mb-6">
                <div className="aspect-square w-full max-w-[200px] mx-auto rounded-xl overflow-hidden border-2 border-[hsl(188,90%,50%)]/40 bg-gradient-to-br from-[hsl(188,90%,50%)]/20 to-[hsl(188,90%,50%)]/5 hover:border-[hsl(188,90%,50%)]/70 transition-all flex items-center justify-center group">
                  <div className="p-6 lg:p-8 bg-[hsl(188,90%,50%)]/20 rounded-full group-hover:scale-110 transition-transform">
                    <Shield className="w-12 h-12 lg:w-16 lg:h-16 text-[hsl(188,90%,50%)]" />
                  </div>
                </div>
              </div>

              {/* Team Info */}
              <div className="text-center mb-4 lg:mb-6">
                <h2 className="text-2xl lg:text-3xl font-bold text-[hsl(188,90%,50%)] mb-1 lg:mb-2 tracking-wide">
                  BLUE TEAM
                </h2>
                <p className="text-xs lg:text-sm text-muted-foreground uppercase tracking-widest">
                  Defensive Operations
                </p>
              </div>

              {/* Health Bar */}
              <div className="mb-4 lg:mb-6">
                <div className="flex items-center justify-between mb-2 lg:mb-3">
                  <span className="text-xs lg:text-sm font-medium uppercase tracking-wider">
                    Integrity
                  </span>
                  <span className="text-lg lg:text-xl font-bold text-[hsl(188,90%,50%)]">
                    {blueTeamHealth}%
                  </span>
                </div>
                <div className="w-full h-4 lg:h-5 bg-card/50 rounded-full overflow-hidden border-2 border-[hsl(188,90%,50%)]/30 shadow-inner">
                  <div
                    className="h-full bg-gradient-to-r from-[hsl(188,90%,50%)] via-[hsl(188,100%,60%)] to-[hsl(188,90%,50%)] transition-all duration-500 shadow-[0_0_15px_rgba(6,182,212,0.6)] relative overflow-hidden"
                    style={{ width: `${blueTeamHealth}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-slide-in-right" />
                  </div>
                </div>
              </div>

              {/* Actions */}
              {gamePhase === "select-defense" && !isBattling && (
                <div className="space-y-2">
                  <p className="text-xs lg:text-sm text-muted-foreground mb-2 lg:mb-3 flex items-center gap-2 uppercase tracking-wider">
                    <Shield className="w-4 h-4 text-[hsl(188,90%,50%)]" />
                    Deploy Defense:
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    {defenseTypes.map((defense) => {
                      const Icon = defense.icon;
                      return (
                        <Button
                          key={defense.id}
                          onClick={() => handleDefenseSelect(defense)}
                          variant="outline"
                          className="w-full justify-start gap-2 lg:gap-3 h-auto py-3 lg:py-4 bg-card/30 hover:bg-[hsl(188,90%,50%)]/20 hover:border-[hsl(188,90%,50%)]/60 border-[hsl(188,90%,50%)]/20 transition-all group hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                        >
                          <div className="p-1.5 lg:p-2 bg-[hsl(188,90%,50%)]/10 rounded-lg group-hover:bg-[hsl(188,90%,50%)]/20 transition-colors">
                            <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-[hsl(188,90%,50%)]" />
                          </div>
                          <div className="flex-1 text-left">
                            <div className="text-sm lg:text-base font-semibold">{defense.name}</div>
                            <div className="text-xs text-muted-foreground">
                              Block Rate: {defense.strength}%
                            </div>
                          </div>
                          <Play className="w-4 h-4 lg:w-5 lg:h-5 opacity-0 group-hover:opacity-100 transition-opacity text-[hsl(188,90%,50%)]" />
                        </Button>
                      );
                    })}
                  </div>
                </div>
              )}
              {selectedDefense && (
                <div className="p-3 lg:p-4 bg-[hsl(188,90%,50%)]/10 border-2 border-[hsl(188,90%,50%)]/40 rounded-lg animate-glow-pulse shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                  <p className="text-xs lg:text-sm font-bold flex items-center gap-2 uppercase tracking-wider">
                    <Shield className="w-4 h-4 lg:w-5 lg:h-5 text-[hsl(188,90%,50%)]" />
                    Active: {selectedDefense.name}
                  </p>
                </div>
              )}
              {gamePhase === "select-attack" && (
                <div className="p-4 lg:p-6 glass-card rounded-lg">
                  <p className="text-xs lg:text-sm text-center text-muted-foreground uppercase tracking-wider">
                    Waiting for Red Team...
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Game Over Screen */}
        {gamePhase === "game-over" && (
          <div className="max-w-3xl mx-auto mb-6 lg:mb-8">
            <div className="glass-card border-2 rounded-2xl p-8 lg:p-12 text-center shadow-[0_0_60px_rgba(139,92,246,0.3)] animate-scale-in">
              <div className="mb-6">
                <Trophy className="w-16 h-16 lg:w-24 lg:h-24 mx-auto text-[hsl(142,76%,36%)] animate-float drop-shadow-[0_0_20px_rgba(34,197,94,0.5)]" />
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-4 tracking-tight">
                {blueTeamHealth <= 0 ? (
                  <span className="text-[hsl(0,85%,60%)] drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]">
                    🏆 RED TEAM WINS!
                  </span>
                ) : (
                  <span className="text-[hsl(188,90%,50%)] drop-shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                    🏆 BLUE TEAM WINS!
                  </span>
                )}
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground mb-3 uppercase tracking-widest">
                {blueTeamHealth <= 0 ? "Systems Compromised" : "Threats Neutralized"}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6 mb-6 lg:mb-8 text-sm">
                <div className="px-3 py-1.5 lg:px-4 lg:py-2 glass-card rounded-lg">
                  <span className="text-muted-foreground">Rounds Played:</span>
                  <span className="ml-2 font-bold">{round}</span>
                </div>
                <div className="px-3 py-1.5 lg:px-4 lg:py-2 glass-card rounded-lg">
                  <span className="text-muted-foreground">Final Score:</span>
                  <span className="ml-2 font-bold text-[hsl(0,85%,60%)]">{redTeamHealth}</span>
                  <span className="mx-2">vs</span>
                  <span className="font-bold text-[hsl(188,90%,50%)]">{blueTeamHealth}</span>
                </div>
              </div>
              <Button
                onClick={resetGame}
                size="lg"
                className="bg-gradient-to-r from-[hsl(0,85%,60%)] to-[hsl(188,90%,50%)] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] text-white font-bold uppercase tracking-wider gap-2 lg:gap-3 px-6 lg:px-8 py-5 lg:py-6 text-base lg:text-lg"
              >
                <RotateCcw className="w-4 h-4 lg:w-5 lg:h-5" />
                New Battle
              </Button>
            </div>
          </div>
        )}

        {/* Battle Log */}
        <div className="max-w-6xl mx-auto">
          <div className="glass-card rounded-xl p-4 lg:p-6 shadow-[0_0_20px_rgba(139,92,246,0.1)]">
            <div className="flex flex-wrap items-center justify-between mb-4 lg:mb-6 gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Activity className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold uppercase tracking-wider">Battle Log</h3>
              </div>
              {gamePhase === "game-over" && (
                <Button
                  onClick={resetGame}
                  variant="outline"
                  size="sm"
                  className="gap-2 hover:scale-105 transition-transform"
                >
                  <RotateCcw className="w-4 h-4" />
                  New Game
                </Button>
              )}
            </div>
            <div className="space-y-2 lg:space-y-3 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
              {battleLogs.length === 0 ? (
                <div className="text-center py-8 lg:py-12">
                  <AlertTriangle className="w-10 h-10 lg:w-12 lg:h-12 mx-auto mb-3 text-muted-foreground/50 animate-float" />
                  <p className="text-sm lg:text-base text-muted-foreground uppercase tracking-wider">
                    Battle log will appear here. Red Team, make your first move!
                  </p>
                </div>
              ) : (
                battleLogs.map((log) => (
                  <div
                    key={log.id}
                    className={`flex items-start gap-3 lg:gap-4 p-3 lg:p-4 rounded-lg transition-all animate-fade-in hover:scale-[1.01] ${
                      log.type === "attack"
                        ? "bg-[hsl(0,85%,60%)]/10 border-l-4 border-[hsl(0,85%,60%)] hover:bg-[hsl(0,85%,60%)]/15 shadow-[0_0_15px_rgba(239,68,68,0.1)]"
                        : log.type === "defense"
                        ? "bg-[hsl(188,90%,50%)]/10 border-l-4 border-[hsl(188,90%,50%)] hover:bg-[hsl(188,90%,50%)]/15 shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                        : "bg-card/70 border-l-4 border-primary/50 hover:bg-card shadow-[0_0_10px_rgba(139,92,246,0.1)]"
                    }`}
                  >
                    <div
                      className={`p-1.5 lg:p-2 rounded-lg flex-shrink-0 ${
                        log.type === "attack"
                          ? "bg-[hsl(0,85%,60%)]/20"
                          : log.type === "defense"
                          ? "bg-[hsl(188,90%,50%)]/20"
                          : "bg-primary/10"
                      }`}
                    >
                      {log.type === "attack" ? (
                        <Zap className="w-4 h-4 lg:w-5 lg:h-5 text-[hsl(0,85%,60%)]" />
                      ) : log.type === "defense" ? (
                        <Shield className="w-4 h-4 lg:w-5 lg:h-5 text-[hsl(188,90%,50%)]" />
                      ) : (
                        <Activity className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs lg:text-sm font-medium leading-relaxed">{log.message}</p>
                      <p className="text-xs text-muted-foreground/70 mt-1.5 font-mono">
                        {log.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default War;
