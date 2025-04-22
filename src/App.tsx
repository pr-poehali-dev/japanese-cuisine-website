
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dishes from "./pages/Dishes";
import Traditions from "./pages/Traditions";
import ITPresentation from "./pages/ITPresentation";
import Developer from "./pages/it-professions/Developer";
import DataScientist from "./pages/it-professions/DataScientist";
import DevOps from "./pages/it-professions/DevOps";
import UIUXDesigner from "./pages/it-professions/UIUXDesigner";
import Cybersecurity from "./pages/it-professions/Cybersecurity";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dishes" element={<Dishes />} />
          <Route path="/traditions" element={<Traditions />} />
          <Route path="/it-presentation" element={<ITPresentation />} />
          <Route path="/it-professions/developer" element={<Developer />} />
          <Route path="/it-professions/data-scientist" element={<DataScientist />} />
          <Route path="/it-professions/devops" element={<DevOps />} />
          <Route path="/it-professions/ui-ux-designer" element={<UIUXDesigner />} />
          <Route path="/it-professions/cybersecurity" element={<Cybersecurity />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
