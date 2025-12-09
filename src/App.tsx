import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import FontProvider from "@/components/FontProvider";
import WhatsAppButton from "@/components/WhatsAppButton";
import Index from "./pages/Index";
import CreditHealth from "./pages/CreditHealth";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Sample from "./pages/Sample";
import Impact from "./pages/Impact";
import Services from "./pages/Services";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { Helmet } from 'react-helmet-async';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Helmet>
        <meta
          name="google-site-verification"
          content="bP75Kb9hNKjb0mV6OcHEPk52j5hNvivyYO1XD5nieQQ"
        />
      </Helmet>
    <LanguageProvider>
      <FontProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <WhatsAppButton />
          <BrowserRouter basename="/">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/impact" element={<Impact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/credit-health" element={<CreditHealth />} />
              <Route path="/about" element={<About />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/sample" element={<Sample />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </FontProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
