import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultMode?: "login" | "signup";
}

const AuthDialog = ({ open, onOpenChange, defaultMode = "signup" }: AuthDialogProps) => {
  const [mode, setMode] = useState<"login" | "signup">(defaultMode);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log("Form submitted:", mode, formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const switchMode = () => {
    setMode(prev => prev === "login" ? "signup" : "login");
    setFormData({ username: "", email: "", password: "" });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-primary/30 bg-card/95 backdrop-blur-xl neon-border">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center">
            {mode === "signup" ? (
              <>
                <span className="text-foreground">JOIN THE</span>{" "}
                <span className="text-primary text-glow">GAME</span>
              </>
            ) : (
              <>
                <span className="text-foreground">WELCOME</span>{" "}
                <span className="text-primary text-glow">BACK</span>
              </>
            )}
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            {mode === "signup" 
              ? "Create your account and start your gaming journey" 
              : "Login to continue your gaming adventure"
            }
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Username field - only for signup */}
          {mode === "signup" && (
            <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <Label htmlFor="username" className="text-foreground font-semibold">
                USERNAME
              </Label>
              <div className="relative group">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={handleChange}
                  className="pl-12 h-12 bg-background/50 border-primary/30 focus:border-primary hover:border-primary/50 transition-all duration-300"
                  required
                />
              </div>
            </div>
          )}

          {/* Email field */}
          <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: mode === "signup" ? "200ms" : "100ms" }}>
            <Label htmlFor="email" className="text-foreground font-semibold">
              EMAIL
            </Label>
            <div className="relative group">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="pl-12 h-12 bg-background/50 border-primary/30 focus:border-primary hover:border-primary/50 transition-all duration-300"
                required
              />
            </div>
          </div>

          {/* Password field */}
          <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: mode === "signup" ? "300ms" : "200ms" }}>
            <Label htmlFor="password" className="text-foreground font-semibold">
              PASSWORD
            </Label>
            <div className="relative group">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="pl-12 pr-12 h-12 bg-background/50 border-primary/30 focus:border-primary hover:border-primary/50 transition-all duration-300"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Forgot password - only for login */}
          {mode === "login" && (
            <div className="flex justify-end animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <button
                type="button"
                className="text-sm text-primary hover:text-primary/80 transition-colors cursor-pointer"
              >
                Forgot Password?
              </button>
            </div>
          )}

          {/* Submit button */}
          <Button
            type="submit"
            variant="gaming"
            size="lg"
            className="w-full animate-fade-in-up"
            style={{ animationDelay: mode === "signup" ? "400ms" : "400ms" }}
          >
            {mode === "signup" ? "CREATE ACCOUNT" : "LOGIN NOW"}
          </Button>

          {/* Switch mode */}
          <div className="text-center pt-4 animate-fade-in-up" style={{ animationDelay: mode === "signup" ? "500ms" : "500ms" }}>
            <p className="text-muted-foreground">
              {mode === "signup" ? "Already have an account?" : "Don't have an account?"}
              {" "}
              <button
                type="button"
                onClick={switchMode}
                className="text-primary font-bold hover:text-primary/80 transition-colors cursor-pointer hover:underline"
              >
                {mode === "signup" ? "LOGIN" : "SIGN UP"}
              </button>
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
