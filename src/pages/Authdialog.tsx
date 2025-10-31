import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, User, Eye, EyeOff, Github } from "lucide-react";

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const GitHubIcon = () => (
  <Github className="w-5 h-5" />
);

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

  const handleOAuthSignIn = (provider: 'google' | 'github') => {
    // Handle OAuth authentication logic here
    console.log("OAuth sign in with:", provider);
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
                <span className="text-foreground">JOIN AS</span>{" "}
                <span className="text-primary text-glow">SKILLCODER</span>
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
              ? "Create your account and start your journey" 
              : "Login to continue your Coding adventure"
            }
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* OAuth Buttons */}
          <div className="flex gap-4 justify-center animate-fade-in-up">
            <Button
              type="button"
              onClick={() => handleOAuthSignIn('google')}
              variant="outline"
              size="lg"
              className="w-16 h-16 bg-background/50 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 group p-0"
            >
              <GoogleIcon />
            </Button>

            <Button
              type="button"
              onClick={() => handleOAuthSignIn('github')}
              variant="outline"
              size="lg"
              className="w-16 h-16 bg-background/50 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 group p-0"
            >
              <GitHubIcon />
            </Button>
          </div>

          {/* Divider */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-primary/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-card text-muted-foreground font-semibold">OR CONTINUE WITH EMAIL</span>
            </div>
          </div>
          {/* Username field - only for signup */}
          {mode === "signup" && (
            <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
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
          <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: mode === "signup" ? "300ms" : "200ms" }}>
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
          <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: mode === "signup" ? "400ms" : "300ms" }}>
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
            <div className="flex justify-end animate-fade-in-up" style={{ animationDelay: "400ms" }}>
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
            style={{ animationDelay: mode === "signup" ? "500ms" : "500ms" }}
          >
            {mode === "signup" ? "CREATE ACCOUNT" : "LOGIN NOW"}
          </Button>

          {/* Switch mode */}
          <div className="text-center pt-4 animate-fade-in-up" style={{ animationDelay: mode === "signup" ? "600ms" : "600ms" }}>
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
