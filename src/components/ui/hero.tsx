
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  description: string;
  imageSrc?: string;
  linkTo?: string;
  linkText?: string;
}

const Hero = ({
  title,
  description,
  imageSrc = "/placeholder.svg",
  linkTo,
  linkText,
}: HeroProps) => {
  return (
    <div className="relative overflow-hidden bg-accent min-h-[400px] flex items-center">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-accent-foreground sm:text-5xl mb-4 animate-fade-in">
            {title}
          </h1>
          <p className="mt-4 text-xl text-accent-foreground/80">
            {description}
          </p>
          {linkTo && linkText && (
            <div className="mt-8">
              <Button asChild className="animate-fade-in">
                <Link to={linkTo}>
                  {linkText}
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { Hero };
