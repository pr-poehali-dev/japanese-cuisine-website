
import * as React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="bg-primary py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-primary-foreground flex items-center gap-2">
          <span className="text-2xl">🍱</span> Японская кухня
        </Link>
        <div className="flex space-x-2">
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/dishes">Блюда</NavLink>
          <NavLink to="/traditions">Традиции</NavLink>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

const NavLink = ({ to, children, className, ...props }: NavLinkProps) => {
  return (
    <Button asChild variant="ghost" className="text-primary-foreground hover:bg-primary/80">
      <Link
        to={to}
        className={cn("text-sm font-medium", className)}
        {...props}
      >
        {children}
      </Link>
    </Button>
  );
};

export { Navigation };
