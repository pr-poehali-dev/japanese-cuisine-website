
import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";

const professionRoutes = [
  { path: "/it-presentation", label: "Главная" },
  { path: "/it-professions/developer", label: "Разработчик" },
  { path: "/it-professions/data-scientist", label: "Дата-сайентист" },
  { path: "/it-professions/devops", label: "DevOps-инженер" },
  { path: "/it-professions/ui-ux-designer", label: "UI/UX дизайнер" },
  { path: "/it-professions/cybersecurity", label: "Специалист по кибербезопасности" },
];

export const PresentationNavigation = () => {
  const location = useLocation();
  const currentIndex = professionRoutes.findIndex(route => route.path === location.pathname);
  
  const prevRoute = currentIndex > 0 ? professionRoutes[currentIndex - 1] : null;
  const nextRoute = currentIndex < professionRoutes.length - 1 ? professionRoutes[currentIndex + 1] : null;
  
  return (
    <div className="fixed bottom-6 left-0 right-0 flex justify-center items-center gap-4 z-50">
      <div className="bg-background/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg flex items-center gap-4">
        <Button
          asChild
          variant="ghost"
          size="icon"
          className="rounded-full"
        >
          <Link to="/">
            <Home className="h-5 w-5" />
          </Link>
        </Button>
        
        <Button
          asChild
          variant="outline"
          size="icon"
          className="rounded-full"
          disabled={!prevRoute}
        >
          <Link to={prevRoute?.path || "#"}>
            <ChevronLeft className="h-5 w-5" />
          </Link>
        </Button>
        
        <span className="text-sm font-medium">
          {currentIndex > 0 ? `${currentIndex} / ${professionRoutes.length - 1}` : "Презентация"}
        </span>
        
        <Button
          asChild
          variant="outline"
          size="icon"
          className="rounded-full"
          disabled={!nextRoute}
        >
          <Link to={nextRoute?.path || "#"}>
            <ChevronRight className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
};
