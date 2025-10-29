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
import Header from "@/components/Header"; // 👈 Common header

const queryClient = new QueryClient();

// 👇 Wrapper to handle conditional header rendering
const AppContent = () => {
  const location = useLocation();

  // Hide Header on the index page
  const hideHeader = location.pathname === "/";

  return (
    <>
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/course" element={<Course />} />
        <Route path="/gadgets" element={<Gadgets />} />
        <Route path="/game" element={<Game />} />
        <Route path="/war" element={<War />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
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
