import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Course from "./pages/Course";
import Gadgets from "./pages/Gadget";
import Game from "./pages/Game";
import War from "./pages/War";
import Web from "./pages/Web";
import Career from "./pages/Career";
import Header from "@/pages/Header";   // 👈 Common header
import Footer from "@/pages/Footer";   // 👈 Common footer (import this)

// Create query client instance
const queryClient = new QueryClient();

// 👇 Wrapper to handle conditional header/footer rendering
const AppContent = () => {
  const location = useLocation();

  // Hide Header and Footer on index page
  const hideLayout = location.pathname === "/";

  return (
    <>
      {/* Show Header on all pages except index */}
      {!hideLayout && <Header />}

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/course" element={<Course />} />
        <Route path="/gadgets" element={<Gadgets />} />
        <Route path="/game" element={<Game />} />
        <Route path="/war" element={<War />} />
        <Route path="/web" element={<Web />} />
        <Route path="/career" element={<Career />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Show Footer on all pages except index */}
      {!hideLayout && <Footer />}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
